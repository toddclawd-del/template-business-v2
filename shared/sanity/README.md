# Shared Sanity Schemas

Reusable Sanity object schemas for booking and payment integrations. These schemas allow template buyers to configure third-party integrations directly through Sanity Studio.

## Available Schemas

### `bookingIntegration`

Configures appointment booking and scheduling systems.

**Supported Providers:**
- Calendly
- Cal.com
- Acuity Scheduling
- OpenTable
- Resy
- Fresha
- Square Appointments
- Booksy
- Vagaro
- Custom URL

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| `enabled` | boolean | Toggle booking on/off |
| `provider` | string | Selected booking platform |
| `embedUrl` | url | Booking widget/scheduling URL |
| `eventTypeSlug` | string | Specific event type (Calendly/Cal) |
| `buttonText` | string | CTA button text |
| `buttonStyle` | string | primary/secondary/ghost |
| `openInModal` | boolean | Open in popup vs new tab |
| `prefillName` | boolean | Pre-fill visitor name |
| `prefillEmail` | boolean | Pre-fill visitor email |
| `hideGdprBanner` | boolean | Hide cookie banner (Calendly) |
| `primaryColor` | string | Brand color for embed |

### `paymentIntegration`

Configures payment processing and checkout flows.

**Supported Providers:**
- Stripe Pricing Table
- Stripe Checkout Link
- Square
- PayPal
- Gumroad
- LemonSqueezy
- Paddle
- Custom checkout URL

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| `enabled` | boolean | Toggle payments on/off |
| `provider` | string | Selected payment platform |
| `stripePricingTableId` | string | Stripe Pricing Table ID |
| `stripePublishableKey` | string | Stripe publishable key |
| `checkoutUrl` | url | Direct checkout link |
| `paypalButtonId` | string | PayPal hosted button ID |
| `gumroadProductId` | string | Gumroad product ID |
| `lemonSqueezyOverlay` | boolean | Use overlay checkout |
| `buttonText` | string | CTA button text |
| `buttonStyle` | string | primary/secondary/ghost |
| `openInNewTab` | boolean | Open in new browser tab |

## Usage

### 1. Copy to Your Template

Copy the schema files to your template's Sanity schemas folder:

```bash
cp shared/sanity/objects/bookingIntegration.ts templates/your-template/sanity/schemas/
cp shared/sanity/objects/paymentIntegration.ts templates/your-template/sanity/schemas/
```

### 2. Register in Schema Index

```ts
// sanity/schemas/index.ts
import settings from './settings'
import bookingIntegration from './bookingIntegration'
import paymentIntegration from './paymentIntegration'

export const schemaTypes = [
  settings,
  // ... other document schemas
  // Object types must be registered
  bookingIntegration,
  paymentIntegration,
]
```

### 3. Add to Settings Schema

```ts
// sanity/schemas/settings.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // ... other fields
    defineField({
      name: 'booking',
      title: 'Booking Integration',
      type: 'bookingIntegration',
      description: 'Configure your scheduling system',
    }),
    defineField({
      name: 'payment',
      title: 'Payment Integration',
      type: 'paymentIntegration',
      description: 'Configure payment processing',
    }),
  ],
})
```

### 4. Use in Components

```tsx
// Fetch settings from Sanity
const settings = await sanityClient.fetch(`*[_type == "settings"][0]`)

// Use with BookingButton component
import { BookingButton } from '@/components/BookingButton'
<BookingButton config={settings.booking} />

// Use with PaymentEmbed component
import { PaymentEmbed } from '@/components/PaymentEmbed'
<PaymentEmbed config={settings.payment} />
```

## Provider-Specific Notes

### Calendly
- Supports popup modal and inline embed
- Can pre-fill visitor name/email
- Supports custom brand color
- Hide GDPR banner option

### Cal.com
- Free, open-source alternative
- Supports popup modal
- Event type slug for specific calendars

### OpenTable / Resy
- Best as direct links (no modal)
- Embed widgets available separately

### Stripe Pricing Table
- Renders native Stripe pricing UI
- Handles checkout flow automatically
- Requires Pricing Table ID + Publishable Key
- Created in Stripe Dashboard → Product Catalog → Pricing Tables

### Gumroad / LemonSqueezy
- Support overlay checkout
- Loads provider scripts automatically
