"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/ui/section-header"
import { CouponCard } from "@/components/ui/coupon-card"
import { SearchFilter } from "@/components/ui/search-filter"
import { coupons } from "@/data/coupons"

export function CouponsSection() {
  const [filteredCoupons, setFilteredCoupons] = useState(coupons)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Get unique categories from coupons
  const categories = Array.from(new Set(coupons.map((coupon) => coupon.category)))

  // Filter coupons based on search query and selected categories
  useEffect(() => {
    let result = coupons

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (coupon) =>
          coupon.description.toLowerCase().includes(query) ||
          coupon.code.toLowerCase().includes(query) ||
          coupon.store.toLowerCase().includes(query) ||
          coupon.category.toLowerCase().includes(query),
      )
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter((coupon) => selectedCategories.includes(coupon.category))
    }

    setFilteredCoupons(result)
  }, [searchQuery, selectedCategories])

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // Handle filter
  const handleFilter = (categories: string[]) => {
    setSelectedCategories(categories)
  }

  return (
    <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50 animate-on-scroll relative overflow-hidden">
      {/* Sparkle effects */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-300 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-300 rounded-full opacity-10 animate-pulse"></div>

      <div className="container mx-auto px-4">
        <SectionHeader
          title="Exclusive Coupons & Offers"
          viewAllLink="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
        />

        <SearchFilter categories={categories} onSearch={handleSearch} onFilter={handleFilter} className="mb-8" />

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6 bg-pink-100 p-1 rounded-full">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600 rounded-full"
            >
              All Coupons
            </TabsTrigger>
            <TabsTrigger
              value="exclusive"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600 rounded-full"
            >
              Exclusive
            </TabsTrigger>
            <TabsTrigger
              value="expiring"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600 rounded-full"
            >
              Expiring Soon
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exclusive" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoupons
                .filter((coupon) => coupon.isExclusive)
                .map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="expiring" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoupons
                .sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime())
                .slice(0, 6)
                .map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

