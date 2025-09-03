import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, businessType, software } = data || {};
  if (!name || !email) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  }

  // Forward to GHL webhook if configured
  const url = process.env.GHL_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, businessType, software, source: 'simplifibooks.com' }),
      });
    } catch (e) {
      // Ignore forwarding failures to avoid blocking UX
      console.error('GHL forward failed', e);
    }
  }

  // In all cases, continue to thank-you
  return NextResponse.json({ ok: true });
}
