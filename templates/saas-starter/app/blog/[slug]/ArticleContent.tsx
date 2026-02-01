'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ArticleContentProps {
  content: string
  image: string
}

export default function ArticleContent({ content, image }: ArticleContentProps) {
  // Simple markdown-like rendering (in production, use MDX or a proper parser)
  const renderContent = (text: string) => {
    const lines = text.split('\n')
    const elements: JSX.Element[] = []
    
    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            {line.replace('# ', '')}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
            {line.replace('### ', '')}
          </h3>
        )
      } else if (line.trim() === '') {
        // Skip empty lines
      } else {
        elements.push(
          <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {line}
          </p>
        )
      }
    })
    
    return elements
  }
  
  return (
    <article>
      {/* Featured Image */}
      <motion.div 
        className="container-default mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative aspect-[16/7] rounded-3xl overflow-hidden">
          <Image
            src={image}
            alt="Article featured image"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="container-narrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="prose prose-lg max-w-none">
          {renderContent(content)}
        </div>
      </motion.div>
    </article>
  )
}
