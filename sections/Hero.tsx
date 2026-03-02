"use client";

import { m } from "framer-motion";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Button";
import { Badge } from "@/components/Badge";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative overflow-hidden pb-24 pt-28 sm:pt-32"
    >
      <m.div
        className="pointer-events-none absolute inset-0 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <m.div
          className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-fuchsia-500/24 blur-3xl"
          animate={{ x: [-10, 20, -10], y: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.div
          className="absolute right-0 top-16 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl"
          animate={{ x: [10, -15, 10], y: [0, -12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.div
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-500/14 blur-3xl"
          animate={{ x: [0, 12, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-950/90 via-slate-950/60 to-transparent" />
      </m.div>

      <div className="pointer-events-none absolute inset-0 noise-layer" />

      <Container className="relative">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium tracking-tight text-white/70 ring-1 ring-white/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
              React.js & Next.js Developer · Mohali, Punjab
            </div>

            <div className="space-y-7">
              <m.h1
                className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  Portfolio · 2026
                </span>
                <span className="mt-3 block gradient-text drop-shadow-[0_0_24px_rgba(129,140,248,0.75)]">
                  Jashanpreet Kaur
                </span>
              </m.h1>

              <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                I build premium, performant frontends with React, Next.js and
                TypeScript—focusing on smooth interactions, clean architecture,
                and UIs that feel crafted, not generic.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="purple">React.js</Badge>
              <Badge variant="cyan">Next.js (App Router)</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <ButtonLink href="#projects">View projects</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact me
              </ButtonLink>
              <ButtonLink
                href="/Jashanpreet-Kaur-Resume.pdf"
                variant="ghost"
                aria-label="Download resume"
              >
                Download résumé
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass glass-hover relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-60" />
              <div className="relative space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Currently
                </p>
                <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  Acewebx Software Solutions
                </h2>
                <p className="text-xs text-muted">
                  React & Next.js Developer · July 2023 – Present
                </p>

                <div className="mt-4 grid gap-3 text-xs text-muted sm:text-sm">
                  <p>
                    Delivered KYC, travel, and property management products with
                    a focus on performance and clarity across devices.
                  </p>
                  <p>
                    Helped achieve{" "}
                    <span className="font-semibold text-white">
                      ~30% performance improvements
                    </span>{" "}
                    on key flows and support onboarding for{" "}
                    <span className="font-semibold text-white">
                      1,000+ users
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass glass-hover rounded-2xl p-4 text-sm text-muted">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Focus
                </p>
                <p className="mt-2">
                  Frontend architecture, DX, and smooth micro‑interactions that
                  feel premium without sacrificing performance.
                </p>
              </div>
              <div className="glass glass-hover rounded-2xl p-4 text-sm text-muted">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Stack
                </p>
                <p className="mt-2">
                  React, Next.js, TypeScript, Tailwind, Redux Toolkit, React
                  Query, REST APIs, Jira & Git.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

