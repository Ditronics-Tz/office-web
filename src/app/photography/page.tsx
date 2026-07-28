import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";
import { Kicker } from "@/components/ui/kicker";
import { unsplash } from "@/lib/img";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Ditronics Photo Studio — professional product, corporate, event and portrait photography plus video production, with a fully equipped studio in Dar es Salaam.",
};

const studioServices = [
  {
    title: "Product Photography",
    description:
      "Clean, high-resolution product shots for e-commerce, catalogues and marketing — styled, lit and edited to sell.",
  },
  {
    title: "Corporate & Headshots",
    description:
      "Consistent professional headshots and team portraits for websites, profiles and company branding.",
  },
  {
    title: "Event Coverage",
    description:
      "Full photo coverage for conferences, launches, graduations and corporate functions, delivered fast.",
  },
  {
    title: "Portraits & Fashion",
    description:
      "Studio and on-location portrait, lifestyle and fashion shoots with creative direction and lighting.",
  },
  {
    title: "Video Production",
    description:
      "Promotional videos, interviews and social content — from concept and filming to editing and delivery.",
  },
  {
    title: "Editing & Retouching",
    description:
      "Professional retouching, colour grading and post-production to make every frame look its best.",
  },
];

const gallery = [
  "photo-1452587925148-ce544e77e70d",
  "photo-1542038784456-1ea8e935640e",
  "photo-1494790108377-be9c29b29330",
  "photo-1523275335684-37898b6baf30",
  "photo-1492684223066-81342ee5ff30",
  "photo-1495474472287-4d71bcdd2085",
];

const features = [
  "Fully equipped studio with professional lighting",
  "Experienced photographers & videographers",
  "Fast turnaround with online proofing & delivery",
  "On-location shoots across Tanzania",
];

export default function StudioPage() {
  return (
    <>
      <PageHeader
        kicker="Ditronics Photo Studio"
        title="Professional photography & video, end to end."
        intro="Beyond technology, Ditronics runs a fully equipped photo and video studio — helping brands, businesses and individuals look their best with striking, professional imagery."
        imageSrc={unsplash("photo-1502920917128-1aa500764cbd", 1100)}
        imageAlt="Photographer working with a camera"
        imageCaption="Photo / video / post-production"
        layout="feature"
      />

      {/* Studio services */}
      <section className="border-b border-line py-24 lg:py-32">
        <div className="shell">
          <SectionHeader
            kicker="What we shoot"
            title={
              <>
                Studio <span className="text-navy">services.</span>
              </>
            }
            intro="From a single product shot to full event coverage, our studio delivers professional results for every brief."
            className="mb-14"
          />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {studioServices.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 60} className="bg-white">
                <div className="flex h-full flex-col p-8">
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="shell">
          <SectionHeader
            kicker="Our work"
            title="A glimpse of the studio."
            intro="A selection of recent shoots across product, portrait and event work."
            className="mb-14"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((id, i) => (
              <Reveal key={id} delay={(i % 3) * 60}>
                <Figure
                  src={unsplash(id, 800)}
                  alt="Ditronics Photo Studio sample shot"
                  ratio="1/1"
                  className="[&_img]:transition-transform [&_img]:duration-500 hover:[&_img]:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why our studio */}
      <section className="py-24 lg:py-32">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Figure
              src={unsplash("photo-1567593810070-7a3d471af022", 1000)}
              alt="Inside the Ditronics studio"
              ratio="4/3"
            />
          </Reveal>
          <Reveal delay={120} className="max-w-xl">
            <Kicker>Why our studio</Kicker>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem]">
              Imagery that <span className="text-navy">elevates your brand.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Great visuals build trust and win attention. Our team combines
              professional equipment with a sharp creative eye to produce photos
              and video that make your business stand out — online and in print.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-baseline gap-3 text-ink">
                  <span aria-hidden className="mt-1 size-1.5 shrink-0 bg-navy" />
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
