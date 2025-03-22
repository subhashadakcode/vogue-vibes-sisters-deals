"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { dealOfTheDay } from "@/data/products"
import { formatTime, formatCurrency } from "@/lib/utils"

export function DealOfDaySection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours < 0 ? 23 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Deal of the Day
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Ends in:</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-mono shadow-md">
              {formatTime(timeLeft.hours, timeLeft.minutes, timeLeft.seconds)}
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 md:p-8 flex items-center justify-center">
              <div className="relative group perspective">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white p-6 rounded-lg transform-style-3d group-hover:rotate-y-6 transition-transform duration-700">
                  <Image
                    src={dealOfTheDay.image || "/placeholder.svg"}
                    alt={dealOfTheDay.name}
                    width={400}
                    height={400}
                    className="mx-auto transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-4">
                <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-none mb-2 animate-pulse shadow-sm">
                  {dealOfTheDay.discount}% OFF
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{dealOfTheDay.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(dealOfTheDay.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">{dealOfTheDay.rating} (120 reviews)</span>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-pink-600">{formatCurrency(dealOfTheDay.price)}</span>
                  <span className="text-gray-500 line-through ml-2">{formatCurrency(dealOfTheDay.originalPrice)}</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {dealOfTheDay.features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-pink-500 shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 border-none shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href={dealOfTheDay.link} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 group-hover:scale-105 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Buy Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full group hover:bg-pink-100 hover:text-pink-600 hover:border-pink-300 transition-colors duration-300 shadow-md hover:shadow-lg"
                  asChild
                >
                  <Link href={dealOfTheDay.link} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center justify-center">
                      View More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

