import { HeroSlider } from "@/components/sections/hero-slider";
import { TextImage } from "@/components/ui/text-image";
import { WorkInAction } from "@/components/sections/work-in-action";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { LatestInsights } from "@/components/sections/latest-insights";
import { ContactCta } from "@/components/sections/contact-cta";
import { unsplash } from "@/lib/img";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <TextImage
        reverse
        kicker="Who we are"
        title={
          <>
            From idea to <span className="text-navy">in&nbsp;production</span>, we
            build technology that gets used.
          </>
        }
        body={[
          "Ditronics is a technology company in Kigamboni, Dar es Salaam. We build software, IoT monitoring systems and visual media for organisations across Tanzania — and we build them to be used, not just demonstrated.",
          "Whether you need a single API, a full enterprise platform, a field of sensors or a photo shoot, you have one team accountable for getting it built and keeping it running.",
        ]}
        ctas={[
          { label: "About us", href: "/about" },
          { label: "Our services", href: "/services", variant: "outline" },
        ]}
        figureSrc={unsplash("photo-1522071820081-009f0129c71c", 1000)}
        figureLabel="Studio — Kigamboni"
      />

      <WorkInAction />

      <IndustriesGrid />

      <TextImage
        kicker="How we work"
        title={
          <>
            Practical advice. <span className="text-navy">Real delivery.</span>
          </>
        }
        body={[
          "We don't just scope strategy — we ship the thing. A team of engineers, IoT specialists and photographers who turn a plan into working software, live dashboards and finished media.",
          "We work in short, reviewable increments, so you see the real thing early and often, and we stay on after launch to keep it healthy.",
        ]}
        ctas={[{ label: "Our process", href: "/services", variant: "ghost" }]}
        figureSrc={unsplash("photo-1600880292203-757bb62b4baf", 1000)}
        figureLabel="Build / reviewable increments"
      />

      <TextImage
        reverse
        tone="dark"
        kicker="Work with us"
        title={
          <>
            Join a team building <span className="text-accent">real things</span> in
            Tanzania.
          </>
        }
        body={[
          "We need the right people in the right places — engineers, makers and creators who want their work to matter beyond the demo.",
          "If you build software, wire up hardware or make images for a living, we'd like to hear from you.",
        ]}
        ctas={[{ label: "Get in touch", href: "/contact" }]}
        figureSrc={unsplash("photo-1517048676732-d65bc937f952", 1000)}
        figureLabel="Team — Ditronics"
      />

      <LatestInsights />

      <ContactCta />
    </>
  );
}
