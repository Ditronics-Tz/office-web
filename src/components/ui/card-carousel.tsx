"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type CarouselCard = {
  tag: string;
  meta: string;
  title: string;
  summary: string;
  href: string;
  figureLabel: string;
  figureSrc?: string;
};

/**
 * Worley `wp-related-news` with `-overlay` cards: a titled row with outlined
 * arrow controls above a horizontal, scroll-snapping rail of image cards whose
 * tag, date and title sit over the photograph. A filled "view all" pill closes
 * the section.
 */
export function CardCarousel({
  title,
  cards,
  cta,
  tone = "default",
}: {
  title: string;
  cards: CarouselCard[];
  cta?: { label: string; href: string };
  tone?: "default" | "paper";
}) {
  const railRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className={cn(tone === "paper" ? "bg-paper" : "bg-white", "py-24 lg:py-32")}>
      <div className="shell flex items-end justify-between gap-6">
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem]">{title}</h2>
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          {(["-1", "1"] as const).map((d) => {
            const dir = Number(d) as 1 | -1;
            const Icon = dir === -1 ? ArrowLeft : ArrowRight;
            return (
              <button
                key={d}
                type="button"
                onClick={() => scrollBy(dir)}
                aria-label={dir === -1 ? "Scroll left" : "Scroll right"}
                className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink"
              >
                <Icon className="size-5" strokeWidth={1.5} aria-hidden />
              </button>
            );
          })}
        </div>
      </div>

      <ul
        ref={railRef}
        className="rail mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <li
            key={card.href + card.title}
            data-card
            className="w-[80vw] shrink-0 snap-start sm:w-[21rem] lg:w-[23rem]"
          >
            <Link href={card.href} className="group block">
              <article className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-band">
                {card.figureSrc ? (
                  <Image
                    src={card.figureSrc}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 23rem, 80vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute inset-0 grid place-items-center font-mono text-xs uppercase tracking-wider text-white/40">
                    {card.figureLabel}
                  </span>
                )}

                {/* Legibility gradient */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/5"
                />

                {/* Tag — top right, white pill */}
                <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-ink">
                  {card.tag}
                </span>

                {/* Date + title — bottom, over the photo */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-mono text-xs tracking-wide text-white/80">{card.meta}</p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-white transition-colors group-hover:text-accent">
                    {card.title}
                  </h3>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>

      {cta && (
        <div className="mt-12 flex justify-center">
          <Link
            href={cta.href}
            className="inline-flex items-center rounded-full bg-ink-deep px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-accent/70 transition-colors hover:bg-band"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </section>
  );
}
