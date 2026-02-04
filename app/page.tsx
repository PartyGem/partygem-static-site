"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trans } from "@/components/trans"
import { AnimatedCounter } from "@/components/animated-counter"
import { ArrowRight, BarChart3, CreditCard, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const [eventsPowered, setEventsPowered] = useState<number | null>(null)

  const statsInView = useInView(statsRef, { threshold: 0.3 })
  const featuresInView = useInView(featuresRef, { threshold: 0.3 })
  const showEventsPowered = false
  const stats = [
    {
      key: "events-powered",
      value: eventsPowered ?? 0,
      suffix: "+",
      label: "Events Powered",
      sublabel: "Alpha phase rollout",
      enabled: showEventsPowered && eventsPowered !== null,
    },
    {
      key: "attendees-tracked",
      value: 850,
      suffix: "+",
      label: "Attendees Tracked",
      sublabel: "Growing community",
      enabled: true,
    },
    {
      key: "uptime-reliability",
      value: 99.999,
      suffix: "%",
      label: "Uptime Reliability",
      sublabel: "Enterprise-grade infrastructure",
      enabled: true,
    },
  ]
  const visibleStats = stats.filter((stat) => stat.enabled)
  const statsGridCols = visibleStats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"

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

  useEffect(() => {
    if (!showEventsPowered) {
      return
    }

    let isMounted = true
    const loadEventsPowered = async (): Promise<number | null> => {
      // TODO: Replace with live endpoint when ready.
      return null
    }

    loadEventsPowered().then((value) => {
      if (!isMounted || value === null) {
        return
      }
      setEventsPowered(value)
    })

    return () => {
      isMounted = false
    }
  }, [showEventsPowered])

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
                <a href="https://app.partygemai.com" target="_blank" rel="noopener noreferrer">
                  <Trans>Try the app</Trans>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Trans>Talk to us</Trans>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className={`grid grid-cols-1 ${statsGridCols} gap-8`}>
            {visibleStats.map((stat, index) => (
              <div
                key={stat.key}
                className={`flex flex-col items-center text-center space-y-2 fade-in ${statsInView ? "reveal" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={statsInView} />
                <p className="text-xl font-medium">
                  <Trans>{stat.label}</Trans>
                </p>
                <p className="text-sm text-muted-foreground">
                  <Trans>{stat.sublabel}</Trans>
                </p>
              </div>
            ))}
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
          <div className="grid grid-cols-1 gap-12 items-center">
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
                  <a href="https://app.partygemai.com" target="_blank" rel="noopener noreferrer">
                    <Trans>Try the app</Trans>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <Trans>Talk to us</Trans>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
