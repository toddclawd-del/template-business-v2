#!/usr/bin/env node
/**
 * Sanity Stress Test Tool for Template Pipeline
 *
 * Tests templates with edge case content to find:
 * - Text overflow issues
 * - Build crashes with unusual data
 * - Missing null/empty state handling
 * - XSS vulnerabilities
 * - Image handling issues
 */

import * as fs from "fs";
import * as path from "path";
import { Command } from "commander";
import chalk from "chalk";
import { stressScenarios, StressScenario } from "./stress-data";
import {
  findDataFile,
  backupDataFile,
  restoreFromBackup,
  analyzeDataFile,
  generateStressedData,
  writeModifiedData,
  getTemplateName,
  listTemplates,
  BackupInfo,
  DataFileInfo,
} from "./inject";
import { runScenarioTest, createBrowser, TestResult } from "./test-runner";
import { generateReport, saveReport, printSummary, StressTestReport } from "./report";

const program = new Command();

program
  .name("stress-test")
  .description("Sanity stress test tool for template QA")
  .version("1.0.0");

program
  .option("-t, --template <path>", "Path to template directory")
  .option("-a, --all", "Test all templates in ../templates")
  .option("-c, --category <category>", "Test templates in a specific category")
  .option("-s, --scenario <name>", "Run a specific scenario only")
  .option("-o, --output <path>", "Output directory for reports", "../../memory")
  .option("--skip-build", "Skip build step (faster, but less thorough)")
  .option("--keep-backup", "Keep backup files after test")
  .option("--verbose", "Verbose output")
  .option("--json", "Output results as JSON");

interface StressTestOptions {
  template?: string;
  all?: boolean;
  category?: string;
  scenario?: string;
  output: string;
  skipBuild?: boolean;
  keepBackup?: boolean;
  verbose?: boolean;
  json?: boolean;
}

/**
 * Main stress test function - exported for pipeline integration
 */
export async function runStressTest(
  templatePath: string,
  options: Partial<StressTestOptions> = {}
): Promise<StressTestReport> {
  const startTime = Date.now();
  const templateName = getTemplateName(templatePath);
  const results: TestResult[] = [];

  console.log(chalk.blue(`\n🧪 Starting stress test for: ${templateName}\n`));

  // Find data file
  const dataFile = await findDataFile(templatePath);
  if (!dataFile) {
    console.log(chalk.yellow("⚠️  No data file found. Running build-only tests."));
  } else {
    console.log(chalk.gray(`📄 Found data file: ${dataFile.path}`));
  }

  // Create backup
  let backup: BackupInfo | null = null;
  if (dataFile) {
    backup = backupDataFile(dataFile);
    console.log(chalk.gray(`💾 Backup created: ${backup.backupPath}`));
  }

  // Analyze data structure
  const structure = dataFile ? analyzeDataFile(dataFile.content) : null;
  if (structure && options.verbose) {
    console.log(chalk.gray(`📊 Exports found: ${structure.exports.join(", ")}`));
    console.log(chalk.gray(`📊 Main data export: ${structure.mainDataExport || "none"}`));
  }

  // Create browser for visual tests
  const browser = await createBrowser();

  // Create screenshot directory
  const screenshotDir = path.join(templatePath, ".stress-test-screenshots");
  fs.mkdirSync(screenshotDir, { recursive: true });

  // Filter scenarios
  let scenariosToRun = stressScenarios;
  if (options.scenario) {
    scenariosToRun = stressScenarios.filter((s) => s.name === options.scenario);
    if (scenariosToRun.length === 0) {
      throw new Error(`Scenario not found: ${options.scenario}`);
    }
  }
  if (options.category) {
    scenariosToRun = scenariosToRun.filter((s) => s.category === options.category);
  }

  console.log(chalk.blue(`\n📋 Running ${scenariosToRun.length} scenarios...\n`));

  // Run each scenario
  for (let i = 0; i < scenariosToRun.length; i++) {
    const scenario = scenariosToRun[i];
    const progress = `[${i + 1}/${scenariosToRun.length}]`;

    console.log(chalk.gray(`${progress} Testing: ${scenario.name}...`));

    try {
      // Inject stress data
      if (dataFile && structure) {
        const stressedContent = generateStressedData(dataFile.content, scenario, structure);
        writeModifiedData(dataFile, stressedContent);
      }

      // Run the test
      const result = await runScenarioTest(
        templatePath,
        scenario,
        browser,
        screenshotDir,
        options.skipBuild
      );

      results.push(result);

      // Log result
      if (result.passed) {
        console.log(chalk.green(`${progress} ✅ ${scenario.name} passed`));
      } else {
        console.log(chalk.red(`${progress} ❌ ${scenario.name} failed`));
        if (options.verbose && result.buildError) {
          console.log(chalk.red(`    Build error: ${result.buildError.slice(0, 200)}`));
        }
        if (options.verbose && result.visualIssues.length > 0) {
          for (const issue of result.visualIssues.slice(0, 3)) {
            console.log(chalk.yellow(`    - ${issue.type}: ${issue.description}`));
          }
        }
      }

      // Restore original data for next test
      if (backup && dataFile) {
        restoreFromBackup(backup);
        backup = backupDataFile(dataFile);
      }
    } catch (error: any) {
      console.log(chalk.red(`${progress} ❌ ${scenario.name} error: ${error.message}`));
      results.push({
        scenario,
        passed: false,
        buildSuccess: false,
        buildError: error.message,
        buildWarnings: [],
        visualIssues: [],
        consoleErrors: [],
        duration: 0,
        screenshots: [],
      });

      // Restore on error
      if (backup) {
        try {
          restoreFromBackup(backup);
          if (dataFile) {
            backup = backupDataFile(dataFile);
          }
        } catch (e) {
          console.log(chalk.red("Failed to restore backup after error"));
        }
      }
    }
  }

  // Final restore
  if (backup) {
    restoreFromBackup(backup);
    console.log(chalk.gray("\n💾 Original data restored"));
  }

  // Clean up
  await browser.close();

  // Clean up screenshots if no failures (or keep for debugging)
  if (!options.verbose) {
    // Keep screenshots for now, they're useful for reports
  }

  // Generate report
  const totalDuration = Date.now() - startTime;
  const report = generateReport(templateName, templatePath, results, totalDuration);

  // Save report
  const outputDir = path.resolve(templatePath, options.output || "../../memory");
  const reportPath = saveReport(report, outputDir);
  console.log(chalk.blue(`\n📝 Report saved: ${reportPath}`));

  // Print summary
  printSummary(report);

  return report;
}

/**
 * CLI entry point
 */
async function main() {
  program.parse();
  const options = program.opts<StressTestOptions>();

  try {
    if (options.all) {
      // Test all templates
      const templatesDir = path.resolve(__dirname, "../../templates");
      const templates = await listTemplates(templatesDir);

      console.log(chalk.blue(`\n🧪 Testing ${templates.length} templates...\n`));

      const reports: StressTestReport[] = [];
      for (const templatePath of templates) {
        try {
          const report = await runStressTest(templatePath, options);
          reports.push(report);
        } catch (error: any) {
          console.log(
            chalk.red(`\n❌ Failed to test ${getTemplateName(templatePath)}: ${error.message}`)
          );
        }
      }

      // Summary of all templates
      console.log(chalk.blue("\n" + "═".repeat(60)));
      console.log(chalk.blue("  ALL TEMPLATES SUMMARY"));
      console.log(chalk.blue("═".repeat(60)));

      for (const report of reports) {
        const status = report.summary.failed === 0 ? chalk.green("✅") : chalk.red("❌");
        console.log(
          `  ${status} ${report.templateName}: ${report.summary.passed}/${report.summary.total} passed`
        );
      }

      console.log(chalk.blue("═".repeat(60) + "\n"));
    } else if (options.template) {
      // Test single template
      const report = await runStressTest(options.template, options);

      if (options.json) {
        console.log(JSON.stringify(report, null, 2));
      }

      // Exit with error if tests failed
      if (report.summary.failed > 0) {
        process.exit(1);
      }
    } else {
      program.help();
    }
  } catch (error: any) {
    console.error(chalk.red(`\n❌ Error: ${error.message}`));
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Export for pipeline integration
export { StressTestReport, TestResult, StressScenario };
export { stressScenarios, stressTexts, stressNumbers, stressImages } from "./stress-data";
