"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface SearchFilterProps {
  categories: string[]
  onSearch: (query: string) => void
  onFilter: (categories: string[]) => void
  className?: string
}

export function SearchFilter({ categories, onSearch, onFilter, className }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  // Handle category selection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([])
    setSearchQuery("")
    onSearch("")
    onFilter([])
  }

  // Update parent component when filters change
  useEffect(() => {
    onFilter(selectedCategories)
  }, [selectedCategories, onFilter])

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search input */}
        <form onSubmit={handleSearchSubmit} className="flex-1 relative">
          <Input
            type="text"
            placeholder="Search for deals and coupons..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 rounded-full border-pink-200 focus-visible:ring-pink-400"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("")
                onSearch("")
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </form>

        {/* Filter button */}
        <Button
          type="button"
          variant={isFilterOpen ? "default" : "outline"}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="rounded-full"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
          {selectedCategories.length > 0 && <Badge className="ml-2 bg-pink-600">{selectedCategories.length}</Badge>}
        </Button>

        {/* Clear filters button (only shown when filters are applied) */}
        {(selectedCategories.length > 0 || searchQuery) && (
          <Button
            type="button"
            variant="ghost"
            onClick={clearFilters}
            className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
          >
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Filter options */}
      {isFilterOpen && (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 animate-in fade-in-50 duration-300">
          <h4 className="font-medium mb-3">Filter by Category</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedCategories.includes(category)
                    ? "bg-pink-600 hover:bg-pink-700"
                    : "hover:bg-pink-100 hover:text-pink-600"
                }`}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

