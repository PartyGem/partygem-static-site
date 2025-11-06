"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trans } from "@/components/trans"
import { Mail } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { useToast } from "@/hooks/use-toast"
import { subscribeToMailingList } from "@/app/actions/subscribe"
import Link from "next/link"
import type { HTMLFormElement } from "react"

// Rate limiting storage
const RATE_LIMIT_STORAGE_KEY = "mailing_list_subscriptions"
const MAX_SUBMISSIONS = 3
const RATE_LIMIT_WINDOW_MS = 3600000 // 1 hour

interface RateLimitStorage {
  submissions: number
  timestamp: number
}

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [rateLimited, setRateLimited] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const { toast } = useToast()

  const checkRateLimit = (): boolean => {
    if (typeof window === "undefined") return false

    const storedData = localStorage.getItem(RATE_LIMIT_STORAGE_KEY)
    if (!storedData) return false

    const data: RateLimitStorage = JSON.parse(storedData)
    const now = Date.now()

    // Reset rate limit if window has passed
    if (now - data.timestamp > RATE_LIMIT_WINDOW_MS) {
      localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify({ submissions: 0, timestamp: now }))
      return false
    }

    return data.submissions >= MAX_SUBMISSIONS
  }

  const updateRateLimit = () => {
    if (typeof window === "undefined") return

    const now = Date.now()
    const storedData = localStorage.getItem(RATE_LIMIT_STORAGE_KEY)

    if (!storedData) {
      localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify({ submissions: 1, timestamp: now }))
      return
    }

    const data: RateLimitStorage = JSON.parse(storedData)

    // Reset if window has passed
    if (now - data.timestamp > RATE_LIMIT_WINDOW_MS) {
      localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify({ submissions: 1, timestamp: now }))
      return
    }

    // Increment submission count
    localStorage.setItem(
      RATE_LIMIT_STORAGE_KEY,
      JSON.stringify({
        submissions: data.submissions + 1,
        timestamp: data.timestamp,
      }),
    )
  }

  const handleSubmit = async (formData: FormData) => {
    // Check rate limit
    if (checkRateLimit()) {
      setRateLimited(true)
      toast({
        title: "Rate limit exceeded",
        description: "Please try again later.",
        variant: "destructive",
      })
      return
    }

    setFormState("submitting")

    const subject = formData.get("subject") as string

    // Track event
    trackEvent("mailing_list_subscribe", { subject })

    try {
      // Subscribe to mailing list using server action
      const result = await subscribeToMailingList(formData)

      if (result.success) {
        // Update rate limit
        updateRateLimit()

        // Success state
        setFormState("success")
        formRef.current?.reset()

        toast({
          title: "Successfully subscribed!",
          description: "You'll receive updates about PartyGem AI in your inbox.",
        })

        // Redirect after a delay
        setTimeout(() => {
          router.push("/")
        }, 3000)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormState("error")

      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <Trans>Early Access & Updates</Trans>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                <Trans>
                  Sign up for early access to PartyGem AI and stay updated with our latest features and announcements.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <Trans>Contact Information</Trans>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      <Trans>Email</Trans>
                    </h3>
                    <p className="text-muted-foreground">Contact@partygemai.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">
                  <Trans>Office Hours</Trans>
                </h3>
                <p className="text-muted-foreground mb-2">
                  <Trans>Monday - Friday: 9:00 AM - 6:00 PM EST</Trans>
                </p>
                <p className="text-muted-foreground">
                  <Trans>Saturday - Sunday: Closed</Trans>
                </p>
              </div>

              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-bold mb-2">
                  <Trans>Why Join Early Access?</Trans>
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <Trans>Be among the first to use PartyGem AI</Trans>
                  </li>
                  <li>
                    • <Trans>Get exclusive beta testing opportunities</Trans>
                  </li>
                  <li>
                    • <Trans>Receive product updates and launch announcements</Trans>
                  </li>
                  <li>
                    • <Trans>Access special early adopter pricing</Trans>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <Trans>Join Early Access</Trans>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Button size="lg" asChild>
                      <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSft3OoMg2zUuGTGsH8r4sd8Is8g0CcYkytP-wb8mTqd5AzS7A/viewform?usp=sharing&ouid=113226984806202339033"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        <Trans>Sign Up for Early Access</Trans>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
