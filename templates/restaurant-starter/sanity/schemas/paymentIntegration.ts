import { defineType, defineField } from 'sanity'

/**
 * Payment Integration Schema
 * 
 * Reusable object schema for configuring payment/checkout integrations.
 * Supports Stripe Pricing Tables, Square, PayPal, Gumroad, LemonSqueezy, and custom checkout URLs.
 * 
 * Usage in your settings.ts:
 * ```ts
 * import paymentIntegration from '@/shared/sanity/objects/paymentIntegration'
 * 
 * defineField({
 *   name: 'payment',
 *   title: 'Payment Integration',
 *   type: 'paymentIntegration',
 * })
 * ```
 */
export default defineType({
  name: 'paymentIntegration',
  title: 'Payment Integration',
  type: 'object',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enable Payments',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle payment functionality on/off',
    }),
    defineField({
      name: 'provider',
      title: 'Payment Provider',
      type: 'string',
      options: {
        list: [
          { title: 'Stripe Pricing Table', value: 'stripe' },
          { title: 'Stripe Checkout Link', value: 'stripeLink' },
          { title: 'Square', value: 'square' },
          { title: 'PayPal', value: 'paypal' },
          { title: 'Gumroad', value: 'gumroad' },
          { title: 'LemonSqueezy', value: 'lemonsqueezy' },
          { title: 'Paddle', value: 'paddle' },
          { title: 'Custom Checkout URL', value: 'custom' },
        ],
        layout: 'dropdown',
      },
      description: 'Select your payment platform',
    }),
    // Stripe-specific fields
    defineField({
      name: 'stripePricingTableId',
      title: 'Stripe Pricing Table ID',
      type: 'string',
      description: 'Found in Stripe Dashboard → Product Catalog → Pricing Tables (e.g., prctbl_xxx)',
      hidden: ({ parent }) => parent?.provider !== 'stripe',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { provider?: string; enabled?: boolean }
          if (parent?.provider === 'stripe' && parent?.enabled && !value) {
            return 'Pricing Table ID is required for Stripe'
          }
          return true
        }),
    }),
    defineField({
      name: 'stripePublishableKey',
      title: 'Stripe Publishable Key',
      type: 'string',
      description: 'Your Stripe publishable key (pk_live_xxx or pk_test_xxx)',
      hidden: ({ parent }) => parent?.provider !== 'stripe',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { provider?: string; enabled?: boolean }
          if (parent?.provider === 'stripe' && parent?.enabled && !value) {
            return 'Publishable key is required for Stripe'
          }
          return true
        }),
    }),
    defineField({
      name: 'stripeCustomerSessionClientSecret',
      title: 'Customer Session Client Secret (Optional)',
      type: 'string',
      description: 'For logged-in customer pricing (advanced)',
      hidden: ({ parent }) => parent?.provider !== 'stripe',
    }),
    // Generic checkout URL (for stripeLink, square, paypal, gumroad, lemonsqueezy, paddle, custom)
    defineField({
      name: 'checkoutUrl',
      title: 'Checkout URL',
      type: 'url',
      description: 'Direct link to your checkout or payment page',
      hidden: ({ parent }) => parent?.provider === 'stripe',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as { provider?: string; enabled?: boolean }
          if (parent?.provider && parent.provider !== 'stripe' && parent?.enabled && !value) {
            return 'Checkout URL is required'
          }
          return true
        }),
    }),
    // PayPal-specific
    defineField({
      name: 'paypalButtonId',
      title: 'PayPal Button ID',
      type: 'string',
      description: 'PayPal hosted button ID for embedding',
      hidden: ({ parent }) => parent?.provider !== 'paypal',
    }),
    // Gumroad-specific
    defineField({
      name: 'gumroadProductId',
      title: 'Gumroad Product ID',
      type: 'string',
      description: 'For Gumroad overlay embedding',
      hidden: ({ parent }) => parent?.provider !== 'gumroad',
    }),
    // LemonSqueezy-specific
    defineField({
      name: 'lemonSqueezyOverlay',
      title: 'Use Overlay Checkout',
      type: 'boolean',
      initialValue: true,
      description: 'Open checkout in overlay instead of redirect',
      hidden: ({ parent }) => parent?.provider !== 'lemonsqueezy',
    }),
    // Display options
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Get Started',
      description: 'Text for payment/checkout buttons',
      hidden: ({ parent }) => parent?.provider === 'stripe',
    }),
    defineField({
      name: 'buttonStyle',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (filled)', value: 'primary' },
          { title: 'Secondary (outline)', value: 'secondary' },
          { title: 'Ghost (text only)', value: 'ghost' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
      hidden: ({ parent }) => parent?.provider === 'stripe',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
      description: 'Open checkout in a new browser tab',
      hidden: ({ parent }) => parent?.provider === 'stripe',
    }),
  ],
  preview: {
    select: {
      provider: 'provider',
      enabled: 'enabled',
    },
    prepare({ provider, enabled }) {
      const providerNames: Record<string, string> = {
        stripe: 'Stripe Pricing Table',
        stripeLink: 'Stripe Checkout Link',
        square: 'Square',
        paypal: 'PayPal',
        gumroad: 'Gumroad',
        lemonsqueezy: 'LemonSqueezy',
        paddle: 'Paddle',
        custom: 'Custom Checkout',
      }
      return {
        title: providerNames[provider] || 'Payment Integration',
        subtitle: enabled === false ? 'Disabled' : 'Enabled',
      }
    },
  },
})
