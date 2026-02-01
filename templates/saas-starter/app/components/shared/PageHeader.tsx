'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  children?: React.ReactNode
}

export default function PageHeader({ 
  eyebrow, 
  title, 
  description, 
  centered = false,
  children 
}: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-default">
        <motion.div 
          className={`${centered ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <span className="section-eyebrow">{eyebrow}</span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
