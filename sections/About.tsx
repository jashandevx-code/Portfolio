"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function AboutSection() {
  return (
    <section id="about" aria-label="About" className="pb-20 pt-10 sm:pt-16">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Building thoughtful, scalable frontend experiences."
          description="A frontend engineer based in Mohali, Punjab, specializing in React.js and Next.js. I care about performance, clarity, and UI details that make interfaces feel effortless."
        />

        <FadeIn className="mt-8 grid gap-8 md:grid-cols-2" delay={0.05}>
          <p className="text-sm leading-7 text-muted sm:text-base">
            At Acewebx Software Solutions, I&apos;ve worked on KYC platforms,
            virtual travel experiences, and property management systems. My work
            ranges from implementing product requirements to shaping how users
            move through key flows, always balancing business goals with UX.
          </p>
          <p className="text-sm leading-7 text-muted sm:text-base">
            I enjoy designing component systems that are reusable and
            predictable, collaborating closely with designers and backend
            engineers, and profiling apps to understand what actually impacts
            the experience—whether it&apos;s bundle size, network, or layout
            shifts.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

