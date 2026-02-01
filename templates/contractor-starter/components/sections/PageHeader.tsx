'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href: string
}

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  backgroundImage?: string
  trustBadges?: string[]
  ctas?: Array<{
    label: string
    href: string
    variant: 'primary' | 'secondary' | 'accent'
  }>
  centered?: boolean
  dark?: boolean // If true, white text on dark background
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    } 
  }
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  backgroundImage,
  trustBadges,
  ctas,
  centered = false,
  dark = false
}: PageHeaderProps) {
  const hasImage = !!backgroundImage

  return (
    <section className={`relative pt-20 ${hasImage ? 'min-h-[60vh]' : ''}`}>
      {/* Background Image */}
      {hasImage && (
        <>
          <div className="absolute inset-0">
            <Image 
              src={backgroundImage} 
              alt="" 
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-dark-950/60 to-dark-950/40" />
          </div>
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-6 ${hasImage ? 'py-24 md:py-32' : 'py-16 md:py-20'}`}>
        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={staggerContainer}
          className={`${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav 
              variants={fadeInUp}
              aria-label="Breadcrumb"
              className="mb-6"
            >
              <ol className={`flex items-center gap-2 text-sm ${hasImage || dark ? 'text-gray-300' : 'text-gray-500'}`}>
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {i > 0 && <ChevronRight className="w-4 h-4" />}
                    {i === breadcrumbs.length - 1 ? (
                      <span className={hasImage || dark ? 'text-white' : 'text-dark-900'}>{crumb.label}</span>
                    ) : (
                      <Link 
                        href={crumb.href} 
                        className={`hover:${hasImage || dark ? 'text-white' : 'text-primary-600'} transition-colors`}
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          )}

          {/* Trust Badges */}
          {trustBadges && trustBadges.length > 0 && (
            <motion.div variants={fadeInUp} className={`flex flex-wrap gap-3 mb-6 ${centered ? 'justify-center' : ''}`}>
              {trustBadges.map((badge, i) => (
                <span key={i} className="trust-badge-light">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>
          )}

          {/* Eyebrow */}
          {eyebrow && !hasImage && (
            <motion.span variants={fadeInUp} className="section-eyebrow">
              {eyebrow}
            </motion.span>
          )}

          {/* Title */}
          <motion.h1 
            variants={fadeInUp} 
            className={`text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight ${
              hasImage || dark ? 'text-white' : 'text-dark-900'
            }`}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p 
              variants={fadeInUp} 
              className={`text-xl leading-relaxed mb-8 ${
                hasImage || dark ? 'text-gray-300' : 'text-[rgb(var(--muted-foreground))]'
              }`}
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {ctas && ctas.length > 0 && (
            <motion.div 
              variants={fadeInUp} 
              className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}
            >
              {ctas.map((cta, i) => (
                <Link 
                  key={i}
                  href={cta.href}
                  className={`btn-${cta.variant} text-lg group`}
                >
                  {cta.label}
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background gradient for non-image headers */}
      {!hasImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--muted))] to-white pointer-events-none" />
      )}
    </section>
  )
}
