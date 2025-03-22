"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Copy, Check, ExternalLink, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import type { Coupon } from "@/data/coupons"

interface CouponCardProps {
  coupon: Coupon
  className?: string
}

export function CouponCard({ coupon, className }: CouponCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(coupon.code)
    setCopied(true)
    toast({
      title: "Coupon code copied!",
      description: `${coupon.code} has been copied to your clipboard.`,
    })
    setTimeout(() => setCopied(false), 3000)
  }

  // Calculate days remaining until expiry
  const today = new Date()
  const expiryDate = new Date(coupon.expiryDate)
  const daysRemaining = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-500 group ${className}`}>
      <CardContent className="p-0">
        <div className="relative">
          {/* Store logo and cashback badge */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md">
                <Image
                  src={coupon.storeImage || "/placeholder.svg"}
                  alt={coupon.store}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-sm">{coupon.store}</h3>
                {coupon.cashback && <p className="text-xs text-green-600 font-medium">{coupon.cashback} Cashback</p>}
              </div>
            </div>
            {coupon.isExclusive && (
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none">Exclusive</Badge>
            )}
          </div>

          {/* Coupon details */}
          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none mb-2">
                  {coupon.discount}
                </Badge>
                <h4 className="font-bold text-base mb-1">{coupon.description}</h4>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{daysRemaining > 0 ? `${daysRemaining} days left` : "Expires today"}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Tag className="h-3 w-3" />
              <span>{coupon.category}</span>
            </div>

            {/* Coupon code and buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <div className="relative flex-1">
                <div className="bg-gray-100 border border-dashed border-gray-300 rounded-md p-2 text-center font-mono font-bold text-gray-700 relative overflow-hidden">
                  {coupon.code}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
                <div className="absolute -right-2 -top-2 h-4 w-4 bg-white rounded-full border border-gray-200"></div>
                <div className="absolute -right-2 -bottom-2 h-4 w-4 bg-white rounded-full border border-gray-200"></div>
                <div className="absolute -left-2 -top-2 h-4 w-4 bg-white rounded-full border border-gray-200"></div>
                <div className="absolute -left-2 -bottom-2 h-4 w-4 bg-white rounded-full border border-gray-200"></div>
              </div>
              <Button
                onClick={handleCopyCode}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-md transition-all duration-300"
                size="sm"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" /> Copy Code
                  </>
                )}
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full mt-3 rounded-md hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-colors"
              asChild
            >
              <Link href={coupon.link} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center justify-center">
                  Go to Store <ExternalLink className="h-4 w-4 ml-1" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

