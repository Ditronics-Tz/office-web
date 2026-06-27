import Link from "next/link";
import { company, nav, services } from "@/content/site";
import { Logo } from "@/components/ui/logo";
import { LinkedInIcon, XIcon } from "@/components/ui/social-icons";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedInIcon },
  { label: "X", href: "https://twitter.com/", Icon: XIcon },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-deep text-white/70">
      <div className="shell">
        {/* Top row — horizontal links + social (Worley wp-footer -top) */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-white/70 transition-colors hover:text-white">
                Start a project
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-3">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ditronics on ${label}`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom row — logo, blurb, contact (Worley wp-footer -bottom) */}
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              {company.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-white/40">
              {services.map((s) => (
                <span key={s.slug}>{s.title}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white/40">Studio</h3>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-white/70">
              <p>{company.address.street}</p>
              <p>{company.address.district}</p>
              <p>
                {company.address.city}, {company.address.country}
              </p>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white/40">Contact</h3>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`mailto:${company.email}`} className="block text-white/70 transition-colors hover:text-white">
                {company.email}
              </a>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="block text-white/70 transition-colors hover:text-white"
              >
                {company.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 font-mono text-xs uppercase tracking-wider text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Dar es Salaam, Tanzania.
          </p>
          <p>Engineering digital solutions for Tanzania.</p>
        </div>
      </div>
    </footer>
  );
}
