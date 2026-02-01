import type { Metadata } from 'next'
import { Nav, Footer } from '../components'
import { PageHeader, NewsletterSignup } from '../components/shared'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../lib/data'
import FeaturedPost from './FeaturedPost'
import CategoryFilter from './CategoryFilter'
import BlogGrid from './BlogGrid'

export const metadata: Metadata = {
  title: 'Blog | LaunchKit',
  description: 'Tips, tutorials, and product updates from the LaunchKit team.',
}

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0]
  const regularPosts = BLOG_POSTS.filter(post => post.slug !== featuredPost.slug)
  
  return (
    <main className="overflow-hidden">
      <Nav />
      
      <PageHeader
        eyebrow="Blog"
        title="Insights & Updates"
        description="Tips, tutorials, and product news from our team."
      />
      
      {/* Featured Post */}
      <FeaturedPost post={featuredPost} />
      
      {/* Category Filter + Grid */}
      <section className="section-padding">
        <div className="container-default">
          <CategoryFilter categories={BLOG_CATEGORIES} />
          <BlogGrid posts={regularPosts} />
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="section-padding-sm">
        <div className="container-default">
          <NewsletterSignup 
            title="Stay in the loop"
            description="Get the latest posts delivered to your inbox."
          />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
