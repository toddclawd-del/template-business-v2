/**
 * Edge case content library for stress testing templates
 */

// Generate a long paragraph
const generateLongParagraph = (words: number = 1000): string => {
  const loremBase = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
  const loremWords = loremBase.split(" ");
  let result = [];
  for (let i = 0; i < words; i++) {
    result.push(loremWords[i % loremWords.length]);
  }
  return result.join(" ");
};

export const stressTexts = {
  // Super long title that will definitely cause overflow
  longTitle: "This Is An Extremely Long Title That Should Definitely Overflow Most Card Layouts And Cause Problems If Not Handled Properly With Truncation Or Wrapping And It Just Keeps Going On And On",

  // No-break word (German compound) - tests word-break CSS
  noBreakWord: "Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft",

  // Special characters that might break rendering
  specialChars: "Café & Restaurant \"L'Étoile\" — 100% Organic™ • $$$ «Спасибо» 日本語",

  // Emoji heavy text
  emojiText: "🏠 Beautiful Home 🌟 5-Star ⭐⭐⭐⭐⭐ Reviews! 🎉 💰 🔥 🚀",

  // Empty string
  emptyString: "",

  // Just whitespace
  spacesOnly: "   ",

  // Very short
  tooShort: "Hi",

  // XSS attempt (should be escaped)
  xssAttempt: "<script>alert('xss')</script>",

  // More XSS vectors
  xssImg: "<img src=x onerror=alert('xss')>",
  xssSvg: "<svg onload=alert('xss')>",

  // Markdown/HTML in plain text
  markdownText: "# Title\n**bold** _italic_ [link](http://example.com)\n- list item",

  // Numbers as strings
  numericString: "12345678901234567890",

  // Long paragraph (1000+ words)
  longParagraph: generateLongParagraph(1000),

  // Medium paragraph
  mediumParagraph: generateLongParagraph(200),

  // RTL text (Arabic)
  rtlText: "مرحبا بالعالم - Welcome to the World",

  // Mixed direction
  mixedDirection: "Hello مرحبا World عالم",

  // Newlines
  withNewlines: "Line 1\nLine 2\nLine 3\n\nLine 5 after blank",

  // Tabs
  withTabs: "Col1\tCol2\tCol3",

  // URL-like text
  urlText: "Check out https://example.com/path?query=value&other=123#hash for more info",

  // Email-like text  
  emailText: "Contact us at support@company.com or sales@company.co.uk",

  // Phone number
  phoneText: "+1 (555) 123-4567 or 1-800-CALL-NOW",

  // Currency symbols
  currencyText: "$100 €85 £70 ¥12000 ₹7500",

  // Zalgo text (combining characters)
  zalgoText: "H̷̢̧e̸̛̹l̵̰̀l̶̰͝o̷̧̕",
};

export const stressNumbers = {
  zero: 0,
  negative: -100,
  negativeDecimal: -99.99,
  veryLarge: 999999999,
  veryLargeDecimal: 999999999.99,
  decimal: 123.456789,
  verySmall: 0.001,
  scientific: 1e10,
  maxSafe: Number.MAX_SAFE_INTEGER,
  infinity: Infinity,
  nan: NaN,
};

export const stressImages = {
  // Missing/empty
  missing: "",
  
  // Broken URL
  broken: "https://example.com/definitely-nonexistent-image-12345.jpg",
  
  // SVG (different rendering)
  svg: "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg",
  
  // Very wide panoramic
  veryWide: "https://picsum.photos/2000/100",
  
  // Very tall portrait
  veryTall: "https://picsum.photos/100/2000",
  
  // Tiny image
  tiny: "https://picsum.photos/10/10",
  
  // Large file (4K)
  large: "https://picsum.photos/3840/2160",
  
  // Square
  square: "https://picsum.photos/500/500",
  
  // Standard landscape
  landscape: "https://picsum.photos/800/600",
  
  // Standard portrait
  portrait: "https://picsum.photos/600/800",
  
  // Transparent PNG
  transparent: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  
  // Animated GIF
  animated: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
  
  // WebP
  webp: "https://www.gstatic.com/webp/gallery/1.webp",
  
  // Data URL (tiny red pixel)
  dataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==",
};

export const stressArrays = {
  empty: [] as any[],
  single: (item: any) => [item],
  large: (item: any, count: number = 100) => Array(count).fill(item),
  huge: (item: any) => Array(500).fill(item),
};

export const stressDates = {
  // Far past
  farPast: new Date("1900-01-01"),
  
  // Recent past
  recentPast: new Date(Date.now() - 86400000), // yesterday
  
  // Now
  now: new Date(),
  
  // Near future
  nearFuture: new Date(Date.now() + 86400000), // tomorrow
  
  // Far future
  farFuture: new Date("2099-12-31"),
  
  // Invalid
  invalid: new Date("invalid"),
  
  // Epoch
  epoch: new Date(0),
};

export const stressBooleans = {
  true: true,
  false: false,
  // Truthy/falsy that might be coerced
  emptyString: "",
  zero: 0,
  nullValue: null,
  undefinedValue: undefined,
};

/**
 * Test scenarios combining multiple stress data types
 */
export interface StressScenario {
  name: string;
  description: string;
  category: 'text' | 'number' | 'image' | 'array' | 'mixed';
  severity: 'low' | 'medium' | 'high' | 'critical';
  data: Record<string, any>;
}

export const stressScenarios: StressScenario[] = [
  {
    name: "long-title",
    description: "Tests text overflow with extremely long titles",
    category: "text",
    severity: "high",
    data: { title: stressTexts.longTitle },
  },
  {
    name: "no-break-word",
    description: "Tests word-break handling with unbreakable German compound",
    category: "text", 
    severity: "high",
    data: { title: stressTexts.noBreakWord },
  },
  {
    name: "special-chars",
    description: "Tests special character encoding and rendering",
    category: "text",
    severity: "medium",
    data: { title: stressTexts.specialChars, description: stressTexts.specialChars },
  },
  {
    name: "emoji-heavy",
    description: "Tests emoji rendering and spacing",
    category: "text",
    severity: "low",
    data: { title: stressTexts.emojiText },
  },
  {
    name: "empty-strings",
    description: "Tests empty string handling",
    category: "text",
    severity: "critical",
    data: { title: stressTexts.emptyString, description: stressTexts.emptyString },
  },
  {
    name: "whitespace-only",
    description: "Tests whitespace-only content",
    category: "text",
    severity: "high",
    data: { title: stressTexts.spacesOnly },
  },
  {
    name: "xss-attempt",
    description: "Tests XSS escaping",
    category: "text",
    severity: "critical",
    data: { title: stressTexts.xssAttempt, description: stressTexts.xssImg },
  },
  {
    name: "long-paragraph",
    description: "Tests very long content handling",
    category: "text",
    severity: "medium",
    data: { description: stressTexts.longParagraph },
  },
  {
    name: "zero-values",
    description: "Tests zero number handling",
    category: "number",
    severity: "high",
    data: { price: stressNumbers.zero, count: stressNumbers.zero },
  },
  {
    name: "negative-values",
    description: "Tests negative number handling",
    category: "number",
    severity: "high",
    data: { price: stressNumbers.negative },
  },
  {
    name: "large-numbers",
    description: "Tests large number formatting",
    category: "number",
    severity: "medium",
    data: { price: stressNumbers.veryLarge, views: stressNumbers.veryLarge },
  },
  {
    name: "decimal-precision",
    description: "Tests decimal number display",
    category: "number",
    severity: "low",
    data: { price: stressNumbers.decimal, rating: stressNumbers.decimal },
  },
  {
    name: "missing-image",
    description: "Tests empty/missing image handling",
    category: "image",
    severity: "critical",
    data: { image: stressImages.missing, thumbnail: stressImages.missing },
  },
  {
    name: "broken-image",
    description: "Tests broken image URL handling",
    category: "image",
    severity: "high",
    data: { image: stressImages.broken },
  },
  {
    name: "extreme-aspect-ratios",
    description: "Tests panoramic and portrait images",
    category: "image",
    severity: "high",
    data: { image: stressImages.veryWide },
  },
  {
    name: "empty-array",
    description: "Tests empty array/list handling",
    category: "array",
    severity: "critical",
    data: { items: [], listings: [], features: [] },
  },
  {
    name: "single-item-array",
    description: "Tests single-item array rendering",
    category: "array",
    severity: "medium",
    data: { singleItemMode: true },
  },
  {
    name: "large-array",
    description: "Tests performance with many items",
    category: "array",
    severity: "medium",
    data: { largeArrayMode: true, count: 100 },
  },
  {
    name: "rtl-text",
    description: "Tests right-to-left text rendering",
    category: "text",
    severity: "low",
    data: { title: stressTexts.rtlText, description: stressTexts.mixedDirection },
  },
  {
    name: "newlines-tabs",
    description: "Tests whitespace character handling",
    category: "text",
    severity: "medium",
    data: { description: stressTexts.withNewlines },
  },
];

export type StressDataKey = keyof typeof stressTexts | keyof typeof stressNumbers | keyof typeof stressImages;
