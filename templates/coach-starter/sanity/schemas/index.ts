import settings from './settings'
import service from './service'
import testimonial from './testimonial'
import faqItem from './faqItem'
import leadMagnet from './leadMagnet'
// Integration schemas for booking/payment
import bookingIntegration from './bookingIntegration'
import paymentIntegration from './paymentIntegration'

export const schemaTypes = [
  settings,
  service,
  testimonial,
  faqItem,
  leadMagnet,
  // Object types (must be registered for use in documents)
  bookingIntegration,
  paymentIntegration,
]
