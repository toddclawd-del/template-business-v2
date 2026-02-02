# Template Stress Test Tool

Sanity stress test tool for the template pipeline. Tests templates with edge case content to find layout issues, crashes, and vulnerabilities before they reach production.

## What It Tests

### Text Stress Tests
- **Long titles** - Text that overflows card layouts
- **Unbreakable words** - German compound words like "Donaudampfschifffahrts..."
- **Special characters** - Unicode, emoji, accents, symbols
- **Empty strings** - Missing/null content handling
- **XSS attempts** - Script injection vectors
- **RTL text** - Right-to-left languages

### Number Stress Tests
- **Zero values** - `$0` prices, 0 counts
- **Negative numbers** - `-100` ratings
- **Large numbers** - `999,999,999` views
- **Decimals** - `123.456789` precision

### Image Stress Tests
- **Missing images** - Empty `src` attributes
- **Broken URLs** - 404 images
- **Extreme aspect ratios** - Panoramic, portrait
- **Tiny/huge images** - 10x10 to 4K

### Array Stress Tests
- **Empty arrays** - No items to display
- **Single item** - Edge case layouts
- **Large arrays** - 100+ items performance

## Installation

```bash
cd tools/stress-test
npm install
```

## Usage

### Test a Single Template

```bash
# Using ts-node
npx ts-node src/index.ts --template=../../templates/realestate-starter

# Or after building
npm run build
node dist/index.js --template=../../templates/realestate-starter
```

### Test All Templates

```bash
npx ts-node src/index.ts --all
```

### Test Specific Category

```bash
npx ts-node src/index.ts --template=path/to/template --category=text
npx ts-node src/index.ts --template=path/to/template --category=number
npx ts-node src/index.ts --template=path/to/template --category=image
npx ts-node src/index.ts --template=path/to/template --category=array
```

### Run Specific Scenario

```bash
npx ts-node src/index.ts --template=path/to/template --scenario=long-title
npx ts-node src/index.ts --template=path/to/template --scenario=empty-array
npx ts-node src/index.ts --template=path/to/template --scenario=xss-attempt
```

### Options

| Flag | Description |
|------|-------------|
| `-t, --template <path>` | Path to template directory |
| `-a, --all` | Test all templates in ../templates |
| `-c, --category <cat>` | Filter by category (text/number/image/array) |
| `-s, --scenario <name>` | Run specific scenario only |
| `-o, --output <path>` | Report output directory (default: ../../memory) |
| `--skip-build` | Skip build step (faster) |
| `--keep-backup` | Don't delete backup files |
| `--verbose` | Detailed output |
| `--json` | Output JSON instead of summary |

## Programmatic Usage

```typescript
import { runStressTest, StressTestReport } from '@template-pipeline/stress-test';

async function testMyTemplate() {
  const report: StressTestReport = await runStressTest('./my-template', {
    skipBuild: false,
    verbose: true,
  });

  if (report.summary.failed > 0) {
    console.log('Template has issues!');
    // Handle failures
  }
}
```

## Report Output

Reports are saved to `/memory/stress-test-[template]-[date].md`:

```markdown
# Stress Test Report: realestate-starter

## Summary
- Tests Run: 19
- ✅ Passed: 16
- ❌ Failed: 3
- ⚠️ Warnings: 2

## ❌ Failed Tests

### long-title
- **Category:** text
- **Severity:** 🟠 high
- **Issue:** Title overflows card boundary

### empty-array
- **Category:** array
- **Severity:** 🔴 critical
- **Build Error:** Cannot read property 'map' of undefined

## 💡 Recommendations
1. Add CSS overflow-wrap: break-word to text containers
2. Add empty state components for lists/grids
```

## Available Scenarios

| Name | Category | Severity | Description |
|------|----------|----------|-------------|
| long-title | text | high | 200+ character title |
| no-break-word | text | high | German compound word |
| special-chars | text | medium | Unicode, emoji, symbols |
| emoji-heavy | text | low | Multiple emoji |
| empty-strings | text | critical | Empty title/description |
| whitespace-only | text | high | Spaces only |
| xss-attempt | text | critical | Script injection |
| long-paragraph | text | medium | 1000+ word text |
| zero-values | number | high | $0 prices |
| negative-values | number | high | Negative numbers |
| large-numbers | number | medium | 999,999,999 |
| decimal-precision | number | low | Many decimal places |
| missing-image | image | critical | Empty src |
| broken-image | image | high | 404 URL |
| extreme-aspect-ratios | image | high | 2000x100 panoramic |
| empty-array | array | critical | No items |
| single-item-array | array | medium | Just one item |
| large-array | array | medium | 100+ items |
| rtl-text | text | low | Arabic text |

## How It Works

1. **Find data file** - Locates `lib/data.ts` or similar
2. **Create backup** - Saves original data
3. **Inject stress data** - Modifies data with edge cases
4. **Run build** - Catches compile/runtime errors
5. **Start dev server** - Spins up the template
6. **Visual checks** - Uses Puppeteer to detect:
   - Horizontal overflow
   - Broken images
   - Console errors
   - XSS vulnerabilities
7. **Restore data** - Returns to original state
8. **Generate report** - Markdown with recommendations

## CI/CD Integration

```yaml
# GitHub Actions example
- name: Run Stress Tests
  run: |
    cd tools/stress-test
    npm install
    npx ts-node src/index.ts --template=../../templates/my-template --json > results.json
    
- name: Check Results
  run: |
    FAILED=$(jq '.summary.failed' results.json)
    if [ "$FAILED" -gt "0" ]; then
      echo "Stress tests failed!"
      exit 1
    fi
```

## Adding Custom Scenarios

Edit `src/stress-data.ts`:

```typescript
export const stressScenarios: StressScenario[] = [
  // ... existing scenarios
  {
    name: "my-custom-test",
    description: "Tests something specific",
    category: "text",
    severity: "high",
    data: { 
      title: "Custom stress content",
      price: -999
    },
  },
];
```

## Troubleshooting

### "No data file found"
- Template may not use a standard data file pattern
- Add the pattern to `DATA_FILE_PATTERNS` in `inject.ts`

### "Build timed out"
- Template build takes >5 minutes
- Use `--skip-build` for faster iteration

### "Dev server failed to start"
- Port conflict - the tool tries random ports 3000-4000
- Check if another process is using those ports

### Screenshots not appearing
- Puppeteer requires Chromium
- On Linux, may need additional dependencies

## License

MIT
