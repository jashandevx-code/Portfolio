"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { FadeIn } from "@/components/motion/FadeIn";

const projects = [
  {
    title: "Exclusive Links CRM Platform",
    description:
      "Enterprise‑grade Dubai real‑estate CRM with role‑based access, listing management across portals, workflows, and deep agent analytics.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "REST APIs",
    ],
    results: [
      "Unified property, lead, and offer workflows into a single CRM, improving team visibility and response times.",
      "Delivered RAG performance views, Outlook sync, AI‑assisted descriptions, and multi‑portal publishing for agents.",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "AssureDeFi KYC Platform",
    description:
      "Secure KYC platform with responsive dashboards, verification workflows, and clear status tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    results: [
      "Reduced friction in KYC completion flows with clearer steps and validation.",
      "Contributed to ~30% faster completion on key verification journeys.",
    ],
    live: "https://www.assuredefi.com/",
    github: "#",
  },
  {
    title: "Virtual Tourist Guide Platform",
    description:
      "Card‑driven experience to explore destinations, itineraries, and recommendations in a mobile‑first layout.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    results: [
      "Optimised imagery and loading strategies to keep browsing smooth on slower networks.",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Rooftop & Bluesky Property Management",
    description:
      "Property management dashboards with listing views, filters, and detail screens for owners and tenants.",
    stack: ["Next.js", "React Query", "Tailwind CSS"],
    results: [
      "Improved discoverability of key actions through clearer layouts and visual hierarchy.",
    ],
    live: "#",
    github: "#",
  },
] as const;

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="pb-20 pt-10 sm:pt-16"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that reflect how I build."
          description="A snapshot of the platforms I’ve contributed to, focused on clarity, speed, and maintainable frontends."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <FadeIn key={project.title} delay={0.05 * idx}>
              <GlassCard className="flex h-full flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Project {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-white sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="mt-3 space-y-2 text-xs leading-6 text-muted sm:text-sm">
                  {project.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-fuchsia-400" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink
                    href={project.live}
                    variant="secondary"
                    className={
                      project.title === "AssureDeFi KYC Platform"
                        ? "flex-1 justify-center text-sm bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-black shadow-[0_0_24px_rgba(168,85,247,0.9)] hover:shadow-[0_0_40px_rgba(59,130,246,0.9)]"
                        : "flex-1 justify-center text-sm"
                    }
                    target={
                      project.live.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.live.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    Live demo
                  </ButtonLink>
                  <ButtonLink
                    href={project.github}
                    variant="ghost"
                    className="flex-1 justify-center text-sm"
                  >
                    GitHub
                  </ButtonLink>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

