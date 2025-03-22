import { SectionHeader } from "@/components/ui/section-header"
import { OfferCard } from "@/components/ui/offer-card"
import { trendingOffers } from "@/data/products"

export function TrendingOffersSection() {
  return (
    <section className="py-12 bg-pink-50 animate-on-scroll">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Trending Offers"
          viewAllLink="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              description={offer.description}
              image={offer.image}
              badge={offer.badge}
              badgeColor={offer.badgeColor}
              link={offer.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

