import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { siteConfig } from "@/config/site-config"

// Map category names to their URLs
const getCategoryUrl = (category: string) => {
  return `https://voguevibessisters.blogspot.com/search/label/${category.replace(" & ", "%20%26%20")}`
}

export function SiteFooter() {
  // Get only the categories that should appear in the footer
  const footerCategories = siteConfig.footerCategories

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white pt-12 pb-6 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCart className="h-6 w-6 text-pink-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-500 mb-4">{siteConfig.description}</p>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition-colors transform hover:scale-110 inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={siteConfig.mainBlogUrl}
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/about-us.html"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.mainBlogUrl}
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/contact-us.html"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
            <ul className="space-y-2">
              {footerCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={getCategoryUrl(category)}
                    className="text-gray-500 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/disclaimer.html"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/disclaimer.html"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/privacy-policy.html"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://voguevibessisters.blogspot.com/p/terms-and-conditions.html"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                href={siteConfig.mainBlogUrl}
                className="hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.name}
              </Link>
              . All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://voguevibessisters.blogspot.com/p/privacy-policy.html"
                className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://voguevibessisters.blogspot.com/p/terms-and-conditions.html"
                className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
              <Link
                href="https://voguevibessisters.blogspot.com/p/disclaimer.html"
                className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

