// ═══════════════════════════════════════════════════════════════
// SHARED DATA - Centralized data for multi-page support
// ═══════════════════════════════════════════════════════════════

import { Home as HomeIcon, Hammer, Wrench, Paintbrush, Building2, AlertTriangle } from 'lucide-react'
import { ReactNode } from 'react'

// TypeScript interfaces
export interface Service {
  icon: string
  name: string
  slug: string
  shortDescription: string
  description: string
  features: string[]
  heroImage: string
  includedItems: Array<{ icon: string; title: string; description: string }>
  process: Array<{ step: number; title: string; duration: string; description: string }>
  priceRange: { low: number; high: number }
  faqs: Array<{ q: string; a: string }>
  gallery: string[]
  testimonial?: Testimonial
}

export interface Project {
  title: string
  slug: string
  category: string
  description: string
  image: string
  location: string
  completedDate: string
  duration: string
  scope: string[]
  beforeImage?: string
  afterImage?: string
  gallery?: string[]
  testimonial?: Testimonial
}

export interface Testimonial {
  quote: string
  author: string
  location: string
  rating: number
  project: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface TeamMember {
  name: string
  role: string
  experience: string
  photo: string
}

export const COMPANY = {
  name: "BuildRight Construction",
  tagline: "Quality Craftsmanship, Honest Service",
  phone: "(555) 987-6543",
  email: "info@buildright.com",
  address: {
    street: "123 Main Street",
    city: "Denver",
    state: "CO",
    zip: "80202"
  },
  license: "License #ABC123456",
  insurance: "Fully Insured & Bonded",
  yearsInBusiness: 15,
  projectsCompleted: 500,
  heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=90",
  hours: [
    { days: "Monday - Friday", hours: "7am - 6pm" },
    { days: "Saturday", hours: "8am - 4pm" },
    { days: "Sunday", hours: "Closed" },
  ],
  emergencyPhone: "(555) 987-6543",
}

export const SERVICE_CATEGORIES = [
  {
    name: "Home Remodeling",
    icon: "🏠",
    services: ["Kitchens", "Bathrooms", "Basements", "Additions"]
  },
  {
    name: "New Construction",
    icon: "🔨",
    services: ["Custom Homes", "Garages", "ADUs"]
  },
  {
    name: "Repairs & Maintenance",
    icon: "🔧",
    services: ["Drywall", "Decks", "Windows", "Handyman"]
  },
  {
    name: "Exterior Work",
    icon: "🎨",
    services: ["Siding", "Roofing", "Outdoor Living"]
  },
]

export const SERVICES: Service[] = [
  {
    icon: "🏠",
    name: 'Kitchen Remodeling',
    slug: 'kitchen-remodeling',
    shortDescription: 'Transform your kitchen into the heart of your home with custom designs.',
    description: 'Complete kitchen renovations from concept to completion. We transform your vision into reality with expert craftsmanship. Our team handles everything from initial design through final walkthrough, ensuring every detail meets your expectations.',
    features: ['Custom Cabinets', 'Countertop Installation', 'Appliance Upgrades', 'Lighting Design', 'Flooring', 'Backsplash'],
    heroImage: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1920&h=1080&fit=crop&q=90',
    includedItems: [
      { icon: '🎨', title: 'Custom Design', description: 'Work with our in-house designer to create your perfect kitchen layout' },
      { icon: '🔧', title: 'Cabinet Installation', description: 'Quality cabinets installed with precision and care' },
      { icon: '🔌', title: 'Electrical & Plumbing', description: 'Licensed subs handle all code-compliant work' },
      { icon: '🏗️', title: 'Countertops', description: 'Granite, quartz, marble - expertly measured and installed' },
      { icon: '🎯', title: 'Flooring', description: 'Tile, hardwood, or LVP to complete the look' },
      { icon: '🧹', title: 'Final Cleanup', description: 'We leave your home spotless' },
    ],
    process: [
      { step: 1, title: 'Free Consultation', duration: '1-2 days', description: 'We visit your home and discuss your vision' },
      { step: 2, title: 'Design Phase', duration: '1-2 weeks', description: 'Create 3D renders and finalize materials' },
      { step: 3, title: 'Build Phase', duration: '3-6 weeks', description: 'Demo, rough-in, install, and finish work' },
      { step: 4, title: 'Final Walkthrough', duration: '1 day', description: 'Ensure everything meets your expectations' },
      { step: 5, title: 'Move In!', duration: '', description: 'Enjoy your beautiful new kitchen' },
    ],
    priceRange: { low: 25000, high: 75000 },
    faqs: [
      { q: 'How long does a kitchen remodel take?', a: 'Most kitchen remodels take 4-8 weeks depending on scope. A simple refresh might be 2-3 weeks, while a full gut renovation could be 8-12 weeks.' },
      { q: 'Do I need to move out during construction?', a: 'Not usually! We set up dust barriers and maintain access to essential areas. Most clients stay in their homes throughout the project.' },
      { q: 'Do you provide design services?', a: 'Yes! We have an in-house designer who creates 3D renders so you can see your new kitchen before we start.' },
      { q: 'What\'s included in your warranty?', a: 'We offer a 2-year workmanship warranty on all labor. Materials carry their manufacturer warranties, often 10-25 years.' },
      { q: 'Can you work with my existing cabinets?', a: 'Absolutely. Cabinet refacing or painting can save 40-50% vs. new cabinets while giving you a fresh look.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=85',
    ],
    testimonial: {
      quote: "BuildRight completely transformed our kitchen. Professional from start to finish, and they finished ahead of schedule!",
      author: "Jennifer M.",
      location: "Denver, CO",
      rating: 5,
      project: "Kitchen Remodel"
    }
  },
  {
    icon: "🛁",
    name: 'Bathroom Remodeling',
    slug: 'bathroom-remodeling',
    shortDescription: 'Create your dream bathroom with expert renovation services.',
    description: 'From powder room updates to full master bath renovations, we create beautiful, functional bathrooms. Our team handles plumbing, tile, fixtures, and more with attention to every detail.',
    features: ['Tile Installation', 'Vanity & Fixtures', 'Walk-in Showers', 'Tub Replacement', 'Lighting', 'Ventilation'],
    heroImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1920&h=1080&fit=crop&q=90',
    includedItems: [
      { icon: '🎨', title: 'Design Consultation', description: 'Plan your perfect bathroom layout and finishes' },
      { icon: '🔧', title: 'Plumbing Work', description: 'All plumbing by licensed professionals' },
      { icon: '🏗️', title: 'Tile & Flooring', description: 'Expert tile installation for floors and walls' },
      { icon: '💡', title: 'Fixtures & Lighting', description: 'Quality fixtures that last' },
      { icon: '🚿', title: 'Shower/Tub Install', description: 'Custom showers and tub surrounds' },
      { icon: '🧹', title: 'Final Cleanup', description: 'Ready to use when we leave' },
    ],
    process: [
      { step: 1, title: 'Consultation', duration: '1 day', description: 'Discuss your vision and budget' },
      { step: 2, title: 'Design & Selection', duration: '1 week', description: 'Choose tiles, fixtures, and finishes' },
      { step: 3, title: 'Demolition', duration: '1-2 days', description: 'Careful removal of existing materials' },
      { step: 4, title: 'Construction', duration: '2-3 weeks', description: 'Plumbing, tile, fixtures, and finish work' },
      { step: 5, title: 'Final Details', duration: '1-2 days', description: 'Finishing touches and cleanup' },
    ],
    priceRange: { low: 15000, high: 50000 },
    faqs: [
      { q: 'How long does a bathroom remodel take?', a: 'A typical bathroom remodel takes 2-4 weeks. Half baths are quicker (1-2 weeks), while master baths may take 4-6 weeks.' },
      { q: 'Can I use my bathroom during renovation?', a: 'We recommend having access to another bathroom during the project. We work efficiently to minimize downtime.' },
      { q: 'Do you handle permits?', a: 'Yes, we pull all required permits and schedule inspections. This is included in our service.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&q=85',
    ],
    testimonial: {
      quote: "Our new master bath is like a spa. The attention to detail was incredible.",
      author: "Sarah K.",
      location: "Aurora, CO",
      rating: 5,
      project: "Master Bath Renovation"
    }
  },
  {
    icon: "🏠",
    name: 'Basement Finishing',
    slug: 'basement-finishing',
    shortDescription: 'Transform your basement into valuable living space.',
    description: 'Unlock the potential of your basement with a complete finishing project. We handle everything from framing to final finishes, creating bedrooms, home theaters, bars, or whatever you envision.',
    features: ['Framing & Drywall', 'Electrical & HVAC', 'Egress Windows', 'Flooring', 'Bathroom Additions', 'Home Theaters'],
    heroImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&q=90',
    includedItems: [
      { icon: '📐', title: 'Space Planning', description: 'Maximize your basement layout' },
      { icon: '🏗️', title: 'Framing', description: 'Professional framing for walls and ceilings' },
      { icon: '🔌', title: 'Electrical & HVAC', description: 'Full electrical and climate control' },
      { icon: '🚿', title: 'Bathroom Build-out', description: 'Add a full or half bath' },
      { icon: '🪟', title: 'Egress Windows', description: 'Code-compliant emergency egress' },
      { icon: '🎬', title: 'Custom Features', description: 'Bars, theaters, gyms, and more' },
    ],
    process: [
      { step: 1, title: 'Design Meeting', duration: '1 day', description: 'Plan your basement layout' },
      { step: 2, title: 'Permitting', duration: '1-2 weeks', description: 'We handle all permits' },
      { step: 3, title: 'Rough-In', duration: '2-3 weeks', description: 'Framing, electrical, plumbing' },
      { step: 4, title: 'Finish Work', duration: '3-4 weeks', description: 'Drywall, flooring, paint, trim' },
      { step: 5, title: 'Final Inspection', duration: '1 day', description: 'City inspection and walkthrough' },
    ],
    priceRange: { low: 30000, high: 100000 },
    faqs: [
      { q: 'Do I need egress windows?', a: 'If you\'re adding a bedroom, yes. Colorado code requires egress windows for sleeping areas. We install them as part of the project.' },
      { q: 'How do you handle moisture issues?', a: 'We assess moisture levels before starting and recommend waterproofing solutions if needed. Proper vapor barriers are always included.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=85',
    ],
  },
  {
    icon: "🔨",
    name: 'New Construction',
    slug: 'new-construction',
    shortDescription: 'Custom home building from the ground up.',
    description: 'Build your dream home with our experienced team. From custom homes to garages and ADUs, we manage every phase of construction with quality craftsmanship.',
    features: ['Custom Homes', 'Garages & Workshops', 'ADUs', 'Commercial Buildings'],
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=90',
    includedItems: [
      { icon: '📐', title: 'Design & Planning', description: 'Work with architects and designers' },
      { icon: '📋', title: 'Permitting', description: 'Handle all permits and approvals' },
      { icon: '🏗️', title: 'Full Construction', description: 'Foundation to finish' },
      { icon: '🔌', title: 'MEP Systems', description: 'Mechanical, electrical, plumbing' },
      { icon: '🎨', title: 'Interior Finishes', description: 'Your choice of finishes throughout' },
      { icon: '🏡', title: 'Final Details', description: 'Landscaping coordination, final touches' },
    ],
    process: [
      { step: 1, title: 'Consultation', duration: '1 week', description: 'Discuss vision, budget, timeline' },
      { step: 2, title: 'Design & Permits', duration: '2-4 months', description: 'Plans, engineering, permitting' },
      { step: 3, title: 'Foundation', duration: '2-4 weeks', description: 'Excavation and foundation work' },
      { step: 4, title: 'Framing & Rough-In', duration: '4-8 weeks', description: 'Structure and systems' },
      { step: 5, title: 'Finish & Close', duration: '6-10 weeks', description: 'Interior/exterior finish work' },
    ],
    priceRange: { low: 150000, high: 500000 },
    faqs: [
      { q: 'How long does it take to build a custom home?', a: 'A typical custom home takes 8-14 months from permit to completion, depending on size and complexity.' },
      { q: 'Do you work with architects?', a: 'Yes! We work with your architect or can recommend trusted partners. We also offer design-build services.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=85',
    ],
  },
  {
    icon: "🔧",
    name: 'Repairs & Maintenance',
    slug: 'repairs-maintenance',
    shortDescription: 'Fast, reliable fixes for any home repair need.',
    description: 'From small repairs to maintenance projects, we handle it all with fast response times. Our skilled team fixes issues right the first time.',
    features: ['Drywall Repair', 'Deck & Fence Repair', 'Door & Window Installation', 'General Handyman'],
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&q=90',
    includedItems: [
      { icon: '🔨', title: 'Drywall Repair', description: 'Patches, texturing, complete walls' },
      { icon: '🪵', title: 'Carpentry', description: 'Trim, doors, decks, fences' },
      { icon: '🪟', title: 'Windows & Doors', description: 'Repair or replacement' },
      { icon: '🔧', title: 'General Repairs', description: 'If it\'s broken, we fix it' },
      { icon: '🏠', title: 'Siding Repair', description: 'Patch or replace damaged siding' },
      { icon: '📋', title: 'Honey-Do Lists', description: 'Knock out your to-do list' },
    ],
    process: [
      { step: 1, title: 'Contact Us', duration: 'Same day', description: 'Call or submit online' },
      { step: 2, title: 'Assessment', duration: '1-2 days', description: 'We evaluate and quote' },
      { step: 3, title: 'Schedule', duration: 'Your choice', description: 'Pick a time that works' },
      { step: 4, title: 'Repair', duration: 'Varies', description: 'We complete the work' },
      { step: 5, title: 'Walkthrough', duration: 'Same day', description: 'Ensure satisfaction' },
    ],
    priceRange: { low: 200, high: 5000 },
    faqs: [
      { q: 'Do you have a minimum charge?', a: 'Yes, our minimum service call is $150. This covers the first hour of work plus travel.' },
      { q: 'How quickly can you respond?', a: 'For most repairs, we can schedule within 2-3 business days. Emergency repairs may be same-day.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=85',
    ],
  },
  {
    icon: "🎨",
    name: 'Exterior Work',
    slug: 'exterior-work',
    shortDescription: 'Boost curb appeal and protect your investment.',
    description: 'Protect and beautify your home\'s exterior with quality siding, roofing, decks, and outdoor living spaces. We use premium materials that last.',
    features: ['Siding Installation', 'Roofing', 'Deck Building', 'Outdoor Living Spaces'],
    heroImage: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1920&h=1080&fit=crop&q=90',
    includedItems: [
      { icon: '🏠', title: 'Siding', description: 'Vinyl, fiber cement, wood options' },
      { icon: '🏚️', title: 'Roofing', description: 'Shingles, metal, flat roofs' },
      { icon: '🪵', title: 'Decks & Patios', description: 'Wood, composite, concrete' },
      { icon: '🌳', title: 'Pergolas & Covers', description: 'Shade structures and gazebos' },
      { icon: '🚧', title: 'Fencing', description: 'Privacy, decorative, security' },
      { icon: '💧', title: 'Gutters', description: 'Seamless gutters and guards' },
    ],
    process: [
      { step: 1, title: 'Consultation', duration: '1 day', description: 'Assess exterior and discuss options' },
      { step: 2, title: 'Proposal', duration: '2-3 days', description: 'Detailed quote with materials' },
      { step: 3, title: 'Material Order', duration: '1-2 weeks', description: 'Order and delivery' },
      { step: 4, title: 'Installation', duration: '3-14 days', description: 'Professional installation' },
      { step: 5, title: 'Inspection', duration: '1 day', description: 'Quality check and cleanup' },
    ],
    priceRange: { low: 5000, high: 50000 },
    faqs: [
      { q: 'What deck material do you recommend?', a: 'For low maintenance, we recommend composite decking (Trex, TimberTech). For natural beauty, pressure-treated cedar or redwood are excellent choices.' },
      { q: 'How long does a new roof last?', a: 'Asphalt shingles typically last 20-30 years. Metal roofs can last 50+ years. We help you choose based on budget and goals.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&h=600&fit=crop&q=85',
    ],
  },
]

export const PROJECTS: Project[] = [
  { 
    title: 'Modern Kitchen Remodel', 
    slug: 'modern-kitchen-denver',
    category: 'Kitchen',
    description: 'Complete kitchen transformation with custom white shaker cabinets, quartz countertops, and stainless appliances.',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop&q=85',
    location: 'Denver, CO',
    completedDate: '2024',
    duration: '5 weeks',
    scope: ['Full demo', 'Custom cabinets', 'Quartz countertops', 'New appliances', 'LED lighting'],
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=85',
    afterImage: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=600&fit=crop&q=85',
    ],
    testimonial: {
      quote: "BuildRight completely transformed our kitchen. Professional from start to finish!",
      author: "Jennifer M.",
      location: "Denver, CO",
      rating: 5,
      project: "Kitchen Remodel"
    }
  },
  { 
    title: 'Master Bathroom Renovation', 
    slug: 'master-bath-aurora',
    category: 'Bathroom',
    description: 'Luxury spa-inspired master bathroom with walk-in shower, freestanding tub, and heated floors.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop&q=85',
    location: 'Aurora, CO',
    completedDate: '2024',
    duration: '3 weeks',
    scope: ['Walk-in shower', 'Freestanding tub', 'Heated floors', 'Double vanity', 'Custom tile work'],
  },
  { 
    title: 'Custom Backyard Deck', 
    slug: 'backyard-deck-lakewood',
    category: 'Outdoor',
    description: 'Multi-level composite deck with built-in seating, pergola, and outdoor kitchen prep area.',
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&h=600&fit=crop&q=85',
    location: 'Lakewood, CO',
    completedDate: '2024',
    duration: '2 weeks',
    scope: ['Composite decking', 'Built-in benches', 'Pergola', 'Outdoor kitchen', 'LED lighting'],
    testimonial: {
      quote: "Our deck is beautiful and built to last. Fair price, great communication, quality work.",
      author: "David & Lisa T.",
      location: "Lakewood, CO",
      rating: 5,
      project: "Deck Build"
    }
  },
  { 
    title: 'Basement Entertainment Suite', 
    slug: 'basement-entertainment-littleton',
    category: 'Basement',
    description: 'Full basement finish with home theater, wet bar, bedroom, and 3/4 bathroom.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=85',
    location: 'Littleton, CO',
    completedDate: '2024',
    duration: '8 weeks',
    scope: ['Home theater', 'Wet bar', 'Bedroom with egress', '3/4 bathroom', 'Soundproofing'],
  },
  { 
    title: 'Whole Home Renovation', 
    slug: 'whole-home-denver',
    category: 'Remodel',
    description: 'Complete renovation of 1960s ranch including kitchen, bathrooms, and open floor plan.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=85',
    location: 'Denver, CO',
    completedDate: '2023',
    duration: '12 weeks',
    scope: ['Kitchen remodel', 'Two bath renovations', 'Wall removal', 'New flooring', 'Fresh paint'],
  },
  { 
    title: 'ADU Construction', 
    slug: 'adu-construction-arvada',
    category: 'New Construction',
    description: 'Detached 600 sq ft accessory dwelling unit with full kitchen and bathroom.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop&q=85',
    location: 'Arvada, CO',
    completedDate: '2023',
    duration: '14 weeks',
    scope: ['Foundation', 'Full construction', 'Kitchen', 'Bathroom', 'HVAC', 'Utilities'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  { 
    quote: "BuildRight completely transformed our kitchen. Professional from start to finish, and they finished ahead of schedule!", 
    author: "Jennifer M.", 
    location: "Denver, CO", 
    rating: 5,
    project: "Kitchen Remodel"
  },
  { 
    quote: "Honest, reliable, and skilled. They fixed issues that other contractors missed. Highly recommend!", 
    author: "Michael S.", 
    location: "Aurora, CO", 
    rating: 5,
    project: "Home Repair"
  },
  { 
    quote: "Our deck is beautiful and built to last. Fair price, great communication, quality work.", 
    author: "David & Lisa T.", 
    location: "Lakewood, CO", 
    rating: 5,
    project: "Deck Build"
  },
  {
    quote: "They turned our unfinished basement into the best room in our house. Amazing work!",
    author: "The Martinez Family",
    location: "Littleton, CO",
    rating: 5,
    project: "Basement Finish"
  },
  {
    quote: "Professional, punctual, and perfectionists. Our bathroom remodel exceeded expectations.",
    author: "Sarah K.",
    location: "Aurora, CO",
    rating: 5,
    project: "Bathroom Remodel"
  },
]

export const SERVICE_AREAS = ["Denver", "Aurora", "Lakewood", "Littleton", "Centennial", "Englewood", "Golden", "Arvada", "Westminster", "Thornton"]

export const GENERAL_FAQ: FAQItem[] = [
  { 
    q: "Are you licensed and insured?", 
    a: "Yes! We are fully licensed (License #ABC123456) and carry comprehensive liability insurance and workers' compensation coverage. We're happy to provide documentation upon request." 
  },
  { 
    q: "Do you offer free estimates?", 
    a: "Absolutely. We provide free, no-obligation estimates for all projects. We'll visit your property, discuss your needs, and provide a detailed written quote within 48 hours." 
  },
  { 
    q: "What is your typical timeline?", 
    a: "Timelines vary by project scope. A bathroom remodel typically takes 2-3 weeks, while a kitchen remodel may take 4-6 weeks. We'll provide a detailed timeline in your estimate." 
  },
  { 
    q: "Do you pull permits?", 
    a: "Yes, we handle all necessary permits and inspections. This ensures your project meets local building codes and protects your investment." 
  },
  { 
    q: "What warranty do you offer?", 
    a: "We stand behind our work with a 2-year workmanship warranty. Many of the materials we use also come with manufacturer warranties extending up to 25 years." 
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mike Johnson",
    role: "Founder & Lead Contractor",
    experience: "20+ years in construction",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=85"
  },
  {
    name: "Sarah Chen",
    role: "Project Manager",
    experience: "10 years experience",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=85"
  },
  {
    name: "Tom Williams",
    role: "Lead Carpenter",
    experience: "15 years experience",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=85"
  },
]

export const CREDENTIALS = [
  "Licensed General Contractor - #ABC123456",
  "Fully Insured & Bonded",
  "BBB A+ Rating",
  "EPA Lead-Safe Certified",
  "Member - National Association of Home Builders",
  "Member - Denver Metro HBA",
]

export const VALUES = [
  {
    icon: "🎯",
    title: "Quality First",
    description: "We never cut corners. Every project gets our best work, using quality materials and proven techniques."
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "Honest pricing, clear communication, and doing what we say. Your trust means everything to us."
  },
  {
    icon: "⭐",
    title: "Customer Focus",
    description: "Your satisfaction is our success. We listen, adapt, and go the extra mile on every project."
  },
]

export const PROJECT_CATEGORIES = ["All", "Kitchen", "Bathroom", "Basement", "Outdoor", "Remodel", "New Construction"]
