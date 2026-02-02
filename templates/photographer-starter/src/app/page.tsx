'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { photographer, projects, clients } from '@/data/mockData';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={projects[0].coverImage}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              {photographer.name}
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl tracking-widest uppercase">
              {photographer.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Featured Work</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              A curated selection of recent projects spanning editorial, weddings, and commercial photography.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-block text-sm tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
            >
              View All Work →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 md:py-32 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={photographer.portrait}
                alt={photographer.name}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                The Artist Behind the Lens
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                {photographer.bio}
              </p>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Based in {photographer.location}, I specialize in creating timeless imagery
                that captures the essence of every moment. My work has been featured in
                leading publications and trusted by luxury brands worldwide.
              </p>
              <Link
                href="/about"
                className="inline-block text-sm tracking-widest uppercase text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs tracking-widest uppercase text-neutral-500 mb-12"
          >
            Trusted By
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <span className="font-serif text-xl md:text-2xl text-white tracking-wider">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Whether you&apos;re planning a wedding, need stunning portraits, or seeking
              imagery for your brand, I&apos;d love to hear about your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
