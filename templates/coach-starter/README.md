# Coach & Consultant Template

A premium landing page template for coaches, consultants, and course creators. Warm, personal design that builds trust and converts visitors into clients.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2Fcoach-template&env=NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET)

---

## ✨ Features

- **Personal Branding Focus** — Hero section designed around your photo and story
- **Trust Building** — Testimonials, credentials, and results sections
- **Lead Capture** — Email signup and lead magnet sections
- **Booking Integration** — Calendly, Cal.com, and more built-in
- **Payment Integration** — Stripe Pricing Table for programs/packages
- **Warm Design** — Professional but approachable aesthetic
- **Sanity CMS** — Edit all content visually
- **One-Click Deploy** — Live in under 5 minutes

---

## 🎯 Perfect For

- Life coaches and business coaches
- Consultants and advisors
- Course creators and educators
- Therapists and wellness practitioners
- Speakers and authors

---

## 📐 Sections Included

1. **Hero** — Your photo, headline, and primary CTA
2. **About** — Your story, credentials, and approach
3. **Services** — What you offer and how you help
4. **Results** — Client transformations and outcomes
5. **Testimonials** — Social proof from past clients
6. **Lead Magnet** — Free resource opt-in
7. **FAQ** — Common questions answered
8. **Contact** — Booking/inquiry form

---

## 🔗 Integrations

### Booking Integration (Discovery Calls & Sessions)

Configure your scheduling system directly in Sanity Studio:

**Supported Providers:**
- **Calendly** (recommended)
- Cal.com (free, open source)
- Acuity Scheduling
- Custom URL

**Setup in Sanity:**
1. Go to **Coach Settings** → **Booking Integration**
2. Select your provider (e.g., `Calendly`)
3. Paste your booking URL (e.g., `https://calendly.com/yourname`)
4. Optional: Add specific event type slug for different call types
5. Customize button text ("Book Free Discovery Call")
6. Enable modal popup for seamless booking

**Getting Your Calendly URL:**
1. Log in to [Calendly](https://calendly.com)
2. Go to **Event Types** → Select your event
3. Copy the **Event Link** (e.g., `https://calendly.com/yourname/discovery`)
4. Paste in Sanity

**Using Cal.com (Free Alternative):**
1. Create account at [Cal.com](https://cal.com)
2. Set up your event types
3. Copy your booking link
4. Select "Cal.com" as provider in Sanity

### Payment Integration (Programs & Packages)

Configure payment processing for your coaching programs:

**Supported Providers:**
- **Stripe Pricing Table** (recommended for subscriptions/tiers)
- Stripe Checkout Links
- PayPal
- Gumroad
- LemonSqueezy
- Custom checkout URL

**Setup Stripe Pricing Table:**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → Product Catalog
2. Create your products/prices
3. Go to **Pricing Tables** → Create a pricing table
4. Design your pricing table UI
5. Copy the **Pricing Table ID** (`prctbl_xxx`)
6. Copy your **Publishable Key** (from Developers → API Keys)
7. Add both to Sanity **Coach Settings** → **Payment Integration**

**Example Pricing Structure:**
- Discovery Call: Free (handled by booking)
- 1:1 Coaching Package: $997 (Stripe Checkout Link)
- VIP Day: $2,500 (Stripe Checkout Link)
- Group Program: $197/month (Stripe Pricing Table)

---

## 🚀 Quick Start

1. Click **Deploy with Vercel** above
2. Create a [Sanity](https://sanity.io) account
3. Add your Project ID
4. Your site is live!

See the full setup guide in the main [README](../README.md).

---

## 🎨 Customization

### Color Scheme

The default warm color scheme uses:
- Primary: Terracotta/Coral (#E07A5F)
- Secondary: Cream (#F4F1DE)
- Accent: Sage (#81B29A)

Change colors in `tailwind.config.js`:

```js
colors: {
  primary: '#E07A5F',
  secondary: '#F4F1DE',
  accent: '#81B29A',
}
```

### Using Booking Components

```tsx
import { BookingButton, BookingEmbed } from '@/components/BookingButton'

// Button that opens Calendly popup:
<BookingButton config={settings.booking} text="Book Free Discovery Call" />

// Inline embed on a booking page:
<BookingEmbed config={settings.booking} height={700} />
```

### Using Payment Components

```tsx
import { PaymentEmbed, StripePricingTable } from '@/components/PaymentEmbed'

// Stripe Pricing Table for program tiers:
<PaymentEmbed config={settings.payment} />

// Or render the pricing table directly:
<StripePricingTable 
  pricingTableId="prctbl_xxx"
  publishableKey="pk_live_xxx"
/>
```

---

## 📝 Content Tips

### Hero Section
- Use a professional, approachable photo
- Lead with the transformation you provide
- Example: "Helping ambitious women build businesses they love"

### About Section
- Share your story and credentials
- Connect emotionally with your ideal client
- Show why you understand their struggles

### Services Section
- Focus on outcomes, not features
- Use clear pricing or "starting at" ranges
- Include a CTA for each service

### Testimonials
- Video testimonials work best
- Include specific results when possible
- Show diversity in client types

---

## 📁 Structure

```
coach-starter/
├── app/
│   ├── page.tsx          # Main landing page
│   └── studio/           # Sanity Studio route
├── components/
│   ├── BookingButton.tsx # Calendly/Cal.com widget
│   └── PaymentEmbed.tsx  # Stripe payment widget
├── sanity/
│   └── schemas/          # Sanity schema definitions
└── lib/
    └── sanity.ts         # Sanity client config
```

---

Made with ❤️ for coaches who change lives
