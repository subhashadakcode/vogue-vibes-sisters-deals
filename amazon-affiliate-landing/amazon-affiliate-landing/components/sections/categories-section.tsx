import { Smartphone, Shirt, Home, Sparkles, BookOpen, Gamepad2, Dumbbell, ShoppingBag } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { CategoryCard } from "@/components/ui/category-card"
import { siteConfig } from "@/config/site-config"
import type { JSX } from "react"

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

export function CategoriesSection() {
  // Generate category links with icons
  const categoryLinks = siteConfig.allCategories.map((category) => ({
    name: category,
    icon: categoryIcons[category] || <ShoppingBag className="h-5 w-5" />,
    link: `https://voguevibessisters.blogspot.com/search/label/${category.replace(" & ", "%20%26%20")}`,
  }))

  return (
    <section className="py-12 bg-white animate-on-scroll">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Shop by Category"
          viewAllLink="https://voguevibessisters.blogspot.com/p/affordable-beauty-and-personal-care.html"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categoryLinks.map((category, index) => (
            <CategoryCard key={index} name={category.name} icon={category.icon} link={category.link} />
          ))}
        </div>
      </div>
    </section>
  )
}

