import { SectionHeader } from "@/components/ui/section-header"
import { BlogCard } from "@/components/ui/blog-card"
import { blogPosts } from "@/data/products"
import { siteConfig } from "@/config/site-config"

export function BlogSection() {
  return (
    <section className="py-12 bg-white animate-on-scroll">
      <div className="container mx-auto px-4">
        <SectionHeader title="From Our Blog" viewAllLink={siteConfig.mainBlogUrl} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

