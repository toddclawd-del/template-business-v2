# Photographer Portfolio Template

A premium, visual-first portfolio template designed for photographers and creative professionals. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Visual-First Design** - Dark mode, minimal UI that lets photos shine
- ✨ **Smooth Animations** - Elegant transitions powered by Framer Motion
- 📱 **Fully Responsive** - Beautiful on all devices
- 🖼️ **Lightbox Gallery** - Full-screen image viewing with keyboard navigation
- 🔍 **Portfolio Filtering** - Filter projects by category
- 📝 **Contact Form** - Ready-to-use form component
- 🎯 **SEO Ready** - Proper meta tags and semantic HTML
- 🚀 **Production Ready** - Zero build errors, optimized bundle

## Pages

- **Home** (`/`) - Hero, featured work, about snippet, clients, CTA
- **Portfolio** (`/portfolio`) - Category filters, project grid
- **Project Detail** (`/portfolio/[slug]`) - Full gallery, project info, navigation
- **About** (`/about`) - Bio, awards, equipment, social links
- **Services** (`/services`) - Packages, pricing, process, FAQ
- **Contact** (`/contact`) - Contact form, info, availability

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) - Animations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Customization

### Mock Data

Edit `/src/data/mockData.ts` to customize:
- Photographer info (name, bio, social links)
- Projects (portfolio items with images)
- Services (packages and pricing)
- Clients (for commercial photographers)

### Fonts

The template uses:
- **Cormorant Garamond** - Elegant serif for headings
- **Inter** - Clean sans-serif for body text

Change fonts in `/src/app/layout.tsx`.

### Colors

The template uses a dark color scheme based on Tailwind's neutral palette:
- Background: `neutral-950` (#0a0a0a)
- Primary text: white
- Secondary text: `neutral-400`
- Borders: `neutral-800`

### Images

Replace Unsplash placeholder images with your own in the mock data file. The template supports:
- Remote images from configured domains
- Local images in `/public`

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio listing
│   │   └── [slug]/        # Project detail
│   └── services/          # Services page
├── components/
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── ImageGrid.tsx      # Masonry grid
│   ├── ProjectCard.tsx    # Portfolio card
│   ├── LightboxGallery.tsx # Full-screen gallery
│   ├── ServiceCard.tsx    # Pricing card
│   └── ContactForm.tsx    # Form component
├── data/
│   └── mockData.ts        # Sample content
└── types/
    └── index.ts           # TypeScript types
```

## License

MIT - Feel free to use this template for personal or commercial projects.
