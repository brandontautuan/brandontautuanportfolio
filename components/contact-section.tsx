"use client"

import { useState } from "react"
import { ArrowUpRight, Loader2, Mail, Github, Linkedin } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("") // honeypot - leave empty
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !message.trim()) {
      toast.error("Please fill in both email and message")
      return
    }
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          message: message.trim(),
          website: website.trim(),
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send")
      }

      toast.success("Message sent! I'll get back to you soon.")
      setEmail("")
      setMessage("")
      setWebsite("")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative border-t border-border px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Contact
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"Let's build"}
              <br />
              something great.
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              Currently accepting new projects and consulting engagements.
              Reach out to discuss your next venture.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:btau4135@gmail.com"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://github.com/brandontautuan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-tautuan-80101832a/?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div
                className="absolute -left-[9999px] opacity-0 pointer-events-none"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-xs text-muted-foreground"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-muted-foreground disabled:opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground/50 outline-none transition-colors focus:border-muted-foreground disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 font-mono text-sm font-medium text-background transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
