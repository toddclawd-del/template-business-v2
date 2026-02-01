'use client'

import { motion } from 'framer-motion'
import type { Investor } from '../lib/types'

interface InvestorsSectionProps {
  investors: Investor[]
}

export default function InvestorsSection({ investors }: InvestorsSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-default">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Backed By</span>
          <h2 className="section-title">Trusted by the best</h2>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {investors.map((investor, index) => (
            <motion.div
              key={index}
              className="text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {investor.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
