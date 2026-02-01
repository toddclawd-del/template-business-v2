'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface NewsletterSignupProps {
  title?: string
  description?: string
  buttonText?: string
  compact?: boolean
}

export default function NewsletterSignup({
  title = "Stay in the loop",
  description = "Get the latest posts and updates delivered to your inbox.",
  buttonText = "Subscribe",
  compact = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('success')
    setEmail('')
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-slate-800
                     focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900
                     transition-all placeholder:text-gray-400"
          required
          disabled={status === 'loading' || status === 'success'}
        />
        <button
          type="submit"
          className="btn-primary whitespace-nowrap"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : buttonText}
        </button>
      </form>
    )
  }

  return (
    <motion.div 
      className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30
                 rounded-3xl p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-slate-800
                     focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900
                     transition-all placeholder:text-gray-400"
          required
          disabled={status === 'loading' || status === 'success'}
        />
        <button
          type="submit"
          className="btn-primary whitespace-nowrap"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : buttonText}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400 text-sm mt-4">
          Thanks for subscribing! Check your inbox to confirm.
        </p>
      )}
    </motion.div>
  )
}
