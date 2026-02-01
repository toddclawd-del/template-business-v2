'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PRODUCT, NAV_LINKS, MOBILE_EXTRA_LINKS } from '../lib/data'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])
  
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div className="container-default">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="logo-text">{PRODUCT.name}</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`nav-link ${isActive(item.href) ? 'text-primary-600 dark:text-primary-400' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-ghost">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
          
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800"
            >
              <div className="py-6 space-y-1">
                {NAV_LINKS.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors
                      ${isActive(item.href) 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="border-t border-gray-100 dark:border-slate-800 my-4" />
                
                {MOBILE_EXTRA_LINKS.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors
                      ${isActive(item.href) 
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 space-y-3 px-4">
                  <button className="btn-secondary w-full">Sign In</button>
                  <button className="btn-primary w-full">Get Started</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
