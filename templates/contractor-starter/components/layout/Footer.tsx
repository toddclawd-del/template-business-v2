'use client'

import Link from 'next/link'
import { Facebook, Instagram, Phone, Mail } from 'lucide-react'
import { COMPANY, SERVICES } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-900 text-white">
      {/* CTA strip */}
      <div className="bg-primary-600 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Ready to start your project?</h3>
              <p className="text-primary-100">Get a free estimate today.</p>
            </div>
            <Link href="/contact" className="btn-accent">
              Get Free Estimate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                B
              </span>
              <span className="font-display text-xl">{COMPANY.name}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{COMPANY.tagline}</p>
            <div className="text-sm text-gray-500 space-y-1 mb-6">
              <p>{COMPANY.license}</p>
              <p>{COMPANY.insurance}</p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {SERVICES.slice(0, 5).map((service, i) => (
                <li key={i}>
                  <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary-400 hover:text-primary-300 transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="space-y-3 text-gray-400 text-sm not-italic">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-500" />
                <span>{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>{COMPANY.email}</span>
              </a>
              <p className="pt-2">
                {COMPANY.address.street}<br />
                {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
              </p>
            </address>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <div className="text-gray-400 text-sm space-y-1">
              {COMPANY.hours.map((h, i) => (
                <p key={i}>{h.days}: {h.hours}</p>
              ))}
              <p className="mt-3 text-primary-400 font-medium">24/7 Emergency Service</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
