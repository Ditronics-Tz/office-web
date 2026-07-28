import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";
import { Kicker } from "@/components/ui/kicker";
import { ContactCta } from "@/components/sections/contact-cta";
import { company } from "@/content/site";
import { unsplash } from "@/lib/img";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ditronics is a technology company in Kigamboni, Dar es Salaam — building software, IoT systems and visual media with local expertise.",
};

const principles = [
  {
    index: "01",
    title: "Mission",
    body: "To build dependable digital tools that help Tanzanian organisations work better — software and systems that hold up under real conditions, not just in a demo.",
  },
  {
    index: "02",
    title: "Vision",
    body: "A Tanzania where local institutions, businesses and researchers run on technology designed and supported close to home, by people who understand the context.",
  },
  {
    index: "03",
    title: "Approach",
    body: "We start from the work, not the technology. We map how people operate today, design around it, and ship in small, reviewable steps so nothing is a surprise at launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About Ditronics"
        title={
          <>
            A technology studio,
            <br />
            rooted in Dar es Salaam.
          </>
        }
        intro="We are a small, multidisciplinary team building software, IoT systems and creative media for organisations across Tanzania and the wider region."
        imageSrc={unsplash("photo-1522071820081-009f0129c71c", 1100)}
        imageAlt="A collaborative team at work"
        imageCaption={`Based in / ${company.address.district}, ${company.address.city}`}
        layout="offset"
      />

      {/* Story */}
      <section className="border-b border-line py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Kicker>Our story</Kicker>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[2rem] sm:leading-[1.3]">
                Ditronics started where a lot of good engineering does — with
                organisations asking for tools that simply did not exist for
                their context.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-6 text-lg leading-relaxed text-ink-soft sm:grid-cols-2 sm:gap-10">
              <Reveal delay={80}>
                <p>
                  We brought software engineering, IoT and photography together
                  under one roof because the problems we were asked to solve
                  rarely fit neatly into one of them. A farm needs a storefront
                  and a way to monitor its fields and good photographs of its
                  produce. Keeping those capabilities in one team means the work
                  stays coherent.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  Today we work with businesses, NGOs, research institutions,
                  agricultural organisations, schools and event organisers —
                  delivering systems that are used every day and supported for
                  the long term. We measure ourselves on whether the work keeps
                  running after we hand it over.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="mt-12">
              <Figure ratio="16/9" label="Team at work / Kigamboni studio" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-line py-24 lg:py-32">
        <div className="shell">
          <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.index} delay={i * 70} className="bg-white">
                <div className="flex h-full flex-col p-8 lg:p-10">
                  <h2 className="text-3xl">{p.title}</h2>
                  <p className="mt-5 leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>Why local expertise matters</Kicker>
              <h2 className="mt-7 text-3xl sm:text-4xl lg:text-[2.75rem]">
                Software that understands where it runs.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-8">
              {[
                {
                  h: "We know the constraints",
                  b: "Intermittent connectivity, mobile-first users and local payment habits are not edge cases here — they are the baseline. We design for them from the start.",
                },
                {
                  h: "We are in the same time zone",
                  b: "Support, iteration and a site visit are a call and a short drive away. Problems get answered by the people who built the system.",
                },
                {
                  h: "We build for handover",
                  b: "Systems are made to be run by local teams. Documentation, training and maintainable code are part of the deliverable, not an afterthought.",
                },
              ].map((item, i) => (
                <Reveal key={item.h} delay={i * 60}>
                  <div className="border-t border-line-strong pt-6">
                    <h3 className="text-xl text-ink">{item.h}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{item.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
