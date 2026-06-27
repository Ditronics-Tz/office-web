import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

/** Standard editorial header for inner pages. */
export function PageHeader({
  kicker,
  title,
  intro,
  meta,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Optional right-aligned metadata column (e.g. address, year). */
  meta?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="shell grid gap-10 pt-20 pb-16 lg:grid-cols-12 lg:gap-16 lg:pt-28 lg:pb-20">
        <div className="lg:col-span-8">
          <Reveal>
            <Kicker>{kicker}</Kicker>
            <h1 className="mt-7 text-5xl leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={100}>
              <p className="lede mt-8 max-w-2xl">{intro}</p>
            </Reveal>
          )}
        </div>
        {meta && (
          <div className="lg:col-span-3 lg:col-start-10 lg:self-end">
            <Reveal delay={160}>{meta}</Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
