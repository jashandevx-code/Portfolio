"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    label: "Styling",
    skills: ["Tailwind CSS", "MUI", "shadcn/ui", "Bootstrap"],
  },
  {
    label: "State Management",
    skills: ["Redux Toolkit", "Context API", "React Query"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Jira", "REST APIs"],
  },
  {
    label: "AI & Developer Productivity",
    skills: ["Cursor Editor", "Claude AI", "Grok AI", "Blackbox AI", "ChatGPT"],
  },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="pb-20 pt-10 sm:pt-16">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A focused, modern frontend toolkit."
          description="Technologies I use to design and ship maintainable, high-quality frontends for production products."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <FadeIn key={group.label} delay={idx * 0.05}>
              <GlassCard
                className={`p-5 ${
                  group.label === "AI & Developer Productivity"
                    ? "relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_60%)]"
                    : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  {group.label}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/14 bg-white/5 px-3 py-1 text-xs font-medium tracking-tight text-white/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

