import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";
import { cn } from "@/lib/cn";

/**
 * Editorial hero for inner pages. Each route can choose a composition so the
 * site keeps one visual language without every page opening the same way.
 */
export function PageHeader({
  kicker,
  title,
  intro,
  meta,
  imageSrc,
  imageAlt,
  imageCaption,
  layout = "split",
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Optional right-aligned metadata column (e.g. address, year). */
  meta?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  layout?: "split" | "offset" | "feature";
}) {
  const hasImage = Boolean(imageSrc);

  return (
    <section
      className={cn(
        "border-b border-line",
        layout === "feature" && hasImage ? "bg-band text-white" : "bg-white",
      )}
    >
      <div
        className={cn(
          "shell grid gap-10 pt-20 pb-16 lg:gap-16 lg:pt-28 lg:pb-20",
          hasImage ? "lg:grid-cols-12" : "lg:grid-cols-12",
          layout === "offset" && hasImage && "lg:items-end",
          layout === "feature" && hasImage && "lg:items-center",
        )}
      >
        <div
          className={cn(
            !hasImage && "lg:col-span-8",
            hasImage && layout === "split" && "lg:col-span-6",
            hasImage && layout === "offset" && "lg:col-span-7 lg:pb-10",
            hasImage && layout === "feature" && "lg:col-span-6",
          )}
        >
          <Reveal>
            <Kicker className={layout === "feature" && hasImage ? "text-accent" : undefined}>
              {kicker}
            </Kicker>
            <h1
              className={cn(
                "mt-7 text-5xl leading-[1.04] sm:text-6xl lg:text-[4.25rem]",
                layout === "feature" && hasImage && "text-white",
              )}
            >
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={100}>
              <p
                className={cn(
                  "lede mt-8 max-w-2xl",
                  layout === "feature" && hasImage && "text-white/75",
                )}
              >
                {intro}
              </p>
            </Reveal>
          )}
        </div>
        {hasImage && (
          <Reveal
            delay={120}
            className={cn(
              layout === "split" && "lg:col-span-5 lg:col-start-8",
              layout === "offset" && "lg:col-span-5 lg:col-start-8",
              layout === "feature" && "lg:col-span-5 lg:col-start-8",
            )}
          >
            <Figure
              src={imageSrc}
              alt={imageAlt}
              caption={imageCaption}
              ratio={layout === "offset" ? "3/4" : "4/3"}
              priority
              className={cn(
                "[&_img]:transition-transform [&_img]:duration-700 hover:[&_img]:scale-[1.02]",
                layout === "feature" && "[&_figcaption]:text-white/55",
              )}
            />
          </Reveal>
        )}
        {meta && !hasImage && (
          <div className="lg:col-span-3 lg:col-start-10 lg:self-end">
            <Reveal delay={160}>{meta}</Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
