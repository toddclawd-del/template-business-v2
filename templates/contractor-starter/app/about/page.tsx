'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Nav, Footer, MobileCTA, TeamCard, Testimonials, CTASection } from '@/components'
import { COMPANY, TESTIMONIALS, TEAM_MEMBERS, CREDENTIALS, VALUES } from '@/lib/data'
import { Check } from 'lucide-react'

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

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden pb-20 md:pb-0">
        {/* Hero */}
        <section className="pt-20 section-padding bg-gradient-to-b from-[rgb(var(--muted))] to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=90"
                    alt="BuildRight team working on a construction project"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating stat card */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-primary-600">{COMPANY.yearsInBusiness}+</div>
                  <div className="text-gray-600 text-sm">Years in Business</div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-eyebrow">About Us</span>
                <h1 className="text-4xl md:text-5xl text-dark-900 mb-6 leading-tight">
                  Quality Craftsmanship, Honest Service Since 2009
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're not just contractors — we're your neighbors. For {COMPANY.yearsInBusiness} years, 
                  we've been helping homeowners throughout the Denver area transform their homes with 
                  quality craftsmanship and honest service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title">How We Got Started</h2>
              <div className="text-gray-600 text-lg leading-relaxed space-y-4 mt-6 text-left">
                <p>
                  In 2009, Mike Johnson founded {COMPANY.name} with one truck and a commitment to 
                  doing things the right way. After years of seeing other contractors cut corners 
                  and leave homeowners frustrated, he knew there had to be a better way.
                </p>
                <p>
                  Starting with small repair jobs and word-of-mouth referrals, we built our 
                  reputation one project at a time. Our focus on quality craftsmanship, honest 
                  communication, and standing behind our work helped us grow from a one-man 
                  operation to a full-service construction company.
                </p>
                <p>
                  Today, with over {COMPANY.projectsCompleted} projects completed and a team of 
                  skilled professionals, we're proud to be one of Denver's most trusted contractors. 
                  But our values haven't changed — we still treat every project like it's our own home.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats-bar">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                { number: `${COMPANY.yearsInBusiness}+`, label: 'Years Experience' },
                { number: `${COMPANY.projectsCompleted}+`, label: 'Projects Completed' },
                { number: '5.0', label: 'Google Rating' },
                { number: '100%', label: 'Satisfaction Guarantee' },
              ].map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-[rgb(var(--muted))]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {VALUES.map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 text-center"
                >
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="font-bold text-xl text-dark-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">Our Team</span>
              <h2 className="section-title">Meet the Experts</h2>
              <p className="section-description mx-auto">
                Our experienced team brings decades of combined experience to every project.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {TEAM_MEMBERS.map((member, i) => (
                <TeamCard key={i} member={member} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-[rgb(var(--muted))]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-eyebrow">Credentials</span>
              <h2 className="section-title">Credentials You Can Trust</h2>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {CREDENTIALS.map((credential, i) => (
                  <div key={i} className="credential-item">
                    <div className="credential-icon">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Why Homeowners Choose {COMPANY.name}</h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                'Free Estimates',
                'Clean Job Sites',
                'On-Time Completion',
                'Permit Handling',
                'No Surprise Bills',
                '2-Year Warranty',
                'Daily Updates',
                'Background Checked',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[rgb(var(--muted))] rounded-lg">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <div id="reviews">
          <Testimonials testimonials={TESTIMONIALS.slice(0, 3)} />
        </div>

        {/* CTA */}
        <CTASection
          title="Ready to Start Your Project?"
          description="Join the hundreds of satisfied homeowners who've trusted us with their projects."
          primaryCTA={{ label: 'Get Free Quote', href: '/contact' }}
          secondaryCTA={{ label: `Call ${COMPANY.phone}`, href: `tel:${COMPANY.phone}` }}
        />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
