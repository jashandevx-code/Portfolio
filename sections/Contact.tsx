"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="pb-24 pt-10 sm:pt-16"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your next frontend build."
          description="Whether it’s a new product, a redesign, or performance work on an existing app, I’d love to hear what you’re working on."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <FadeIn className="space-y-4">
            <p className="text-sm leading-7 text-muted sm:text-base">
              I’m based in Mohali, Punjab, and available for remote
              opportunities, collaborations, and freelance work.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Email
                </p>
                <a
                  href="mailto:jashan96.dev@gmail.com"
                  className="mt-1 inline-flex items-center text-sm font-semibold text-white hover:text-cyan-200"
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
                  className="mt-1 inline-flex items-center text-sm font-semibold text-white hover:text-cyan-200"
                >
                  +91 96606 96635
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <GlassCard className="p-5">
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="What would you like to build?"
                />
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={4}
                  placeholder="Share a bit about your project, timelines, and goals."
                />

                <button
                  type="submit"
                  className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold tracking-tight text-black transition hover:bg-white/90"
                  aria-label="Send message"
                >
                  Send message
                </button>
              </form>
            </GlassCard>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

type FieldProps =
  | ({
      as?: "input";
    } & React.InputHTMLAttributes<HTMLInputElement> & {
      label: string;
      name: string;
    })
  | ({
      as: "textarea";
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      label: string;
      name: string;
    });

function Field(props: FieldProps) {
  const { label, name } = props;
  const common =
    "h-11 w-full rounded-xl border border-white/14 bg-white/5 px-3 text-sm text-white outline-none ring-0 placeholder:text-muted focus:border-cyan-300/70 focus:bg-black/40";

  return (
    <div className="space-y-1.5 text-left">
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/80"
      >
        {label}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={name}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${common} h-auto py-2`}
        />
      ) : (
        <input
          id={name}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className={common}
        />
      )}
    </div>
  );
}

