import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesEditorial } from "@/components/sections/services-editorial";
import { Process } from "@/components/sections/process";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/kicker";
import { techStack } from "@/content/site";
import { unsplash } from "@/lib/img";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, IoT solutions and photography — our capabilities, technologies and the way we work.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Services"
        title="What we design, build and support."
        intro="Three practices that work together: software engineering, IoT systems and a photography studio. Below is what each one covers and the tools behind it."
        imageSrc={unsplash("photo-1518770660439-4636190af475", 1100)}
        imageAlt="Close-up of electronic components"
        imageCaption="Software / hardware / media"
        layout="feature"
      />

      <ServicesEditorial heading={false} withFigures />

      {/* Technologies */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Kicker>Technologies</Kicker>
              <h2 className="mt-7 text-3xl sm:text-4xl">The tools we build with.</h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                A deliberately small, proven stack. We choose technologies for
                their longevity and maintainability — not novelty.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <ul className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-3">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="border-b border-r border-line p-6 font-mono text-sm text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-ink-faint">
                + embedded firmware, MQTT and sensor hardware for IoT deployments
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Process />
      <ContactCta />
    </>
  );
}
