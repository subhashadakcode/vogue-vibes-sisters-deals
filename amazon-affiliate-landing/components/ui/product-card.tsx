import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/data/products"
import { formatCurrency } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group transform perspective hover:-translate-y-2 hover:rotate-1 ${className}`}
    >
      <div className="relative">
        <Link href={product.link} target="_blank" rel="noopener noreferrer">
          <div className="transform-style-3d group-hover:rotate-y-6 transition-transform duration-700">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-contain p-4 transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
            />
          </div>
        </Link>
        <div className="absolute top-2 right-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white shadow-sm">
            <Heart className="h-5 w-5 text-gray-400 hover:text-pink-500 transition-colors" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        {product.discount > 0 && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-none animate-pulse shadow-md">
              {product.discount}% OFF
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <Link href={product.link} target="_blank" rel="noopener noreferrer">
          <h3 className="font-medium mb-1 line-clamp-1 group-hover:text-pink-600 transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-pink-600">{formatCurrency(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through ml-2">{formatCurrency(product.originalPrice)}</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-pink-100 hover:text-pink-600 p-0 h-8 w-8 transition-colors shadow-sm"
            asChild
          >
            <Link href={product.link} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">View product</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

