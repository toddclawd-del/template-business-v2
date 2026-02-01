'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Testimonial } from '@/lib/data'

interface TestimonialsProps {
  testimonials: Testimonial[]
  showHeader?: boolean
  title?: string
  subtitle?: string
  showViewAll?: boolean
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

export function Testimonials({ 
  testimonials, 
  showHeader = true,
  title = "What Our Customers Say",
  subtitle = "5.0 rating from 150+ Google reviews",
  showViewAll = true
}: TestimonialsProps) {
  return (
    <section className="section-padding bg-primary-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {showHeader && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">{title}</h2>
            <div className="flex items-center justify-center gap-1 text-accent-400 text-2xl mb-2">
              {'★★★★★'}
            </div>
            <p className="text-primary-100">{subtitle}</p>
          </motion.div>
        )}

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((t, i) => (
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

        {showViewAll && (
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
        )}
      </div>
    </section>
  )
}

// Single featured testimonial for service pages
interface FeaturedTestimonialProps {
  testimonial: Testimonial
}

export function FeaturedTestimonial({ testimonial }: FeaturedTestimonialProps) {
  return (
    <section className="section-padding bg-primary-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-1 text-accent-400 text-3xl mb-6">
            {'★★★★★'}
          </div>
          <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
            "{testimonial.quote}"
          </blockquote>
          <div className="text-white font-semibold">— {testimonial.author}</div>
          <div className="text-primary-200 text-sm">{testimonial.location}</div>
          <div className="text-primary-300 text-sm mt-1">{testimonial.project}</div>

          <Link 
            href="/about#reviews" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mt-8 group transition-colors"
          >
            Read More Reviews
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
