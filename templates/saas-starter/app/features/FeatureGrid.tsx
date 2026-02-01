'use client'

import { motion } from 'framer-motion'
import type { Feature } from '../lib/types'

interface FeatureGridProps {
  features: Feature[]
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="section-padding bg-[rgb(var(--muted))]">
      <div className="container-default">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="section-title">Built for modern teams</h2>
          <p className="section-description mx-auto">
            Every feature is designed to help you move faster and work smarter.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="feature-card-icon">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
