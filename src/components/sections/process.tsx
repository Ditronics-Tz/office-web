import { process } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export function Process() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="shell">
        <SectionHeader
          kicker="How we work"
          title={
            <>
              Discover, design, build, <span className="text-navy">support.</span>
            </>
          }
          intro="A deliberate sequence. We earn each stage before moving to the next, and we stay involved after launch."
          className="mb-16"
        />

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.index} delay={i * 60} className="bg-white">
              <div className="flex h-full flex-col p-8">
                <div className="flex items-center justify-end">
                  <span aria-hidden className="font-mono text-xs text-ink-faint">
                    {i < process.length - 1 ? "→" : "↻"}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
