import settings from './settings'
import feature from './feature'
import pricingTier from './pricingTier'
import testimonial from './testimonial'
import faqItem from './faqItem'
// Integration schema for payments
import paymentIntegration from './paymentIntegration'

export const schemaTypes = [
  settings,
  feature,
  pricingTier,
  testimonial,
  faqItem,
  // Object types (must be registered for use in documents)
  paymentIntegration,
]
