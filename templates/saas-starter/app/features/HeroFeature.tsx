'use client'

import { motion } from 'framer-motion'
import type { FeatureDetail } from '../lib/types'

interface HeroFeatureProps {
  feature: FeatureDetail
}

export default function HeroFeature({ feature }: HeroFeatureProps) {
  return (
    <section className="section-padding-sm">
      <div className="container-default">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gray-100 h-10 flex items-center px-4 gap-2 border-b border-gray-200 dark:border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-800 dark:to-slate-900 aspect-[4/3] flex items-center justify-center">
              <div className="text-6xl">{feature.icon}</div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="section-eyebrow">Core Feature</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
            
            {feature.bullets && (
              <ul className="space-y-3">
                {feature.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
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
            
            <a 
              href="/pricing" 
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all"
            >
              See pricing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
