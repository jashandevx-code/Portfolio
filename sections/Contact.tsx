"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact information"
      className="pb-24 pt-10 sm:pt-16"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Contact information"
          description="Reach out directly using the details below."
        />

        <FadeIn className="mt-8">
          <div className="space-y-4 text-sm text-muted sm:text-base">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                Email
              </p>
              <a
                href="mailto:jashan96.dev@gmail.com"
                className="mt-1 inline-flex text-sm font-semibold text-white hover:text-cyan-200"
              >
                jashan96.dev@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                Phone
              </p>
              <a
                href="tel:+919660696635"
                className="mt-1 inline-flex text-sm font-semibold text-white hover:text-cyan-200"
              >
                +91 96606 96635
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/jashanpreet-kaur-80a180263"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex text-sm font-semibold text-white hover:text-cyan-200"
              >
                linkedin.com/in/jashanpreet-kaur-80a180263
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
