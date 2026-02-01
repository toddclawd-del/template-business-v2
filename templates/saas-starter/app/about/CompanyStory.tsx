'use client'

import { motion } from 'framer-motion'

interface CompanyStoryProps {
  story: {
    intro: string
    paragraphs: string[]
  }
}

export default function CompanyStory({ story }: CompanyStoryProps) {
  return (
    <section className="section-padding-sm">
      <div className="container-narrow">
        {/* Hero Image */}
        <motion.div
          className="rounded-3xl overflow-hidden mb-12 aspect-[16/7] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-6xl md:text-8xl">🚀</span>
        </motion.div>
        
        {/* Story */}
        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-snug">
            {story.intro}
          </p>
          
          {story.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
