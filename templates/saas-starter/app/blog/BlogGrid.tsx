'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '../lib/types'

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link 
            href={`/blog/${post.slug}`}
            className="block bg-[rgb(var(--surface))] rounded-2xl overflow-hidden border border-[rgb(var(--border))] hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2 block">
                {post.category}
              </span>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}
