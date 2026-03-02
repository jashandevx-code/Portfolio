import type { ReactNode } from "react";

export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "purple" | "cyan";
  className?: string;
}) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-tight";

  const styles =
    variant === "purple"
      ? "border-fuchsia-300/20 bg-fuchsia-400/10 text-fuchsia-100"
      : variant === "cyan"
        ? "border-cyan-200/20 bg-cyan-300/10 text-cyan-100"
        : "border-white/10 bg-white/5 text-white/80";
        

  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

