/**
 * Generate markdown reports for stress test results
 */

import * as fs from "fs";
import * as path from "path";
import { TestResult, VisualIssue } from "./test-runner";
import { StressScenario } from "./stress-data";

export interface StressTestReport {
  templateName: string;
  templatePath: string;
  timestamp: Date;
  duration: number;
  results: TestResult[];
  summary: {
    total: number;
    passed: number;
    failed: number;
    warnings: number;
  };
}

/**
 * Generate a complete stress test report
 */
export function generateReport(
  templateName: string,
  templatePath: string,
  results: TestResult[],
  totalDuration: number
): StressTestReport {
  const passed = results.filter((r) => r.passed).length;
  const failed = results.filter((r) => !r.passed).length;
  const warnings = results.reduce((acc, r) => acc + r.buildWarnings.length, 0);

  return {
    templateName,
    templatePath,
    timestamp: new Date(),
    duration: totalDuration,
    results,
    summary: {
      total: results.length,
      passed,
      failed,
      warnings,
    },
  };
}

/**
 * Format duration in human readable format
 */
function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${Math.floor(ms / 60000)}m ${Math.floor((ms % 60000) / 1000)}s`;
}

/**
 * Get severity emoji
 */
function getSeverityEmoji(severity: string): string {
  switch (severity) {
    case "critical":
      return "🔴";
    case "high":
      return "🟠";
    case "medium":
      return "🟡";
    case "low":
      return "🟢";
    default:
      return "⚪";
  }
}

/**
 * Convert report to markdown
 */
export function reportToMarkdown(report: StressTestReport): string {
  const lines: string[] = [];

  // Header
  lines.push(`# Stress Test Report: ${report.templateName}`);
  lines.push("");
  lines.push(`**Generated:** ${report.timestamp.toISOString()}`);
  lines.push(`**Template Path:** \`${report.templatePath}\``);
  lines.push(`**Total Duration:** ${formatDuration(report.duration)}`);
  lines.push("");

  // Summary
  lines.push("## Summary");
  lines.push("");
  lines.push(`| Metric | Count |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Tests Run | ${report.summary.total} |`);
  lines.push(`| ✅ Passed | ${report.summary.passed} |`);
  lines.push(`| ❌ Failed | ${report.summary.failed} |`);
  lines.push(`| ⚠️ Warnings | ${report.summary.warnings} |`);
  lines.push("");

  // Pass rate
  const passRate = ((report.summary.passed / report.summary.total) * 100).toFixed(1);
  lines.push(`**Pass Rate:** ${passRate}%`);
  lines.push("");

  // Failed Tests
  const failedTests = report.results.filter((r) => !r.passed);
  if (failedTests.length > 0) {
    lines.push("## ❌ Failed Tests");
    lines.push("");

    for (const result of failedTests) {
      lines.push(`### ${result.scenario.name}`);
      lines.push("");
      lines.push(`- **Category:** ${result.scenario.category}`);
      lines.push(`- **Severity:** ${getSeverityEmoji(result.scenario.severity)} ${result.scenario.severity}`);
      lines.push(`- **Description:** ${result.scenario.description}`);
      lines.push(`- **Duration:** ${formatDuration(result.duration)}`);
      lines.push("");

      if (!result.buildSuccess) {
        lines.push("#### Build Error");
        lines.push("");
        lines.push("```");
        lines.push(result.buildError || "Unknown build error");
        lines.push("```");
        lines.push("");
      }

      if (result.visualIssues.length > 0) {
        lines.push("#### Visual Issues");
        lines.push("");
        for (const issue of result.visualIssues) {
          lines.push(
            `- ${getSeverityEmoji(issue.severity)} **${issue.type}**: ${issue.description}${issue.location ? ` (at ${issue.location})` : ""}`
          );
        }
        lines.push("");
      }

      if (result.consoleErrors.length > 0) {
        lines.push("#### Console Errors");
        lines.push("");
        for (const error of result.consoleErrors.slice(0, 10)) {
          lines.push(`- \`${error.slice(0, 200)}\``);
        }
        if (result.consoleErrors.length > 10) {
          lines.push(`- ... and ${result.consoleErrors.length - 10} more`);
        }
        lines.push("");
      }

      if (result.screenshots.length > 0) {
        lines.push("#### Screenshots");
        lines.push("");
        for (const screenshot of result.screenshots) {
          const filename = path.basename(screenshot);
          lines.push(`- [${filename}](${screenshot})`);
        }
        lines.push("");
      }

      lines.push("---");
      lines.push("");
    }
  }

  // Passed Tests (summary only)
  const passedTests = report.results.filter((r) => r.passed);
  if (passedTests.length > 0) {
    lines.push("## ✅ Passed Tests");
    lines.push("");
    lines.push("| Test | Category | Duration |");
    lines.push("|------|----------|----------|");
    for (const result of passedTests) {
      lines.push(
        `| ${result.scenario.name} | ${result.scenario.category} | ${formatDuration(result.duration)} |`
      );
    }
    lines.push("");
  }

  // Warnings
  const allWarnings = report.results.flatMap((r) => r.buildWarnings);
  if (allWarnings.length > 0) {
    lines.push("## ⚠️ Build Warnings");
    lines.push("");
    const uniqueWarnings = [...new Set(allWarnings)];
    for (const warning of uniqueWarnings.slice(0, 20)) {
      lines.push(`- ${warning}`);
    }
    if (uniqueWarnings.length > 20) {
      lines.push(`- ... and ${uniqueWarnings.length - 20} more`);
    }
    lines.push("");
  }

  // Recommendations
  lines.push("## 💡 Recommendations");
  lines.push("");

  const recommendations = generateRecommendations(report);
  if (recommendations.length > 0) {
    for (let i = 0; i < recommendations.length; i++) {
      lines.push(`${i + 1}. ${recommendations[i]}`);
    }
  } else {
    lines.push("No critical issues found. Template handles edge cases well!");
  }
  lines.push("");

  // Test Data Reference
  lines.push("## 📋 Test Scenarios Reference");
  lines.push("");
  lines.push("| Scenario | Category | Severity | Description |");
  lines.push("|----------|----------|----------|-------------|");
  for (const result of report.results) {
    const status = result.passed ? "✅" : "❌";
    lines.push(
      `| ${status} ${result.scenario.name} | ${result.scenario.category} | ${result.scenario.severity} | ${result.scenario.description} |`
    );
  }
  lines.push("");

  return lines.join("\n");
}

/**
 * Generate recommendations based on test results
 */
function generateRecommendations(report: StressTestReport): string[] {
  const recommendations: string[] = [];
  const issueTypes = new Map<string, number>();

  // Count issue types
  for (const result of report.results) {
    if (!result.passed) {
      for (const issue of result.visualIssues) {
        const count = issueTypes.get(issue.type) || 0;
        issueTypes.set(issue.type, count + 1);
      }

      if (!result.buildSuccess) {
        const count = issueTypes.get("build-error") || 0;
        issueTypes.set("build-error", count + 1);
      }
    }
  }

  // Generate recommendations based on common issues
  if (issueTypes.has("overflow")) {
    recommendations.push(
      "Add CSS `overflow-wrap: break-word` and `word-break: break-word` to text containers to handle long unbreakable words"
    );
    recommendations.push("Consider using `text-overflow: ellipsis` with `overflow: hidden` for titles");
  }

  if (issueTypes.has("broken-image")) {
    recommendations.push("Add fallback images or placeholder components for missing/broken images");
    recommendations.push("Implement `onError` handlers for `<img>` tags");
  }

  if (issueTypes.has("console-error")) {
    recommendations.push("Add null checks and optional chaining for data access");
    recommendations.push("Implement error boundaries for React components");
  }

  // Check for empty array issues
  const emptyArrayFailed = report.results.find(
    (r) => r.scenario.name === "empty-array" && !r.passed
  );
  if (emptyArrayFailed) {
    recommendations.push("Add empty state components for lists/grids when data is empty");
    recommendations.push("Check for array existence before mapping: `items?.map()` or `items && items.map()`");
  }

  // Check for XSS issues
  const xssFailed = report.results.find((r) => r.scenario.name === "xss-attempt" && !r.passed);
  if (xssFailed) {
    recommendations.push(
      "⚠️ CRITICAL: Ensure all user-provided content is properly escaped. Use React's built-in escaping or sanitize HTML"
    );
  }

  // Check for number issues
  const numberIssues = report.results.filter(
    (r) => r.scenario.category === "number" && !r.passed
  );
  if (numberIssues.length > 0) {
    recommendations.push("Add number formatting utilities for prices, counts, and other numeric displays");
    recommendations.push("Handle edge cases like zero, negative, and very large numbers explicitly");
  }

  return recommendations;
}

/**
 * Save report to file
 */
export function saveReport(report: StressTestReport, outputDir: string): string {
  const markdown = reportToMarkdown(report);
  const dateStr = report.timestamp.toISOString().split("T")[0];
  const filename = `stress-test-${report.templateName}-${dateStr}.md`;
  const outputPath = path.join(outputDir, filename);

  // Ensure directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(outputPath, markdown, "utf-8");
  return outputPath;
}

/**
 * Print report summary to console
 */
export function printSummary(report: StressTestReport): void {
  console.log("");
  console.log("═".repeat(60));
  console.log(`  STRESS TEST RESULTS: ${report.templateName}`);
  console.log("═".repeat(60));
  console.log("");
  console.log(`  Total Tests:  ${report.summary.total}`);
  console.log(`  ✅ Passed:    ${report.summary.passed}`);
  console.log(`  ❌ Failed:    ${report.summary.failed}`);
  console.log(`  ⚠️  Warnings:  ${report.summary.warnings}`);
  console.log("");
  console.log(
    `  Pass Rate:    ${((report.summary.passed / report.summary.total) * 100).toFixed(1)}%`
  );
  console.log(`  Duration:     ${formatDuration(report.duration)}`);
  console.log("");

  if (report.summary.failed > 0) {
    console.log("  Failed Tests:");
    const failedTests = report.results.filter((r) => !r.passed);
    for (const result of failedTests) {
      console.log(`    - ${result.scenario.name} (${result.scenario.severity})`);
    }
    console.log("");
  }

  console.log("═".repeat(60));
}

/**
 * Export report as JSON
 */
export function reportToJSON(report: StressTestReport): string {
  return JSON.stringify(report, null, 2);
}

/**
 * Create a minimal summary for CI/CD
 */
export function createCISummary(report: StressTestReport): {
  success: boolean;
  passRate: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
} {
  let critical = 0;
  let high = 0;
  let medium = 0;
  let low = 0;

  for (const result of report.results) {
    for (const issue of result.visualIssues) {
      switch (issue.severity) {
        case "critical":
          critical++;
          break;
        case "high":
          high++;
          break;
        case "medium":
          medium++;
          break;
        case "low":
          low++;
          break;
      }
    }
  }

  return {
    success: report.summary.failed === 0,
    passRate: (report.summary.passed / report.summary.total) * 100,
    critical,
    high,
    medium,
    low,
  };
}
