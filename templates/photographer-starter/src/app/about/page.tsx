'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { photographer } from '@/data/mockData';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] overflow-hidden lg:sticky lg:top-32"
            >
              <Image
                src={photographer.portrait}
                alt={photographer.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pt-12"
            >
              <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">
                About Me
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-8">
                {photographer.name}
              </h1>
              
              <div className="prose prose-invert prose-neutral max-w-none">
                {photographer.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-neutral-400 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Awards */}
              <div className="mt-12 pt-12 border-t border-neutral-800">
                <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
                  Recognition
                </h2>
                <ul className="space-y-3">
                  {photographer.awards.map((award, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-neutral-300"
                    >
                      {award}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Equipment */}
              <div className="mt-12 pt-12 border-t border-neutral-800">
                <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
                  Equipment
                </h2>
                <div className="flex flex-wrap gap-3">
                  {photographer.equipment.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="px-4 py-2 bg-neutral-900 text-neutral-400 text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="mt-12 pt-12 border-t border-neutral-800">
                <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">
                  Follow My Journey
                </h2>
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

              {/* CTA */}
              <div className="mt-12 pt-12 border-t border-neutral-800">
                <h2 className="font-serif text-2xl text-white mb-4">
                  Ready to Create Together?
                </h2>
                <p className="text-neutral-400 mb-6">
                  I&apos;m always excited to hear about new projects and collaborations.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
