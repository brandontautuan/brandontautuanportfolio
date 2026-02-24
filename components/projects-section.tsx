"use client"

import { ArrowUpRight, GitBranch, Star, Lock } from "lucide-react"

const projects = [
  {
    title: "Relay",
    label: "B2B SaaS",
    description:
      "Real-time collaboration platform for enterprise teams. Event-driven microservices with sub-50ms latency.",
    tech: ["Next.js", "Go", "gRPC", "Redis"],
    stars: "2.4k",
    featured: true,
    span: "md:col-span-2",
  },
  {
    title: "Vault",
    label: "Developer Tool",
    description:
      "End-to-end encrypted secrets management for CI/CD pipelines.",
    tech: ["TypeScript", "Rust", "PostgreSQL"],
    stars: "890",
    featured: false,
    span: "md:col-span-1",
  },
  {
    title: "Drift",
    label: "Analytics",
    description:
      "Privacy-first analytics dashboard. Cookie-less tracking with real-time aggregation.",
    tech: ["React", "ClickHouse", "Go"],
    stars: "1.1k",
    featured: false,
    span: "md:col-span-1",
  },
  {
    title: "Nexus",
    label: "Infrastructure",
    description:
      "Self-hosted deployment platform with zero-downtime rolling updates and automatic SSL.",
    tech: ["Go", "Docker", "Terraform"],
    stars: "3.2k",
    featured: false,
    span: "md:col-span-1",
  },
  {
    title: "Signal",
    label: "Enterprise",
    description:
      "AI-powered incident response system. Cuts mean time to resolution by 60%.",
    tech: ["Python", "TypeScript", "K8s"],
    stars: null,
    featured: false,
    span: "md:col-span-1",
    private: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Projects
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            View all on GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-muted-foreground/50 ${project.span}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-border bg-secondary px-3 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                  {project.label}
                </span>
                <div className="flex items-center gap-3">
                  {project.stars && (
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

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-foreground/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
