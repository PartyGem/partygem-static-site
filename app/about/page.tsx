import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trans } from "@/components/trans"
import {
  ArrowRight,
  Award,
  Bot,
  Building2,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
              <Trans>About PartyGem AI</Trans>
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <Trans>A consulting agency conjuring intelligent software.</Trans>
              </h1>
              <p className="mx-auto max-w-[760px] text-muted-foreground md:text-xl">
                <Trans>
                  PartyGem AI is a consulting agency specializing in AI/ML and full-stack software development. Our
                  flagship product, PartyGem, is an intelligent event management service — and the first of a growing
                  family of "Gems" we're conjuring into a new gig economy: Events as a Service.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                <Trans>Our Mission</Trans>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                <Trans>
                  We exist to ship production-grade intelligent software — both for our own product line and for
                  clients who need serious AI/ML and full-stack expertise. We believe the next decade of computing is
                  about orchestrating specialized services with AI, and we're building the agency and the products to
                  prove it.
                </Trans>
              </p>
              <p className="text-muted-foreground mb-6">
                <Trans>
                  Our near-term focus is two-fold. First, scale PartyGem — our intelligent event management service —
                  into a platform any organizer can use. Second, grow PartyGem AI into a consulting agency trusted by
                  private sector clients and the U.S. federal government to deliver software-heavy projects through
                  SAM.gov, NSF SBIR, and similar vehicles.
                </Trans>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/features">
                    <Trans>See PartyGem features</Trans>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Trans>Work with the agency</Trans>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/mission-image.png"
                alt="PartyGem AI — consulting agency and makers of PartyGem"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>The Gems Family</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[760px]">
              <Trans>
                PartyGem AI orchestrates a portfolio of products — "Gems" — that together power Events as a Service.
                PartyGem is live. Service Gem, Venue Gem, and RoboGem are on the roadmap. Additional Gems will be
                conjured later.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">
                        <Trans>PartyGem</Trans>
                      </h3>
                      <span className="rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                        <Trans>Live</Trans>
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Trans>
                        Makes the event happen by managing it end-to-end — ticketing, RSVPs, check-in, sponsorships, and
                        analytics, all powered by AI.
                      </Trans>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">
                        <Trans>Service Gem</Trans>
                      </h3>
                      <span className="rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                        <Trans>Roadmap</Trans>
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Trans>
                        Hires freelancers, caterers, businesses, and artists to sell their products or services into
                        live events — a supply-side marketplace for the event economy.
                      </Trans>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">
                        <Trans>Venue Gem</Trans>
                      </h3>
                      <span className="rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                        <Trans>Roadmap</Trans>
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Trans>
                        Makes sure every event has a setting. A venue matching service that turns unused spaces into
                        event opportunities.
                      </Trans>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">
                        <Trans>RoboGem</Trans>
                      </h3>
                      <span className="rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                        <Trans>Future</Trans>
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Trans>
                        A humanoid concierge that helps guests check in and guides them across physical spaces and
                        events — our long-term bet on embodied AI at the edge of hospitality.
                      </Trans>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 max-w-3xl mx-auto rounded-lg border border-border bg-background p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <Trans>
                PartyGem AI is the orchestration layer connecting every Gem — a new gig economy anyone can participate
                in through Events as a Service.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <Landmark className="h-3.5 w-3.5 text-brand-aqua" />
                <Trans>Government Contracting</Trans>
              </span>
              <h2 className="text-3xl font-bold tracking-tighter mt-4 mb-4">
                <Trans>Partnered with the U.S. federal government.</Trans>
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">
                <Trans>
                  A strategic focus for PartyGem AI is federal software contracting. We are partnered with the U.S.
                  federal government to bid on software-related projects — through SAM.gov, NSF SBIR, and similar
                  vehicles — and we are actively scoping capture opportunities with agencies and prime contractors.
                </Trans>
              </p>
              <p className="text-muted-foreground mb-4 text-sm">
                <Trans>
                  Our SAM.gov registration is currently being re-verified with updated tax documentation; we're
                  communicating this preemptively so contracting officers and teaming partners know exactly where we
                  stand.
                </Trans>
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2" />
                  <Trans>AI/ML systems, RAG, agentic workflows, and production MLOps</Trans>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2" />
                  <Trans>Full-stack software: Go, Python, TypeScript, Next.js, Postgres, cloud-native</Trans>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2" />
                  <Trans>Secure, auditable payment and data flows (Stripe Connect, webhooks, RBAC)</Trans>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2" />
                  <Trans>Teaming welcome — small business, SBIR, IDIQ / BPA, and subcontracting</Trans>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">
                  <Trans>Contact our government team</Trans>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-background p-5">
                <Building2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>SAM.gov Registered</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>Actively renewing with updated tax documentation; ready to bid on federal work.</Trans>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>NSF SBIR</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>Pursuing non-dilutive funding to advance our AI research and platform work.</Trans>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>Security-First</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>Server-authoritative trust boundaries, auditable webhooks, privacy-first defaults.</Trans>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-5">
                <Users className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">
                  <Trans>Teaming Ready</Trans>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <Trans>Open to subcontracting, SBIR partnerships, and IDIQ/BPA teaming arrangements.</Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Meet Our Founders</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>
                Our founding team brings together expertise in AI, software engineering, community organizing, and
                business strategy to build PartyGem AI into a consulting agency and a product company.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/images/kevin-photo.jpg"
                      alt="Kevin Wang"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kevin Wang</h3>
                  <p className="text-primary font-medium mb-4">Co-Founder / CFO</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    <Trans>
                      Kevin brings extensive experience in product management and business strategy. He leads PartyGem
                      AI's business operations, client engagements, and go-to-market strategy across both our
                      consulting practice and our Gems product line.
                    </Trans>
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://www.linkedin.com/in/kwangpro/" target="_blank" rel="noopener noreferrer">
                      <Trans>LinkedIn Profile</Trans>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/images/syed-photo.jpg"
                      alt="Syed Shah"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Syed Shah</h3>
                  <p className="text-primary font-medium mb-4">Co-Founder / Tech Lead</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    <Trans>
                      Syed is a seasoned software engineer and AI specialist with deep expertise in machine learning
                      and scalable system architecture. He leads PartyGem AI's technical practice — building PartyGem,
                      architecting the Gems platform, and delivering client engagements for AI/ML and full-stack work.
                    </Trans>
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://www.linkedin.com/in/swsprofile/" target="_blank" rel="noopener noreferrer">
                      <Trans>LinkedIn Profile</Trans>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Recognition & Support</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>
                We're proud to be supported by programs and partners that recognize our potential to ship intelligent
                software — for the event industry, the commercial sector, and the federal government.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">
                <Trans>NVIDIA Inception Program</Trans>
              </h3>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  Selected for NVIDIA's startup acceleration program, giving us access to cutting-edge AI technology
                  and expert mentorship.
                </Trans>
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Landmark className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">
                <Trans>SAM.gov Partnered</Trans>
              </h3>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  Partnered with the U.S. federal government to bid on software-related contracts through SAM.gov
                  (registration actively being renewed).
                </Trans>
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">
                <Trans>NSF SBIR Track</Trans>
              </h3>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  Pursuing National Science Foundation SBIR funding to advance our AI research and productize new
                  Gems.
                </Trans>
              </p>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <Image
                src="/images/nvidia-inception-program-badge-rgb-for-screen.svg"
                alt="NVIDIA Inception Program"
                width={250}
                height={108}
                className="object-contain opacity-70"
                priority
              />
              <div className="text-sm text-muted-foreground">
                <Trans>Proud member of the NVIDIA Inception Program</Trans>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Our Values</Trans>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>User-Centric Design</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Every feature and every engagement starts with understanding our users' needs and shipping solutions
                  that make their lives easier.
                </Trans>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Intelligent by Default</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  We bake AI into the fabric of our products and our client work — deterministic where it matters,
                  intelligent everywhere it helps.
                </Trans>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Privacy & Security First</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  Server-authoritative trust boundaries, audited data flows, and transparent AI — the standard for
                  every Gem we ship and every client we serve.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              © 2025 NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks and/or registered trademarks of NVIDIA
              Corporation in the U.S. and other countries.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Ready to build with us?</Trans>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              <Trans>
                Whether you're an event organizer, an enterprise looking for AI/ML expertise, a federal contracting
                officer, or a talented engineer who wants to join the agency — we'd love to talk.
              </Trans>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Trans>Get in Touch</Trans>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">
                  <Trans>Explore PartyGem</Trans>
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
