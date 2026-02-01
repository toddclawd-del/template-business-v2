'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { COMPANY } from '@/lib/data'
import { Check } from 'lucide-react'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  showPhone?: boolean
  showTrustBadges?: boolean
  variant?: 'light' | 'dark' | 'blue'
}

export function CTASection({
  title = "Ready to Start Your Project?",
  description = "Get a free, no-obligation estimate. We'll visit your home, discuss your vision, and provide a detailed quote within 48 hours.",
  primaryCTA = { label: "Schedule Free Consultation", href: "/contact" },
  secondaryCTA,
  showPhone = true,
  showTrustBadges = true,
  variant = 'light'
}: CTASectionProps) {
  const bgClass = variant === 'blue' 
    ? 'bg-primary-600' 
    : variant === 'dark' 
    ? 'bg-dark-900' 
    : 'bg-[rgb(var(--muted))]'
  
  const textClass = variant === 'light' 
    ? 'text-dark-900' 
    : 'text-white'
  
  const descClass = variant === 'light'
    ? 'text-[rgb(var(--muted-foreground))]'
    : 'text-gray-300'

  return (
    <section className={`section-padding ${bgClass} relative overflow-hidden`}>
      {/* Background pattern */}
      {variant === 'blue' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`section-title mb-4 ${textClass}`}>{title}</h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${descClass}`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href={primaryCTA.href}
              className={variant === 'light' ? 'btn-primary text-lg' : 'btn-accent text-lg'}
            >
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link 
                href={secondaryCTA.href}
                className={variant === 'light' ? 'btn-secondary text-lg' : 'btn-secondary bg-white text-lg'}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>

          {showPhone && (
            <p className={variant === 'light' ? 'text-gray-600' : 'text-gray-300'}>
              or call <a href={`tel:${COMPANY.phone}`} className={`font-semibold ${variant === 'light' ? 'text-primary-600' : 'text-white'} hover:underline`}>{COMPANY.phone}</a>
            </p>
          )}

          {showTrustBadges && (
            <div className={`flex flex-wrap justify-center gap-4 mt-8 text-sm ${variant === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              {['Licensed', 'Insured', 'Satisfaction Guaranteed'].map((badge, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Check className={`w-4 h-4 ${variant === 'light' ? 'text-green-600' : 'text-green-400'}`} />
                  {badge}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
