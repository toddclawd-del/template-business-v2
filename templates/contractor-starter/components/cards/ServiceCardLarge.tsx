'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Service } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

interface ServiceCardLargeProps {
  service: Service
  index?: number
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function ServiceCardLarge({ service, index = 0 }: ServiceCardLargeProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
        
        {/* Floating Icon */}
        <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-600/30 text-2xl">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-8">
        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Feature Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 3).map((feature, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {feature}
            </span>
          ))}
          {service.features.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              +{service.features.length - 3} more
            </span>
          )}
        </div>

        {/* Link */}
        <Link 
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}
