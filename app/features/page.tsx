"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trans } from "@/components/trans"
import {
  BarChart3,
  Users,
  Calendar,
  Ticket,
  ArrowRight,
  DollarSign,
  MapPin,
  ShoppingCart,
  Globe,
  Camera,
  Bot,
  ExternalLink,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function FeaturesPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const roadmapRef = useRef<HTMLDivElement>(null)
  const lifecycleRef = useRef<HTMLDivElement>(null)

  const featuresInView = useInView(featuresRef, { threshold: 0.1 })
  const roadmapInView = useInView(roadmapRef, { threshold: 0.1 })
  const lifecycleInView = useInView(lifecycleRef, { threshold: 0.1 })

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <Trans>Powerful Features for Exceptional Events</Trans>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                <Trans>
                  Discover how PartyGemAI's comprehensive toolkit helps you create, manage, and analyze events with
                  precision and ease throughout the entire event lifecycle.
                </Trans>
              </p>
              <p className="mx-auto max-w-[600px] text-muted-foreground font-medium">
                <Trans>
                  We empower anyone to run events like a pro — no prior event management experience required.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Current Features</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>Available now in our platform to help you create and manage successful events.</Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Ticket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>RSVP & Ticketing</Trans>
              </h3>
              <p className="text-muted-foreground mb-4">
                <Trans>
                  Advanced RSVP and ticketing flows designed to handle organizers, attendees, guest users, and
                  subscription tiers — including integrated ticket sales and payment processing.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Donations & Sponsorships</Trans>
              </h3>
              <p className="text-muted-foreground mb-4">
                <Trans>
                  Turn attendees into supporters by collecting donations, sponsorships, and ticket revenue directly
                  through your event page.
                </Trans>
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Multiple payment gateways</Trans>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Automated refund processing</Trans>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Financial reporting dashboard</Trans>
                </li>
              </ul>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Advanced Analytics</Trans>
              </h3>
              <p className="text-muted-foreground mb-4">
                <Trans>
                  Real-time dashboards and insights to track every aspect of your event's performance, from registration
                  to engagement metrics.
                </Trans>
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Real-time attendance tracking</Trans>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Custom dashboards and reports for KPI & ROI tracking</Trans>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Custom report generation</Trans>
                </li>
              </ul>
              <Button variant="outline" size="sm" asChild className="mt-2 bg-transparent">
                <Link href="/dashboards" className="flex items-center gap-2">
                  <Trans>See Sample Dashboards</Trans>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Event Planning</Trans>
              </h3>
              <p className="text-muted-foreground mb-4">
                <Trans>
                  Comprehensive tools for planning and organizing events of any size, from intimate gatherings to large
                  conferences.
                </Trans>
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Ticketing and RSVP tracking</Trans>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Vendor management & Venue matching service</Trans>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Drag-and-drop schedule builder</Trans>
                </li>
              </ul>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Attendee Engagement</Trans>
              </h3>
              <p className="text-muted-foreground mb-4">
                <Trans>
                  Interactive tools to boost attendee participation and measure engagement throughout your event.
                </Trans>
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Live polling and Q&A</Trans>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  <Trans>Networking matchmaking</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={roadmapRef} className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Feature Roadmap</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>Exciting features we're building to further enhance your event management experience.</Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${roadmapInView ? "reveal" : ""}`}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Venue Matching Service</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Turn unused spaces into event opportunities by connecting organizers with rentable venues.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${roadmapInView ? "reveal" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>In-event Marketplaces</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Enable live art auctions and raffles during your events, creating new revenue streams for organizers
                  and creators.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${roadmapInView ? "reveal" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Virtual & Hybrid Events</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Run blended events that exist both in-person and online. Build digital pipelines that push recorded
                  sessions, highlights, or streams directly to platforms like social media and multimedia hubs once the
                  event ends.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${roadmapInView ? "reveal" : ""}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Multimedia Sharing</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Centralize your event's photos and videos in one place, making it easy for attendees to relive moments
                  and organizers to showcase success.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${roadmapInView ? "reveal" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>AI Chatbot Assistant</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Get step-by-step help with PartyGem through an AI assistant built directly into the platform.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                <Trans>See PartyGemAI in action</Trans>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                <Trans>
                  Watch our MVP demo to see how our platform helps event organizers create exceptional experiences with
                  powerful analytics and seamless management tools.
                </Trans>
              </p>
              <Button size="lg" variant="default" asChild>
                <Link href="/contact">
                  <Trans>Request a Demo</Trans>
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PlCraHnOq78?si=D_8iRrcnPVskbpMP&start=18"
                title="PartyGemAI MVP Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section ref={lifecycleRef} className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Complete Event Lifecycle Management</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>
                Our platform supports every phase of your event journey, from initial planning to post-event analysis,
                ensuring maximum engagement and success.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/images/event-lifecycle-diagram.png"
                alt="Event Lifecycle Diagram"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <div className={`fade-in ${lifecycleInView ? "reveal" : ""}`}>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-red-600 dark:text-red-400">
                      <Trans>Pre-Event Phase</Trans>
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <Trans>Build anticipation and maximize discoverability with comprehensive pre-event tools.</Trans>
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <Trans>Event discovery and promotion</Trans>
                      </li>
                      <li>
                        • <Trans>Engagement forums and community building</Trans>
                      </li>
                      <li>
                        • <Trans>Targeted outreach campaigns</Trans>
                      </li>
                      <li>
                        • <Trans>Sponsorship management and ROI tracking</Trans>
                      </li>
                      <li>
                        • <Trans>Donation processing and fundraising</Trans>
                      </li>
                      <li>
                        • <Trans>Advanced payment processing</Trans>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`fade-in ${lifecycleInView ? "reveal" : ""}`} style={{ transitionDelay: "200ms" }}>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                    <Ticket className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">
                      <Trans>Event Phase</Trans>
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <Trans>Ensure smooth operations and exceptional attendee experience during your event.</Trans>
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <Trans>Smart ticketing and access control</Trans>
                      </li>
                      <li>
                        • <Trans>AI Event Concierge for real-time support</Trans>
                      </li>
                      <li>
                        • <Trans>Logistics management and dispute resolution</Trans>
                      </li>
                      <li>
                        • <Trans>Live engagement tracking</Trans>
                      </li>
                      <li>
                        • <Trans>Real-time analytics and monitoring</Trans>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`fade-in ${lifecycleInView ? "reveal" : ""}`} style={{ transitionDelay: "400ms" }}>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      <Trans>Post-Event Phase</Trans>
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <Trans>Analyze performance, gather insights, and plan for future success.</Trans>
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <Trans>Comprehensive post-event surveys</Trans>
                      </li>
                      <li>
                        • <Trans>Sentiment and outcomes analytics</Trans>
                      </li>
                      <li>
                        • <Trans>KPI dashboard and performance metrics</Trans>
                      </li>
                      <li>
                        • <Trans>Media storage with custom tiers</Trans>
                      </li>
                      <li>
                        • <Trans>Custom event triggers for follow-up</Trans>
                      </li>
                      <li>
                        • <Trans>Summary analytics and reporting</Trans>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Plan smarter. Fund faster.</Trans>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              <Trans>Plan your first AI-powered event today.</Trans>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Trans>Get Started Free</Trans>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  <Trans>View Pricing</Trans>
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
