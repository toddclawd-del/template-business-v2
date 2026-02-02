'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/mockData';
import LightboxGallery from '@/components/LightboxGallery';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>

            <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">
              {project.category}
            </p>
            
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-neutral-400 mb-8">
              {project.client && (
                <div>
                  <span className="text-neutral-600">Client: </span>
                  {project.client}
                </div>
              )}
              <div>
                <span className="text-neutral-600">Date: </span>
                {new Date(project.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <LightboxGallery images={project.images} title={project.title} />
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="group py-12 md:pr-12 border-b md:border-b-0 md:border-r border-neutral-800"
              >
                <p className="text-xs tracking-widest uppercase text-neutral-500 mb-2">
                  Previous Project
                </p>
                <p className="font-serif text-2xl text-white group-hover:text-neutral-300 transition-colors">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div className="hidden md:block" />
            )}

            {nextProject && (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group py-12 md:pl-12 text-right"
              >
                <p className="text-xs tracking-widest uppercase text-neutral-500 mb-2">
                  Next Project
                </p>
                <p className="font-serif text-2xl text-white group-hover:text-neutral-300 transition-colors">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
