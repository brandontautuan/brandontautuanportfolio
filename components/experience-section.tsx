"use client"

import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    type: "Internship",
    date: "October 2025 - Present",
    title: "Software Engineering Intern",
    company: "BLK Innovate",
    description:
      "Developed and maintained software solutions for clients using a variety of technologies. Provided workflow automation for clients based on specifications.",
    tech: ["Python", "JavaScript", "TypeScript", "Next.js", "Node.js", "AWS"],
  },
  {
    type: "Internship",
    date: "October 2025 - Present",
    title: "Full-Stack Developer Intern",
    company: "Folsom Lake College - Innovation Center",
    description:
      "Built and shipped customer-facing features for a B2B dashboard. Owned the payments integration (Stripe) and real-time notification pipeline. Collaborated with design and product on a new onboarding flow.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    type: "Internship",
    date: "November 2025 - Present",
    title: "Frontend Development Intern",
    company: "Los Rios Community College District",
    description:
    "Developed app for the community college STEM fair: event info, important dates, how to participate, project proposals, and a project list.",
    tech: ["React", "TypeScript", "Vite", "React Router", "Framer Motion"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Recent roles
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.title}`}
              className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-muted-foreground/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-border bg-secondary px-3 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                  {exp.type}
                </span>
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.date}
                </div>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.title}
                </h3>
              </div>
              <p className="mb-1 font-mono text-xs text-muted-foreground">
                {exp.company}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
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
