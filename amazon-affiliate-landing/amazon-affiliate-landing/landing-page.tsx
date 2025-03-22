"use client"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { DealOfDaySection } from "@/components/sections/deal-of-day-section"
import { FeaturedProductsSection } from "@/components/sections/featured-products-section"
import { TrendingOffersSection } from "@/components/sections/trending-offers-section"
import { BlogSection } from "@/components/sections/blog-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { useEffect } from "react"

export default function LandingPage() {
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

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-pink-50 to-white">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <DealOfDaySection />
        <FeaturedProductsSection />
        <TrendingOffersSection />
        <BlogSection />
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  )
}

