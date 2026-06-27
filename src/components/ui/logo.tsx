import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/** Brand mark + wordmark. `tone` flips the wordmark for dark surfaces. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Ditronics — home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/logo.png"
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-full"
        priority
      />
      <span
        className={cn(
          "font-display text-[1.35rem] font-bold leading-none tracking-tight",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        Ditronics
      </span>
    </Link>
  );
}
