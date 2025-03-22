"use client"

import { useState, useRef, type FormEvent } from "react"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import { siteConfig } from "@/config/site-config"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const newsletterRef = useRef<HTMLDivElement>(null)

  // Handle newsletter subscription
  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate sending email to your Gmail
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real implementation, you would use a server action or API route
      // to send the email to your Gmail account
      console.log(`Subscription email sent to ${siteConfig.contactEmail}: ${email}`)

      setIsSubscribed(true)
      setEmail("")

      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      })

      // Scroll to the newsletter section
      if (newsletterRef.current) {
        newsletterRef.current.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100 animate-on-scroll" ref={newsletterRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Stay Updated with the Best Deals
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and never miss out on exclusive offers and discounts.
          </p>

          {isSubscribed ? (
            <Alert className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200 mb-4">
              <Check className="h-5 w-5 text-green-500" />
              <AlertDescription className="text-green-700">
                Thank you for subscribing! You'll receive our latest deals and offers in your inbox.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-full border border-pink-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-md"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full relative overflow-hidden group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 border-none shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 group-hover:scale-105 transition-transform duration-300"></span>
                      <span className="relative">Subscribe</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}

