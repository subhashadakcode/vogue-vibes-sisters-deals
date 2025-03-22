import { SectionHeader } from "@/components/ui/section-header"
import { StoreCard } from "@/components/ui/store-card"
import { popularStores } from "@/data/coupons"

export function PopularStoresSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50 animate-on-scroll relative overflow-hidden">
      {/* Sparkle effects */}
      <div className="absolute top-20 right-40 w-16 h-16 bg-blue-300 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-pink-300 rounded-full opacity-10 animate-pulse"></div>

      <div className="container mx-auto px-4">
        <SectionHeader
          title="Popular Stores"
          viewAllLink="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {popularStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </section>
  )
}

