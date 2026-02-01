// ═══════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════

export interface Product {
  name: string
  tagline: string
  description: string
}

export interface HeroContent {
  badge: string
  headline: string
  headlineHighlight: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Stat {
  number: string
  label: string
  suffix: string
}

export interface PricingPlan {
  name: string
  price: string
  priceAnnual?: string
  period: string
  description: string
  features: string[]
  cta: string
  popular: boolean
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
  company: string
}

export interface FAQItem {
  question: string
  answer: string
}

// ═══════════════════════════════════════════════════════════════
// MULTI-PAGE TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════

// NAVIGATION
export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: NavLink[]
}

// FEATURES PAGE
export interface FeatureDetail {
  icon: string
  title: string
  description: string
  bullets?: string[]
  image?: string
}

export interface ComparisonFeature {
  name: string
  us: boolean | string
  competitors: { name: string; value: boolean | string }[]
}

// ABOUT PAGE
export interface TeamMember {
  name: string
  role: string
  image: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface CompanyValue {
  icon: string
  title: string
  description: string
}

export interface CompanyStat {
  value: string
  label: string
}

export interface Investor {
  name: string
  logo: string
  url?: string
}

// BLOG
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  author: Author
  date: string
  readTime: string
  featured?: boolean
}

export interface Author {
  name: string
  role: string
  avatar: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
  }
}

export interface BlogCategory {
  slug: string
  name: string
  description?: string
}

// CONTACT PAGE
export interface ContactInfo {
  address?: string
  email: string
  phone?: string
  hours?: string
  social?: { platform: string; url: string; icon: string }[]
}

export interface ContactSubject {
  value: string
  label: string
  email?: string
}

export interface ContactOption {
  icon: string
  title: string
  description: string
  cta: { label: string; href: string }
}

// CHANGELOG
export interface ChangelogEntry {
  version: string
  date: string
  features?: ChangelogItem[]
  improvements?: ChangelogItem[]
  fixes?: ChangelogItem[]
  breaking?: ChangelogItem[]
}

export interface ChangelogItem {
  text: string
  link?: string
}

// PLAN COMPARISON
export interface PlanComparisonRow {
  feature: string
  tooltip?: string
  starter: string | boolean
  pro: string | boolean
  enterprise: string | boolean
}

// TRUST SIGNALS
export interface TrustSignal {
  icon: string
  text: string
}
