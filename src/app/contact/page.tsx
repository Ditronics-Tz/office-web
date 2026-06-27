import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";
import { Kicker } from "@/components/ui/kicker";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ditronics — Shangwe Street, Kibada, Kigamboni, Dar es Salaam. Email, phone and project enquiries.",
};

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  company.mapQuery,
)}&z=14&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Let's talk about your project."
        intro="Whether it is a system to build, something to monitor or work to photograph — send us the details and we will reply with specific next steps."
      />

      <section className="border-b border-line py-20 lg:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker>Send a message</Kicker>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          {/* Details */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={80}>
              <Kicker>Studio</Kicker>
              <div className="mt-8 space-y-8">
                <div className="border-t border-line-strong pt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    Address
                  </p>
                  <address className="mt-3 not-italic leading-relaxed text-ink">
                    {company.address.street}
                    <br />
                    {company.address.district}
                    <br />
                    {company.address.city}, {company.address.country}
                  </address>
                </div>
                <div className="border-t border-line-strong pt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-3 block text-ink transition-colors hover:text-navy"
                  >
                    {company.email}
                  </a>
                </div>
                <div className="border-t border-line-strong pt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    Phone
                  </p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="mt-3 block text-ink transition-colors hover:text-navy"
                  >
                    {company.phone}
                  </a>
                </div>
                <div className="border-t border-line-strong pt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    Hours
                  </p>
                  <p className="mt-3 leading-relaxed text-ink">
                    Mon–Fri · 08:00–17:00 EAT
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Office photos */}
      <section className="border-b border-line py-20 lg:py-24">
        <div className="shell">
          <Reveal className="mb-10">
            <Kicker>The studio</Kicker>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            <Reveal>
              <Figure ratio="4/3" label="Studio exterior / Shangwe St" />
            </Reveal>
            <Reveal delay={70}>
              <Figure ratio="4/3" label="Workspace" />
            </Reveal>
            <Reveal delay={140}>
              <Figure ratio="4/3" label="Kigamboni / Dar es Salaam" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <div className="shell pt-20 lg:pt-24">
          <Reveal className="mb-8">
            <Kicker>Find us</Kicker>
            <h2 className="mt-6 text-3xl sm:text-4xl">Kibada, Kigamboni.</h2>
          </Reveal>
        </div>
        <div className="mt-4 h-[420px] w-full border-t border-line bg-paper-deep">
          <iframe
            title="Map to the Ditronics studio in Kibada, Kigamboni, Dar es Salaam"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      </section>
    </>
  );
}
