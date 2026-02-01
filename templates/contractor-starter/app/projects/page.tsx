'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Nav, Footer, MobileCTA, PageHeader, ProjectCard, FilterBar, CTASection } from '@/components'
import { COMPANY, PROJECTS, PROJECT_CATEGORIES } from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1
    } 
  }
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showBeforeAfter, setShowBeforeAfter] = useState(true)

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory)

  // Get projects with before/after images
  const beforeAfterProjects = PROJECTS.filter(p => p.beforeImage && p.afterImage)

  return (
    <>
      <Nav />
      <main className="overflow-hidden pb-20 md:pb-0">
        {/* Page Header */}
        <PageHeader
          eyebrow="Portfolio"
          title="Our Work"
          description="See the quality of our craftsmanship in these recent projects from happy homeowners."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Projects', href: '/projects' }
          ]}
          centered
        />

        {/* Stats */}
        <section className="bg-[rgb(var(--muted))] py-6">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="text-primary-600 font-bold text-2xl">{COMPANY.projectsCompleted}+</span>
            <span className="text-gray-600 ml-2">Projects Completed</span>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-white sticky top-20 z-30 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <FilterBar
              categories={PROJECT_CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </section>

        {/* Project Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, y: -20 }}
                variants={staggerContainer}
              >
                {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Before/After Showcase */}
        {beforeAfterProjects.length > 0 && (
          <section className="section-padding bg-[rgb(var(--muted))]">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-eyebrow">Transformations</span>
                <h2 className="section-title">Before & After</h2>
                <p className="section-description mx-auto">
                  See the dramatic transformations we create for our clients.
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {beforeAfterProjects.slice(0, 2).map((project, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                  >
                    <BeforeAfterSlider
                      before={project.beforeImage!}
                      after={project.afterImage!}
                      title={project.title}
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-dark-900">{project.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{project.location}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTASection
          title="Your Project Could Be Next"
          description="Tell us about your vision and let's make it reality. We'd love to add your project to our portfolio."
          primaryCTA={{ label: 'Get Free Quote', href: '/contact' }}
        />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}

// Simple Before/After Slider Component
interface BeforeAfterSliderProps {
  before: string
  after: string
  title: string
}

function BeforeAfterSlider({ before, after, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <div 
      className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        setSliderPosition(Math.min(Math.max(x, 0), 100))
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
        setSliderPosition(Math.min(Math.max(x, 0), 100))
      }}
    >
      {/* After Image (Background) */}
      <Image
        src={after}
        alt={`${title} after`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={before}
          alt={`${title} before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-dark-900/80 text-white text-xs font-medium px-3 py-1 rounded-full">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
        After
      </div>
    </div>
  )
}
