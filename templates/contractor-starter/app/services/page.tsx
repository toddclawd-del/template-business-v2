'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Nav, Footer, MobileCTA, PageHeader, ServiceCardLarge, CTASection } from '@/components'
import { COMPANY, SERVICES, SERVICE_AREAS, CREDENTIALS } from '@/lib/data'
import { Check, Phone, MessageSquare } from 'lucide-react'

export default function ServicesPage() {
  const staggerContainer = {
    animate: { 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      } 
    }
  }

  return (
    <>
      <Nav />
      <main className="overflow-hidden pb-20 md:pb-0">
        {/* Page Header */}
        <PageHeader
          eyebrow="Our Services"
          title="Professional Home Services You Can Trust"
          description="From small repairs to complete renovations, we deliver quality craftsmanship on every project. Backed by 15+ years of experience and a satisfaction guarantee."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' }
          ]}
          centered
        />

        {/* Services Grid */}
        <section className="section-padding bg-[rgb(var(--background))]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {SERVICES.map((service, i) => (
                <ServiceCardLarge key={i} service={service} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Strip */}
        <section className="bg-primary-600 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                { label: COMPANY.license.split(' ')[0], sublabel: COMPANY.license.split(' ').slice(1).join(' ') },
                { label: 'Fully', sublabel: 'Insured' },
                { label: 'Free', sublabel: 'Estimates' },
                { label: '2-Year', sublabel: 'Warranty' },
              ].map((item, i) => (
                <div key={i} className="text-center text-white">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Check className="w-5 h-5 text-accent-400" />
                    <span className="font-bold text-lg">{item.label}</span>
                  </div>
                  <span className="text-primary-100 text-sm">{item.sublabel}</span>
                </div>
              ))}
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
              <h2 className="section-title">We Proudly Serve the Denver Metro Area</h2>
              
              <div className="flex flex-wrap justify-center gap-2 mt-8">
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

        {/* Bottom CTA */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Not Sure Which Service You Need?</h2>
              <p className="text-[rgb(var(--muted-foreground))] text-lg mb-8">
                We're happy to help. Give us a call or request a free consultation and we'll recommend the best approach for your project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${COMPANY.phone}`} className="btn-secondary text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Consultation
                </a>
                <Link href="/contact" className="btn-primary text-lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
