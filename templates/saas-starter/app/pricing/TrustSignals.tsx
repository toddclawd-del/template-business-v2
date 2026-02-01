'use client'

import { motion } from 'framer-motion'
import type { TrustSignal } from '../lib/types'

interface TrustSignalsProps {
  signals: TrustSignal[]
}

export default function TrustSignals({ signals }: TrustSignalsProps) {
  return (
    <section className="py-12">
      <div className="container-default">
        <motion.div 
          className="flex flex-wrap justify-center gap-8 py-8 border-y border-[rgb(var(--border))]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-lg">{signal.icon}</span>
              <span>{signal.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
