'use client';

import { motion } from 'framer-motion';
import { photographer } from '@/data/mockData';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-widest uppercase text-neutral-500 mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mb-6"
          >
            Let&apos;s Create Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            I&apos;d love to hear about your project. Fill out the form below and I&apos;ll
            get back to you within 24-48 hours.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="lg:sticky lg:top-32 space-y-12">
                {/* Direct Contact */}
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${photographer.email}`}
                      className="block text-white hover:text-neutral-300 transition-colors"
                    >
                      {photographer.email}
                    </a>
                    <a
                      href={`tel:${photographer.phone}`}
                      className="block text-neutral-400 hover:text-white transition-colors"
                    >
                      {photographer.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
                    Based In
                  </h3>
                  <p className="text-neutral-400">
                    {photographer.location}
                    <br />
                    <span className="text-neutral-600">Available worldwide</span>
                  </p>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
                    Current Availability
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-neutral-400">Accepting bookings for 2024-2025</span>
                    </div>
                    <p className="text-neutral-600 text-sm ml-5">
                      Limited wedding dates remaining
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
                    Follow Along
                  </h3>
                  <div className="flex gap-6">
                    {photographer.socialLinks.instagram && (
                      <a
                        href={photographer.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        Instagram
                      </a>
                    )}
                    {photographer.socialLinks.behance && (
                      <a
                        href={photographer.socialLinks.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        Behance
                      </a>
                    )}
                    {photographer.socialLinks.twitter && (
                      <a
                        href={photographer.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-6 bg-neutral-900 border border-neutral-800">
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    <span className="text-white">Quick response guaranteed.</span>
                    {' '}I personally read every inquiry and aim to respond within 24 hours.
                    For urgent matters, please include &quot;URGENT&quot; in your subject.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
