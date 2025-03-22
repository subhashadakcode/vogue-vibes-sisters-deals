"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  X,
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { siteConfig } from "@/config/site-config"

// Map category names to icons
const categoryIcons: Record<string, JSX.Element> = {
  Electronics: <Smartphone className="h-5 w-5" />,
  Fashion: <Shirt className="h-5 w-5" />,
  "Home & Kitchen": <Home className="h-5 w-5" />,
  Beauty: <Sparkles className="h-5 w-5" />,
  Books: <BookOpen className="h-5 w-5" />,
  Toys: <Gamepad2 className="h-5 w-5" />,
  Sports: <Dumbbell className="h-5 w-5" />,
  Grocery: <ShoppingBag className="h-5 w-5" />,
}

export function SiteHeader() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  // Generate category links with icons
  const categoryLinks = siteConfig.allCategories.map((category) => ({
    name: category,
    icon: categoryIcons[category] || <ShoppingBag className="h-5 w-5" />,
    link: `https://voguevibessisters.blogspot.com/search/label/${category.replace(" & ", "%20%26%20")}`,
  }))

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={siteConfig.mainBlogUrl}
            className="flex items-center space-x-2 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="h-6 w-6 text-pink-600 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href={siteConfig.mainBlogUrl}
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
                href={siteConfig.mainBlogUrl}
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
                href={siteConfig.social.instagram}
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
              href={siteConfig.mainBlogUrl}
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
              href={siteConfig.mainBlogUrl}
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
              href={siteConfig.social.instagram}
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
            {categoryLinks.map((category, index) => (
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
  )
}

