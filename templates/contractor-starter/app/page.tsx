'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { COMPANY, SERVICES, PROJECTS, TESTIMONIALS, SERVICE_AREAS, GENERAL_FAQ as FAQ } from '@/lib/data'

// ═══════════════════════════════════════════════════════════════
// CONTRACTOR STARTER TEMPLATE
// Professional, trust-building site for contractors & tradespeople
// Designed for credibility and lead conversion
// ═══════════════════════════════════════════════════════════════

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    } 
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
}

// ═══════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  
  return (
    <section className="relative pt-20">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image 
          src={COMPANY.heroImage} 
          alt="Professional construction workers on site demonstrating quality craftsmanship" 
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-dark-950/60 to-dark-950/40" />
      </motion.div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={staggerContainer}
          className="max-w-2xl"
        >
          {/* Trust badges */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
            <span className="trust-badge-light">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {COMPANY.license}
            </span>
            <span className="trust-badge-light">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {COMPANY.insurance}
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {COMPANY.tagline}
          </motion.h1>
          
          {/* Description */}
          <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-10 leading-relaxed">
            Trusted by homeowners for over {COMPANY.yearsInBusiness} years. From small repairs to complete renovations, we deliver quality work on time and on budget.
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-accent text-lg group">
              Get Your Free Estimate
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary bg-white text-lg group">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {COMPANY.phone}
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Stats bar */}
      <div className="stats-bar relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { number: `${COMPANY.yearsInBusiness}+`, label: 'Years Experience' },
              { number: `${COMPANY.projectsCompleted}+`, label: 'Projects Completed' },
              { number: '5.0', label: 'Google Rating' },
              { number: '100%', label: 'Satisfaction Guarantee' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  // Show first 4 services on home page
  const featuredServices = SERVICES.slice(0, 4)
  
  return (
    <section className="section-padding bg-[rgb(var(--muted))]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-description mx-auto">
            From minor repairs to major renovations, we have the skills and experience to handle any project with precision and care.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {featuredServices.map((service, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
            >
              <Link 
                href={`/services/${service.slug}`}
                className="service-card group block h-full"
              >
                <div className="service-card-icon">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-description">{service.shortDescription}</p>
                <ul className="service-card-features">
                  {service.features.slice(0, 4).map((f, j) => (
                    <li key={j} className="service-card-feature">
                      <span className="service-card-feature-check">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="btn-secondary group">
            View All Services
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function Portfolio() {
  // Show first 4 projects on home page
  const featuredProjects = PROJECTS.slice(0, 4)
  
  return (
    <section className="section-padding bg-[rgb(var(--background))]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Our Work</h2>
          <p className="section-description mx-auto">
            See the quality of our craftsmanship in these recent projects.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {featuredProjects.map((project, i) => (
            <motion.div key={i} variants={scaleIn}>
              <Link href={`/projects/${project.slug}`} className="project-card group block">
                <div className="project-card-image relative">
                  <Image 
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="project-card-badge">
                    {project.category}
                  </span>
                </div>
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="text-[rgb(var(--muted-foreground))] text-sm mt-1">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/projects" className="btn-secondary group">
            View All Projects
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="btn-primary group">
            Get a Quote for Your Project
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 text-accent-400 text-2xl mb-2">
            {'★★★★★'}
          </div>
          <p className="text-primary-100">5.0 rating from 150+ Google reviews</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} variants={fadeInUp} className="testimonial-card">
              <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
                <span className="text-xs text-primary-200 bg-white/10 px-2 py-1 rounded-full">
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Review links */}
        <motion.div 
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { name: 'Google', rating: '5.0' },
            { name: 'Yelp', rating: '4.9' },
            { name: 'Angi', rating: '4.8' },
          ].map((platform) => (
            <a 
              key={platform.name}
              href="#" 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <span className="font-medium">{platform.rating} on {platform.name}</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function QuoteSection() {
  return (
    <section className="section-padding bg-[rgb(var(--muted))]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="quote-form-wrapper p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
          <h2 className="section-title">Get Your Free Estimate</h2>
          <p className="text-[rgb(var(--muted-foreground))] text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a detailed, no-obligation quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg group">
              Request Free Estimate
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary text-lg group">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {COMPANY.phone}
            </a>
          </div>
          
          <p className="text-center text-sm text-[rgb(var(--muted-foreground))] mt-6">
            🔒 We respect your privacy. Your information will never be shared.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  return (
    <section id="faq" className="section-padding bg-[rgb(var(--background))]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {FAQ.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="faq-button"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-button-${i}`}
              >
                <span>{item.q}</span>
                <span className={`faq-icon ${openIndex === i ? 'faq-icon-open' : ''}`} aria-hidden="true">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="faq-answer">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="section-padding bg-[rgb(var(--muted))]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title mb-6">
              Proudly Serving the Denver Metro Area
            </h2>
            <p className="text-[rgb(var(--muted-foreground))] text-lg mb-8">
              For over {COMPANY.yearsInBusiness} years, we've been helping homeowners throughout the Denver area with quality construction and remodeling services. Our commitment to excellence has earned us a reputation as one of the most trusted contractors in the region.
            </p>
            
            {/* Service area chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {SERVICE_AREAS.map((area, i) => (
                <span key={i} className="location-chip">{area}</span>
              ))}
            </div>
            
            {/* Credentials */}
            <div className="space-y-3 mb-8">
              {[
                COMPANY.license,
                COMPANY.insurance,
                'BBB A+ Rating',
                '2-Year Workmanship Warranty',
              ].map((text, i) => (
                <div key={i} className="credential-item">
                  <div className="credential-icon">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            
            <Link href="/about" className="btn-secondary group">
              Learn More About Us
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-gray-500 font-medium">Service Area Map</span>
              </div>
            </div>
            
            {/* Floating card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-900">10+</div>
                  <div className="text-sm text-gray-500">Cities Served</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" className="overflow-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <TestimonialsSection />
        <QuoteSection />
        <FAQSection />
        <ServiceArea />
      </main>
      <Footer />
    </>
  )
}
