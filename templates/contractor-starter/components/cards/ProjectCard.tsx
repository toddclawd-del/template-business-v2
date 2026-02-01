'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/data'
import { MapPin, ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  showOverlay?: boolean
}

const fadeIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export function ProjectCard({ project, showOverlay = true }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      className="project-card group cursor-pointer"
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Image */}
        <div className="project-card-image relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="project-card-badge">
            {project.category}
          </span>

          {/* Hover Overlay */}
          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
              <div className="flex items-center gap-1 text-white/70 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <span className="inline-flex items-center gap-2 text-white font-medium text-sm">
                View Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="text-[rgb(var(--muted-foreground))] text-sm mt-1">{project.description}</p>
          <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
            <MapPin className="w-4 h-4" />
            {project.location}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Compact version for related projects
interface ProjectCardCompactProps {
  project: Project
}

export function ProjectCardCompact({ project }: ProjectCardCompactProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-primary-200 hover:shadow-lg transition-all"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h4>
        <p className="text-sm text-gray-500 mt-1">{project.location}</p>
      </div>
    </Link>
  )
}
