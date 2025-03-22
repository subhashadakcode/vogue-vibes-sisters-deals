import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { CashbackOffer } from "@/data/coupons"

interface CashbackCardProps {
  offer: CashbackOffer
  className?: string
}

export function CashbackCard({ offer, className }: CashbackCardProps) {
  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 group ${className}`}>
      <CardContent className="p-0">
        <div className="relative">
          {/* Store logo and exclusive badge */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md">
                <Image
                  src={offer.storeImage || "/placeholder.svg"}
                  alt={offer.store}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-sm">{offer.store}</h3>
              </div>
            </div>
            {offer.isExclusive && (
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none">Exclusive</Badge>
            )}
          </div>

          {/* Cashback details */}
          <div className="p-4 space-y-3">
            <div>
              <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-none mb-2">
                {offer.cashbackRate} Cashback
              </Badge>
              <h4 className="font-bold text-base mb-1">{offer.description}</h4>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Tag className="h-3 w-3" />
              <span>{offer.category}</span>
            </div>

            {/* Action button */}
            <Button
              className="w-full mt-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-md transition-all duration-300"
              asChild
            >
              <Link href={offer.link} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center justify-center">
                  Activate Cashback <ExternalLink className="h-4 w-4 ml-1" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

