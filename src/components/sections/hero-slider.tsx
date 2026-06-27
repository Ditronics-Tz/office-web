"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/ui/kicker";
import { unsplash } from "@/lib/img";
import { cn } from "@/lib/cn";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cta: { label: string; href: string };
  /** Big faint discipline label drawn into the slide texture. */
  watermark: string;
  /** Full-bleed background photograph. */
  image: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Software · IoT · Studio",
    title: (
      <>
        Engineering <span className="text-accent">digital solutions</span> for
        Tanzania.
      </>
    ),
    body: "Software development, IoT systems and creative media — built for the organisations, institutions and businesses that move this country forward.",
    cta: { label: "View our work", href: "/projects" },
    watermark: "BUILD",
    image: unsplash("photo-1517694712202-14dd9538aa97", 1900),
  },
  {
    eyebrow: "IoT Solutions",
    title: (
      <>
        Real-time monitoring, from the <span className="text-accent">greenhouse</span>{" "}
        to the production line.
      </>
    ),
    body: "Sensors, gateways and dashboards that let an organisation see what is happening in the field — in real time, in one place.",
    cta: { label: "Explore IoT", href: "/services#iot" },
    watermark: "SENSE",
    image: unsplash("photo-1518770660439-4636190af475", 1900),
  },
  {
    eyebrow: "Photography Studio",
    title: (
      <>
        A studio that documents <span className="text-accent">the work</span>{" "}
        properly.
      </>
    ),
    body: "Commercial, product and event photography, plus media production for organisations that need their work captured well.",
    cta: { label: "See the studio", href: "/photography" },
    watermark: "FRAME",
    image: unsplash("photo-1502920917128-1aa500764cbd", 1900),
  },
];

const INTERVAL = 9000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Autoplay, paused on hover/focus or reduced-motion.
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % count);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Ditronics highlights"
      className="relative isolate -mt-18 overflow-hidden bg-band text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Sliding track */}
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
            className="relative min-h-[88vh] w-full shrink-0"
          >
            {/* Photograph — kept bright; a left-side wash carries the text */}
            <div aria-hidden className="absolute inset-0">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-band/95 via-band/55 to-transparent" />
              <span className="absolute inset-0 bg-gradient-to-t from-band/45 to-transparent" />
              {/* Top scrim so the overlaid nav stays legible on bright photos */}
              <span className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-band/75 to-transparent" />
            </div>

            <div className="relative flex min-h-[88vh] items-center">
              <div className="shell pt-18">
                <Kicker className="text-white/70">{slide.eyebrow}</Kicker>
                <h1 className="mt-6 max-w-[15ch] text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
                  {slide.title}
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                  {slide.body}
                </p>
                <div className="mt-10">
                  <Button href={slide.cta.href} variant="accent" tabIndex={i === index ? 0 : -1}>
                    {slide.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls — solid circles + coloured bullets, bottom-right */}
      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="shell flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="inline-flex size-12 items-center justify-center rounded-full bg-ink-deep text-white ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink"
          >
            <ChevronLeft className="size-5" strokeWidth={1.75} aria-hidden />
          </button>

          <ul className="flex items-center gap-2.5" role="tablist" aria-label="Choose slide">
            {slides.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    "block size-2.5 rounded-full transition-colors",
                    i === index ? "bg-accent" : "bg-white/50 hover:bg-white/80",
                  )}
                />
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="inline-flex size-12 items-center justify-center rounded-full bg-ink-deep text-white ring-1 ring-white/20 transition-colors hover:bg-accent hover:text-ink"
          >
            <ChevronRight className="size-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
