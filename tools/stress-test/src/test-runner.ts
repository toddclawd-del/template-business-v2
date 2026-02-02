/**
 * Build and visual check logic for stress testing
 */

import * as path from "path";
import { spawn, ChildProcess } from "child_process";
import puppeteer, { Browser, Page } from "puppeteer";
import { StressScenario } from "./stress-data";

export interface TestResult {
  scenario: StressScenario;
  passed: boolean;
  buildSuccess: boolean;
  buildError?: string;
  buildWarnings: string[];
  visualIssues: VisualIssue[];
  consoleErrors: string[];
  duration: number;
  screenshots: string[];
}

export interface VisualIssue {
  type: "overflow" | "overlap" | "missing" | "broken-image" | "layout" | "console-error";
  description: string;
  location?: string;
  severity: "low" | "medium" | "high" | "critical";
  screenshot?: string;
}

export interface DevServerInfo {
  process: ChildProcess;
  port: number;
  url: string;
}

/**
 * Run the build command for a template
 */
export async function runBuild(templatePath: string): Promise<{
  success: boolean;
  error?: string;
  warnings: string[];
  duration: number;
}> {
  const startTime = Date.now();
  const warnings: string[] = [];

  return new Promise((resolve) => {
    const buildProcess = spawn("npm", ["run", "build"], {
      cwd: templatePath,
      shell: true,
      env: { ...process.env, FORCE_COLOR: "0" },
    });

    let stdout = "";
    let stderr = "";

    buildProcess.stdout?.on("data", (data) => {
      stdout += data.toString();
    });

    buildProcess.stderr?.on("data", (data) => {
      stderr += data.toString();
    });

    buildProcess.on("close", (code) => {
      const duration = Date.now() - startTime;

      // Extract warnings from output
      const warningMatches = stdout.match(/warning[:\s].+/gi) || [];
      warnings.push(...warningMatches);

      if (code === 0) {
        resolve({ success: true, warnings, duration });
      } else {
        resolve({
          success: false,
          error: stderr || stdout,
          warnings,
          duration,
        });
      }
    });

    // Timeout after 5 minutes
    setTimeout(() => {
      buildProcess.kill();
      resolve({
        success: false,
        error: "Build timed out after 5 minutes",
        warnings,
        duration: 300000,
      });
    }, 300000);
  });
}

/**
 * Start the dev server for a template
 */
export async function startDevServer(templatePath: string): Promise<DevServerInfo> {
  // Find an available port
  const port = 3000 + Math.floor(Math.random() * 1000);

  return new Promise((resolve, reject) => {
    const devProcess = spawn("npm", ["run", "dev", "--", "-p", port.toString()], {
      cwd: templatePath,
      shell: true,
      env: { ...process.env, PORT: port.toString() },
      detached: true,
    });

    let output = "";

    const onData = (data: Buffer) => {
      output += data.toString();
      // Check if server is ready
      if (
        output.includes("ready") ||
        output.includes("started") ||
        output.includes(`localhost:${port}`) ||
        output.includes("compiled")
      ) {
        devProcess.stdout?.off("data", onData);
        devProcess.stderr?.off("data", onData);

        // Give it a moment to fully initialize
        setTimeout(() => {
          resolve({
            process: devProcess,
            port,
            url: `http://localhost:${port}`,
          });
        }, 2000);
      }
    };

    devProcess.stdout?.on("data", onData);
    devProcess.stderr?.on("data", onData);

    devProcess.on("error", (err) => {
      reject(new Error(`Failed to start dev server: ${err.message}`));
    });

    // Timeout after 60 seconds
    setTimeout(() => {
      reject(new Error("Dev server failed to start within 60 seconds"));
    }, 60000);
  });
}

/**
 * Stop the dev server
 */
export function stopDevServer(server: DevServerInfo): void {
  try {
    // Kill the process group
    if (server.process.pid) {
      process.kill(-server.process.pid, "SIGTERM");
    }
  } catch (e) {
    // Process might already be dead
    server.process.kill("SIGTERM");
  }
}

/**
 * Run visual checks on a page
 */
export async function runVisualChecks(
  browser: Browser,
  url: string,
  scenario: StressScenario,
  screenshotDir: string
): Promise<{ issues: VisualIssue[]; consoleErrors: string[]; screenshots: string[] }> {
  const issues: VisualIssue[] = [];
  const consoleErrors: string[] = [];
  const screenshots: string[] = [];

  const page = await browser.newPage();

  // Capture console errors
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("pageerror", (err: unknown) => {
    const message = err instanceof Error ? err.message : String(err);
    consoleErrors.push(message);
    issues.push({
      type: "console-error",
      description: message,
      severity: "high",
    });
  });

  // Set viewport
  await page.setViewport({ width: 1280, height: 800 });

  try {
    // Navigate to the page
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Take screenshot
    const screenshotPath = path.join(screenshotDir, `${scenario.name}-desktop.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    screenshots.push(screenshotPath);

    // Check for overflow
    const overflowIssues = await checkOverflow(page);
    issues.push(...overflowIssues);

    // Check for broken images
    const imageIssues = await checkBrokenImages(page);
    issues.push(...imageIssues);

    // Check for XSS (if XSS scenario)
    if (scenario.name.includes("xss")) {
      const xssIssues = await checkXSS(page);
      issues.push(...xssIssues);
    }

    // Mobile viewport test
    await page.setViewport({ width: 375, height: 667 });
    await page.reload({ waitUntil: "networkidle0" });

    const mobileScreenshotPath = path.join(screenshotDir, `${scenario.name}-mobile.png`);
    await page.screenshot({ path: mobileScreenshotPath, fullPage: true });
    screenshots.push(mobileScreenshotPath);

    // Check mobile overflow
    const mobileOverflowIssues = await checkOverflow(page);
    mobileOverflowIssues.forEach((issue) => {
      issue.description = `[Mobile] ${issue.description}`;
    });
    issues.push(...mobileOverflowIssues);

    // Check multiple routes if they exist
    const routes = await discoverRoutes(page);
    for (const route of routes.slice(0, 5)) {
      // Limit to first 5 routes
      try {
        await page.goto(`${url}${route}`, { waitUntil: "networkidle0", timeout: 15000 });
        const routeIssues = await checkOverflow(page);
        routeIssues.forEach((issue) => {
          issue.location = route;
        });
        issues.push(...routeIssues);
      } catch (e) {
        // Route might not exist, skip
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    issues.push({
      type: "layout",
      description: `Page failed to load: ${message}`,
      severity: "critical",
    });
  } finally {
    await page.close();
  }

  return { issues, consoleErrors, screenshots };
}

/**
 * Check for content overflow
 */
async function checkOverflow(page: Page): Promise<VisualIssue[]> {
  const issues: VisualIssue[] = [];

  const overflowElements = await page.evaluate(() => {
    const elements: Array<{ tag: string; class: string; overflow: string }> = [];
    const all = document.querySelectorAll("*");

    all.forEach((el: Element) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.scrollWidth > htmlEl.clientWidth + 5) {
        elements.push({
          tag: htmlEl.tagName.toLowerCase(),
          class: htmlEl.className,
          overflow: "horizontal",
        });
      }
    });

    // Check if body has horizontal scroll
    if (document.body.scrollWidth > window.innerWidth) {
      elements.push({
        tag: "body",
        class: "",
        overflow: "horizontal-body",
      });
    }

    return elements;
  });

  for (const el of overflowElements) {
    issues.push({
      type: "overflow",
      description: `${el.tag}${el.class ? `.${el.class.split(" ")[0]}` : ""} has ${el.overflow} overflow`,
      severity: el.overflow === "horizontal-body" ? "high" : "medium",
    });
  }

  return issues;
}

/**
 * Check for broken images
 */
async function checkBrokenImages(page: Page): Promise<VisualIssue[]> {
  const issues: VisualIssue[] = [];

  const brokenImages = await page.evaluate(() => {
    const images = document.querySelectorAll("img");
    const broken: Array<{ src: string; alt: string }> = [];

    images.forEach((img: HTMLImageElement) => {
      if (!img.complete || img.naturalWidth === 0) {
        broken.push({
          src: img.src,
          alt: img.alt,
        });
      }
    });

    return broken;
  });

  for (const img of brokenImages) {
    issues.push({
      type: "broken-image",
      description: `Broken image: ${img.alt || img.src.slice(-50)}`,
      severity: "medium",
    });
  }

  return issues;
}

/**
 * Check for XSS vulnerabilities
 */
async function checkXSS(page: Page): Promise<VisualIssue[]> {
  const issues: VisualIssue[] = [];

  // Check if any script tags with our test content exist
  const xssDetected = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll("script"));
    for (const script of scripts) {
      if (script.textContent?.includes("alert('xss')")) {
        return true;
      }
    }

    // Check for unescaped HTML
    const html = document.body.innerHTML;
    if (html.includes("<script>alert") || html.includes("onerror=alert")) {
      return true;
    }

    return false;
  });

  if (xssDetected) {
    issues.push({
      type: "layout", // Using layout as closest type
      description: "XSS vulnerability detected - user input not properly escaped",
      severity: "critical",
    });
  }

  return issues;
}

/**
 * Discover internal routes from the page
 */
async function discoverRoutes(page: Page): Promise<string[]> {
  const routes = await page.evaluate(() => {
    const links = document.querySelectorAll('a[href^="/"]');
    const paths: string[] = [];

    links.forEach((link: Element) => {
      const href = link.getAttribute("href");
      if (href && !href.includes("#") && !paths.includes(href)) {
        paths.push(href);
      }
    });

    return paths;
  });

  return routes;
}

/**
 * Create a browser instance for testing
 */
export async function createBrowser(): Promise<Browser> {
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

/**
 * Run a complete test for a scenario
 */
export async function runScenarioTest(
  templatePath: string,
  scenario: StressScenario,
  browser: Browser,
  screenshotDir: string,
  skipBuild: boolean = false
): Promise<TestResult> {
  const startTime = Date.now();
  const result: TestResult = {
    scenario,
    passed: true,
    buildSuccess: true,
    buildWarnings: [],
    visualIssues: [],
    consoleErrors: [],
    duration: 0,
    screenshots: [],
  };

  // Run build if not skipped
  if (!skipBuild) {
    const buildResult = await runBuild(templatePath);
    result.buildSuccess = buildResult.success;
    result.buildError = buildResult.error;
    result.buildWarnings = buildResult.warnings;

    if (!buildResult.success) {
      result.passed = false;
      result.duration = Date.now() - startTime;
      return result;
    }
  }

  // Start dev server and run visual checks
  let server: DevServerInfo | null = null;
  try {
    server = await startDevServer(templatePath);

    const visualResult = await runVisualChecks(browser, server.url, scenario, screenshotDir);

    result.visualIssues = visualResult.issues;
    result.consoleErrors = visualResult.consoleErrors;
    result.screenshots = visualResult.screenshots;

    // Determine if passed based on issues
    const criticalIssues = result.visualIssues.filter((i) => i.severity === "critical");
    const highIssues = result.visualIssues.filter((i) => i.severity === "high");

    if (criticalIssues.length > 0 || result.consoleErrors.length > 0) {
      result.passed = false;
    } else if (highIssues.length > 2) {
      result.passed = false;
    }
  } catch (error: any) {
    result.passed = false;
    result.visualIssues.push({
      type: "layout",
      description: `Test failed: ${error.message}`,
      severity: "critical",
    });
  } finally {
    if (server) {
      stopDevServer(server);
    }
  }

  result.duration = Date.now() - startTime;
  return result;
}
