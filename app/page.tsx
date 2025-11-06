"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trans } from "@/components/trans"
import { AnimatedCounter } from "@/components/animated-counter"
import { ArrowRight, BarChart3, Calendar, CreditCard, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const statsInView = useInView(statsRef, { threshold: 0.3 })
  const featuresInView = useInView(featuresRef, { threshold: 0.3 })

  useEffect(() => {
    // Create confetti elements
    const confettiContainer = document.createElement("div")
    confettiContainer.className = "confetti"

    for (let i = 0; i < 50; i++) {
      const piece = document.createElement("div")
      piece.className = "confetti-piece"
      piece.style.left = `${Math.random() * 100}%`
      piece.style.animationDuration = `${3 + Math.random() * 5}s`
      confettiContainer.appendChild(piece)
    }

    heroRef.current?.appendChild(confettiContainer)

    return () => {
      confettiContainer.remove()
    }
  }, [])

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden"
      >
        <div className="container px-4 md:px-6 py-24 md:py-32 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <Trans>Run unforgettable events & track every metric</Trans>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px]">
              <Trans>
                PartyGem AI combines powerful analytics with seamless event management tools to help you create
                memorable experiences with measurable results.
              </Trans>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="/features">
                  <Trans>Explore Features</Trans>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`flex flex-col items-center text-center space-y-2 fade-in ${statsInView ? "reveal" : ""}`}>
              <AnimatedCounter value={20} suffix="+" inView={statsInView} />
              <p className="text-xl font-medium">
                <Trans>Events Powered</Trans>
              </p>
              <p className="text-sm text-muted-foreground">
                <Trans>Alpha phase rollout</Trans>
              </p>
            </div>
            <div
              className={`flex flex-col items-center text-center space-y-2 fade-in ${statsInView ? "reveal" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <AnimatedCounter value={850} suffix="+" inView={statsInView} />
              <p className="text-xl font-medium">
                <Trans>Attendees Tracked</Trans>
              </p>
              <p className="text-sm text-muted-foreground">
                <Trans>Growing community</Trans>
              </p>
            </div>
            <div
              className={`flex flex-col items-center text-center space-y-2 fade-in ${statsInView ? "reveal" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <AnimatedCounter value={99.999} suffix="%" inView={statsInView} />
              <p className="text-xl font-medium">
                <Trans>Uptime Reliability</Trans>
              </p>
              <p className="text-sm text-muted-foreground">
                <Trans>Enterprise-grade infrastructure</Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Trans>Why choose PartyGem AI?</Trans>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              <Trans>
                Our platform combines powerful analytics with seamless event management to deliver exceptional
                experiences.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Analytics</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>Real-time dashboards and insights to track every aspect of your event's performance.</Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Payments</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>Secure, flexible payment processing with detailed financial reporting.</Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Engagement</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>Interactive tools to boost attendee participation and measure engagement.</Trans>
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/features">
                <Trans>View All Features</Trans>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <Trans>Ready to elevate your next event?</Trans>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                <Trans>
                  Join event organizers who trust PartyGem AI to deliver exceptional experiences with measurable
                  results.
                </Trans>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Trans>Get Started</Trans>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">
                    <Trans>View Pricing</Trans>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background rounded-lg flex items-center justify-center">
                <Calendar className="h-24 w-24 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
