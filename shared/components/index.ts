/**
 * Shared React Components
 * 
 * Reusable components for booking and payment integrations.
 * These components read from Sanity configuration and handle
 * multiple providers automatically.
 */

export { BookingButton, BookingEmbed } from './BookingButton'
export type { BookingConfig, BookingProvider, BookingButtonProps, BookingEmbedProps } from './BookingButton'

export { PaymentEmbed, PaymentButton, StripePricingTable } from './PaymentEmbed'
export type { PaymentConfig, PaymentProvider, PaymentEmbedProps, PaymentButtonProps, StripePricingTableProps } from './PaymentEmbed'
