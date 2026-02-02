'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/mockData';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
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
            Services & Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mb-6"
          >
            Investment in Memories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Every session is tailored to your unique story. Below are starting points—
            let&apos;s discuss your vision and create a custom package that fits your needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white text-center mb-16"
          >
            The Experience
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We begin with a conversation about your vision, style preferences, and the story you want to tell. This helps me understand exactly what you\'re looking for.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Together, we\'ll plan every detail—from locations and timing to wardrobe and styling. I\'ll handle the logistics so you can focus on enjoying the experience.'
              },
              {
                step: '03',
                title: 'The Session',
                description: 'On the day, my goal is to make you feel comfortable and confident. I guide you through natural poses while capturing genuine moments and emotions.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Within 2-3 weeks, you\'ll receive a beautifully curated gallery of edited images, ready to share, print, and treasure for years to come.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl text-neutral-700">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white text-center mb-16"
          >
            Common Questions
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'For weddings, I recommend booking 8-12 months in advance. For portraits and other sessions, 2-4 weeks is typically sufficient, though peak seasons may require more lead time.'
              },
              {
                q: 'Do you travel for sessions?',
                a: 'Absolutely! I\'m based in New York but regularly travel for destination weddings and projects worldwide. Travel fees vary by location.'
              },
              {
                q: 'What should I wear?',
                a: 'I provide a detailed style guide upon booking, with recommendations tailored to your session type and location. We\'ll also discuss wardrobe during our consultation.'
              },
              {
                q: 'When will I receive my photos?',
                a: 'Portrait sessions are delivered within 2 weeks. Weddings and larger projects are delivered within 6-8 weeks. Sneak peeks are provided within 48 hours.'
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes! For weddings and larger packages, I offer flexible payment plans. A retainer is required to secure your date, with the balance due before your session.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-neutral-800 pb-8"
              >
                <h3 className="font-serif text-lg text-white mb-3">{item.q}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-neutral-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white mb-6"
          >
            Ready to Begin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 mb-10"
          >
            Let&apos;s discuss your vision and create something beautiful together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
