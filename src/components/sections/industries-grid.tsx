"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { industries } from "@/content/site";

/**
 * Worley `wp-text-bg` + `wp-card-container` with `-overlay` cards on a soft cyan
 * band. A single horizontal row of portrait image cards (title, note and
 * "Read more" over the photo) with outlined arrow controls when they overflow.
 */
export function IndustriesGrid() {
  const railRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="shell flex items-end justify-between gap-6">
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
          The <span className="text-band">industries</span> we work in
        </h2>
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
                className="inline-flex size-11 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-ink"
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
        {industries.map((industry) => (
          <li
            key={industry.title}
            data-card
            className="w-[80vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]"
          >
            <Link href="/services" className="group block">
              <article className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-band">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(min-width: 1024px) 24rem, 80vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-bold text-accent">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{industry.note}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read more
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
