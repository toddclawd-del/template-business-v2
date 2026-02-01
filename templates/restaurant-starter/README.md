# Restaurant Template

A warm, appetizing landing page for restaurants, cafes, and eateries. Features menu system with dietary icons, reservation integration, and gallery.

## ✨ Features

- **Menu System** with categories, prices, and dietary icons (V, GF)
- **Reservation Integration** — OpenTable, Resy, Yelp, and more
- **Online Ordering** — Toast, Square, DoorDash Storefront
- **Photo Gallery** with hover effects
- **Testimonials** from reviews
- **Contact** with hours and map placeholder
- **Sanity CMS** for all content management

## 🎨 Design

- Warm orange/brown palette
- Playfair Display + Inter fonts
- Dark hero with appetizing food photography
- Mobile-responsive menu tabs

## 🔗 Integrations

### Reservation Integration

Configure your reservation system directly in Sanity Studio:

**Supported Providers:**
- **OpenTable** (most popular)
- Resy
- Yelp Reservations
- SevenRooms
- Custom URL

**Setup in Sanity:**
1. Go to **Restaurant Settings** → **Reservation Integration**
2. Select your provider (e.g., `OpenTable`)
3. Paste your reservation URL
4. Customize button text ("Reserve a Table")
5. Choose whether to open in modal or new tab

**Getting Your OpenTable Widget URL:**
1. Log in to [OpenTable Restaurant Center](https://restaurant.opentable.com)
2. Go to **Marketing** → **Widgets**
3. Copy your **Button Link** or **Widget URL**
4. Paste in Sanity

**Getting Your Resy Widget:**
1. Log in to Resy OS
2. Go to **Marketing** → **Website Widget**
3. Copy the widget URL
4. Paste in Sanity

### Online Ordering Integration

Configure online ordering/takeout for your restaurant:

**Supported Providers:**
- **Toast** (popular for full-service)
- Square Online
- DoorDash Storefront
- ChowNow
- GloriaFood
- Custom URL

**Setup in Sanity:**
1. Go to **Restaurant Settings** → **Online Ordering**
2. Select your provider
3. Paste your ordering URL
4. Customize button text ("Order Online")

**Getting Your Toast Online Ordering Link:**
1. Log in to Toast
2. Go to **Online Ordering** settings
3. Copy your ordering page URL
4. Paste in Sanity

**Getting Your Square Online Store Link:**
1. Log in to Square Dashboard
2. Go to **Online** → **Online Ordering**
3. Copy your store URL
4. Paste in Sanity

---

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
   - **Restaurant Settings** - Name, contact, hours, integrations
   - **Menu Categories** - Appetizers, Mains, Desserts, etc.
   - **Menu Items** - Dishes with prices and dietary info
   - **Gallery** - Food photography
   - **Testimonials** - Guest reviews

### Using Booking Components

```tsx
import { BookingButton } from '@/components/BookingButton'

// Reservation button (OpenTable/Resy):
<BookingButton config={settings.booking} text="Reserve a Table" />

// For inline widget embed:
import { BookingEmbed } from '@/components/BookingButton'
<BookingEmbed config={settings.booking} height={400} />
```

### Using Ordering Components

```tsx
import { PaymentButton } from '@/components/PaymentEmbed'

// Online ordering button:
<PaymentButton config={settings.ordering} text="Order Online" />
```

---

## 📁 Structure

```
restaurant-starter/
├── app/
│   ├── page.tsx          # Main landing page
│   └── studio/           # Sanity Studio route
├── components/
│   ├── BookingButton.tsx # Reservation widget
│   └── PaymentEmbed.tsx  # Ordering button
├── sanity/
│   └── schemas/          # Sanity schema definitions
└── lib/
    └── sanity.ts         # Sanity client config
```

---

## 🎨 Color Scheme

Default warm color palette:
- Primary: Warm Orange (#D97706)
- Secondary: Cream (#FEF3C7)
- Accent: Deep Brown (#78350F)

Change in `tailwind.config.js` to match your brand.

---

Made with ❤️ for restaurants that serve with heart
