"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/ui/section-header"
import { ProductCard } from "@/components/ui/product-card"
import { featuredProducts } from "@/data/products"

export function FeaturedProductsSection() {
  return (
    <section className="py-12 bg-white animate-on-scroll">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Products"
          viewAllLink="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
        />
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
  )
}

