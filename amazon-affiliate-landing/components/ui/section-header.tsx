import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectionHeaderProps {
  title: string
  viewAllLink?: string
  viewAllText?: string
  className?: string
}

export function SectionHeader({ title, viewAllLink, viewAllText = "View All", className }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {viewAllLink && (
        <Link
          href={viewAllLink}
          className="text-pink-600 flex items-center text-sm font-medium hover:underline group"
          target="_blank"
          rel="noopener noreferrer"
        >
          {viewAllText} <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  )
}

