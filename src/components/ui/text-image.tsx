import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";
import { cn } from "@/lib/cn";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "ghost" | "inverse";
};

type Tone = "default" | "paper" | "dark";

const toneClass: Record<Tone, string> = {
  default: "bg-white text-ink",
  paper: "bg-paper text-ink",
  dark: "bg-ink-deep text-white",
};

/**
 * Worley `wp-text-image`: a text column beside an image column.
 * `reverse` puts the image first on desktop; `tone` switches the band.
 */
export function TextImage({
  kicker,
  title,
  body,
  ctas = [],
  figureSrc,
  figureLabel,
  figureRatio = "4/3",
  reverse = false,
  tone = "default",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  body: string[];
  ctas?: Cta[];
  figureSrc?: string;
  figureLabel?: string;
  figureRatio?: "4/3" | "3/2" | "1/1" | "3/4";
  reverse?: boolean;
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <section className={cn(toneClass[tone], "py-24 lg:py-32", className)}>
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={cn("max-w-xl", reverse && "lg:order-2 lg:ml-auto")}>
          {kicker && (
            <Kicker className={dark ? "text-white/60" : undefined}>{kicker}</Kicker>
          )}
          <h2
            className={cn(
              "mt-6 text-3xl sm:text-4xl lg:text-[2.6rem]",
              dark && "text-white",
            )}
          >
            {title}
          </h2>
          <div
            className={cn(
              "mt-6 space-y-4 text-lg leading-relaxed",
              dark ? "text-white/70" : "text-ink-soft",
            )}
          >
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {ctas.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-4">
              {ctas.map((cta) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant ?? (dark ? "inverse" : "primary")}
                  withArrow={(cta.variant ?? "primary") === "ghost"}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={120} className={cn(reverse && "lg:order-1")}>
          <Figure
            src={figureSrc}
            ratio={figureRatio}
            label={figureLabel ?? "Photograph"}
          />
        </Reveal>
      </div>
    </section>
  );
}
