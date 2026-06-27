import { cn } from "@/lib/cn";

/** Mono section label / eyebrow. */
export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("kicker inline-flex items-center gap-3", className)}>
      {children}
    </span>
  );
}
