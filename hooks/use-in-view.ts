"use client"

import { useState, useEffect, type RefObject } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView(ref: RefObject<Element>, options: UseInViewOptions = {}): boolean {
  const { threshold = 0, rootMargin = "0px", once = false } = options
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)

        if (inView && once && ref.current) {
          observer.unobserve(ref.current)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, threshold, rootMargin, once])

  return isInView
}
