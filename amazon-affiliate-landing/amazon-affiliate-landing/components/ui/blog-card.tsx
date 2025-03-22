import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { BlogPost } from "@/data/products"

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link href={post.link} className="group" target="_blank" rel="noopener noreferrer">
      <Card
        className={`overflow-hidden h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 ${className}`}
      >
        <div className="relative">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={350}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <span className="text-white text-sm">{post.date}</span>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors">{post.title}</h3>
          <p className="text-gray-500">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

