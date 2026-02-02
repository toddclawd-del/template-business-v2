export interface Template {
  id: string;
  name: string;
  category: 'SaaS' | 'Agency' | 'Local' | 'Creative' | 'Coach';
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export const templates: Template[] = [
  {
    id: 'minimal-starter',
    name: 'Minimal Starter',
    category: 'SaaS',
    price: 59,
    description: 'Clean, modern SaaS landing with GSAP animations',
    image: '/templates/minimal-starter.png',
    featured: true,
  },
  {
    id: 'aurora-starter',
    name: 'Aurora Starter',
    category: 'SaaS',
    price: 69,
    description: 'Glassmorphism SaaS with smooth transitions',
    image: '/templates/aurora-starter.png',
    featured: true,
  },
  {
    id: 'saas-starter',
    name: 'SaaS Starter',
    category: 'SaaS',
    price: 79,
    description: 'Full SaaS marketing site with pricing & blog',
    image: '/templates/saas-starter.png',
    featured: true,
  },
  {
    id: 'agency-starter',
    name: 'Agency Starter',
    category: 'Agency',
    price: 69,
    description: 'Bold agency portfolio with case studies',
    image: '/templates/agency-starter.png',
    featured: true,
  },
  {
    id: 'studio-starter',
    name: 'Studio Starter',
    category: 'Agency',
    price: 69,
    description: 'Refined design studio with project showcase',
    image: '/templates/studio-starter.png',
  },
  {
    id: 'typography-starter',
    name: 'Typography Starter',
    category: 'Creative',
    price: 59,
    description: 'Typography-focused creative portfolio',
    image: '/templates/typography-starter.png',
  },
  {
    id: 'brutalist-starter',
    name: 'Brutalist Starter',
    category: 'Creative',
    price: 59,
    description: 'Edgy brutalist design with raw aesthetics',
    image: '/templates/brutalist-starter.png',
  },
  {
    id: 'restaurant-starter',
    name: 'Restaurant Starter',
    category: 'Local',
    price: 59,
    description: 'Elegant restaurant with menu & reservations',
    image: '/templates/restaurant-starter.png',
  },
  {
    id: 'brunch-starter',
    name: 'Brunch Starter',
    category: 'Local',
    price: 49,
    description: 'Warm cafe/brunch spot template',
    image: '/templates/brunch-starter.png',
  },
  {
    id: 'salon-starter',
    name: 'Salon Starter',
    category: 'Local',
    price: 59,
    description: 'Luxurious salon/spa with booking',
    image: '/templates/salon-starter.png',
  },
  {
    id: 'gym-starter',
    name: 'Gym Starter',
    category: 'Local',
    price: 59,
    description: 'Energetic fitness center template',
    image: '/templates/gym-starter.png',
  },
  {
    id: 'contractor-starter',
    name: 'Contractor Starter',
    category: 'Local',
    price: 59,
    description: 'Trustworthy home services contractor',
    image: '/templates/contractor-starter.png',
  },
  {
    id: 'coach-starter',
    name: 'Coach Starter',
    category: 'Coach',
    price: 69,
    description: 'Personal coach/consultant with booking',
    image: '/templates/coach-starter.png',
  },
];

export const categories = ['All', 'SaaS', 'Agency', 'Local', 'Creative', 'Coach'] as const;
export type Category = typeof categories[number];
