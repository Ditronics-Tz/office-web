import { company } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

/** Inverted closing band. Reused at the foot of most pages. */
export function ContactCta() {
  return (
    <section className="bg-ink-deep text-white">
      <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker className="text-white/55">Start a project</Kicker>
            <h2 className="mt-7 max-w-2xl text-4xl text-white sm:text-5xl">
              Have something to build, monitor or photograph?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Tell us what you are working on. We will reply with honest,
              specific next steps — not a sales pitch.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="inverse" withArrow>
                Get in touch
              </Button>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center px-1 py-3.5 text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {company.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={120}>
            <div className="border-t border-white/15 pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                Studio
              </p>
              <address className="mt-4 not-italic leading-relaxed text-white/75">
                {company.address.street}
                <br />
                {company.address.district}
                <br />
                {company.address.city}, {company.address.country}
              </address>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="mt-4 inline-block font-mono text-sm text-white/60 transition-colors hover:text-white"
              >
                {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
