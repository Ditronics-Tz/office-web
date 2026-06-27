"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, services } from "@/content/site";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";

const serviceLinks = services.map((s) => ({
  label: s.title,
  href: `/services#${s.slug}`,
  summary: s.summary,
}));

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  // Close the mobile menu whenever the route changes.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openMenu = (key: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenuFor(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuFor(null), 120);
  };

  // On the homepage, sit transparent over the hero until the user scrolls.
  const overlay = pathname === "/" && !scrolled && !open;
  const linkClass = (on: boolean) =>
    cn(
      "transition-colors",
      overlay
        ? on
          ? "text-white"
          : "text-white/80 hover:text-white"
        : on
          ? "text-ink"
          : "text-ink-soft hover:text-ink",
    );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        overlay ? "bg-transparent" : "bg-white/90 backdrop-blur-sm",
        scrolled ? "border-b border-line" : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-18 items-center justify-between py-4">
        <Logo tone={overlay ? "light" : "dark"} />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;

            if (item.label === "Services") {
              const dropdownOpen = menuFor === "Services";
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => openMenu("Services")}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    onClick={() => setMenuFor(dropdownOpen ? null : "Services")}
                    className={cn(
                      "inline-flex items-center gap-1 text-sm tracking-tight",
                      linkClass(active || dropdownOpen),
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-3.5 transition-transform", dropdownOpen && "rotate-180")}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute left-1/2 top-full z-50 w-[26rem] -translate-x-1/2 pt-4"
                      onMouseEnter={() => openMenu("Services")}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="border border-line bg-white p-2 shadow-[0_24px_60px_-30px_rgba(16,42,67,0.4)]">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block rounded-sm px-4 py-3 transition-colors hover:bg-paper"
                          >
                            <span className="text-sm font-semibold tracking-tight text-ink">
                              {s.label}
                            </span>
                            <span className="mt-1 block line-clamp-2 text-xs leading-relaxed text-ink-soft">
                              {s.summary}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block border-t border-line px-4 py-3 font-mono text-xs uppercase tracking-wider text-navy hover:bg-paper"
                        >
                          All services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("relative text-sm tracking-tight", linkClass(active))}
              >
                {item.label}
                {active && (
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full",
                      overlay ? "bg-white" : "bg-navy",
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-soft"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "-mr-1 inline-flex size-10 items-center justify-center md:hidden",
            overlay ? "text-white" : "text-ink",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="shell flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block border-b border-line py-4 font-display text-2xl font-semibold tracking-tight",
                    pathname === item.href ? "text-ink" : "text-ink-soft",
                  )}
                >
                  {item.label}
                </Link>
                {item.label === "Services" && (
                  <ul className="border-b border-line bg-paper/60 px-1 py-2">
                    {serviceLinks.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="block py-2 text-sm text-ink-soft">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3.5 text-sm font-medium text-white"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
