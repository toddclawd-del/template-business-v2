'use client'

import { motion } from 'framer-motion'
import type { ContactOption } from '../lib/types'

interface ContactOptionsProps {
  options: ContactOption[]
}

export default function ContactOptions({ options }: ContactOptionsProps) {
  return (
    <section className="section-padding-sm">
      <div className="container-default">
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              className="bg-[rgb(var(--surface))] rounded-2xl p-8 text-center border border-[rgb(var(--border))] hover:border-primary-200 dark:hover:border-primary-800 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-3xl mb-5">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
                {option.description}
              </p>
              <a 
                href={option.cta.href}
                className="btn-secondary text-sm"
              >
                {option.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
