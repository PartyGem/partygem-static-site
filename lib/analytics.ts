type EventParams = {
  [key: string]: string | number | boolean
}

/**
 * Track an event with Google Analytics
 */
export function trackEvent(eventName: string, eventParams?: EventParams) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams)
  }
}

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (command: string, eventName: string, eventParams?: Record<string, any>) => void
  }
}
