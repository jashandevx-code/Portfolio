import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-95";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90 shadow-[0_0_22px_rgba(248,250,252,0.35)] hover:shadow-[0_0_40px_rgba(248,250,252,0.55)]"
      : variant === "secondary"
        ? "glass border-white/12 text-white hover:border-white/18 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]"
        : "text-white/80 hover:text-white";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}

