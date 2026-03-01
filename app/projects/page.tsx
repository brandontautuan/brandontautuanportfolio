import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectsList } from "@/components/projects-list"

export const metadata: Metadata = {
  title: "Projects | Brandon Tautuan",
  description:
    "Full list of software projects: full-stack apps, hackathon wins, infrastructure, and developer tools.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ProjectsList />
      <Footer />
    </main>
  )
}
