import { Container } from "@/components/Container";
import { IconGitHub, IconLinkedIn, IconMail } from "@/components/icons";

const socials = [
  {
    label: "Email",
    href: "mailto:jashan96.dev@gmail.com",
    icon: IconMail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: IconLinkedIn,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: IconGitHub,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/55">
          © {new Date().getFullYear()} Jashanpreet Kaur. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus-ring glass glass-hover inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white"
                aria-label={s.label}
                title={s.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}

