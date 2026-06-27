import { NextResponse } from "next/server";

/**
 * Contact endpoint.
 *
 * This validates and accepts the submission. To actually deliver messages,
 * wire an email provider here (e.g. Resend, Postmark or SMTP) using the
 * fields below — the front end already posts JSON to this route.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !validEmail || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please complete the required fields." },
      { status: 422 },
    );
  }

  // TODO: deliver the message (email/CRM). For now we log on the server.
  console.info("[contact] new enquiry", {
    name,
    email,
    organisation: body.organisation ?? null,
    phone: body.phone ?? null,
    service: body.service ?? null,
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
