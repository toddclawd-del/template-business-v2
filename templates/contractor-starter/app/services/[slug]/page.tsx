'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { 
  Nav, Footer, MobileCTA, PageHeader, ProcessTimeline, 
  FAQAccordion, FeaturedTestimonial, CTASection 
} from '@/components'
import { COMPANY, SERVICES, PROJECTS, Service } from '@/lib/data'
import { Check, Phone, ArrowRight } from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1
    } 
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params
  const service = SERVICES.find(s => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  // Get related services (exclude current)
  const relatedServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3)
  
  // Get related projects
  const relatedProjects = PROJECTS.filter(p => 
    p.category.toLowerCase().includes(service.name.split(' ')[0].toLowerCase()) ||
    service.name.toLowerCase().includes(p.category.toLowerCase())
  ).slice(0, 4)

  return (
    <>
      <Nav />
      <main className="overflow-hidden pb-20 md:pb-0">
        {/* Hero */}
        <PageHeader
          title={service.name}
          description={service.shortDescription}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name, href: `/services/${slug}` }
          ]}
          backgroundImage={service.heroImage}
          trustBadges={[COMPANY.license, COMPANY.insurance]}
          ctas={[
            { label: 'Get Free Quote', href: '/contact', variant: 'accent' },
            { label: `Call ${COMPANY.phone}`, href: `tel:${COMPANY.phone}`, variant: 'secondary' }
          ]}
        />

        {/* Overview Section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Description */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-eyebrow">About This Service</span>
                <h2 className="section-title">Expert {service.name}</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>{service.description}</p>
                </div>
              </motion.div>

              {/* Highlights Card */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-[rgb(var(--muted))] rounded-2xl p-8">
                  <h3 className="font-bold text-lg text-dark-900 mb-6">What's Included</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-[rgb(var(--muted))]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">What We Do</span>
              <h2 className="section-title">Comprehensive {service.name} Services</h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {service.includedItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <ProcessTimeline 
          title={`Our ${service.name.split(' ')[0]} Process`}
          steps={service.process}
        />

        {/* Gallery Preview */}
        {service.gallery && service.gallery.length > 0 && (
          <section className="section-padding bg-[rgb(var(--muted))]">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-eyebrow">Our Work</span>
                <h2 className="section-title">Recent {service.name} Projects</h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {service.gallery.map((image, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`relative rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square'}`}
                  >
                    <Image
                      src={image}
                      alt={`${service.name} project ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-center mt-8">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                >
                  View All {service.name.split(' ')[0]} Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {service.testimonial && (
          <FeaturedTestimonial testimonial={service.testimonial} />
        )}

        {/* Pricing Guide */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">Investment</span>
              <h2 className="section-title">Pricing Guide</h2>
            </motion.div>

            <motion.div
              className="mt-8 bg-[rgb(var(--muted))] rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6">
                <strong>{service.name}</strong> projects typically range from{' '}
                <span className="text-primary-600 font-bold">
                  ${service.priceRange.low.toLocaleString()} - ${service.priceRange.high.toLocaleString()}+
                </span>{' '}
                depending on scope.
              </p>

              <p className="text-gray-600 mb-6">
                Factors that affect your price include project size, material choices, 
                layout complexity, and any structural modifications required.
              </p>

              <div className="flex items-center gap-3 text-green-600 mb-6">
                <Check className="w-5 h-5" />
                <span>We offer financing options through our lending partners</span>
              </div>

              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Get Your Custom Quote - It's Free
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <FAQAccordion 
            title={`${service.name} FAQ`}
            faqs={service.faqs}
          />
        )}

        {/* Related Services */}
        <section className="section-padding bg-[rgb(var(--muted))]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">You Might Also Need</h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {relatedServices.map((related, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="block bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group"
                  >
                    <span className="text-3xl mb-3 block">{related.icon}</span>
                    <h3 className="font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title={`Ready to Transform Your Space with ${service.name.split(' ')[0]} Work?`}
          description={`Get a free, no-obligation estimate. We'll visit your home, discuss your vision, and provide a detailed quote within 48 hours.`}
          variant="light"
        />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
