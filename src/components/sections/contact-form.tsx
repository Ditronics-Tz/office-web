"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Software Development",
  "IoT Solutions",
  "Photography",
  "Not sure yet",
];

const fieldClass =
  "w-full border-b border-line-strong bg-transparent py-3 text-ink placeholder:text-ink-faint focus:border-navy focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const nextErrors: Record<string, string> = {};
    if (!data.name?.trim()) nextErrors.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? ""))
      nextErrors.email = "A valid email helps us reply.";
    if (!data.message?.trim() || data.message.trim().length < 10)
      nextErrors.message = "A sentence or two about your project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper p-10">
        <div className="flex size-12 items-center justify-center bg-navy text-white">
          <Check className="size-6" strokeWidth={1.75} />
        </div>
        <h3 className="mt-6 text-2xl">Message received.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
          Thank you for getting in touch. We read every message and will reply
          within two working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs uppercase tracking-wider text-navy hover:text-navy-soft"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" className={fieldClass} placeholder="Your name" />
        </Field>
        <Field label="Organisation" name="organisation">
          <input id="organisation" name="organisation" type="text" autoComplete="organization" className={fieldClass} placeholder="Optional" />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />
        </Field>
        <Field label="Phone" name="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Optional" />
        </Field>
      </div>

      <Field label="What do you need?" name="service">
        <select id="service" name="service" defaultValue="" className={cn(fieldClass, "appearance-none")}>
          <option value="" disabled>
            Select an area
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" name="message" error={errors.message}>
        <textarea id="message" name="message" rows={5} className={cn(fieldClass, "resize-none")} placeholder="Tell us about your project, timeline and what success looks like." />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-navy-soft disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-wider text-ink-soft">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}
    </div>
  );
}
