"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

const HEADLINE = "Building software\nthat scales."
const CHAR_DELAY_MS = 70

export function HeroSection() {
  const [visible, setVisible] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (visible.length >= HEADLINE.length) {
      setIsComplete(true)
      return
    }
    const t = setTimeout(() => {
      setVisible(HEADLINE.slice(0, visible.length + 1))
    }, CHAR_DELAY_MS)
    return () => clearTimeout(t)
  }, [visible])

  const [line1, line2] = visible.split("\n")

  return (
    <section className="noise-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Grid background */}
      <div className="grid-fade pointer-events-none absolute inset-0 z-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
          {line1}
          {line2 !== undefined && (
            <>
              <br />
              <span className="text-muted-foreground">{line2}</span>
            </>
          )}
          {!isComplete && (
            <span
              className="ml-0.5 inline-block font-normal text-foreground animate-blink"
              aria-hidden
            >
              |
            </span>
          )}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          Computer Science Student at San Jose State and full-stack software
          engineer specializing in scalable B2B SaaS products, distributed
          systems, and developer tooling.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-mono text-sm font-medium text-background transition-all hover:bg-foreground/90"
          >
            Lets Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-muted-foreground hover:text-foreground"
          >
            View work
          </a>
        </div>

        <div className="mt-16 flex items-center gap-8 justify-center">
          <div className="text-center">
            <p className="font-mono text-2xl font-bold text-foreground">50+</p>
            <p className="font-mono text-xs text-muted-foreground">Projects shipped</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="font-mono text-2xl font-bold text-foreground">8+</p>
            <p className="font-mono text-xs text-muted-foreground">Years of experience</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="font-mono text-2xl font-bold text-foreground">10+</p>
            <p className="font-mono text-xs text-muted-foreground">Enterprise clients</p>
          </div>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-8 z-10 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
