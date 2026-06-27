import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "inverse" | "accent";

const base =
  "group inline-flex items-center justify-center gap-2 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-navy text-white px-7 py-3.5 hover:bg-navy-soft",
  outline:
    "rounded-full border border-ink/25 text-ink px-7 py-3.5 hover:border-ink hover:bg-ink hover:text-white",
  ghost: "text-navy px-1 py-1 hover:text-navy-soft",
  inverse: "rounded-full bg-white text-ink px-7 py-3.5 hover:bg-white/90",
  accent: "rounded-full bg-accent text-ink px-7 py-3.5 hover:bg-accent/85",
};

type CommonProps = {
  variant?: Variant;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  withArrow = false,
  external = false,
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">)) {
  const Arrow = external ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      {children}
      {withArrow && (
        <Arrow
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={1.75}
          aria-hidden
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {content}
    </Link>
  );
}
