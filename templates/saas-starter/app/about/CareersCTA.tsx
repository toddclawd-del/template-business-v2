'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CareersCTA() {
  return (
    <section className="section-padding-sm">
      <div className="container-default">
        <motion.div 
          className="cta-section text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join our team
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              We're always looking for talented people who share our passion for building great products. Check out our open positions.
            </p>
            <Link 
              href="#"
              className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
            >
              View Open Positions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
