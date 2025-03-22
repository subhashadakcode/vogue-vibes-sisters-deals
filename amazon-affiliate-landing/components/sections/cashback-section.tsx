"use client"

import { useState, useEffect } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { CashbackCard } from "@/components/ui/cashback-card"
import { SearchFilter } from "@/components/ui/search-filter"
import { cashbackOffers } from "@/data/coupons"

export function CashbackSection() {
  const [filteredOffers, setFilteredOffers] = useState(cashbackOffers)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Get unique categories from cashback offers
  const categories = Array.from(new Set(cashbackOffers.map((offer) => offer.category)))

  // Filter offers based on search query and selected categories
  useEffect(() => {
    let result = cashbackOffers

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (offer) =>
          offer.description.toLowerCase().includes(query) ||
          offer.store.toLowerCase().includes(query) ||
          offer.category.toLowerCase().includes(query),
      )
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter((offer) => selectedCategories.includes(offer.category))
    }

    setFilteredOffers(result)
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
    <section className="py-12 bg-white animate-on-scroll relative overflow-hidden">
      {/* Sparkle effects */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-green-300 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-teal-300 rounded-full opacity-10 animate-pulse"></div>

      <div className="container mx-auto px-4">
        <SectionHeader
          title="Cashback Offers"
          viewAllLink="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
        />

        <SearchFilter categories={categories} onSearch={handleSearch} onFilter={handleFilter} className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <CashbackCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  )
}

