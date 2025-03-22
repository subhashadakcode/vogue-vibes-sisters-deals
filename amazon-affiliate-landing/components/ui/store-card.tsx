import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface StoreCardProps {
  store: {
    id: number
    name: string
    logo: string
    cashbackRate: string
    link: string
  }
  className?: string
}

export function StoreCard({ store, className }: StoreCardProps) {
  return (
    <Card
      className={`overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 ${className}`}
    >
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="relative h-16 w-16 mb-3">
          <Image
            src={store.logo || "/placeholder.svg"}
            alt={store.name}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <h3 className="font-medium text-sm mb-1">{store.name}</h3>
        <p className="text-xs text-green-600 font-medium mb-3">{store.cashbackRate}</p>
        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-md hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-colors"
          asChild
        >
          <Link href={store.link} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center justify-center text-xs">
              Visit <ExternalLink className="h-3 w-3 ml-1" />
            </span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

