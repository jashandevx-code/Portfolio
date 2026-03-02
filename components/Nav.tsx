"use client";

import { m } from "framer-motion";
import { Container } from "@/components/Container";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  return (
    <m.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/8 bg-[#050511]/60 backdrop-blur"
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="focus-ring inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold tracking-tight text-white"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 shadow-[0_0_24px_rgba(168,85,247,0.7)]" />
          Jashanpreet Kaur
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-full px-3 py-2 text-sm text-white/75 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="focus-ring rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/14"
        >
          Let’s talk
        </a>
      </Container>
    </m.header>
  );
}

