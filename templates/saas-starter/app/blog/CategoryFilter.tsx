'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { BlogCategory } from '../lib/types'

interface CategoryFilterProps {
  categories: BlogCategory[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  
  return (
    <motion.div 
      className="flex flex-wrap gap-2 mb-12"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => setActiveCategory(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
            ${activeCategory === category.slug 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
        >
          {category.name}
        </button>
      ))}
    </motion.div>
  )
}
