"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trans } from "@/components/trans"
import { Check, ArrowRight } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export default function PricingPage() {
  const handleCheckoutClick = (tier: string) => {
    trackEvent("checkout_start", { tier })
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <Trans>Affordable Plans for </Trans>
                <span className="text-brand-purple">
                  <Trans>Every Event Organizer</Trans>
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                <Trans>
                  Whether you're an independent planner, a growing business, or a large organization, our pricing plans
                  are designed to scale with your needs. From AI-powered event discovery to automated outreach and deep
                  analytics, choose the perfect plan to optimize engagement and maximize event success.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FREE PLAN */}
            <Card className="pricing-card flex flex-col border-muted">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-muted-foreground">
                  <Trans>FREE</Trans>
                </CardTitle>
                <div className="mt-4">
                  <div className="text-2xl font-bold">
                    <Trans>Free forever</Trans>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>In person event creation only</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Basic ticketing and RSVP with payment processing</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Basic calendar invites, email/text blasts</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Basic forum for organizer-attendee communication</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Basic sentiment analysis and summary analytics</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Basic post-event surveys</Trans>
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/10 bg-transparent"
                  variant="outline"
                  onClick={() => handleCheckoutClick("free")}
                  asChild
                >
                  <Link href="/contact">
                    <Trans>Get this Plan</Trans>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM PLAN */}
            <Card className="pricing-card flex flex-col relative bg-brand-purple/20 border-brand-purple">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-brand-purple">
                  <Trans>PREMIUM</Trans>
                </CardTitle>
                <div className="mt-4">
                  <div className="text-2xl font-bold">
                    <Trans>Billed Monthly</Trans>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-brand-purple" />
                    <span>
                      <Trans>All event types creation</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-brand-purple" />
                    <span>
                      <Trans>Enhanced ticketing system with advanced messaging</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-brand-purple" />
                    <span>
                      <Trans>Scheduled notification blasts</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-brand-purple" />
                    <span>
                      <Trans>Pre-event sponsorship features with enhanced ROI analytics</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-brand-purple" />
                    <span>
                      <Trans>Enhanced forum with advanced sentiment analysis</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-brand-purple" />
                    <span>
                      <Trans>Advanced KPI dashboards and detailed event analytics</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-brand-purple" />
                    <span>
                      <Trans>Centralized multimedia storage</Trans>
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-brand-purple hover:bg-brand-purple/90"
                  onClick={() => handleCheckoutClick("premium")}
                  asChild
                >
                  <Link href="/contact">
                    <Trans>Get this Plan</Trans>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* BUSINESS PLAN */}
            <Card className="pricing-card flex flex-col border-muted">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-muted-foreground">
                  <Trans>BUSINESS</Trans>
                </CardTitle>
                <div className="mt-4">
                  <div className="text-2xl font-bold">
                    <Trans>Billed Monthly</Trans>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>All event types creation</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Advanced, customizable ticketing w/integrated payment solutions</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Scheduled outreach with sponsor-specific communications</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Comprehensive sponsor frameworks with detailed ROI reporting</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Fully integrated forum with AI Concierge</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Custom, in-depth analytics with full sponsor ROI and engagement metrics</Trans>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                    <span>
                      <Trans>Comprehensive storage with compliance features and branding options</Trans>
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/10 bg-transparent"
                  variant="outline"
                  onClick={() => handleCheckoutClick("business")}
                  asChild
                >
                  <Link href="/contact">
                    <Trans>Get this Plan</Trans>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                <Trans>Frequently Asked Questions</Trans>
              </h2>
              <div className="space-y-6">
                <div className="feature-item p-4 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">
                    <Trans>Can I switch plans later?</Trans>
                  </h3>
                  <p className="text-muted-foreground">
                    <Trans>
                      Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                      billing cycle.
                    </Trans>
                  </p>
                </div>
                <div className="feature-item p-4 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">
                    <Trans>Do you offer a free plan?</Trans>
                  </h3>
                  <p className="text-muted-foreground">
                    <Trans>No, we have a free business tier for our early customers.</Trans>
                  </p>
                </div>
                <div className="feature-item p-4 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">
                    <Trans>What payment methods do you accept?</Trans>
                  </h3>
                  <p className="text-muted-foreground">
                    <Trans>We accept all major credit cards and bank transfers for annual plans.</Trans>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">
                <Trans>Still have questions?</Trans>
              </h3>
              <p className="text-muted-foreground mb-6">
                <Trans>Our team is ready to help you find the perfect solution for your event needs.</Trans>
              </p>
              <Button asChild>
                <Link href="/contact">
                  <Trans>Contact Us</Trans>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
