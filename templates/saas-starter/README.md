# SaaS Starter Template

A premium landing page template for SaaS products, startups, and web apps. Built with Next.js 14, Tailwind CSS, Framer Motion, and Sanity CMS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2Fsaas-starter-template&env=NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET&envDescription=Sanity%20CMS%20credentials&envLink=https%3A%2F%2Fwww.sanity.io%2Fmanage)

---

## ✨ Features

- **Modern Design** — Clean, professional aesthetic inspired by top SaaS companies
- **Sanity CMS** — Edit all content visually, no code required
- **Stripe Pricing Table** — Built-in subscription payment support
- **One-Click Deploy** — Live on Vercel in under 5 minutes
- **Fully Responsive** — Looks perfect on all devices
- **Animated** — Smooth Framer Motion animations throughout
- **SEO Optimized** — Meta tags, Open Graph, sitemap ready
- **Fast** — 95+ Lighthouse score out of the box

---

## 🚀 Quick Start

### Option 1: One-Click Deploy (Recommended)

1. Click the **Deploy with Vercel** button above
2. Create a free [Vercel account](https://vercel.com) if needed
3. Create a free [Sanity account](https://sanity.io) and project
4. Add your Sanity Project ID when prompted
5. Done! Your site is live.

### Option 2: Manual Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/saas-starter-template
cd saas-starter-template

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Sanity credentials

# Run development server
npm run dev
```

---

## 🔗 Payment Integration (Stripe)

### Setting Up Stripe Pricing Table

The easiest way to add subscription billing to your SaaS:

**Step 1: Create Products in Stripe**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → Product Catalog
2. Click **Add Product**
3. Create your tiers (e.g., Starter $29/mo, Pro $79/mo, Enterprise $199/mo)
4. Set up recurring prices for subscriptions

**Step 2: Create a Pricing Table**
1. In Stripe Dashboard → Product Catalog → **Pricing Tables**
2. Click **Create pricing table**
3. Add your products/prices
4. Customize the appearance (colors, layout)
5. Click **Continue to get code snippet**
6. Copy the **Pricing Table ID** (`prctbl_xxx`)

**Step 3: Configure in Sanity**
1. Go to Sanity Studio → **Site Settings** → **Payment Integration**
2. Select provider: `Stripe Pricing Table`
3. Enter your **Pricing Table ID** (`prctbl_xxx`)
4. Enter your **Publishable Key** (`pk_live_xxx` or `pk_test_xxx`)
   - Find this in Stripe Dashboard → Developers → API Keys
5. Save!

**Step 4: Done!**
The Stripe Pricing Table automatically renders on your pricing page with:
- Your configured tiers and pricing
- Checkout flow handled by Stripe
- Subscription management built-in

### Alternative: Checkout Links

If you prefer simpler checkout links instead of the pricing table:

1. In Sanity, select provider: `Stripe Checkout Link`
2. Create Payment Links in Stripe Dashboard → Payment Links
3. Copy the URL (e.g., `https://buy.stripe.com/xxx`)
4. Paste in the **Checkout URL** field

### Using Payment Components

```tsx
import { PaymentEmbed, StripePricingTable } from '@/components/PaymentEmbed'

// Renders Stripe Pricing Table from Sanity config:
<PaymentEmbed config={settings.payment} />

// Or render directly with props:
<StripePricingTable 
  pricingTableId="prctbl_xxx"
  publishableKey="pk_live_xxx"
/>
```

---

## 📝 Editing Content

All content is managed through Sanity Studio. No coding required!

### Accessing the Editor

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Click "Studio" to open the content editor

### Content You Can Edit

| Section | What You Can Change |
|---------|---------------------|
| **Hero** | Headline, subheadline, CTA buttons, badge text |
| **Features** | Feature title, description, icon for each feature |
| **How It Works** | Step title, description, number |
| **Pricing** | Plan names, prices, features, popular badge |
| **Payment** | Stripe Pricing Table ID, Publishable Key |
| **Testimonials** | Quote, author name, company, avatar |
| **FAQ** | Questions and answers |
| **Footer** | Links, social icons, copyright text |

---

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... your colors
        600: '#0284c7',
      }
    }
  }
}
```

### Fonts

1. Add your font to `app/layout.tsx`
2. Update the font-family in `tailwind.config.js`

### Shader Background

Toggle the shader background in `app/page.tsx`:

```tsx
<ShaderBackground enabled={true} />
```

---

## 🌐 Custom Domain

### In Vercel

1. Go to your project → Settings → Domains
2. Add your domain name
3. Follow the DNS instructions

### DNS Records to Add

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

Propagation takes 5-30 minutes.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts, metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features grid
│   ├── Pricing.tsx     # Pricing table
│   ├── PaymentEmbed.tsx # Stripe payment widget
│   └── Footer.tsx
├── sanity/
│   ├── client.ts       # Sanity client config
│   ├── queries.ts      # GROQ queries
│   └── schemas/        # Content schemas
└── public/
    └── images/         # Static images
```

---

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually "production" |

---

## ❓ FAQ

### Do I need to know how to code?
No! All content editing is done through Sanity's visual editor.

### How do I set up Stripe?
See the **Payment Integration** section above. You'll need a Stripe account (free to create), then create a Pricing Table in the Stripe Dashboard.

### Can I use a different payment provider?
Yes! The template also supports Stripe Checkout Links, PayPal, Gumroad, LemonSqueezy, and custom checkout URLs.

### How much does hosting cost?
Free! Vercel's free tier handles most sites easily. Stripe charges transaction fees when you make sales.

### Can I use this for client projects?
Yes, the commercial license is included with your purchase.

---

## 🆘 Support

- **Video Tutorial:** [Watch Setup Guide](https://youtube.com/...)
- **Email:** support@[yourdomain].com
- **Response Time:** Within 24 hours

---

Made with ❤️ by [Your Brand]
