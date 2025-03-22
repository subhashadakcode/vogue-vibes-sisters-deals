/**
 * Product data file
 * This separates content from presentation for easier WordPress migration
 */

export interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  image: string
  category: string
  link: string
  description?: string
  features?: string[]
}

export interface DealOfTheDay extends Product {
  endTime: Date
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  link: string
  category?: string
}

// Featured products data
export const featuredProducts: Product[] = [
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
    description: "Premium wireless earbuds with noise cancellation and long battery life.",
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
    description: "Track your fitness goals with this advanced smart tracker.",
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
    description: "Keep your drinks hot or cold with this premium stainless steel bottle.",
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
    description: "Comfortable cotton blend t-shirt for everyday wear.",
  },
]

// Deal of the day data
export const dealOfTheDay: DealOfTheDay = {
  id: 100,
  name: "Premium Noise Cancelling Headphones",
  price: 8999,
  originalPrice: 14999,
  discount: 40,
  rating: 4.8,
  image: "https://m.media-amazon.com/images/I/81zfqfyItfL._SL1500_.jpg",
  category: "Electronics",
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
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Budget Smartphones in 2023",
    excerpt:
      "Looking for a new smartphone without breaking the bank? Check out our top picks for budget-friendly options...",
    image: "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/2025/7Feb/Hero-banner._CB549141821_.jpg",
    date: "Oct 15, 2023",
    link: "https://voguevibessisters.blogspot.com/search/label/Electronics",
    category: "Electronics",
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
    category: "Home & Kitchen",
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
    category: "Fashion",
  },
]

// Trending offers data
export const trendingOffers = [
  {
    id: 1,
    title: "Up to 60% Off Electronics",
    description: "Grab amazing deals on laptops, smartphones, and accessories.",
    image: "https://m.media-amazon.com/images/G/31/img24hp/bank/top/new/978X900_BXGY._CB547968335_.png",
    badge: "Limited Time",
    badgeColor: "from-red-500 to-pink-500",
    link: "https://voguevibessisters.blogspot.com/search/label/Electronics",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Fashion Sale - Min 40% Off",
    description: "Refresh your wardrobe with the latest styles at discounted prices.",
    image:
      "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Event/GenZsale/Mar25/Incremental/PC/hidden_gems._CB547939974_.jpg",
    badge: "Trending",
    badgeColor: "from-green-500 to-teal-500",
    link: "https://voguevibessisters.blogspot.com/search/label/Fashion",
    category: "Fashion",
  },
  {
    id: 3,
    title: "Home Essentials Starting ₹499",
    description: "Upgrade your home with our curated selection of essential items.",
    image: "https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/SA_CLP/Feb21/Dreame._CB550119550_.png",
    badge: "New Arrivals",
    badgeColor: "from-blue-500 to-purple-500",
    link: "https://voguevibessisters.blogspot.com/search/label/Home%20%26%20Kitchen",
    category: "Home & Kitchen",
  },
]

