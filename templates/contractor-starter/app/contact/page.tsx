'use client'

import { motion } from 'framer-motion'
import { Nav, Footer, MobileCTA, QuoteForm } from '@/components'
import { COMPANY, SERVICE_AREAS } from '@/lib/data'
import { Phone, Mail, MapPin, Clock, Zap } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden pb-20 md:pb-0">
        {/* Hero */}
        <section className="pt-20 py-16 md:py-20 bg-gradient-to-b from-[rgb(var(--muted))] to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl text-dark-900 mb-4 leading-tight">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600">
                Ready to start your project? Have questions? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-[rgb(var(--muted))] rounded-2xl p-8">
                  <h2 className="text-xl font-bold text-dark-900 mb-6">Contact Information</h2>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</div>
                      <a href={`tel:${COMPANY.phone}`} className="font-semibold text-dark-900 hover:text-primary-600 transition-colors">
                        {COMPANY.phone}
                      </a>
                      <div className="text-sm text-gray-600 mt-1">Call or text anytime</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</div>
                      <a href={`mailto:${COMPANY.email}`} className="font-semibold text-dark-900 hover:text-primary-600 transition-colors">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Office</div>
                      <address className="not-italic font-semibold text-dark-900">
                        {COMPANY.address.street}<br />
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                      </address>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-8" />

                  {/* Hours */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <h3 className="font-bold text-dark-900">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      {COMPANY.hours.map((h, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{h.days}</span>
                          <span className="font-medium">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency */}
                  <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                    <div className="flex items-center gap-2 text-primary-700 font-semibold mb-1">
                      <Zap className="w-4 h-4" />
                      24/7 Emergency Service
                    </div>
                    <p className="text-sm text-primary-600">
                      Call <a href={`tel:${COMPANY.emergencyPhone}`} className="font-semibold">{COMPANY.emergencyPhone}</a> for urgent repairs
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quote Form */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
                  <QuoteForm 
                    showWrapper={false} 
                    showHeader={true}
                    title="Request a Free Quote"
                    description="Fill out the form below and we'll get back to you within 24 hours."
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-0">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Map placeholder */}
              <div className="bg-gray-200 h-[400px] flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <span className="text-gray-500 font-medium">Service Area Map</span>
                  <p className="text-gray-400 text-sm mt-1">Google Maps embed goes here</p>
                </div>
                {/* Could add real map embed here */}
                {/* <iframe 
                  src="https://www.google.com/maps/embed?..." 
                  className="w-full h-full border-0"
                  loading="lazy"
                /> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-[rgb(var(--muted))]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">Coverage</span>
              <h2 className="section-title">Areas We Serve</h2>
              <p className="text-gray-600 mb-8">
                We proudly serve homeowners throughout the Denver Metro area, including:
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {SERVICE_AREAS.map((area, i) => (
                  <span key={i} className="location-chip">{area}</span>
                ))}
              </div>
              
              <p className="text-gray-600 mt-6">
                Don't see your city? <a href={`tel:${COMPANY.phone}`} className="text-primary-600 font-medium hover:underline">Call us</a> — we may still service your area!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Response Guarantee */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center border border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 text-primary-700 font-bold text-xl mb-4">
                <Zap className="w-6 h-6" />
                Quick Response Guarantee
              </div>
              <p className="text-gray-700 text-lg">
                We respond to all inquiries within <strong>24 hours</strong> (usually same-day). 
                For emergencies, call our 24/7 line at{' '}
                <a href={`tel:${COMPANY.emergencyPhone}`} className="text-primary-600 font-semibold hover:underline">
                  {COMPANY.emergencyPhone}
                </a>.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
