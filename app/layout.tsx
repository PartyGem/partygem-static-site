import type React from "react"
import type { Metadata, Viewport } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://partygemai.com"),
  title: "PartyGem AI - Analytics-Driven Event Management Platform",
  description:
    "Run unforgettable events & track every metric with PartyGem AI's comprehensive event management platform.",
  keywords: ["event management", "analytics", "event platform", "event metrics", "event planning"],
  authors: [{ name: "PartyGem AI" }],
  creator: "PartyGem AI",
  publisher: "PartyGem AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://partygemai.com",
    title: "PartyGem AI - Analytics-Driven Event Management Platform",
    description:
      "Run unforgettable events & track every metric with PartyGem AI's comprehensive event management platform.",
    siteName: "PartyGem AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PartyGem AI - Analytics-Driven Event Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PartyGem AI - Analytics-Driven Event Management Platform",
    description:
      "Run unforgettable events & track every metric with PartyGem AI's comprehensive event management platform.",
    images: ["/og-image.png"],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Suspense>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
