import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_SUBMISSIONS = 3;   // max 3 form submissions per minute per IP

function checkContactRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = RATE_LIMIT_MAP.get(ip);

  if (!record || now > record.resetAt) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_SUBMISSIONS) return false;
  record.count++;
  return true;
}

function sanitizeField(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s@.,+\-()áéíóúñüÁÉÍÓÚÑÜ]/g, '')
    .trim()
    .substring(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-real-ip') ??
      '127.0.0.1';

    // Rate limit check
    if (!checkContactRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    // Honeypot check — bots fill this, humans never see it
    if (body.website && String(body.website).length > 0) {
      // Silent accept — don't tell bots they were caught
      return NextResponse.json({ success: true });
    }

    // Sanitize and validate all fields
    const name = sanitizeField(body.name, 100);
    const email = sanitizeField(body.email, 200);
    const phone = sanitizeField(body.phone, 20);
    const business = sanitizeField(body.business, 200);
    const service = sanitizeField(body.service, 100);
    const budget = sanitizeField(body.budget, 100);
    const message = sanitizeField(body.message, 2000);

    // Server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'Valid name is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 });
    }

    const phoneRegex = /^\+?[\d\s\-()]{7,20}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return NextResponse.json({ error: 'Valid phone number is required.' }, { status: 400 });
    }

    if (!service) {
      return NextResponse.json({ error: 'Please select a service.' }, { status: 400 });
    }

    // Forward to FormSubmit via server-side fetch
    // Email address is now hidden from client bundle
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('business', business);
    formData.append('service', service);
    formData.append('budget', budget);
    formData.append('message', message);
    formData.append('_subject', 'New Project Inquiry - Sitecraf');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    const response = await fetch(
      `https://formsubmit.co/ajax/${process.env.CONTACT_FORM_EMAIL}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('FormSubmit delivery failed');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact]', err instanceof Error ? err.message : 'unknown error');
    return NextResponse.json(
      { error: 'Something went wrong. Please email us directly at info@sitecraf.com' },
      { status: 500 }
    );
  }
}
