"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Trans } from "@/components/trans"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What's the difference between PartyGem AI and PartyGem?",
    answer:
      "PartyGem AI is our consulting agency — we build AI/ML and full-stack software for clients and for ourselves. PartyGem is our flagship product, an intelligent event management service. Service Gem, Venue Gem, and RoboGem are additional Gems on our roadmap, all orchestrated by PartyGem AI as an Events-as-a-Service platform.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We prioritize the security of your data. Users and event organizers don't trust big tech with event data. PartyGem is privacy-first, focusing on data security and transparent AI-powered insights.",
  },
  {
    question: "What integrations are available?",
    answer:
      "PartyGem integrates with Google Calendar, Zoom (for virtual events), cloud storage for photos/videos, and analytics tools. More integrations are on the roadmap, including sponsorship outreach automation and social media event promotion.",
  },
  {
    question: "What makes PartyGem different from Eventbrite or Meetup?",
    answer:
      "Traditional platforms like Eventbrite and Meetup make money through ticketing fees, commissions, and ad-driven ecosystems. PartyGem is different because it: uses AI-powered event management for smart planning and engagement; offers flexible monetization with both free and premium plans — no hidden ticketing fees; provides real-time analytics and sentiment tracking to optimize your events; and plugs into a broader Gems ecosystem for services, venues, and on-site concierge.",
  },
  {
    question: "Can I use PartyGem for private events?",
    answer:
      "Yes. PartyGem is designed for both public and private events. Our private event analytics help organizers track attendance, gauge sentiment, and optimize future gatherings — all without sharing data publicly.",
  },
  {
    question: "Does PartyGem AI take on consulting or government work?",
    answer:
      "Yes. As a consulting agency, we take on AI/ML and full-stack engagements for private and public sector clients. We are partnered with the U.S. federal government to pursue software contracts through SAM.gov (registration actively being renewed with updated tax documentation) and engage with non-dilutive funding vehicles such as the NSF SBIR program.",
  },
  {
    question: "Is PartyGem free to use?",
    answer:
      "Yes. Our Free Plan includes essential event creation and automated reminders. For advanced features like AI-powered KPI analytics, enhanced messaging, and sponsorship tracking, see our Premium and Business plans.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            <Trans>Frequently Asked Questions</Trans>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            <Trans>Get answers to common questions about PartyGem AI's features, security, and pricing.</Trans>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-border rounded-lg bg-background shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold pr-4">
                  <Trans>{item.question}</Trans>
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <Trans>{item.answer}</Trans>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
