export interface Property {
  id: string;
  slug: string;
  title: string;
  address: string;
  neighborhood: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  features: string[];
  images: string[];
  type: 'sale' | 'rent';
  propertyType: 'house' | 'condo' | 'penthouse' | 'villa';
  yearBuilt: number;
  agentId: string;
  featured: boolean;
  status: 'available' | 'pending' | 'sold';
}

export interface Agent {
  id: string;
  slug: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  specializations: string[];
  languages: string[];
  yearsExperience: number;
  propertiesSold: number;
  salesVolume: string;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  propertyType: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  propertyCount: number;
  averagePrice: string;
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'oceanview-penthouse-malibu',
    title: 'Oceanview Penthouse',
    address: '1200 Pacific Coast Highway, Malibu',
    neighborhood: 'Malibu',
    price: 2850000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 8500,
    description: 'Experience unparalleled luxury in this stunning oceanfront penthouse. Floor-to-ceiling windows offer breathtaking panoramic views of the Pacific Ocean. This architectural masterpiece features custom Italian finishes, a private rooftop terrace with infinity pool, and direct beach access. Smart home technology throughout, including automated blinds, climate control, and security systems.',
    features: ['Ocean Views', 'Private Pool', 'Smart Home', 'Wine Cellar', 'Home Theater', 'Private Elevator', 'Beach Access', 'Chef\'s Kitchen'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
    ],
    type: 'sale',
    propertyType: 'penthouse',
    yearBuilt: 2022,
    agentId: '1',
    featured: true,
    status: 'available',
  },
  {
    id: '2',
    slug: 'modern-villa-beverly-hills',
    title: 'Modern Villa Estate',
    address: '456 Sunset Boulevard, Beverly Hills',
    neighborhood: 'Beverly Hills',
    price: 4975000,
    bedrooms: 7,
    bathrooms: 9,
    sqft: 15000,
    description: 'A stunning contemporary masterpiece in the heart of Beverly Hills. This gated estate offers the ultimate in privacy and luxury living. Features include a resort-style pool and spa, professional tennis court, guest house, and meticulously landscaped grounds spanning over 2 acres.',
    features: ['Gated Estate', 'Tennis Court', 'Guest House', 'Pool & Spa', 'Home Gym', 'Library', '6-Car Garage', 'Staff Quarters'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
    ],
    type: 'sale',
    propertyType: 'villa',
    yearBuilt: 2021,
    agentId: '2',
    featured: true,
    status: 'available',
  },
  {
    id: '3',
    slug: 'downtown-luxury-condo',
    title: 'Downtown Luxury Residence',
    address: '888 Grand Avenue, Downtown LA',
    neighborhood: 'Downtown LA',
    price: 1250000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3200,
    description: 'Sophisticated urban living at its finest. This corner unit offers sweeping city views from every room. Premium amenities include 24-hour concierge, rooftop lounge, fitness center, and private wine storage. Walking distance to the finest dining and entertainment.',
    features: ['City Views', 'Concierge', 'Rooftop Access', 'Fitness Center', 'Wine Storage', 'Valet Parking', 'Pet Friendly', 'Terrace'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
    ],
    type: 'sale',
    propertyType: 'condo',
    yearBuilt: 2020,
    agentId: '3',
    featured: true,
    status: 'available',
  },
  {
    id: '4',
    slug: 'mediterranean-estate-bel-air',
    title: 'Mediterranean Estate',
    address: '789 Stone Canyon Road, Bel Air',
    neighborhood: 'Bel Air',
    price: 4500000,
    bedrooms: 8,
    bathrooms: 12,
    sqft: 22000,
    description: 'An extraordinary Mediterranean masterpiece set on 3 private acres with unobstructed canyon and city views. This legacy estate features imported Italian marble, hand-painted murals, and museum-quality finishes throughout. The grounds include formal gardens, koi pond, and championship putting green.',
    features: ['Canyon Views', 'Wine Cellar', 'Formal Gardens', 'Koi Pond', 'Putting Green', 'Movie Theater', 'Elevator', 'Safe Room'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
    ],
    type: 'sale',
    propertyType: 'villa',
    yearBuilt: 2019,
    agentId: '1',
    featured: true,
    status: 'available',
  },
  {
    id: '5',
    slug: 'beachfront-retreat-santa-monica',
    title: 'Beachfront Retreat',
    address: '300 Ocean Avenue, Santa Monica',
    neighborhood: 'Santa Monica',
    price: 3200000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4800,
    description: 'Wake up to the sound of waves in this stunning beachfront home. Open floor plan with walls of glass blur the line between indoor and outdoor living. Features include a gourmet kitchen, spa-like master suite, and private courtyard with fire pit.',
    features: ['Beachfront', 'Glass Walls', 'Courtyard', 'Fire Pit', 'Gourmet Kitchen', 'Spa Bath', 'Deck', 'Outdoor Shower'],
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
    ],
    type: 'sale',
    propertyType: 'house',
    yearBuilt: 2021,
    agentId: '2',
    featured: false,
    status: 'available',
  },
  {
    id: '6',
    slug: 'hillside-modern-hollywood',
    title: 'Hillside Modern',
    address: '1500 Blue Jay Way, Hollywood Hills',
    neighborhood: 'Hollywood Hills',
    price: 2750000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 9200,
    description: 'Architectural statement home perched above the city with commanding views from downtown to the ocean. Dramatic cantilevered design with floor-to-ceiling glass, infinity pool that seems to float over the city, and a jaw-dropping great room with 30-foot ceilings.',
    features: ['City Views', 'Infinity Pool', 'High Ceilings', 'Cantilevered Design', 'Home Office', 'Gym', 'Sauna', 'Motor Court'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
    ],
    type: 'sale',
    propertyType: 'house',
    yearBuilt: 2023,
    agentId: '3',
    featured: false,
    status: 'pending',
  },
];

export const agents: Agent[] = [
  {
    id: '1',
    slug: 'victoria-sterling',
    name: 'Victoria Sterling',
    title: 'Founding Partner & Luxury Specialist',
    email: 'victoria@prestigerealty.com',
    phone: '+1 (310) 555-0101',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: 'With over 18 years of experience in luxury real estate, Victoria has established herself as the go-to agent for discerning clients seeking exceptional properties. Her extensive network and deep market knowledge have resulted in over $500 million in career sales. Victoria is known for her discretion, attention to detail, and ability to match clients with their dream homes.',
    specializations: ['Luxury Estates', 'Celebrity Homes', 'Investment Properties'],
    languages: ['English', 'French', 'Spanish'],
    yearsExperience: 18,
    propertiesSold: 285,
    salesVolume: '$520M+',
    socialMedia: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: '2',
    slug: 'james-chen',
    name: 'James Chen',
    title: 'Senior Vice President',
    email: 'james@prestigerealty.com',
    phone: '+1 (310) 555-0102',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'James brings a unique perspective to luxury real estate with his background in architecture and urban development. His analytical approach and negotiation skills have earned him a reputation as one of the most effective agents in the market. James specializes in modern architectural homes and high-rise developments.',
    specializations: ['Modern Architecture', 'New Developments', 'International Clients'],
    languages: ['English', 'Mandarin', 'Cantonese'],
    yearsExperience: 14,
    propertiesSold: 210,
    salesVolume: '$380M+',
    socialMedia: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '3',
    slug: 'sophia-rodriguez',
    name: 'Sophia Rodriguez',
    title: 'Director of Sales',
    email: 'sophia@prestigerealty.com',
    phone: '+1 (310) 555-0103',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: 'Sophia combines her passion for design with her expertise in real estate to help clients visualize the full potential of every property. Her background in interior design allows her to provide unique insights into home staging and renovation opportunities. She has been recognized as a top producer for five consecutive years.',
    specializations: ['Design-Forward Homes', 'Beachfront Properties', 'First-Time Luxury Buyers'],
    languages: ['English', 'Spanish', 'Portuguese'],
    yearsExperience: 11,
    propertiesSold: 175,
    salesVolume: '$290M+',
    socialMedia: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: '4',
    slug: 'michael-blackwood',
    name: 'Michael Blackwood',
    title: 'Luxury Property Specialist',
    email: 'michael@prestigerealty.com',
    phone: '+1 (310) 555-0104',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Michael is known for his personalized approach and unwavering commitment to client satisfaction. With a background in finance, he provides valuable insights into market trends and investment potential. His attention to detail and responsiveness have earned him a loyal client base and consistent referrals.',
    specializations: ['Investment Properties', 'Relocation Services', 'Estate Sales'],
    languages: ['English', 'German'],
    yearsExperience: 8,
    propertiesSold: 140,
    salesVolume: '$215M+',
    socialMedia: {
      linkedin: 'https://linkedin.com',
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Thompson',
    role: 'CEO, Tech Innovations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    content: 'Working with Prestige Realty was an absolute pleasure. Victoria understood exactly what we were looking for and found us our dream home in Bel Air within weeks. Her market knowledge and negotiation skills saved us millions.',
    rating: 5,
    propertyType: 'Luxury Estate',
  },
  {
    id: '2',
    name: 'Robert & Michelle Davis',
    role: 'Private Investors',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    content: 'James made our international relocation seamless. His attention to detail and understanding of our needs resulted in finding the perfect modern home in the Hills. We could not have asked for a better experience.',
    rating: 5,
    propertyType: 'Modern Villa',
  },
  {
    id: '3',
    name: 'Sarah Mitchell',
    role: 'Entertainment Executive',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    content: 'The team at Prestige Realty provides a level of service that is unmatched. Their discretion and professionalism made selling my Malibu property a stress-free experience. I have recommended them to all my colleagues.',
    rating: 5,
    propertyType: 'Beachfront Home',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Venture Capitalist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    content: 'Exceptional service from start to finish. Sophia helped me find the perfect downtown penthouse with incredible city views. Her design background was invaluable in helping me see the potential of the space.',
    rating: 5,
    propertyType: 'Penthouse',
  },
];

export const neighborhoods: Neighborhood[] = [
  {
    id: '1',
    name: 'Beverly Hills',
    slug: 'beverly-hills',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    description: 'Iconic luxury living with world-renowned shopping, dining, and celebrity estates.',
    propertyCount: 45,
    averagePrice: '$3.2M',
  },
  {
    id: '2',
    name: 'Malibu',
    slug: 'malibu',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
    description: 'Stunning beachfront properties with unparalleled ocean views and coastal lifestyle.',
    propertyCount: 38,
    averagePrice: '$2.8M',
  },
  {
    id: '3',
    name: 'Bel Air',
    slug: 'bel-air',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    description: 'Exclusive gated estates offering privacy and prestige in a serene setting.',
    propertyCount: 32,
    averagePrice: '$4.5M',
  },
  {
    id: '4',
    name: 'Hollywood Hills',
    slug: 'hollywood-hills',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    description: 'Architectural masterpieces with panoramic city views and entertainment legacy.',
    propertyCount: 56,
    averagePrice: '$2.1M',
  },
  {
    id: '5',
    name: 'Santa Monica',
    slug: 'santa-monica',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
    description: 'Coastal charm meets urban sophistication with beach access and vibrant culture.',
    propertyCount: 41,
    averagePrice: '$1.8M',
  },
  {
    id: '6',
    name: 'Downtown LA',
    slug: 'downtown-la',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    description: 'Modern high-rise living in the heart of the city with world-class amenities.',
    propertyCount: 68,
    averagePrice: '$950K',
  },
];

export const stats = [
  { label: 'Properties Sold', value: '850+' },
  { label: 'Total Sales Volume', value: '$1.2B+' },
  { label: 'Years of Excellence', value: '18' },
  { label: 'Happy Clients', value: '720+' },
];

export const companyInfo = {
  name: 'Prestige Realty',
  tagline: 'Exceptional Properties for Exceptional Lives',
  description: 'Los Angeles premiere luxury real estate agency, specializing in extraordinary properties for discerning clients since 2006.',
  address: '9876 Wilshire Boulevard, Suite 500',
  city: 'Beverly Hills',
  state: 'CA',
  zip: '90210',
  phone: '+1 (310) 555-0100',
  email: 'info@prestigerealty.com',
  hours: 'Monday - Saturday: 9:00 AM - 7:00 PM',
  socialMedia: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
};

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug);
}

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find(a => a.slug === slug);
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find(a => a.id === id);
}

export function getPropertiesByAgent(agentId: string): Property[] {
  return properties.filter(p => p.agentId === agentId);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
