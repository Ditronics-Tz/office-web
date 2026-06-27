import { services } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";
import { cn } from "@/lib/cn";

const figureLabels: Record<string, string> = {
  software: "Build / screens & code",
  iot: "Field / sensors & gateways",
  photography: "Studio / lighting & lens",
};

/**
 * Large alternating editorial blocks, one per service.
 * `withFigures` is dropped on the home page for a tighter rhythm.
 */
export function ServicesEditorial({
  heading = true,
  withFigures = true,
}: {
  heading?: boolean;
  withFigures?: boolean;
}) {
  return (
    <section className="border-b border-line py-24 lg:py-32">
      <div className="shell">
        {heading && (
          <SectionHeader
            kicker="What we do"
            title={
              <>
                Three disciplines, <span className="text-navy">one team.</span>
              </>
            }
            intro="We keep software, hardware and media in-house so a project can move between them without losing its thread."
            className="mb-20"
          />
        )}

        <div className="space-y-20 lg:space-y-28">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <article
                  className={cn(
                    "grid items-start gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16",
                  )}
                >
                  <div className={cn("lg:col-span-7", flip && withFigures && "lg:order-2")}>
                    <h3 className="text-3xl sm:text-4xl">{service.title}</h3>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                      {service.summary}
                    </p>

                    <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.capabilities.map((c) => (
                        <li
                          key={c}
                          className="flex items-baseline gap-3 border-b border-line/70 pb-3 text-sm text-ink"
                        >
                          <span aria-hidden className="mt-1 size-1.5 shrink-0 bg-navy" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {service.stack.map((t) => (
                        <span
                          key={t}
                          className="border border-line px-3 py-1 font-mono text-xs text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {withFigures && (
                    <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
                      <Figure ratio="4/3" label={figureLabels[service.slug]} />
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
