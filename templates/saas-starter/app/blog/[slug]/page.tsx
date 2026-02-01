import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Nav, Footer } from '../../components'
import { NewsletterSignup, ShareButtons } from '../../components/shared'
import { BLOG_POSTS } from '../../lib/data'
import ArticleHeader from './ArticleHeader'
import ArticleContent from './ArticleContent'
import AuthorBio from './AuthorBio'
import RelatedPosts from './RelatedPosts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }
  
  return {
    title: `${post.title} | LaunchKit Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = BLOG_POSTS
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)
  
  return (
    <main className="overflow-hidden">
      <Nav />
      
      {/* Article Header */}
      <ArticleHeader post={post} />
      
      {/* Article Content */}
      <ArticleContent content={post.content} image={post.image} />
      
      {/* Tags & Share */}
      <section className="py-8 border-y border-[rgb(var(--border))]">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">Share:</span>
              <ShareButtons 
                url={`https://launchkit.com/blog/${post.slug}`}
                title={post.title}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Author Bio */}
      <AuthorBio author={post.author} />
      
      {/* Newsletter */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <NewsletterSignup 
            title="Enjoyed this article?"
            description="Subscribe for more insights delivered to your inbox."
          />
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}
      
      <Footer />
    </main>
  )
}
