'use client'

import { motion } from 'framer-motion'
import type { ChangelogEntry } from '../lib/types'

interface ChangelogTimelineProps {
  entries: ChangelogEntry[]
}

export default function ChangelogTimeline({ entries }: ChangelogTimelineProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
          
          {/* Entries */}
          <div className="space-y-12">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.version}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-100 dark:ring-primary-900/50" style={{ left: '10px' }} />
                
                {/* Date */}
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {new Date(entry.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
                
                {/* Card */}
                <div className="bg-[rgb(var(--surface))] rounded-2xl p-6 md:p-8 border border-[rgb(var(--border))]">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {entry.version}
                  </h3>
                  
                  {entry.features && entry.features.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          ✨ New
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-gray-600 dark:text-gray-400 text-sm">
                        {entry.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {entry.improvements && entry.improvements.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                          🔧 Improved
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-gray-600 dark:text-gray-400 text-sm">
                        {entry.improvements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {entry.fixes && entry.fixes.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                          🐛 Fixed
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-gray-600 dark:text-gray-400 text-sm">
                        {entry.fixes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {entry.breaking && entry.breaking.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                          ⚠️ Breaking
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-gray-600 dark:text-gray-400 text-sm">
                        {entry.breaking.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
