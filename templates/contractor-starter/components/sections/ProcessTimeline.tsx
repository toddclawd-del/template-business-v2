'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  step: number
  title: string
  duration: string
  description: string
}

interface ProcessTimelineProps {
  title?: string
  steps: ProcessStep[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    } 
  }
}

export function ProcessTimeline({ title = "How It Works", steps }: ProcessTimelineProps) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Our Process</span>
          <h2 className="section-title">{title}</h2>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <motion.div
          className="hidden md:block relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Connecting Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-primary-100" />

          <div className="grid" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative text-center px-4"
              >
                {/* Step Number */}
                <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-primary-600 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-primary-600/30 mb-6">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="font-bold text-dark-900 mb-1">{step.title}</h3>
                {step.duration && (
                  <p className="text-sm text-primary-600 font-medium mb-2">{step.duration}</p>
                )}
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile: Vertical Timeline */}
        <motion.div
          className="md:hidden relative pl-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-primary-100" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative flex gap-6"
              >
                {/* Step Number */}
                <div className="absolute -left-8 w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-primary-600/30 z-10">
                  {step.step}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-bold text-dark-900 mb-1">{step.title}</h3>
                  {step.duration && (
                    <p className="text-sm text-primary-600 font-medium mb-2">{step.duration}</p>
                  )}
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
