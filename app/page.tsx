"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trans } from "@/components/trans"
import { AnimatedCounter } from "@/components/animated-counter"
import { ArrowRight, BarChart3, Bot, Building2, CreditCard, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react"
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
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
              <Trans>AI/ML & Full-Stack Consulting · Makers of PartyGem</Trans>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <Trans>We build intelligent software. Starting with how the world gathers.</Trans>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px]">
              <Trans>
                PartyGem AI is a consulting agency for AI/ML and full-stack software development. Our flagship product,
                PartyGem, is an intelligent event management service — the first of a growing family of Gems powering
                Events as a Service.
              </Trans>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <a href="https://app.partygemai.com" target="_blank" rel="noopener noreferrer">
                  <Trans>Try PartyGem</Trans>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Trans>Work with our agency</Trans>
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
              <Trans>One agency. A family of Gems.</Trans>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              <Trans>
                PartyGem AI builds and orchestrates a portfolio of products — "Gems" — that together power Events as a
                Service. PartyGem is live today; Service Gem, Venue Gem, and RoboGem are on the roadmap.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`bg-background rounded-lg p-6 border border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-bold">
                  <Trans>PartyGem</Trans>
                </h3>
                <span className="rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                  <Trans>Live</Trans>
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  Our flagship: an intelligent event management service that handles planning, ticketing, RSVPs, and
                  analytics end-to-end.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-bold">
                  <Trans>Service Gem</Trans>
                </h3>
                <span className="rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                  <Trans>Roadmap</Trans>
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  A marketplace hiring freelancers, caterers, artists, and businesses to sell their products and
                  services into live events.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-bold">
                  <Trans>Venue Gem</Trans>
                </h3>
                <span className="rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                  <Trans>Roadmap</Trans>
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  A venue matching service that turns unused spaces into event opportunities and gives every gathering a
                  home.
                </Trans>
              </p>
            </div>

            <div
              className={`bg-background rounded-lg p-6 border border-dashed border-primary/30 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-md fade-in ${featuresInView ? "reveal" : ""}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-bold">
                  <Trans>RoboGem</Trans>
                </h3>
                <span className="rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                  <Trans>Future</Trans>
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  A humanoid concierge to help guests check in and guide them across physical spaces and events — our
                  long-term bet on embodied AI.
                </Trans>
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto">
            <Trans>
              PartyGem AI is the layer orchestrating communication between these services — a new gig economy anyone
              can participate in through Events as a Service.
            </Trans>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" asChild>
              <Link href="/features">
                <Trans>Explore PartyGem features</Trans>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">
                <Trans>Meet the agency</Trans>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-aqua" />
                <Trans>Federal contracting</Trans>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                <Trans>Registered to bid on federal software contracts.</Trans>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                <Trans>
                  PartyGem AI is partnered with the U.S. federal government to pursue software-related contracts
                  through SAM.gov, and we engage with non-dilutive funding vehicles such as the NSF SBIR program.
                </Trans>
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                <Trans>
                  Our SAM.gov registration is actively being renewed with updated tax documentation. If you are a
                  federal contracting officer, primes partner, or agency PM, we'd love to talk.
                </Trans>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Trans>Contact our government team</Trans>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">
                    <Trans>Learn about our capabilities</Trans>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-background p-5">
                <Building2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>AI/ML Consulting</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>Applied ML, RAG, agentic workflows, and production MLOps.</Trans>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <BarChart3 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>Full-Stack Software</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>Go, Python, TypeScript, Next.js, Postgres, and cloud-native infrastructure.</Trans>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <CreditCard className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>Payments & Compliance</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>Stripe Connect, webhooks, audit-grade data flows, and secure-by-default design.</Trans>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>Gov Contracting</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>SAM.gov-registered, SBIR-aware, ready for IDIQ/BPA teaming opportunities.</Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Trans>Run your next event — or your next product — with us.</Trans>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              <Trans>
                Use PartyGem to launch an event today, or bring us your AI/ML and full-stack challenges and we'll help
                you ship.
              </Trans>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://app.partygemai.com" target="_blank" rel="noopener noreferrer">
                  <Trans>Try PartyGem</Trans>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Trans>Talk to the agency</Trans>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
