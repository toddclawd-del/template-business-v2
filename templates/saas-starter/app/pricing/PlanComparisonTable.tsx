'use client'

import { motion } from 'framer-motion'
import type { PlanComparisonRow } from '../lib/types'

interface PlanComparisonTableProps {
  data: PlanComparisonRow[]
}

export default function PlanComparisonTable({ data }: PlanComparisonTableProps) {
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
          <span className="section-eyebrow">Compare Plans</span>
          <h2 className="section-title">Find the right plan for your team</h2>
        </motion.div>
        
        <motion.div 
          className="overflow-x-auto max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[500px] border-collapse rounded-2xl overflow-hidden border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
            <thead>
              <tr className="bg-[rgb(var(--muted))]">
                <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white border-b border-[rgb(var(--border))]">
                  Feature
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-300 border-b border-[rgb(var(--border))]">
                  Starter
                </th>
                <th className="px-6 py-4 text-center font-semibold text-primary-600 dark:text-primary-400 border-b border-[rgb(var(--border))]">
                  Pro
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-300 border-b border-[rgb(var(--border))]">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr 
                  key={index}
                  className="border-b border-[rgb(var(--border))] last:border-b-0 hover:bg-[rgb(var(--muted))] transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderValue(row.starter)}
                  </td>
                  <td className="px-6 py-4 text-center bg-primary-50/50 dark:bg-primary-900/10">
                    {renderValue(row.pro)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderValue(row.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
