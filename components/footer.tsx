"use client"

import Link from "next/link"
import { Trans } from "@/components/trans"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl">
              PartyGem AI
            </Link>
            <p className="mt-2 text-muted-foreground">
              <Trans>
                Analytics-driven event management platform for creating unforgettable experiences with measurable
                results.
              </Trans>
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">
              <Trans>Product</Trans>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground">
                  <Trans>Features</Trans>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  <Trans>Pricing</Trans>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3">
              <Trans>Company</Trans>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  <Trans>About</Trans>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  <Trans>Contact</Trans>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  <Trans>Privacy</Trans>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  <Trans>Terms</Trans>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PartyGem AI. <Trans>All rights reserved.</Trans>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
