import type { 
  Product, HeroContent, Feature, Stat, PricingPlan, Testimonial, FAQItem,
  NavLink, TeamMember, CompanyValue, CompanyStat, BlogPost, Author, BlogCategory,
  ContactInfo, ContactOption, ChangelogEntry, ComparisonFeature, PlanComparisonRow,
  TrustSignal, FeatureDetail
} from './types'

// ═══════════════════════════════════════════════════════════════
// CORE DATA
// ═══════════════════════════════════════════════════════════════

export const PRODUCT: Product = {
  name: "LaunchKit",
  tagline: "Build Products Faster Than Ever Before",
  description: "The all-in-one platform that helps teams ship better products. From idea to launch in days, not months.",
}

export const HERO_CONTENT: HeroContent = {
  badge: 'Now in Public Beta',
  headline: 'Build Products Faster',
  headlineHighlight: 'Than Ever Before',
  subheadline: 'The all-in-one platform that helps teams ship better products. From idea to launch in days, not months.',
  primaryCta: 'Start Free Trial',
  secondaryCta: 'Watch Demo',
}

export const FEATURES: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built on modern infrastructure that scales automatically. Your users will never experience slow load times.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-level encryption and SOC 2 compliance. Your data is protected with industry-leading security.',
  },
  {
    icon: '🔄',
    title: 'Real-time Sync',
    description: 'Changes propagate instantly across all devices. True collaboration without conflicts or delays.',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Deep insights into user behavior and engagement. Make data-driven decisions with confidence.',
  },
  {
    icon: '🔌',
    title: 'API First',
    description: 'Integrate with any tool in your stack. RESTful API with comprehensive docs and SDKs.',
  },
  {
    icon: '🎨',
    title: 'Fully Customizable',
    description: 'Make it yours with themes, plugins, and custom workflows. No limits on what you can build.',
  },
]

export const STATS: Stat[] = [
  { number: '10000', label: 'Teams', suffix: '+' },
  { number: '99.9', label: 'Uptime', suffix: '%' },
  { number: '4.9', label: 'Rating', suffix: '/5' },
  { number: '150', label: 'Countries', suffix: '+' },
]

export const PRICING: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    priceAnnual: '$0',
    period: 'forever',
    description: 'Perfect for trying out the platform',
    features: ['Up to 3 projects', '1 team member', 'Basic analytics', 'Community support', '1GB storage'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    priceAnnual: '$24',
    period: '/month',
    description: 'For growing teams and businesses',
    features: ['Unlimited projects', 'Up to 10 team members', 'Advanced analytics', 'Priority support', 'Custom integrations', '50GB storage'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceAnnual: 'Custom',
    period: '',
    description: 'For large organizations',
    features: ['Everything in Pro', 'Unlimited team members', 'SSO & SAML', 'Dedicated support', 'Custom SLA', 'On-premise option'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "This product transformed how our team works. We shipped 3x more features in the same amount of time. It's become essential to our workflow.",
    author: 'Sarah Chen',
    role: 'CTO at TechCorp',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    company: 'TechCorp',
  },
  {
    quote: "The best tool we've ever used for product development. Simple, powerful, and actually enjoyable to use. Our whole team loves it.",
    author: 'Marcus Johnson',
    role: 'Product Lead at Startup',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    company: 'Startup',
  },
  {
    quote: "Finally, a platform that gets out of your way and lets you focus on building great products. Worth every penny.",
    author: 'Emily Rodriguez',
    role: 'Founder at DevShop',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    company: 'DevShop',
  },
]

export const FAQ: FAQItem[] = [
  {
    question: 'How does the free trial work?',
    answer: 'Start with our Pro plan free for 14 days. No credit card required. If you love it, choose a plan that fits your needs. If not, you can downgrade to our free Starter plan anytime.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. Upgrade or downgrade anytime with just a few clicks. Changes take effect immediately, and we prorate billing automatically.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use bank-level encryption (AES-256), are SOC 2 Type II compliant, and never sell your data. Your privacy and security are our top priorities.',
  },
  {
    question: 'Do you offer refunds?',
    answer: "Yes. If you're not satisfied within 30 days, we'll refund your payment in full. No questions asked, no hoops to jump through.",
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with 100+ tools including Slack, GitHub, Jira, Figma, Notion, and more. Our API also allows custom integrations with any tool in your stack.',
  },
]

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export const MOBILE_EXTRA_LINKS: NavLink[] = [
  { label: 'Contact', href: '/contact' },
  { label: 'Changelog', href: '/changelog' },
]

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: '#' },
    { label: 'Integrations', href: '#' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'API Reference', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}

// ═══════════════════════════════════════════════════════════════
// FEATURES PAGE DATA
// ═══════════════════════════════════════════════════════════════

export const HERO_FEATURE: FeatureDetail = {
  icon: '🚀',
  title: 'Ship Products 10x Faster',
  description: 'Our intelligent workflow engine automates repetitive tasks, generates boilerplate code, and keeps your entire team in sync. Spend less time on busywork and more time building what matters.',
  bullets: [
    'Automated task management and assignment',
    'Smart templates for common patterns',
    'Real-time collaboration without conflicts',
    'One-click deployments to any cloud',
  ],
  image: '/images/hero-feature.png',
}

export const DETAILED_FEATURES: FeatureDetail[] = [
  {
    icon: '🔄',
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team, no matter where they are. See changes as they happen, leave comments, and never worry about merge conflicts.',
    bullets: [
      'Live cursors and presence indicators',
      'Instant sync across all devices',
      'Built-in commenting and feedback',
      'Version history with one-click restore',
    ],
  },
  {
    icon: '📊',
    title: 'Powerful Analytics',
    description: 'Understand how users interact with your product. Get actionable insights that help you make better decisions and build features that matter.',
    bullets: [
      'User behavior tracking',
      'Funnel analysis and retention metrics',
      'Custom dashboards and reports',
      'Export data to your favorite tools',
    ],
  },
]

export const COMPARISON_DATA: ComparisonFeature[] = [
  { name: 'Real-time collaboration', us: true, competitors: [{ name: 'Competitor A', value: true }, { name: 'Competitor B', value: false }] },
  { name: 'Unlimited projects', us: true, competitors: [{ name: 'Competitor A', value: 'Limited' }, { name: 'Competitor B', value: true }] },
  { name: 'API access', us: true, competitors: [{ name: 'Competitor A', value: false }, { name: 'Competitor B', value: true }] },
  { name: 'SSO / SAML', us: true, competitors: [{ name: 'Competitor A', value: 'Enterprise only' }, { name: 'Competitor B', value: false }] },
  { name: 'Custom integrations', us: true, competitors: [{ name: 'Competitor A', value: true }, { name: 'Competitor B', value: false }] },
  { name: '24/7 support', us: true, competitors: [{ name: 'Competitor A', value: false }, { name: 'Competitor B', value: false }] },
  { name: 'On-premise option', us: true, competitors: [{ name: 'Competitor A', value: false }, { name: 'Competitor B', value: false }] },
]

// ═══════════════════════════════════════════════════════════════
// PRICING PAGE DATA
// ═══════════════════════════════════════════════════════════════

export const TRUST_SIGNALS: TrustSignal[] = [
  { icon: '🔒', text: 'Bank-level security' },
  { icon: '💳', text: 'No credit card required' },
  { icon: '↩️', text: '30-day money-back guarantee' },
  { icon: '⭐', text: '4.9/5 average rating' },
]

export const PLAN_COMPARISON: PlanComparisonRow[] = [
  { feature: 'Projects', starter: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Team members', starter: '1', pro: '10', enterprise: 'Unlimited' },
  { feature: 'Storage', starter: '1GB', pro: '50GB', enterprise: 'Custom' },
  { feature: 'API access', starter: false, pro: true, enterprise: true },
  { feature: 'Advanced analytics', starter: false, pro: true, enterprise: true },
  { feature: 'Priority support', starter: false, pro: true, enterprise: true },
  { feature: 'Custom integrations', starter: false, pro: true, enterprise: true },
  { feature: 'SSO / SAML', starter: false, pro: false, enterprise: true },
  { feature: 'Dedicated support', starter: false, pro: false, enterprise: true },
  { feature: 'Custom SLA', starter: false, pro: false, enterprise: true },
  { feature: 'On-premise option', starter: false, pro: false, enterprise: true },
]

export const PRICING_FAQ: FAQItem[] = [
  {
    question: 'How does the free trial work?',
    answer: 'Start with our Pro plan free for 14 days. No credit card required. If you love it, choose a plan that fits your needs. If not, you can downgrade to our free Starter plan anytime.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. Upgrade or downgrade anytime with just a few clicks. Changes take effect immediately, and we prorate billing automatically.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.',
  },
  {
    question: 'Do you offer refunds?',
    answer: "Yes. If you're not satisfied within 30 days, we'll refund your payment in full. No questions asked, no hoops to jump through.",
  },
  {
    question: 'Is there a discount for nonprofits or education?',
    answer: 'Yes! We offer 50% off for verified nonprofits and educational institutions. Contact our sales team to learn more.',
  },
]

// ═══════════════════════════════════════════════════════════════
// ABOUT PAGE DATA
// ═══════════════════════════════════════════════════════════════

export const COMPANY_STORY = {
  intro: "It started with a simple question: why is building software still so hard?",
  paragraphs: [
    "In 2019, our founders were working at a fast-growing startup. They saw firsthand how teams struggled with fragmented tools, endless meetings, and slow deployment cycles. There had to be a better way.",
    "So they set out to build it. LaunchKit was born from the belief that great teams deserve great tools — tools that get out of the way and let you focus on what matters: building products that users love.",
    "Today, we're proud to serve over 10,000 teams across 150+ countries. But we're just getting started. Our mission remains the same: to make product development faster, simpler, and more enjoyable for everyone.",
  ],
}

export const COMPANY_STATS: CompanyStat[] = [
  { value: '2019', label: 'Founded' },
  { value: '10K+', label: 'Teams' },
  { value: '50+', label: 'Team Members' },
  { value: '$12M', label: 'Raised' },
]

export const COMPANY_VALUES: CompanyValue[] = [
  { icon: '🎯', title: 'Customer First', description: 'Every decision starts with the customer. We obsess over solving real problems and delivering real value.' },
  { icon: '🚀', title: 'Ship Fast', description: 'Speed matters. We move quickly, iterate often, and learn from everything we build.' },
  { icon: '🤝', title: 'Earn Trust', description: 'Trust is earned through transparency, reliability, and doing what we say we\'ll do.' },
  { icon: '💡', title: 'Stay Curious', description: 'The best ideas come from asking questions. We encourage experimentation and continuous learning.' },
  { icon: '🌍', title: 'Think Global', description: 'We build for a global audience. Our team spans continents, and so do our customers.' },
  { icon: '❤️', title: 'Love the Craft', description: 'We take pride in our work. Every detail matters, from code quality to customer experience.' },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Alex Chen', role: 'CEO & Co-founder', image: 'https://randomuser.me/api/portraits/men/32.jpg', bio: 'Former engineering lead at Stripe. Stanford CS.', social: { twitter: '#', linkedin: '#' } },
  { name: 'Sarah Kim', role: 'CTO & Co-founder', image: 'https://randomuser.me/api/portraits/women/44.jpg', bio: 'Ex-Google, built ML systems at scale.', social: { twitter: '#', linkedin: '#', github: '#' } },
  { name: 'Marcus Johnson', role: 'Head of Product', image: 'https://randomuser.me/api/portraits/men/22.jpg', bio: 'Previously PM at Notion and Figma.', social: { twitter: '#', linkedin: '#' } },
  { name: 'Emily Rodriguez', role: 'Head of Design', image: 'https://randomuser.me/api/portraits/women/68.jpg', bio: 'Design leader from Airbnb and Pinterest.', social: { twitter: '#', linkedin: '#' } },
  { name: 'David Park', role: 'Head of Engineering', image: 'https://randomuser.me/api/portraits/men/75.jpg', bio: 'Built infra at Netflix and Uber.', social: { linkedin: '#', github: '#' } },
  { name: 'Lisa Wang', role: 'Head of Growth', image: 'https://randomuser.me/api/portraits/women/90.jpg', bio: 'Scaled growth at Dropbox and Slack.', social: { twitter: '#', linkedin: '#' } },
  { name: 'James Wilson', role: 'Head of Sales', image: 'https://randomuser.me/api/portraits/men/86.jpg', bio: 'Enterprise sales leader from Salesforce.', social: { linkedin: '#' } },
  { name: 'Maria Garcia', role: 'Head of Customer Success', image: 'https://randomuser.me/api/portraits/women/28.jpg', bio: 'Customer-obsessed leader from Zendesk.', social: { twitter: '#', linkedin: '#' } },
]

export const INVESTORS = [
  { name: 'Sequoia', logo: '/images/investors/sequoia.svg' },
  { name: 'Andreessen Horowitz', logo: '/images/investors/a16z.svg' },
  { name: 'Accel', logo: '/images/investors/accel.svg' },
  { name: 'Y Combinator', logo: '/images/investors/yc.svg' },
]

// ═══════════════════════════════════════════════════════════════
// BLOG DATA
// ═══════════════════════════════════════════════════════════════

export const AUTHORS: Author[] = [
  { name: 'Alex Chen', role: 'CEO', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', bio: 'CEO & Co-founder of LaunchKit. Passionate about building tools that help teams ship faster.', social: { twitter: '#', linkedin: '#' } },
  { name: 'Sarah Kim', role: 'CTO', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', bio: 'CTO & Co-founder. Writing about engineering, architecture, and the future of development.', social: { twitter: '#', linkedin: '#' } },
  { name: 'Marcus Johnson', role: 'Head of Product', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', bio: 'Head of Product at LaunchKit. Sharing insights on product strategy and user research.', social: { twitter: '#', linkedin: '#' } },
]

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: 'all', name: 'All' },
  { slug: 'product', name: 'Product' },
  { slug: 'engineering', name: 'Engineering' },
  { slug: 'design', name: 'Design' },
  { slug: 'company', name: 'Company' },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'introducing-launchkit-2',
    title: 'Introducing LaunchKit 2.0: Faster, Smarter, Better',
    excerpt: 'After months of work, we\'re thrilled to announce LaunchKit 2.0 — a complete reimagining of how teams build products together.',
    content: `# Introducing LaunchKit 2.0

After months of work, we're thrilled to announce LaunchKit 2.0 — a complete reimagining of how teams build products together.

## What's New

### Lightning-Fast Performance
We've rebuilt our core from the ground up using the latest technologies. The result? Everything feels instant. Page loads, syncs, searches — all of it.

### Smart Automation
Our new AI-powered workflow engine learns from your team's patterns and suggests automations that save hours every week.

### Beautiful New Design
A fresh, modern interface that's both more powerful and easier to use. Dark mode included.

## Getting Started

All existing customers are automatically upgraded. Just log in and enjoy the new experience.

New to LaunchKit? Start your free trial today and see why 10,000+ teams trust us to ship faster.`,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    category: 'product',
    tags: ['release', 'product', 'announcement'],
    author: AUTHORS[0],
    date: '2025-01-20',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'scaling-to-million-users',
    title: 'How We Scaled to 1 Million Users',
    excerpt: 'A deep dive into the technical challenges and solutions behind our recent milestone.',
    content: `# How We Scaled to 1 Million Users

Last month, we hit a major milestone: 1 million active users. Here's how we got there.

## The Challenge

When we started, our simple setup worked fine for a few thousand users. But as we grew, cracks started to show...`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    category: 'engineering',
    tags: ['engineering', 'scale', 'infrastructure'],
    author: AUTHORS[1],
    date: '2025-01-15',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'designing-for-speed',
    title: 'Designing for Speed: Our UI Philosophy',
    excerpt: 'How we approach design to make every interaction feel instant and delightful.',
    content: `# Designing for Speed

Speed isn't just about performance — it's about perception. Here's how we design for speed...`,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    category: 'design',
    tags: ['design', 'ux', 'performance'],
    author: AUTHORS[2],
    date: '2025-01-10',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'remote-first-culture',
    title: 'Building a Remote-First Culture',
    excerpt: 'Lessons learned from building a distributed team across 12 time zones.',
    content: `# Building a Remote-First Culture

From day one, we've been remote-first. Here's what we've learned...`,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    category: 'company',
    tags: ['culture', 'remote', 'team'],
    author: AUTHORS[0],
    date: '2025-01-05',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'api-design-principles',
    title: 'API Design Principles We Live By',
    excerpt: 'The principles that guide our API design and make it a joy for developers.',
    content: `# API Design Principles We Live By

A great API is invisible. Here are the principles we follow...`,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    category: 'engineering',
    tags: ['api', 'engineering', 'developers'],
    author: AUTHORS[1],
    date: '2024-12-28',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'user-research-process',
    title: 'Our User Research Process',
    excerpt: 'How we stay close to customers and build features that actually matter.',
    content: `# Our User Research Process

Great products come from understanding users deeply. Here's our process...`,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    category: 'product',
    tags: ['product', 'research', 'users'],
    author: AUTHORS[2],
    date: '2024-12-20',
    readTime: '6 min read',
    featured: false,
  },
]

// ═══════════════════════════════════════════════════════════════
// CONTACT PAGE DATA
// ═══════════════════════════════════════════════════════════════

export const CONTACT_OPTIONS: ContactOption[] = [
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Start a conversation with our support team. We typically respond in under 5 minutes.',
    cta: { label: 'Open Chat', href: '#' },
  },
  {
    icon: '📧',
    title: 'Email Us',
    description: 'Send us an email and we\'ll get back to you within 24 hours.',
    cta: { label: 'Send Email', href: 'mailto:hello@launchkit.com' },
  },
  {
    icon: '📖',
    title: 'Documentation',
    description: 'Browse our comprehensive docs and find answers to common questions.',
    cta: { label: 'View Docs', href: '#' },
  },
]

export const CONTACT_INFO: ContactInfo = {
  address: '123 Market Street, Suite 400\nSan Francisco, CA 94105',
  email: 'hello@launchkit.com',
  phone: '+1 (555) 123-4567',
  hours: 'Monday - Friday, 9am - 6pm PST',
  social: [
    { platform: 'Twitter', url: '#', icon: 'twitter' },
    { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
    { platform: 'GitHub', url: '#', icon: 'github' },
  ],
}

export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' },
]

// ═══════════════════════════════════════════════════════════════
// CHANGELOG DATA
// ═══════════════════════════════════════════════════════════════

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: 'v2.4.0',
    date: '2025-01-20',
    features: [
      { text: 'Dark mode support across all pages' },
      { text: 'Keyboard shortcuts for power users' },
      { text: 'New dashboard widgets for analytics' },
    ],
    improvements: [
      { text: '50% faster page loads' },
      { text: 'Improved mobile responsiveness' },
      { text: 'Better error messages' },
    ],
    fixes: [
      { text: 'Fixed login issues with SSO' },
      { text: 'Resolved sync conflicts in real-time mode' },
    ],
  },
  {
    version: 'v2.3.2',
    date: '2025-01-10',
    improvements: [
      { text: 'Performance optimizations for large teams' },
      { text: 'Updated onboarding flow' },
    ],
    fixes: [
      { text: 'Fixed notification delivery delays' },
      { text: 'Resolved edge case in billing calculations' },
      { text: 'Fixed avatar upload on mobile' },
    ],
  },
  {
    version: 'v2.3.0',
    date: '2024-12-15',
    features: [
      { text: 'AI-powered workflow suggestions' },
      { text: 'New integrations: Linear, Height, and more' },
      { text: 'Custom fields for projects' },
    ],
    improvements: [
      { text: 'Redesigned settings page' },
      { text: 'Improved search accuracy' },
    ],
  },
  {
    version: 'v2.2.0',
    date: '2024-11-20',
    features: [
      { text: 'Team permissions and roles' },
      { text: 'Audit log for Enterprise' },
      { text: 'Webhook support' },
    ],
    improvements: [
      { text: 'Better handling of large file uploads' },
    ],
    fixes: [
      { text: 'Fixed timezone issues in scheduling' },
    ],
    breaking: [
      { text: 'API v1 deprecated (use v2)' },
    ],
  },
  {
    version: 'v2.1.0',
    date: '2024-10-15',
    features: [
      { text: 'Guest access for external collaborators' },
      { text: 'Export to PDF and CSV' },
    ],
    improvements: [
      { text: 'Improved accessibility (WCAG 2.1 AA)' },
      { text: 'New email notification preferences' },
    ],
  },
]
