import settings from './settings'
import menuCategory from './menuCategory'
import menuItem from './menuItem'
import galleryImage from './galleryImage'
import testimonial from './testimonial'
// Integration schemas for booking/ordering
import bookingIntegration from './bookingIntegration'
import paymentIntegration from './paymentIntegration'

export const schemaTypes = [
  settings,
  menuCategory,
  menuItem,
  galleryImage,
  testimonial,
  // Object types (must be registered for use in documents)
  bookingIntegration,
  paymentIntegration,
]
