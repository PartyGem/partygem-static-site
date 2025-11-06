"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trans } from "@/components/trans"
import { ArrowLeft, TrendingUp, DollarSign, Target, UserCheck, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function DashboardsPage() {
  const dashboardRef = useRef<HTMLDivElement>(null)
  const roiRef = useRef<HTMLDivElement>(null)

  const dashboardInView = useInView(dashboardRef, { threshold: 0.1 })
  const roiInView = useInView(roiRef, { threshold: 0.1 })

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Button variant="outline" asChild>
                  <Link href="/features" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <Trans>Back to Features</Trans>
                  </Link>
                </Button>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <Trans>Sample Dashboards</Trans>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                <Trans>
                  Explore our comprehensive analytics and KPI tracking dashboards that help you measure event success
                  and ROI across all aspects of your events.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={dashboardRef} className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Event Performance Dashboard</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>
                Get comprehensive insights into your event's success with our detailed KPI analytics dashboard.
              </Trans>
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 fade-in ${dashboardInView ? "reveal" : ""}`}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <Trans>Attendee Ratio</Trans>
                  </p>
                  <p className="text-2xl font-bold">87.5%</p>
                  <p className="text-xs text-green-600">+12% from last event</p>
                </div>
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <Trans>Total Revenue</Trans>
                  </p>
                  <p className="text-2xl font-bold">$124,580</p>
                  <p className="text-xs text-green-600">+28% from target</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <Trans>Fundraising Goal</Trans>
                  </p>
                  <p className="text-2xl font-bold">$45,200</p>
                  <p className="text-xs text-blue-600">90% of $50K goal</p>
                </div>
                <Target className="h-8 w-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <Trans>Engagement Score</Trans>
                  </p>
                  <p className="text-2xl font-bold">9.2/10</p>
                  <p className="text-xs text-green-600">Excellent rating</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </Card>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in ${dashboardInView ? "reveal" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>
                  <Trans>Attendance Analytics</Trans>
                </CardTitle>
                <CardDescription>
                  <Trans>Registration vs actual attendance breakdown</Trans>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Total Registered</Trans>
                    </span>
                    <span className="font-medium">1,250</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Actually Attended</Trans>
                    </span>
                    <span className="font-medium">1,094</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "87.5%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>No-Shows</Trans>
                    </span>
                    <span className="font-medium">156</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "12.5%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>
                  <Trans>Revenue Breakdown</Trans>
                </CardTitle>
                <CardDescription>
                  <Trans>Income sources and distribution</Trans>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Ticket Sales</Trans>
                    </span>
                    <span className="font-medium">$89,400</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Sponsorships</Trans>
                    </span>
                    <span className="font-medium">$25,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Merchandise</Trans>
                    </span>
                    <span className="font-medium">$10,180</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section ref={roiRef} className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>ROI Tracking & Analytics</Trans>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px]">
              <Trans>
                Measure the true impact of your events with comprehensive ROI tracking across all revenue streams and
                engagement metrics.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  <Trans>Sponsorship ROI</Trans>
                </h3>
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Investment</span>
                  <span className="font-medium">$25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Generated Value</span>
                  <span className="font-medium">$87,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">ROI</span>
                  <span className="font-bold text-green-600">+250%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  <Trans>Marketing ROI</Trans>
                </h3>
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ad Spend</span>
                  <span className="font-medium">$8,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ticket Revenue</span>
                  <span className="font-medium">$89,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">ROI</span>
                  <span className="font-bold text-green-600">+952%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  <Trans>Engagement ROI</Trans>
                </h3>
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Engagement Cost</span>
                  <span className="font-medium">$3,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Repeat Bookings</span>
                  <span className="font-medium">$45,600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">ROI</span>
                  <span className="font-bold text-green-600">+1,325%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </Card>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in ${roiInView ? "reveal" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>
                  <Trans>Cost Per Acquisition Trends</Trans>
                </CardTitle>
                <CardDescription>
                  <Trans>Track how efficiently you're acquiring new attendees</Trans>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Social Media</Trans>
                    </span>
                    <span className="font-medium">$12.50</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Email Marketing</Trans>
                    </span>
                    <span className="font-medium">$8.75</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "17%" }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <Trans>Referrals</Trans>
                    </span>
                    <span className="font-medium">$4.20</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>
                  <Trans>Lifetime Value Analysis</Trans>
                </CardTitle>
                <CardDescription>
                  <Trans>Understanding long-term attendee value and retention</Trans>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      <Trans>Average Attendee Value</Trans>
                    </span>
                    <span className="font-medium">$127.50</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      <Trans>Repeat Attendance Rate</Trans>
                    </span>
                    <span className="font-medium">68%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      <Trans>Referral Rate</Trans>
                    </span>
                    <span className="font-medium">34%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      <Trans>Projected LTV</Trans>
                    </span>
                    <span className="font-bold text-primary">$385.20</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              <Trans>Ready to see these insights for your events?</Trans>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              <Trans>Start tracking your event performance with PartyGem AI's comprehensive analytics dashboard.</Trans>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Trans>Get Started Free</Trans>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">
                  <Trans>Back to Features</Trans>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
