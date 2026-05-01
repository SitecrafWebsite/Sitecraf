import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rateLimit';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Use a composite key: IP + partial user-agent.
    // On Vercel, x-forwarded-for can return the same load-balancer IP for
    // multiple real users, so keying on IP alone causes false 429s for
    // legitimate visitors who share an edge node.
    const ua = req.headers.get('user-agent') ?? '';
    const uaSlice = ua.slice(0, 40); // enough to differentiate browsers
    const rateLimitKey = `${ip}::${uaSlice}`;

    // 5 submissions per minute per browser fingerprint
    const { allowed, retryAfter } = checkRateLimit(rateLimitKey, {
      max: 5,
      windowMs: 60 * 1000,
      bucket: 'contact',
    });

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a minute before trying again.' },
        { status: 429, headers: { 'Retry-After': String(retryAfter) } }
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

    const { error } = await resend.emails.send({
      from: 'Contact Form <no-reply@sitecraf.com>',
      to: ['info@sitecraf.com'],
      subject: `New Enquiry from ${name} - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Business</strong></td><td>${business}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${budget}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (err) {
    console.error('[contact]', err instanceof Error ? err.message : 'unknown error');
    return NextResponse.json(
      { error: 'Something went wrong. Please email us directly at info@sitecraf.com' },
      { status: 500 }
    );
  }
}