import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface OfferCardProps {
  title: string
  description: string
  image: string
  badge: string
  badgeColor: string
  link: string
  className?: string
}

export function OfferCard({ title, description, image, badge, badgeColor, link, className }: OfferCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 hover:rotate-1 ${className}`}
    >
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`bg-gradient-to-r ${badgeColor} text-white border-none animate-pulse shadow-md`}>
            {badge}
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors">{title}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <Button
          variant="outline"
          className="w-full rounded-full group-hover:bg-pink-100 group-hover:text-pink-600 group-hover:border-pink-300 transition-colors duration-300 shadow-md hover:shadow-lg"
          asChild
        >
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Shop Now
          </Link>
        </Button>
      </div>
    </div>
  )
}

