/**
 * Site configuration file
 * This centralizes all site-specific settings for easier maintenance and future migration
 */

export const siteConfig = {
  name: "Vogue Vibes Sisters - Deals",
  description: "Your one-stop destination for the best deals and offers from Amazon.",
  url: "https://vogue-vibes-sisters-deals.vercel.app",
  ogImage:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKxbZ4Mdf77vhe4c7rOzbSnJcPNYRjgMp0PUC6BALEGTP-MFadiRvR3qx2ml6oHlAqBo4adIu7sx0RKqU9_2_az0LAEhSbzQnlPuYlP5-DtoNiO_CiI9jTcSeMIvXMF4IzTZ6qotlqZFxhZETUGGSmJaGvGp9czKA971ipsgmnaogd3Y8M5oN4SffKCTik/w640-h292/Blog%20Vogue%20Vibes%20Sisters,%20Beauty%20and%20Wellness%20-%20Amazon.PNG",
  mainBlogUrl: "https://voguevibessisters.blogspot.com/",
  contactEmail: "voguevibessisters@gmail.com",
  social: {
    instagram: "https://www.instagram.com/voguevibessisters/",
  },
  // Categories that appear in the footer (subset of allCategories)
  footerCategories: ["Fashion", "Home & Kitchen", "Beauty", "Grocery"],
  // All categories for navigation
  allCategories: ["Electronics", "Fashion", "Home & Kitchen", "Beauty", "Books", "Toys", "Sports", "Grocery"],
  // Analytics (for future implementation)
  analytics: {
    googleAnalyticsId: "", // Add your GA ID when available
  },
  // Auto-blogging settings (for future implementation)
  autoBlogging: {
    enabled: false,
    sources: [
      {
        name: "Main Blog",
        type: "rss",
        url: "https://voguevibessisters.blogspot.com/feeds/posts/default",
        categories: ["Fashion", "Beauty"],
        postCount: 5,
      },
    ],
    refreshInterval: 3600, // seconds
  },
}

