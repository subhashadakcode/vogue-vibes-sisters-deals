import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-12 md:py-20 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge className="text-sm px-3 py-1 bg-pink-100 text-pink-600 border-none">Special Offers</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Discover Amazing Deals on Top Products
            </h1>
            <p className="text-lg text-gray-600">
              Find the best prices on your favorite items from Amazon. Exclusive deals updated daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 border-none shadow-lg hover:shadow-xl"
                asChild
              >
                <Link
                  href="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 group-hover:scale-105 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full hover:bg-pink-100 hover:text-pink-600 hover:border-pink-300 transition-colors duration-300 shadow-md hover:shadow-lg"
                asChild
              >
                <Link
                  href="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Today's Deals
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-500 hover:rotate-1">
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKxbZ4Mdf77vhe4c7rOzbSnJcPNYRjgMp0PUC6BALEGTP-MFadiRvR3qx2ml6oHlAqBo4adIu7sx0RKqU9_2_az0LAEhSbzQnlPuYlP5-DtoNiO_CiI9jTcSeMIvXMF4IzTZ6qotlqZFxhZETUGGSmJaGvGp9czKA971ipsgmnaogd3Y8M5oN4SffKCTik/w640-h292/Blog%20Vogue%20Vibes%20Sisters,%20Beauty%20and%20Wellness%20-%20Amazon.PNG"
                alt="Vogue Vibes Sisters Banner"
                width={500}
                height={300}
                className="rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

