import settings from './settings'
import serviceCategory from './serviceCategory'
import service from './service'
import teamMember from './teamMember'
import galleryImage from './galleryImage'
import testimonial from './testimonial'
// Integration schemas for booking/payment
import bookingIntegration from './bookingIntegration'
import paymentIntegration from './paymentIntegration'

export const schemaTypes = [
  settings,
  serviceCategory,
  service,
  teamMember,
  galleryImage,
  testimonial,
  // Object types (must be registered for use in documents)
  bookingIntegration,
  paymentIntegration,
]
