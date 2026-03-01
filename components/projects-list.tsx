"use client"

import { ArrowUpRight, Calendar, Github, Star, Lock } from "lucide-react"

const mockProjects = [
  {
    title: "AgentClipz",
    label: "AWS AUTONOMOUS AGENTS HACKATHON · 1ST PLACE",
    date: "Feb 2026",
    description:
      "Autonomous pipeline that monitors a live Twitch stream and chat, triggers recording when chat activity spikes, and sends captured audio to Modulate for transcription and emotion detection. Trims the best moment using a highlight clipper that reads Modulate's JSON, burns in subtitles, asks Reka's Chat API to generate a social caption from transcript and emotions, and posts the result to Instagram Reels. Built in Python with FFmpeg, Streamlink, TwitchIO, pandas, moviepy, and instagrapi. Won 1st place for Best Use of Modulate at the AWS Autonomous Agents hackathon against ~80 teams.",
    tech: ["Python", "FFmpeg", "Streamlink", "TwitchIO", "pandas", "moviepy", "instagrapi", "Modulate", "Reka"],
    githubUrl: "https://github.com/brandontautuan/agentclipz",
    stars: null,
    private: false,
  },
  {
    title: "TutoringTomorrow",
    label: "Full-stack",
    date: "April 2025 - Present",
    description:
      "Full-stack tutoring platform where students browse subjects and tutors, create accounts, book sessions (with optional Stripe checkout), and manage their sessions and coursework; tutors use a dashboard and apply via an application flow; admins are bootstrapped from ADMIN_EMAILS and can manage users and content. Supabase for auth and PostgreSQL; Prisma uses that same Supabase Postgres for all app data. Next.js frontend with axios, SWR, react-hook-form, zod; Node + Express + TypeScript backend with Prisma and optional Stripe. Deployable to Vercel with env vars.",
    tech: ["Next.js", "TypeScript", "Node", "Express", "Prisma", "Supabase", "Stripe", "React", "SWR", "zod"],
    githubUrl: "https://github.com/brandontautuan/tutoring-tomorrow",
    stars: null,
    private: false,
  },
  {
    title: "EVChargerMesh",
    label: "SacHacks 2026",
    date: "Jan 2026",
    description:
      "Geospatial EV charging dashboard for Davis, Sacramento, and Folsom. React 19 + TypeScript + Vite frontend with MapLibre GL JS and Deck.gl for map and mesh visualization (scatter nodes, line edges). Free OSM-compatible vector tiles (Carto); no map API keys. Stations show 5 chargers per location with tooltips (hardware state, utilization, grid stress, maintenance). Recharts for analytics; optional LangChain + Groq for AI. Data from local JSON and NREL Alternative Fuel Data Center (AFDC) API. Fully client-side for map and tooltips; Vercel-ready.",
    tech: ["React", "TypeScript", "Vite", "MapLibre GL", "Deck.gl", "react-map-gl", "Recharts", "LangChain", "Groq", "NREL AFDC API"],
    githubUrl: "https://github.com/brandontautuan/evcharger-mesh",
    stars: null,
    private: false,
  },
  {
    title: "Relay",
    label: "B2B SaaS",
    date: "Nov 2024",
    description:
      "Real-time collaboration platform for enterprise teams. Event-driven microservices with sub-50ms latency. Handles presence, document sync, and voice/video signaling. Built for scale with regional replication and fallback. Used by 12+ enterprise clients for internal tools and customer-facing collaboration features.",
    tech: ["Next.js", "Go", "gRPC", "Redis", "PostgreSQL", "WebRTC"],
    githubUrl: "https://github.com/brandontautuan/relay",
    stars: "2.4k",
    private: false,
  },
  {
    title: "Vault",
    label: "Developer Tool",
    date: "Oct 2024",
    description:
      "End-to-end encrypted secrets management for CI/CD pipelines. Integrates with GitHub Actions, GitLab CI, and Jenkins. Supports rotation policies, audit logs, and team-based access. CLI and SDK for programmatic access. Self-hosted or cloud.",
    tech: ["TypeScript", "Rust", "PostgreSQL", "Vault", "CLI"],
    githubUrl: "https://github.com/brandontautuan/vault",
    stars: "890",
    private: false,
  },
  {
    title: "Drift",
    label: "Analytics",
    date: "Sep 2024",
    description:
      "Privacy-first analytics dashboard. Cookie-less tracking with real-time aggregation. No PII stored; focus on aggregate metrics and funnels. Integrations for Next.js, React, and vanilla JS. Self-hosted or managed. Used for product and marketing analytics.",
    tech: ["React", "ClickHouse", "Go", "TypeScript"],
    githubUrl: "https://github.com/brandontautuan/drift",
    stars: "1.1k",
    private: false,
  },
  {
    title: "Nexus",
    label: "Infrastructure",
    date: "Aug 2024",
    description:
      "Self-hosted deployment platform with zero-downtime rolling updates and automatic SSL. Git-based workflows; preview environments per branch. Supports Docker and buildpacks. Terraform provider for provisioning. Designed for small teams and startups.",
    tech: ["Go", "Docker", "Terraform", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/brandontautuan/nexus",
    stars: "3.2k",
    private: false,
  },
  {
    title: "Signal",
    label: "Enterprise",
    date: "Jul 2024",
    description:
      "AI-powered incident response system. Ingest alerts from PagerDuty, Opsgenie, and webhooks; runbooks and suggested actions via LLM. Cuts mean time to resolution by 60% in pilot customers. Role-based access and audit trail. On-prem and cloud options.",
    tech: ["Python", "TypeScript", "K8s", "OpenAI", "PostgreSQL"],
    githubUrl: null,
    stars: null,
    private: true,
  },
  {
    title: "To-Do Widget",
    label: "Personal",
    date: "Jun 2024",
    description:
      "Lightweight task widget with persistence and filters. Minimal UI and keyboard-first workflow. LocalStorage and optional sync. Used as a daily driver for personal task tracking and as a reference implementation for small React + TypeScript apps.",
    tech: ["React", "TypeScript", "LocalStorage", "Vite"],
    githubUrl: "https://github.com/brandontautuan/todo-widget",
    stars: null,
    private: false,
  },
  {
    title: "Chaos Game",
    label: "Graphics",
    date: "May 2024",
    description:
      "Interactive visualization of the chaos game (iterated function system) for generating fractals. Adjustable parameters and color schemes. Built as a C++ learning project with a simple GUI. Demonstrates deterministic chaos and self-similarity.",
    tech: ["C++", "OpenGL", "CMake"],
    githubUrl: "https://github.com/brandontautuan/Chaos-Game",
    stars: null,
    private: false,
  },
]

export function ProjectsList() {
  return (
    <section className="relative bg-[#050505] px-4 pt-28 pb-24 md:px-6 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 md:mb-16">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            All projects
          </h1>
        </div>

        <ul className="flex flex-col gap-5">
          {mockProjects.map((project) => (
            <li key={project.title}>
              <article
                className="group relative rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-muted-foreground/40 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.06)] md:p-6"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.02)" }}
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 md:mb-4">
                  <span className="rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                    {project.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.date}
                    </span>
                    {project.stars && (
                      <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </span>
                    )}
                    {project.private ? (
                      <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-muted-foreground hover:text-foreground"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>

                <h2 className="mb-2 text-xl font-semibold text-foreground md:text-2xl">
                  {project.title}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}

                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-foreground/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
