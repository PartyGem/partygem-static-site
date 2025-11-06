"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function LogoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(carouselRef, { threshold: 0.1 })

  // Logos for the carousel
  const logos = [
    { name: "Company 1", src: "/placeholder.svg?height=40&width=120" },
    { name: "Company 2", src: "/placeholder.svg?height=40&width=120" },
    { name: "Company 3", src: "/placeholder.svg?height=40&width=120" },
    { name: "Company 4", src: "/placeholder.svg?height=40&width=120" },
    { name: "Company 5", src: "/placeholder.svg?height=40&width=120" },
    { name: "Company 6", src: "/placeholder.svg?height=40&width=120" },
    { name: "Company 7", src: "/placeholder.svg?height=40&width=120" },
    { name: "Company 8", src: "/placeholder.svg?height=40&width=120" },
  ]

  useEffect(() => {
    if (!carouselRef.current || !isInView) return

    const carousel = carouselRef.current
    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5

      // Reset position when all logos have scrolled
      if (position <= -100) {
        position = 0
      }

      carousel.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    animationId = requestAnimationFrame(animate)

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    carousel.addEventListener("mouseenter", handleMouseEnter)
    carousel.addEventListener("mouseleave", handleMouseLeave)

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      cancelAnimationFrame(animationId)
    }

    return () => {
      cancelAnimationFrame(animationId)
      carousel.removeEventListener("mouseenter", handleMouseEnter)
      carousel.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isInView])

  return (
    <div className="w-full overflow-hidden">
      <div ref={carouselRef} className="flex items-center space-x-12 py-4" style={{ width: `${logos.length * 180}px` }}>
        {logos.concat(logos).map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 h-12 w-28 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
