"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";

const experience = {
  company: "Acewebx Software Solutions",
  role: "React & Next.js Developer",
  period: "July 2023 – Present",
  location: "Mohali, Punjab",
  projects: [
    {
      name: "Exclusive Links CRM Platform (Dubai Real Estate)",
      points: [
        "Built an enterprise‑level CRM for a Dubai real‑estate brokerage with role‑based access (Admin, Manager, Agent) and multi‑portal listing management.",
        "Implemented lead and enquiry tracking with Open Game logic, automated WhatsApp/email workflows, and offer‑to‑closing lifecycle views.",
        "Integrated RAG (Red/Amber/Green) performance analytics, matching engine for listings vs. enquiries, Outlook sync, AI‑generated descriptions, and third‑party website APIs.",
      ],
    },
    {
      name: "AssureDeFi (KYC Platform)",
      points: [
        "Implemented responsive KYC flows and dashboards with clear user statuses and validation.",
        "Improved key verification journeys with optimised rendering and API usage, reaching ~30% faster completion times.",
        "Helped onboard 1,000+ users by refining copy, form structure, and error messaging.",
      ],
    },
    {
      name: "Virtual Tourist Guide Platform",
      points: [
        "Built immersive card-based layouts for destinations, itineraries, and recommendations.",
        "Used lazy loading and image optimisation to keep experiences smooth on mobile networks.",
      ],
    },
    {
      name: "Rooftop & Bluesky Property Management System",
      points: [
        "Designed structured listing views, filters, and detail pages backed by REST APIs.",
        "Improved information hierarchy so owners and tenants can quickly find key actions.",
      ],
    },
  ],
} as const;

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="pb-20 pt-10 sm:pt-16"
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Hands‑on experience across KYC, travel, and property products."
          description="Delivering production-grade frontends at Acewebx—balancing product requirements, UX, and performance."
        />

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400/80 via-cyan-300/70 to-transparent sm:left-1/2" />

          <FadeIn className="relative grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-start">
            <div className="sm:text-right">
              <p className="text-sm font-semibold tracking-tight text-white">
                {experience.company}
              </p>
              <p className="mt-1 text-sm text-muted">{experience.role}</p>
              <p className="mt-1 text-xs text-muted">
                {experience.period} · {experience.location}
              </p>
            </div>

            <div className="space-y-6">
              {experience.projects.map((project, idx) => (
                <FadeIn key={project.name} delay={0.06 * (idx + 1)}>
                  <GlassCard className="relative p-5">
                    <div className="absolute -left-6 top-5 hidden h-7 w-7 items-center justify-center rounded-full bg-[#050511] neon-ring sm:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                      {project.name}
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs leading-6 text-muted sm:text-sm">
                      {project.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

