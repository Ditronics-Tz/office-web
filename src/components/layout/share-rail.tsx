"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, MessageSquare, Share2 } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/cn";

/**
 * Worley `wp-social-media`: a fixed vertical rail on the right with solid
 * circular action buttons. A "get in touch" comment button and a share button
 * that expands to reveal LinkedIn / X, plus a scroll-to-top control that fades
 * in once the page is scrolled.
 */
export function ShareRail() {
  const [expanded, setExpanded] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const share = (network: "linkedin" | "x") => {
    const url = encodeURIComponent(window.location.href);
    const target =
      network === "linkedin"
        ? `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        : `https://twitter.com/intent/tweet?url=${url}`;
    window.open(target, "_blank", "noopener,noreferrer");
  };

  const fab =
    "inline-flex size-12 items-center justify-center rounded-full bg-accent text-ink shadow-lg shadow-ink/15 transition-colors hover:bg-accent/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

  return (
    <>
      {/* Action cluster — vertically centred on the right edge */}
      <aside
        aria-label="Get in touch and share"
        className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex lg:right-4"
      >
        <Link href="/contact" aria-label="Get in touch" className={fab}>
          <MessageSquare className="size-5" strokeWidth={1.75} aria-hidden />
        </Link>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? "Hide share options" : "Show share options"}
          className={fab}
        >
          <Share2 className="size-5" strokeWidth={1.75} aria-hidden />
        </button>

        {/* Expanding share options */}
        <div
          className={cn(
            "flex flex-col items-center gap-3 overflow-hidden transition-all duration-300",
            expanded ? "max-h-40 opacity-100" : "pointer-events-none max-h-0 opacity-0",
          )}
        >
          <button
            type="button"
            onClick={() => share("linkedin")}
            aria-label="Share on LinkedIn"
            tabIndex={expanded ? 0 : -1}
            className={fab}
          >
            <LinkedInIcon className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => share("x")}
            aria-label="Share on X"
            tabIndex={expanded ? 0 : -1}
            className={fab}
          >
            <XIcon className="size-5" />
          </button>
        </div>
      </aside>

      {/* Scroll-to-top — pinned lower on the same right axis */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll back to top"
        className={cn(
          "fixed bottom-6 right-3 z-40 hidden size-12 items-center justify-center rounded-full bg-accent text-ink shadow-lg shadow-ink/15 transition-all hover:bg-accent/85 sm:flex lg:right-4",
          showTop ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-5" strokeWidth={1.75} aria-hidden />
      </button>
    </>
  );
}
