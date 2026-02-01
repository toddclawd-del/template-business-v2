'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface QuoteFormProps {
  showWrapper?: boolean
  showHeader?: boolean
  title?: string
  description?: string
}

export function QuoteForm({ 
  showWrapper = true, 
  showHeader = true,
  title = "Get Your Free Estimate",
  description = "Tell us about your project and we'll get back to you within 24 hours."
}: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  const content = (
    <>
      {showHeader && (
        <div className="text-center mb-10">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
          <h2 className="section-title">{title}</h2>
          <p className="text-[rgb(var(--muted-foreground))] text-lg">
            {description}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="quote-name" className="form-label">Name *</label>
            <input type="text" id="quote-name" name="name" required className="form-input" placeholder="John Smith" autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="quote-phone" className="form-label">Phone *</label>
            <input type="tel" id="quote-phone" name="phone" required className="form-input" placeholder="(555) 123-4567" autoComplete="tel" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="quote-email" className="form-label">Email *</label>
          <input type="email" id="quote-email" name="email" required className="form-input" placeholder="john@example.com" autoComplete="email" />
        </div>

        <div className="form-group">
          <label htmlFor="quote-project-type" className="form-label">Type of Project *</label>
          <select id="quote-project-type" name="projectType" required className="form-select">
            <option value="">Select a service...</option>
            <option value="kitchen">Kitchen Remodel</option>
            <option value="bathroom">Bathroom Remodel</option>
            <option value="basement">Basement Finishing</option>
            <option value="addition">Room Addition</option>
            <option value="outdoor">Deck/Outdoor</option>
            <option value="repairs">Repairs/Maintenance</option>
            <option value="construction">New Construction</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quote-description" className="form-label">Project Description *</label>
          <textarea
            id="quote-description"
            name="description"
            rows={4}
            required
            className="form-textarea"
            placeholder="Tell us about your project, including any specific requirements or timeline..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="quote-address" className="form-label">Address (for on-site estimate)</label>
          <input
            type="text"
            id="quote-address"
            name="address"
            className="form-input"
            placeholder="123 Main St, Denver, CO 80202"
            autoComplete="street-address"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full text-lg group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            <>
              Request Free Estimate
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-sm text-[rgb(var(--muted-foreground))]">
          🔒 We respect your privacy. Your information will never be shared.
        </p>
      </form>
    </>
  )

  if (!showWrapper) {
    return content
  }

  return (
    <section id="quote" className="section-padding bg-[rgb(var(--muted))]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="quote-form-wrapper p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {content}
        </motion.div>
      </div>
    </section>
  )
}
