import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Editorial figure. If `src` is provided it renders a real photograph;
 * otherwise it renders a labelled placeholder so the layout reads correctly
 * before real photography is dropped in. No stock imagery, no AI art.
 */
export function Figure({
  src,
  alt,
  caption,
  label,
  className,
  ratio = "4/3",
  priority = false,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  /** Shown inside the placeholder to describe the intended photograph. */
  label?: string;
  className?: string;
  ratio?: "4/3" | "3/2" | "16/9" | "1/1" | "3/4";
  priority?: boolean;
}) {
  const ratioClass = {
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "16/9": "aspect-video",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
  }[ratio];

  return (
    <figure className={cn("group", className)}>
      <div className={cn("relative overflow-hidden bg-paper-deep", ratioClass)}>
        {src ? (
          <Image
            src={src}
            alt={alt ?? caption ?? ""}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <Placeholder label={label ?? alt ?? "Photograph"} />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-between p-5">
      {/* faint engineering grid, not a gradient or blob */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00000008 1px, transparent 1px), linear-gradient(to bottom, #00000008 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="relative font-mono text-[0.7rem] uppercase tracking-wider text-ink-faint">
        {label}
      </span>
      <span className="relative font-mono text-[0.7rem] text-ink-faint">▦</span>
    </div>
  );
}
