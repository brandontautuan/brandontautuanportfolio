"use client"

import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    type: "Internship",
    date: "October 2025 - Present",
    title: "Software Engineering Intern",
    company: "BLK Innovate",
    link: "https://blkinnovate.com",
    description:
      "Developed and maintained software solutions for clients using a variety of technologies. Provided workflow automation for clients based on specifications.",
    tech: ["Python", "JavaScript", "TypeScript", "Next.js", "Node.js", "AWS"],
  },
  {
    type: "Internship",
    date: "October 2025 - March 2026",
    title: "Full-Stack Developer Intern",
    company: "Folsom Lake College - Innovation Center",
    link: "https://flc.losrios.edu",
    description:
      "Built and shipped a kiosk app for the Los Rios Community College. Developed a colorful and interactive interface to increase interest amongst students. Created a dashboard for researchers to view and evaluate student emotions based on the Kiosk Web Application.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    type: "Internship",
    date: "November 2025 - Present",
    title: "Frontend Development Intern",
    company: "Los Rios Community College District",
    link: "https://flc.losrios.edu",
    description:
    "Developed app for the community college STEM fair: event info, important dates, how to participate, project proposals, and a project list.",
    tech: ["React", "TypeScript", "Vite", "React Router", "Framer Motion"],
  },

  {
    type: "Part-Time",
    date: "March 2026 - Present",
    title: "Founding Software / Cloud Engineer",
    company: "Pacific In-Home Care",
    link: "https://pacificinhomecaredemo.vercel.app",
    description:
    "Developed the landing page along with the RAG pipeline, and AI chatbot for the company. Developed a full-stack application and database for the company to manage their clients and caregivers.",
    tech: ["React", "TypeScript", "Vite", "React Router", "Framer Motion", "LangChain", "OpenAI", "Supabase", "Node.js", "Express", "PostgreSQL", "Azure"],
  },
  {
    type: "Part-Time",
    date: "January 2026 - Present",
    title: "Software Engineer",
    company: "Route Goat",
    link: "https://www.routegoatclimbing.com",
    description:
    "Developed a Cross-Platform mobile application for rock climbers that utilizes Computer Vision to detect popular routes and their difficulty rating.",
    tech: ["React", "TypeScript", "Vite", "React Router", "Framer Motion", "Computer Vision", "OpenAI", "Supabase", "Node.js", "Express", "PostgreSQL", "Azure"],
  },
]

const monthToIndex: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
}

function getStartTimestamp(dateRange: string) {
  const start = dateRange.split("-")[0]?.trim()
  if (!start) return 0

  const [monthRaw, yearRaw] = start.split(" ")
  const month = monthToIndex[monthRaw?.toLowerCase()]
  const year = Number(yearRaw)

  if (month === undefined || Number.isNaN(year)) return 0
  return new Date(year, month, 1).getTime()
}

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
          {[...experiences]
            .sort((a, b) => {
              const bStart = getStartTimestamp(b.date)
              const aStart = getStartTimestamp(a.date)
              if (bStart !== aStart) return bStart - aStart

              const aIsPresent = a.date.toLowerCase().includes("present")
              const bIsPresent = b.date.toLowerCase().includes("present")
              if (aIsPresent && !bIsPresent) return -1
              if (!aIsPresent && bIsPresent) return 1
              return 0
            })
            .map((exp) => (
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

              <div className="mb-3 flex items-start gap-3">
                <Briefcase className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground leading-snug">
                  {exp.title}{" "}
                  <span className="font-medium text-muted-foreground">-</span>{" "}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {exp.company}
                  </a>
                </h3>
              </div>
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
