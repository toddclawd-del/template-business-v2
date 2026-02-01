'use client'

import { motion } from 'framer-motion'
import type { ComparisonFeature } from '../lib/types'

interface ComparisonTableProps {
  data: ComparisonFeature[]
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  const competitors = data[0]?.competitors.map(c => c.name) || []
  
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
      )
    }
    if (value === false) {
      return (
        <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 flex items-center justify-center mx-auto">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      )
    }
    return <span className="text-gray-600 dark:text-gray-400 text-sm">{value}</span>
  }
  
  return (
    <section className="section-padding bg-[rgb(var(--muted))]">
      <div className="container-default">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">Compare</span>
          <h2 className="section-title">See how we stack up</h2>
          <p className="section-description mx-auto">
            We're proud to offer more features and better value than the competition.
          </p>
        </motion.div>
        
        <motion.div 
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[600px] border-collapse rounded-2xl overflow-hidden border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
            <thead>
              <tr className="bg-[rgb(var(--muted))]">
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white border-b border-[rgb(var(--border))]">
                  Feature
                </th>
                <th className="px-6 py-4 text-center font-semibold text-primary-600 dark:text-primary-400 border-b border-[rgb(var(--border))]">
                  LaunchKit
                </th>
                {competitors.map((competitor) => (
                  <th key={competitor} className="px-6 py-4 text-center font-semibold text-gray-500 dark:text-gray-400 border-b border-[rgb(var(--border))]">
                    {competitor}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr 
                  key={index} 
                  className="border-b border-[rgb(var(--border))] last:border-b-0 hover:bg-[rgb(var(--muted))] transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderValue(row.us)}
                  </td>
                  {row.competitors.map((competitor, compIndex) => (
                    <td key={compIndex} className="px-6 py-4 text-center">
                      {renderValue(competitor.value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
