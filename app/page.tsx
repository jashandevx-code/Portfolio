import { Nav } from "@/components/Nav";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { SkillsSection } from "@/sections/Skills";
import { ExperienceSection } from "@/sections/Experience";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
