'use client'

import { motion } from 'framer-motion'
import type { CompanyStat } from '../lib/types'

interface StatsSectionProps {
  stats: CompanyStat[]
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-[rgb(var(--muted))]">
      <div className="container-default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
