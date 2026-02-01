'use client'

import { motion } from 'framer-motion'
import type { CompanyValue } from '../lib/types'

interface ValuesSectionProps {
  values: CompanyValue[]
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-default">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Our Values</span>
          <h2 className="section-title">What we believe</h2>
          <p className="section-description mx-auto">
            These principles guide everything we do.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-[rgb(var(--surface))] rounded-2xl p-8 border border-[rgb(var(--border))] text-center hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/50 dark:to-primary-800/50 flex items-center justify-center text-3xl mb-5">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
