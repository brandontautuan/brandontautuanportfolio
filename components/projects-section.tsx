"use client"

import { ArrowUpRight, GitBranch, Star, Lock } from "lucide-react"

const featuredProject = {
  title: "AgentClipz",
  label: "AWS Autonomous Agents Hackathon · 1st Place",
  description:
    "Autonomous pipeline: monitors live Twitch stream and chat, triggers recording on chat spikes, sends audio to Modulate for transcription and emotion detection. Trims best moment (highlight clipper from Modulate JSON), burns in subtitles, uses Reka Chat API for social captions, posts to Instagram Reels. Python, FFmpeg, Streamlink, TwitchIO, pandas, moviepy, instagrapi.",
  tech: ["Python", "FFmpeg", "Streamlink", "TwitchIO", "Modulate", "Reka", "moviepy", "instagrapi"],
  stars: null,
  private: false,
}

const openEnvProject = {
  title: "SmashBot",
  label: "openenv pytorch hackathon",
  description:
    "Reinforcement learning system for Super Smash Bros. Melee that trains Fox and Jigglypuff in two phases: a custom Melee-like physics simulator for fast offline PPO training, and fine-tuning against the real game via Slippi Dolphin and Meta’s OpenEnv framework at 60 FPS. Includes stateless physics, structured observation/action spaces, an OpenEnv HTTP/WebSocket server with FastAPI, and PyTorch Actor-Critic policies wired to real controller inputs.",
  tech: ["PyTorch", "TorchRL", "Gymnasium", "OpenEnv", "Slippi Dolphin", "FastAPI", "uvicorn", "NumPy"],
  stars: null,
  private: false,
}

const secondaryProjects = [
  {
    title: "EVincible - Geospatial EV Charging Maintainer",
    label: "SacHacks 2026",
    description:
      "Geospatial EV charging dashboard (Davis, Sacramento, Folsom). React 19 + TypeScript + Vite; MapLibre GL JS and Deck.gl for map and mesh (scatter nodes, line edges). Recharts analytics; optional LangChain + Groq. NREL AFDC API; client-side map and tooltips; Vercel-ready.",
    tech: ["React", "TypeScript", "Vite", "MapLibre GL", "Deck.gl", "Recharts", "NREL API"],
    stars: null,
    private: false,
  },
  {
    title: "TutoringTomorrow",
    label: "Tutoring Platform",
    description:
      "Full-stack tutoring platform. Next.js (React, SWR, react-hook-form, zod); Node + Express + TypeScript with Prisma. Supabase auth and Postgres; Stripe checkout and webhooks. Vercel-ready.",
    tech: ["Next.js", "TypeScript", "Node", "Express", "Prisma", "Supabase", "Stripe"],
    stars: null,
    private: false,
  },
]

const powerGridProjects: never[] = []

function ProjectCard({
  project,
  size,
}: {
  project: (typeof secondaryProjects)[0] | typeof featuredProject | typeof openEnvProject
  size: "featured" | "secondary" | "power"
}) {
  const isFeatured = size === "featured"
  const isPower = size === "power"

  return (
    <article
      className="group relative rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-muted-foreground/40 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.06)] md:p-6"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.02)" }}
    >
      <div className="mb-3 flex items-center justify-between md:mb-4">
        <span className="rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
          {project.label}
        </span>
        <div className="flex items-center gap-3">
          {"stars" in project && project.stars && (
            <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <Star className="h-3 w-3" />
              {project.stars}
            </span>
          )}
          {project.private ? (
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          ) : (
            <GitBranch className="h-3.5 w-3.5 text-muted-foreground" />
          )}
        </div>
      </div>

      <h3
        className={`font-semibold text-foreground ${isFeatured ? "mb-2 text-2xl md:text-3xl" : isPower ? "mb-1.5 text-lg" : "mb-2 text-xl md:text-xl"}`}
      >
        {project.title}
      </h3>
      <p
        className={`leading-relaxed text-muted-foreground ${isFeatured ? "mb-6 text-sm md:text-base" : isPower ? "mb-4 text-xs" : "mb-5 text-sm"}`}
      >
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

      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-foreground/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="work" className="relative bg-[#050505] px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Projects
          </h2>
        </div>

        {/* Bento grid: uniform gap, architectural padding */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-12 md:gap-5">
          {/* 1. Featured: AgentClipz (full width) */}
          <div className="md:col-span-12">
            <ProjectCard project={featuredProject} size="featured" />
          </div>

          {/* 2. Secondary: EVChargerMesh + TutoringTomorrow (side-by-side) */}
          <div className="md:col-span-6">
            <ProjectCard project={secondaryProjects[0]} size="secondary" />
          </div>
          <div className="md:col-span-6">
            <ProjectCard project={secondaryProjects[1]} size="secondary" />
          </div>

          {/* 3. SmashBot (full-width RL project) */}
          <div className="md:col-span-12">
            <ProjectCard project={openEnvProject} size="secondary" />
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-muted-foreground/50 hover:text-foreground hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.06)]"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
