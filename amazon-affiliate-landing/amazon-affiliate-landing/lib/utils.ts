import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility functions for the application
 */

// Combine class names with Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format time for countdown display
export function formatTime(hours: number, minutes: number, seconds: number): string {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

// Format currency with locale
export function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`
}

// Calculate discount percentage
export function calculateDiscount(originalPrice: number, currentPrice: number): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

// Generate star rating display data
export function generateRatingStars(rating: number) {
  return Array(5)
    .fill(0)
    .map((_, i) => ({
      filled: i < Math.floor(rating),
      half: !Number.isInteger(rating) && i === Math.floor(rating),
    }))
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

// Get category icon name
export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    Electronics: "smartphone",
    Fashion: "shirt",
    "Home & Kitchen": "home",
    Beauty: "sparkles",
    Books: "book-open",
    Toys: "gamepad-2",
    Sports: "dumbbell",
    Grocery: "shopping-bag",
  }
  return icons[category] || "tag"
}

// Generate SEO metadata for pages
export function generateSEOMetadata(title: string, description: string, url: string, imageUrl: string) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: imageUrl }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

// Helper for auto-blogging (future implementation)
export function sanitizeHTML(html: string): string {
  // This is a placeholder for a more robust HTML sanitizer
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
}

