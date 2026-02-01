'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FAQItem } from '../lib/types'

interface PricingFAQProps {
  items: FAQItem[]
}

export default function PricingFAQ({ items }: PricingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Common questions</h2>
        </motion.div>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-button"
              >
                <span>{item.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'faq-icon-open' : ''}`}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
