'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Nav, Footer, MobileCTA, PageHeader, ProjectCardCompact, CTASection } from '@/components'
import { PROJECTS, Project } from '@/lib/data'
import { MapPin, Calendar, Clock, Check, ArrowLeft, ArrowRight } from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

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

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = params
  const project = PROJECTS.find(p => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = PROJECTS
    .filter(p => p.slug !== slug && p.category === project.category)
    .slice(0, 3)

  return (
    <>
      <Nav />
      <main className="overflow-hidden pb-20 md:pb-0">
        {/* Hero */}
        <PageHeader
          title={project.title}
          description={project.description}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Projects', href: '/projects' },
            { label: project.title, href: `/projects/${slug}` }
          ]}
          backgroundImage={project.image}
        />

        {/* Project Details */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-eyebrow">Project Story</span>
                <h2 className="section-title">About This Project</h2>
                <div className="prose prose-lg text-gray-600 mt-6">
                  <p>{project.description}</p>
                  <p>
                    Our team worked closely with the homeowner to understand their vision and 
                    deliver a result that exceeded expectations. From initial consultation through 
                    final walkthrough, we ensured every detail was perfect.
                  </p>
                </div>

                {/* Scope */}
                {project.scope && project.scope.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-bold text-dark-900 mb-4">Scope of Work</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.scope.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-[rgb(var(--muted))] rounded-2xl p-6 sticky top-28">
                  <h3 className="font-bold text-lg text-dark-900 mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                        <span className="text-lg">📁</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Category</div>
                        <div className="font-semibold text-dark-900">{project.category}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-semibold text-dark-900">{project.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold text-dark-900">{project.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Completed</div>
                        <div className="font-semibold text-dark-900">{project.completedDate}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Want Similar Results?
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="section-padding bg-[rgb(var(--muted))]">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-eyebrow">Gallery</span>
                <h2 className="section-title">Project Photos</h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {project.gallery.map((image, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Before/After */}
        {project.beforeImage && project.afterImage && (
          <section className="section-padding bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-eyebrow">Transformation</span>
                <h2 className="section-title">Before & After</h2>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={project.beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-dark-900/80 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Before
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={project.afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                    After
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <section className="section-padding bg-primary-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-1 text-accent-400 text-3xl mb-6">
                  {'★'.repeat(project.testimonial.rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-white font-semibold">— {project.testimonial.author}</div>
                <div className="text-primary-200 text-sm">{project.testimonial.location}</div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="section-padding bg-[rgb(var(--muted))]">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">More {project.category} Projects</h2>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-3 gap-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {relatedProjects.map((related, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <ProjectCardCompact project={related} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title={`Want a ${project.category} Project Like This?`}
          description="Get a free quote and let's discuss how we can transform your space."
          primaryCTA={{ label: 'Get Free Quote', href: '/contact' }}
        />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
