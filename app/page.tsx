import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechMarquee } from "@/components/tech-marquee"
import { TerminalSection } from "@/components/terminal-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TechMarquee />
      <TerminalSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
