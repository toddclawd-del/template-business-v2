/**
 * Shared Sanity Object Schemas
 * 
 * These reusable object schemas can be imported into any template's Sanity configuration.
 * They provide standardized booking and payment integration fields that template buyers
 * can configure through Sanity Studio.
 * 
 * Usage:
 * ```ts
 * // In your template's sanity/schemas/index.ts
 * import bookingIntegration from '@/shared/sanity/objects/bookingIntegration'
 * import paymentIntegration from '@/shared/sanity/objects/paymentIntegration'
 * 
 * export const schemaTypes = [
 *   // Your document schemas...
 *   settings,
 *   // Add the object schemas
 *   bookingIntegration,
 *   paymentIntegration,
 * ]
 * ```
 */

export { default as bookingIntegration } from './bookingIntegration'
export { default as paymentIntegration } from './paymentIntegration'
