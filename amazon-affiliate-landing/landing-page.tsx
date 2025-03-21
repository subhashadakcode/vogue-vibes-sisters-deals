"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef, type FormEvent } from "react"
import {
  ChevronRight,
  Heart,
  Menu,
  X,
  Star,
  ShoppingCart,
  Instagram,
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  BookOpen,
  Gamepad2,
  Dumbbell,
  ShoppingBag,
  ArrowRight,
  ExternalLink,
  Check,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Custom hook for detecting mobile view
import { useMobile } from "@/hooks/use-mobile"

export default function LandingPage() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const newsletterRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  // Add animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Handle newsletter subscription
  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate sending email to your Gmail
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real implementation, you would use a server action or API route
      // to send the email to your Gmail account
      console.log(`Subscription email sent to voguevibessisters@gmail.com: ${email}`)

      setIsSubscribed(true)
      setEmail("")

      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      })

      // Scroll to the newsletter section
      if (newsletterRef.current) {
        newsletterRef.current.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Categories for navigation with icons and links
  const categories = [
    {
      name: "Fashion",
      icon: <Shirt className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Fashion",
    },
    {
      name: "Home & Kitchen",
      icon: <Home className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Home%20%26%20Kitchen",
    },
    {
      name: "Beauty",
      icon: <Sparkles className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Beauty",
    },
    {
      name: "Grocery",
      icon: <ShoppingBag className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Grocery",
    },
  ]

  // All categories for header navigation
  const allCategories = [
    {
      name: "Electronics",
      icon: <Smartphone className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Electronics",
    },
    ...categories,
    {
      name: "Books",
      icon: <BookOpen className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Books",
    },
    {
      name: "Toys",
      icon: <Gamepad2 className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Toys",
    },
    {
      name: "Sports",
      icon: <Dumbbell className="h-5 w-5" />,
      link: "https://voguevibessisters.blogspot.com/search/label/Sports",
    },
  ]

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/519DDBTBbzL._AC_UY218_.jpg",
      category: "Electronics",
      link: "https://voguevibessisters.blogspot.com/search/label/Electronics",
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: 2499,
      originalPrice: 3999,
      discount: 38,
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/71Iit7U1S+L._AC_UL320_.jpg",
      category: "Electronics",
      link: "https://voguevibessisters.blogspot.com/search/label/Electronics",
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      price: 599,
      originalPrice: 999,
      discount: 40,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/81iKg6h6dtL._AC_UL320_.jpg",
      category: "Home & Kitchen",
      link: "https://voguevibessisters.blogspot.com/search/label/Home%20%26%20Kitchen",
    },
    {
      id: 4,
      name: "Cotton Blend T-Shirt",
      price: 499,
      originalPrice: 899,
      discount: 44,
      rating: 4.0,
      image: "https://m.media-amazon.com/images/I/714HhbdPhbL._AC_UL320_.jpg",
      category: "Fashion",
      link: "https://voguevibessisters.blogspot.com/search/label/Fashion",
    },
  ]

  // Deal of the day data
  const dealOfTheDay = {
    name: "Premium Noise Cancelling Headphones",
    price: 8999,
    originalPrice: 14999,
    discount: 40,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/81zfqfyItfL._SL1500_.jpg",
    link: "https://amzn.to/4kOhixR",
    features: [
      "Active Noise Cancellation",
      "40 Hours Battery Life",
      "Premium Sound Quality",
      "Comfortable Over-Ear Design",
    ],
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  }

  // Recent blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Budget Smartphones in 2023",
      excerpt:
        "Looking for a new smartphone without breaking the bank? Check out our top picks for budget-friendly options...",
      image:
        "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/2025/7Feb/Hero-banner._CB549141821_.jpg",
      date: "Oct 15, 2023",
      link: "https://voguevibessisters.blogspot.com/search/label/Electronics",
    },
    {
      id: 2,
      title: "Essential Kitchen Gadgets Every Home Cook Needs",
      excerpt:
        "Transform your cooking experience with these must-have kitchen tools that make meal prep easier and more enjoyable...",
      image:
        "https://m.media-amazon.com/images/G/31/CookwareDining/Akhilesh/interestingfinds/header_1/KnD._SS900_QL85_.jpg",
      date: "Oct 10, 2023",
      link: "https://voguevibessisters.blogspot.com/search/label/Home%20%26%20Kitchen",
    },
    {
      id: 3,
      title: "Fashion Trends in 2025",
      excerpt:
        "Stay stylish and warm this season with these trending fashion items that are both practical and fashionable...",
      image:
        "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Event/GenZsale/Mar25/Topbhero/V1/Trend-talk-AF-top-pc1._CB547920117_.gif",
      date: "Oct 5, 2023",
      link: "https://voguevibessisters.blogspot.com/search/label/Fashion",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="https://voguevibessisters.blogspot.com/"
              className="flex items-center space-x-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="h-6 w-6 text-pink-600 group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Vogue Vibes Sisters - Deals
              </span>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="https://voguevibessisters.blogspot.com/"
                  className="text-sm font-medium hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deals
                </Link>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
                  className="text-sm font-medium hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Categories
                </Link>
                <Link
                  href="https://voguevibessisters.blogspot.com/"
                  className="text-sm font-medium hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/about-us.html"
                  className="text-sm font-medium hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </Link>
                <Link
                  href="https://www.instagram.com/voguevibessisters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-sm font-medium hover:text-pink-600 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </Link>
              </nav>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 border-t">
            <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <Link
                href="https://voguevibessisters.blogspot.com/"
                className="text-sm font-medium py-2 hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deals
              </Link>
              <Link
                href="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
                className="text-sm font-medium py-2 hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Categories
              </Link>
              <Link
                href="https://voguevibessisters.blogspot.com/"
                className="text-sm font-medium py-2 hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
              <Link
                href="https://voguevibessisters.blogspot.com/p/about-us.html"
                className="text-sm font-medium py-2 hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </Link>
              <Link
                href="https://www.instagram.com/voguevibessisters/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm font-medium py-2 hover:text-pink-600 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </Link>
            </nav>
          </div>
        )}

        {/* Categories Navigation */}
        <div className="border-t border-b bg-white">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-6 py-2">
              {allCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.link}
                  className="flex items-center space-x-1 text-sm whitespace-nowrap hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-pink-500">{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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

        {/* Featured Categories */}
        <section className="py-12 bg-white animate-on-scroll">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Shop by Category
              </h2>
              <Link
                href="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
                className="text-pink-600 flex items-center text-sm font-medium hover:underline group"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {allCategories.map((category, index) => (
                <Link href={category.link} key={index} className="group" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-pink-50 hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 hover:rotate-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center mb-3 group-hover:from-pink-300 group-hover:to-purple-300 transition-colors duration-300 transform group-hover:scale-110 shadow-md">
                      <span className="text-pink-600">{category.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-center group-hover:text-pink-600 transition-colors">
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Deal of the Day */}
        <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50 animate-on-scroll">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Deal of the Day
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Ends in:</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-mono shadow-md">
                  {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
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
                      <span className="text-3xl font-bold text-pink-600">₹{dealOfTheDay.price.toLocaleString()}</span>
                      <span className="text-gray-500 line-through ml-2">
                        ₹{dealOfTheDay.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {dealOfTheDay.features.map((feature, index) => (
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

        {/* Featured Products */}
        <section className="py-12 bg-white animate-on-scroll">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Featured Products
              </h2>
              <Link
                href="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
                className="text-pink-600 flex items-center text-sm font-medium hover:underline group"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-6 bg-pink-100 p-1 rounded-full">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-white data-[state=active]:text-pink-600 rounded-full"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="electronics"
                  className="data-[state=active]:bg-white data-[state=active]:text-pink-600 rounded-full"
                >
                  Electronics
                </TabsTrigger>
                <TabsTrigger
                  value="fashion"
                  className="data-[state=active]:bg-white data-[state=active]:text-pink-600 rounded-full"
                >
                  Fashion
                </TabsTrigger>
                <TabsTrigger
                  value="home"
                  className="data-[state=active]:bg-white data-[state=active]:text-pink-600 rounded-full"
                >
                  Home & Kitchen
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="electronics" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {featuredProducts
                    .filter((p) => p.category === "Electronics")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="fashion" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {featuredProducts
                    .filter((p) => p.category === "Fashion")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="home" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {featuredProducts
                    .filter((p) => p.category === "Home & Kitchen")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Trending Offers */}
        <section className="py-12 bg-pink-50 animate-on-scroll">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Trending Offers
              </h2>
              <Link
                href="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
                className="text-pink-600 flex items-center text-sm font-medium hover:underline group"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 hover:rotate-1">
                <div className="relative">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/img24hp/bank/top/new/978X900_BXGY._CB547968335_.png"
                    alt="Special offer"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-none animate-pulse shadow-md">
                      Limited Time
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors">
                    Up to 60% Off Electronics
                  </h3>
                  <p className="text-gray-500 mb-4">Grab amazing deals on laptops, smartphones, and accessories.</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full group-hover:bg-pink-100 group-hover:text-pink-600 group-hover:border-pink-300 transition-colors duration-300 shadow-md hover:shadow-lg"
                    asChild
                  >
                    <Link
                      href="https://voguevibessisters.blogspot.com/search/label/Electronics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shop Now
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 hover:rotate-1">
                <div className="relative">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Event/GenZsale/Mar25/Incremental/PC/hidden_gems._CB547939974_.jpg"
                    alt="Special offer"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-none animate-pulse shadow-md">
                      Trending
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors">
                    Fashion Sale - Min 40% Off
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Refresh your wardrobe with the latest styles at discounted prices.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full group-hover:bg-pink-100 group-hover:text-pink-600 group-hover:border-pink-300 transition-colors duration-300 shadow-md hover:shadow-lg"
                    asChild
                  >
                    <Link
                      href="https://voguevibessisters.blogspot.com/search/label/Fashion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shop Now
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 hover:rotate-1">
                <div className="relative">
                  <Image
                    src="https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/SA_CLP/Feb21/Dreame._CB550119550_.png"
                    alt="Special offer"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none animate-pulse shadow-md">
                      New Arrivals
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors">
                    Home Essentials Starting ₹499
                  </h3>
                  <p className="text-gray-500 mb-4">Upgrade your home with our curated selection of essential items.</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full group-hover:bg-pink-100 group-hover:text-pink-600 group-hover:border-pink-300 transition-colors duration-300 shadow-md hover:shadow-lg"
                    asChild
                  >
                    <Link
                      href="https://voguevibessisters.blogspot.com/search/label/Home%20%26%20Kitchen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shop Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 bg-white animate-on-scroll">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                From Our Blog
              </h2>
              <Link
                href="https://voguevibessisters.blogspot.com/"
                className="text-pink-600 flex items-center text-sm font-medium hover:underline group"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link href={post.link} key={post.id} className="group" target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
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
                      <h3 className="text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100 animate-on-scroll" ref={newsletterRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Stay Updated with the Best Deals
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter and never miss out on exclusive offers and discounts.
              </p>

              {isSubscribed ? (
                <Alert className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200 mb-4">
                  <Check className="h-5 w-5 text-green-500" />
                  <AlertDescription className="text-green-700">
                    Thank you for subscribing! You'll receive our latest deals and offers in your inbox.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex h-10 w-full rounded-full border border-pink-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-md"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full relative overflow-hidden group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 border-none shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 group-hover:scale-105 transition-transform duration-300"></span>
                          <span className="relative">Subscribe</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}

              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-100 to-white pt-12 pb-6 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingCart className="h-6 w-6 text-pink-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Vogue Vibes Sisters-Deals
                </span>
              </div>
              <p className="text-gray-500 mb-4">Your one-stop destination for the best deals and offers from Amazon.</p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/voguevibessisters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-colors transform hover:scale-110 inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/p/about-us.html"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/p/contact-us.html"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={category.link}
                      className="text-gray-500 hover:text-pink-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Help & Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/p/disclaimer.html"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/p/disclaimer.html"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/p/privacy-policy.html"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://voguevibessisters.blogspot.com/p/terms-and-conditions.html"
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()}{" "}
                <Link
                  href="https://voguevibessisters.blogspot.com/"
                  className="hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vogue Vibes Sisters-Deals
                </Link>
                . All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://voguevibessisters.blogspot.com/p/privacy-policy.html"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/terms-and-conditions.html"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </Link>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/disclaimer.html"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Affiliate Disclosure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Product Card Component
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group transform perspective hover:-translate-y-2 hover:rotate-1">
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
            <span className="text-lg font-bold text-pink-600">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
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

