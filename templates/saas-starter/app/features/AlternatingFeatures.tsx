'use client'

import { motion } from 'framer-motion'
import type { FeatureDetail } from '../lib/types'

interface AlternatingFeaturesProps {
  features: FeatureDetail[]
}

export default function AlternatingFeatures({ features }: AlternatingFeaturesProps) {
  return (
    <section className="section-padding">
      <div className="container-default">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Deep Dive</span>
          <h2 className="section-title">Powerful features in detail</h2>
        </motion.div>
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Image - alternates sides */}
              <motion.div
                className={`relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 aspect-[4/3] flex items-center justify-center">
                  <span className="text-8xl">{feature.icon}</span>
                </div>
              </motion.div>
              
              {/* Content */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                
                {feature.bullets && (
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                        <span className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
