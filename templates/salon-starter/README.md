# Salon Template

Elegant, inviting landing page for hair salons, barbershops, spas, and beauty studios. Built around online booking.

## ✨ Features

- **Service Menu** with categories, prices, and duration
- **Team Profiles** with specialties and Instagram handles
- **Photo Gallery** (Instagram-style grid)
- **Booking CTA** prominent throughout
- **Testimonials** with service type
- **Contact** with hours and map
- **Sanity CMS** for all content management

## 🎨 Design

- Elegant pink + neutral palette
- Cormorant Garamond + Poppins fonts
- Soft, feminine aesthetic
- Mobile-first service tabs

## 🔗 Integrations

### Booking Integration
Configure your booking system directly in Sanity Studio:

**Supported Providers:**
- **Fresha** (recommended - free core)
- Vagaro
- Booksy
- GlossGenius
- Square Appointments
- Calendly
- Cal.com
- Custom URL

**Setup in Sanity:**
1. Go to **Salon Settings** → **Booking Integration**
2. Select your provider from the dropdown
3. Paste your booking URL (e.g., `https://www.fresha.com/book-now/your-salon`)
4. Customize button text and style
5. Enable modal popup (optional)

**Getting Your Booking URL:**
- **Fresha:** Dashboard → Settings → Online Booking → Copy link
- **Vagaro:** My Business → Booking Site → Copy URL
- **Booksy:** Business Profile → Share Profile → Copy link
- **Square:** Appointments → Online Booking → Get Link

### Payment Integration
Configure payment processing for gift cards, deposits, or product sales:

**Supported Providers:**
- **Stripe** (Pricing Table or Checkout Links)
- Square
- PayPal
- Custom checkout URL

**Setup in Sanity:**
1. Go to **Salon Settings** → **Payment Integration**
2. For Stripe Pricing Table:
   - Create a Pricing Table in Stripe Dashboard
   - Copy the Pricing Table ID (`prctbl_xxx`)
   - Copy your Publishable Key (`pk_live_xxx`)
3. For other providers: paste your checkout URL

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📝 Customization

### Via Sanity Studio

1. Run `npm run dev` to start the dev server
2. Navigate to `/studio` to access Sanity Studio
3. Edit:
   - **Salon Settings** - Name, contact, hours, integrations
   - **Services** - Categories and service items
   - **Team Members** - Stylist profiles
   - **Gallery** - Photo gallery images
   - **Testimonials** - Client reviews

### Using Booking Components

```tsx
import { BookingButton } from '@/components/BookingButton'

// In your component:
<BookingButton config={settings.booking} />

// With overrides:
<BookingButton 
  config={settings.booking} 
  text="Book Your Appointment"
  className="my-custom-class"
/>
```

### Using Payment Components

```tsx
import { PaymentButton, StripePricingTable } from '@/components/PaymentEmbed'

// For gift cards or products:
<PaymentButton config={settings.payment} text="Buy Gift Card" />

// For Stripe Pricing Table (if configured):
<StripePricingTable 
  pricingTableId={settings.payment.stripePricingTableId}
  publishableKey={settings.payment.stripePublishableKey}
/>
```

## 📁 Structure

```
salon-starter/
├── app/
│   ├── page.tsx          # Main landing page
│   └── studio/           # Sanity Studio route
├── components/
│   ├── BookingButton.tsx # Booking widget component
│   └── PaymentEmbed.tsx  # Payment widget component
├── sanity/
│   └── schemas/          # Sanity schema definitions
└── lib/
    └── sanity.ts         # Sanity client config
```
