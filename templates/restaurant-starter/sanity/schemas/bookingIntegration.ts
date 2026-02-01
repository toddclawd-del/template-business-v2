import { defineType, defineField } from 'sanity'

/**
 * Booking Integration Schema
 * 
 * Reusable object schema for configuring booking/scheduling integrations.
 * Supports multiple providers: Calendly, Cal.com, Acuity, OpenTable, Resy, Fresha, Square, and custom.
 * 
 * Usage in your settings.ts:
 * ```ts
 * import bookingIntegration from '@/shared/sanity/objects/bookingIntegration'
 * 
 * defineField({
 *   name: 'booking',
 *   title: 'Booking Integration',
 *   type: 'bookingIntegration',
 * })
 * ```
 */
export default defineType({
  name: 'bookingIntegration',
  title: 'Booking Integration',
  type: 'object',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enable Booking',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle booking functionality on/off',
    }),
    defineField({
      name: 'provider',
      title: 'Booking Provider',
      type: 'string',
      options: {
        list: [
          { title: 'Calendly', value: 'calendly' },
          { title: 'Cal.com', value: 'cal' },
          { title: 'Acuity Scheduling', value: 'acuity' },
          { title: 'OpenTable', value: 'openTable' },
          { title: 'Resy', value: 'resy' },
          { title: 'Fresha', value: 'fresha' },
          { title: 'Square Appointments', value: 'square' },
          { title: 'Booksy', value: 'booksy' },
          { title: 'Vagaro', value: 'vagaro' },
          { title: 'Custom URL', value: 'custom' },
        ],
        layout: 'dropdown',
      },
      description: 'Select your booking platform',
    }),
    defineField({
      name: 'embedUrl',
      title: 'Booking URL',
      type: 'url',
      description: 'Your booking widget URL or scheduling link',
      validation: (Rule) => 
        Rule.custom((value, context) => {
          const parent = context.parent as { enabled?: boolean }
          if (parent?.enabled && !value) {
            return 'Booking URL is required when booking is enabled'
          }
          return true
        }),
    }),
    defineField({
      name: 'eventTypeSlug',
      title: 'Event Type (Optional)',
      type: 'string',
      description: 'For Calendly: specific event type slug. For Cal.com: event type name.',
      hidden: ({ parent }) => !['calendly', 'cal'].includes(parent?.provider as string),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Book Now',
      description: 'Text displayed on booking buttons',
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
    }),
    defineField({
      name: 'openInModal',
      title: 'Open in Modal/Popup',
      type: 'boolean',
      initialValue: true,
      description: 'Opens booking widget in a modal instead of navigating away',
      hidden: ({ parent }) => ['openTable', 'resy'].includes(parent?.provider as string),
    }),
    defineField({
      name: 'prefillName',
      title: 'Pre-fill Visitor Name',
      type: 'boolean',
      initialValue: false,
      description: 'Pre-fill name if known (requires additional setup)',
      hidden: ({ parent }) => !['calendly', 'cal'].includes(parent?.provider as string),
    }),
    defineField({
      name: 'prefillEmail',
      title: 'Pre-fill Visitor Email',
      type: 'boolean',
      initialValue: false,
      description: 'Pre-fill email if known (requires additional setup)',
      hidden: ({ parent }) => !['calendly', 'cal'].includes(parent?.provider as string),
    }),
    defineField({
      name: 'hideGdprBanner',
      title: 'Hide Cookie Banner',
      type: 'boolean',
      initialValue: false,
      description: 'Hide the GDPR/cookie banner in embeds (if supported)',
      hidden: ({ parent }) => !['calendly'].includes(parent?.provider as string),
    }),
    defineField({
      name: 'primaryColor',
      title: 'Brand Color',
      type: 'string',
      description: 'Hex color for embed styling (e.g., #007bff)',
      hidden: ({ parent }) => !['calendly', 'cal'].includes(parent?.provider as string),
    }),
  ],
  preview: {
    select: {
      provider: 'provider',
      buttonText: 'buttonText',
      enabled: 'enabled',
    },
    prepare({ provider, buttonText, enabled }) {
      const providerNames: Record<string, string> = {
        calendly: 'Calendly',
        cal: 'Cal.com',
        acuity: 'Acuity',
        openTable: 'OpenTable',
        resy: 'Resy',
        fresha: 'Fresha',
        square: 'Square',
        booksy: 'Booksy',
        vagaro: 'Vagaro',
        custom: 'Custom',
      }
      return {
        title: buttonText || 'Book Now',
        subtitle: `${providerNames[provider] || 'Not configured'}${enabled === false ? ' (disabled)' : ''}`,
      }
    },
  },
})
