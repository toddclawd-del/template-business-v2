/**
 * Functions to find, backup, and modify template data files
 */

import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";
import { StressScenario, stressArrays } from "./stress-data";

export interface DataFileInfo {
  path: string;
  type: "ts" | "tsx" | "js" | "json";
  exportName?: string;
  content: string;
}

export interface BackupInfo {
  originalPath: string;
  backupPath: string;
  timestamp: number;
}

/**
 * Common data file patterns to look for
 */
const DATA_FILE_PATTERNS = [
  "lib/data.ts",
  "lib/data.tsx",
  "src/lib/data.ts",
  "src/data.ts",
  "data/index.ts",
  "data/demo.ts",
  "lib/demo-data.ts",
  "lib/sample-data.ts",
  "config/data.ts",
  "src/data/index.ts",
  "app/data.ts",
  "**/data.ts",
  "**/demo-data.ts",
];

/**
 * Find the data file in a template directory
 */
export async function findDataFile(templatePath: string): Promise<DataFileInfo | null> {
  const absPath = path.resolve(templatePath);

  // Try specific patterns first
  for (const pattern of DATA_FILE_PATTERNS.slice(0, -2)) {
    const filePath = path.join(absPath, pattern);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const ext = path.extname(filePath).slice(1) as DataFileInfo["type"];
      return { path: filePath, type: ext, content };
    }
  }

  // Fall back to glob patterns
  const globPatterns = DATA_FILE_PATTERNS.slice(-2);
  for (const pattern of globPatterns) {
    const matches = await glob(pattern, {
      cwd: absPath,
      ignore: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
    });

    if (matches.length > 0) {
      const filePath = path.join(absPath, matches[0]);
      const content = fs.readFileSync(filePath, "utf-8");
      const ext = path.extname(filePath).slice(1) as DataFileInfo["type"];
      return { path: filePath, type: ext, content };
    }
  }

  return null;
}

/**
 * Create a backup of the data file
 */
export function backupDataFile(dataFile: DataFileInfo): BackupInfo {
  const timestamp = Date.now();
  const backupPath = `${dataFile.path}.backup-${timestamp}`;
  fs.copyFileSync(dataFile.path, backupPath);

  return {
    originalPath: dataFile.path,
    backupPath,
    timestamp,
  };
}

/**
 * Restore data file from backup
 */
export function restoreFromBackup(backup: BackupInfo): void {
  if (fs.existsSync(backup.backupPath)) {
    fs.copyFileSync(backup.backupPath, backup.originalPath);
    fs.unlinkSync(backup.backupPath);
  } else {
    throw new Error(`Backup file not found: ${backup.backupPath}`);
  }
}

/**
 * Clean up old backup files
 */
export function cleanupBackups(templatePath: string): void {
  const absPath = path.resolve(templatePath);
  const backupPattern = "**/*.backup-*";

  glob.sync(backupPattern, {
    cwd: absPath,
    ignore: ["**/node_modules/**"],
  }).forEach((file) => {
    const fullPath = path.join(absPath, file);
    fs.unlinkSync(fullPath);
  });
}

/**
 * Parse the data file to understand its structure
 */
export interface DataStructure {
  exports: string[];
  hasDefaultExport: boolean;
  mainDataExport?: string;
  fields: Map<string, "string" | "number" | "array" | "object" | "image" | "unknown">;
}

export function analyzeDataFile(content: string): DataStructure {
  const structure: DataStructure = {
    exports: [],
    hasDefaultExport: false,
    fields: new Map(),
  };

  // Find named exports
  const namedExportRegex = /export\s+(?:const|let|var|function)\s+(\w+)/g;
  let match;
  while ((match = namedExportRegex.exec(content)) !== null) {
    structure.exports.push(match[1]);
  }

  // Check for default export
  structure.hasDefaultExport = /export\s+default/.test(content);

  // Try to identify main data export (common patterns)
  const mainDataPatterns = [
    "siteData",
    "demoData",
    "data",
    "listings",
    "properties",
    "products",
    "items",
    "posts",
    "projects",
  ];

  for (const pattern of mainDataPatterns) {
    if (structure.exports.includes(pattern)) {
      structure.mainDataExport = pattern;
      break;
    }
  }

  // Analyze field types (basic heuristics)
  const stringFieldPatterns = [
    /(\w+)\s*:\s*["'`]/g, // field: "value"
    /(\w+)\s*:\s*`[^`]*`/g, // template literals
  ];

  const numberFieldPatterns = [/(\w+)\s*:\s*[\d.]+[,\s\n}]/g];

  const arrayFieldPatterns = [/(\w+)\s*:\s*\[/g];

  const imageFieldPatterns = [
    /(\w*(?:image|img|photo|thumbnail|avatar|logo|banner|cover)\w*)\s*:/gi,
  ];

  // Extract string fields
  for (const pattern of stringFieldPatterns) {
    while ((match = pattern.exec(content)) !== null) {
      structure.fields.set(match[1], "string");
    }
  }

  // Extract number fields
  for (const pattern of numberFieldPatterns) {
    while ((match = pattern.exec(content)) !== null) {
      structure.fields.set(match[1], "number");
    }
  }

  // Extract array fields
  for (const pattern of arrayFieldPatterns) {
    while ((match = pattern.exec(content)) !== null) {
      structure.fields.set(match[1], "array");
    }
  }

  // Mark image fields
  for (const pattern of imageFieldPatterns) {
    while ((match = pattern.exec(content)) !== null) {
      structure.fields.set(match[1], "image");
    }
  }

  return structure;
}

/**
 * Generate modified data content for a stress scenario
 */
export function generateStressedData(
  originalContent: string,
  scenario: StressScenario,
  structure: DataStructure
): string {
  let modifiedContent = originalContent;

  // Apply scenario data modifications
  for (const [field, value] of Object.entries(scenario.data)) {
    // Skip special flags
    if (field === "singleItemMode" || field === "largeArrayMode" || field === "count") {
      continue;
    }

    // Handle different field types
    if (typeof value === "string") {
      // Replace string values - handle both single and double quotes
      const escapedValue = value
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t");

      // Try to find and replace the field
      const patterns = [
        // field: "value" or field: 'value'
        new RegExp(`(${field}\\s*:\\s*)["']([^"']*?)["']`, "g"),
        // field: `value`
        new RegExp(`(${field}\\s*:\\s*)\`([^\`]*?)\``, "g"),
      ];

      for (const pattern of patterns) {
        modifiedContent = modifiedContent.replace(pattern, `$1"${escapedValue}"`);
      }
    } else if (typeof value === "number") {
      // Replace number values
      const pattern = new RegExp(`(${field}\\s*:\\s*)[\\d.]+`, "g");
      modifiedContent = modifiedContent.replace(pattern, `$1${value}`);
    } else if (Array.isArray(value) && value.length === 0) {
      // Replace arrays with empty arrays
      const pattern = new RegExp(`(${field}\\s*:\\s*)\\[[^\\]]*\\]`, "gs");
      modifiedContent = modifiedContent.replace(pattern, `$1[]`);
    }
  }

  // Handle array mode scenarios
  if (scenario.data.largeArrayMode) {
    // This requires more sophisticated AST manipulation
    // For now, we'll add a comment indicating this should be manually verified
    modifiedContent = `// STRESS TEST: Large array mode (${scenario.data.count || 100} items)\n` + modifiedContent;
  }

  if (scenario.data.singleItemMode) {
    modifiedContent = `// STRESS TEST: Single item mode\n` + modifiedContent;
  }

  return modifiedContent;
}

/**
 * Write modified data to the file
 */
export function writeModifiedData(dataFile: DataFileInfo, content: string): void {
  fs.writeFileSync(dataFile.path, content, "utf-8");
}

/**
 * Get the template name from its path
 */
export function getTemplateName(templatePath: string): string {
  return path.basename(path.resolve(templatePath));
}

/**
 * List all templates in a directory
 */
export async function listTemplates(baseDir: string): Promise<string[]> {
  const absPath = path.resolve(baseDir);
  const templates: string[] = [];

  // Look for directories with package.json (likely templates)
  const dirs = fs.readdirSync(absPath, { withFileTypes: true });

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      const templatePath = path.join(absPath, dir.name);
      const packageJsonPath = path.join(templatePath, "package.json");

      if (fs.existsSync(packageJsonPath)) {
        templates.push(templatePath);
      }
    }
  }

  return templates;
}
