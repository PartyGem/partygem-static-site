"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect, Suspense } from "react"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XCHVVXBYCH"

function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      // Track page views
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  )
}
