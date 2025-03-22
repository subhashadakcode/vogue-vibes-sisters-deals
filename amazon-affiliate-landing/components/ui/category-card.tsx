import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  name: string
  icon: React.ReactNode
  link: string
  className?: string
}

export function CategoryCard({ name, icon, link, className }: CategoryCardProps) {
  return (
    <Link href={link} className="group" target="_blank" rel="noopener noreferrer">
      <div
        className={cn(
          "flex flex-col items-center p-4 rounded-lg bg-pink-50 hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:rotate-1",
          className,
        )}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center mb-3 group-hover:from-pink-300 group-hover:to-purple-300 transition-colors duration-300 transform group-hover:scale-110 shadow-md">
          <span className="text-pink-600">{icon}</span>
        </div>
        <span className="text-sm font-medium text-center group-hover:text-pink-600 transition-colors">{name}</span>
      </div>
    </Link>
  )
}

