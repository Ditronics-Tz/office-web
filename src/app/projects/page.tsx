import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/site";
import { unsplash } from "@/lib/img";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Ditronics — Kibondo Green Farm and the AI Conference Platform: the problem, our solution, the stack and the results.",
};

function CaseStudy({ project }: { project: (typeof projects)[number] }) {
  return (
    <section
      id={project.slug}
      className="scroll-mt-24 border-b border-line py-24 lg:py-32"
    >
      <div className="shell">
        {/* Header row */}
        <Reveal>
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-ink-faint">
            <span>Case study — {project.sector}</span>
            <span>{project.year}</span>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-4xl sm:text-5xl lg:col-span-8 lg:text-6xl">
              {project.name}
            </h2>
            <div className="lg:col-span-4 lg:text-right">
              <Button href={project.url} external variant="ghost" withArrow>
                Visit live site
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Lead screenshot */}
        <Reveal delay={80} className="mt-12">
          <Figure ratio="16/9" label={`${project.name} — product screenshot`} />
        </Reveal>

        {/* Overview + narrative */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-wider text-navy">
                Client overview
              </h3>
              <p className="mt-5 leading-relaxed text-ink-soft">{project.client}</p>

              <h3 className="mt-10 font-mono text-xs uppercase tracking-wider text-navy">
                Technologies
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li
                    key={t}
                    className="border border-line px-3 py-1 font-mono text-xs text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-10">
              <Reveal>
                <div className="border-t border-line-strong pt-6">
                  <h3 className="text-2xl">The problem</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {project.problem}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <div className="border-t border-line-strong pt-6">
                  <h3 className="text-2xl">Our solution</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {project.solution}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="border-t border-line-strong pt-6">
                  <h3 className="text-2xl">Results</h3>
                  <ul className="mt-5 space-y-3">
                    {project.results.map((r) => (
                      <li key={r} className="flex items-baseline gap-3 text-ink">
                        <span aria-hidden className="mt-1 size-1.5 shrink-0 bg-navy" />
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Secondary screenshots */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <Figure ratio="4/3" label={`${project.name} — interface detail`} />
          </Reveal>
          <Reveal delay={80}>
            <Figure ratio="4/3" label={`${project.name} — admin / dashboard`} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        kicker="Projects"
        title="Systems in production."
        intro="We let the work speak. Here are two platforms we designed, built and continue to support — with the reasoning behind each."
        imageSrc={unsplash("photo-1517694712202-14dd9538aa97", 1100)}
        imageAlt="Laptop running a development environment"
        imageCaption="Selected work / 2024—25"
        layout="split"
      />

      {projects.map((project) => (
        <CaseStudy key={project.slug} project={project} />
      ))}

      <ContactCta />
    </>
  );
}
