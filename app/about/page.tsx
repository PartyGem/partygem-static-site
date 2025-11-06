import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trans } from "@/components/trans"
import { ArrowRight, Award, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <Trans>About PartyGem AI</Trans>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                <Trans>
                  We're building the future of event management with AI-powered analytics and seamless user experiences.
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
                  PartyGem AI was founded with a simple yet powerful vision: to democratize event management through
                  intelligent technology. We believe every event organizer, regardless of size or budget, deserves
                  access to enterprise-grade analytics and management tools.
                </Trans>
              </p>
              <p className="text-muted-foreground mb-6">
                <Trans>
                  Our platform combines cutting-edge AI with intuitive design to help event organizers create
                  unforgettable experiences while tracking every metric that matters. From intimate gatherings to
                  large-scale conferences, we're here to make event management effortless and data-driven.
                </Trans>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/features">
                    <Trans>Explore Features</Trans>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Trans>Get in Touch</Trans>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/mission-image.png"
                alt="PartyGem AI SaaS for Hybrid Events - Diverse team celebrating with analytics dashboards"
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
              <Trans>Meet Our Founders</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>
                Our founding team brings together expertise in AI, software engineering, community organizing, and
                business strategy to revolutionize the event management industry.
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
                  <p className="text-primary font-medium mb-4">Co-Founder/CFO</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    <Trans>
                      Kevin brings extensive experience in product management and business strategy. With a background
                      in scaling technology platforms and a passion for creating user-centric solutions, he leads
                      PartyGem AI's vision of making event management accessible and data-driven for organizers
                      worldwide.
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
                  <p className="text-primary font-medium mb-4">Co-Founder/Tech Lead</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    <Trans>
                      Syed is a seasoned software engineer and AI specialist with deep expertise in machine learning and
                      scalable system architecture. He leads the technical development of PartyGem AI's platform,
                      ensuring our AI-powered analytics deliver actionable insights while maintaining enterprise-grade
                      performance and security.
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
                We're proud to be supported by leading organizations and programs that recognize our potential to
                transform the event management industry.
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
                  Selected for NVIDIA's prestigious startup acceleration program, providing access to cutting-edge AI
                  technology and expert mentorship.
                </Trans>
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">
                <Trans>NSF SBIR Grant Applicant</Trans>
              </h3>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  Currently pursuing National Science Foundation Small Business Innovation Research funding to advance
                  our AI-powered event analytics platform.
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
                <Trans>Seeking Investment</Trans>
              </h3>
              <p className="text-muted-foreground text-sm">
                <Trans>
                  Actively pursuing small business grants and venture capital funding to scale our platform and expand
                  our team of AI and event management experts.
                </Trans>
              </p>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <Image
                src="/images/nvidia-inception-logo.png"
                alt="NVIDIA Inception Program"
                width={120}
                height={60}
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
                  Every feature we build starts with understanding our users' needs and creating solutions that make
                  their lives easier.
                </Trans>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Innovation Through AI</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  We leverage cutting-edge artificial intelligence to provide insights and automation that were
                  previously impossible.
                </Trans>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Trans>Data Privacy First</Trans>
              </h3>
              <p className="text-muted-foreground">
                <Trans>
                  We believe in transparent, secure data practices that put our users' privacy and security at the
                  forefront of everything we do.
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
              <Trans>Ready to join our journey?</Trans>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              <Trans>
                Whether you're an event organizer looking for better tools, an investor interested in our vision, or a
                talented individual wanting to join our team, we'd love to hear from you.
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
                  <Trans>Learn More</Trans>
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
