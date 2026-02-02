import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://launchkit.dev'),
  title: 'LaunchKit — 13 Premium Next.js Templates | Ship Your Website This Weekend',
  description: '13 production-ready Next.js templates. Multi-page. Dark mode. Responsive. SaaS, Agency, Local Business, and Creative templates to launch your project fast.',
  keywords: [
    'Next.js templates',
    'React templates',
    'website templates',
    'SaaS template',
    'agency template',
    'restaurant template',
    'Tailwind CSS',
    'TypeScript',
    'Framer Motion',
  ],
  authors: [{ name: 'LaunchKit' }],
  openGraph: {
    title: 'LaunchKit — 13 Premium Next.js Templates',
    description: 'Ship your website this weekend with production-ready templates.',
    url: 'https://launchkit.dev',
    siteName: 'LaunchKit',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LaunchKit - Premium Next.js Templates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaunchKit — 13 Premium Next.js Templates',
    description: 'Ship your website this weekend with production-ready templates.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
