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
    title: "SmashBot",
    label: "openenv pytorch hackathon",
    date: "Mar 2026",
    description:
      "Reinforcement learning system for Super Smash Bros. Melee that trains Fox and Jigglypuff in two phases: a custom Melee-like physics simulator for fast offline PPO training (TorchRL + Gymnasium), and fine-tuning against the real game via Slippi Dolphin and Meta’s OpenEnv framework at 60 FPS. Includes stateless physics (knockback, hitstun, gravity, air friction, traction), structured observation and action spaces, an HTTP/WebSocket OpenEnv server built with FastAPI, and policy runners that map between SmashObservation/SmashAction and PyTorch Actor-Critic policies.",
    tech: [
      "PyTorch",
      "TorchRL",
      "Gymnasium",
      "OpenEnv",
      "Slippi Dolphin",
      "FastAPI",
      "uvicorn",
      "NumPy",
    ],
    githubUrl: null,
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
    title: "EVincible - Geospatial EV Charging Maintainer",
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
