// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Read ENV at module load (safe), but DO NOT construct Stripe here
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.simplifibooks.com";
const priceSetup = process.env.PRICE_ID_QBO_SETUP;       // $297 QuickBooks Set Up
const priceOnboarding = process.env.PRICE_ID_ONBOARDING; // $149 New Customer Onboarding Review

function getStripe() {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    // Don’t construct Stripe without a key; fail clearly at request time
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(secret);
}

export async function POST(req: NextRequest) {
  try {
    const { productKey } = await req.json();

    let priceId: string | undefined;
    if (productKey === "qbo-setup") priceId = priceSetup || undefined;
    if (productKey === "onboarding-review") priceId = priceOnboarding || undefined;

    if (!priceId) {
      return NextResponse.json({ error: "Missing price for product" }, { status: 500 });
    }

    const stripe = getStripe(); // ✅ Construct inside handler

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${siteUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/services?canceled=1`,
      metadata: { productKey, source: "services_page" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("checkout error", err);
    return NextResponse.json({ error: "checkout_failed" }, { status: 500 });
  }
}

// Optional health check (no Stripe call here, so it’s safe at build time)
export async function GET() {
  return NextResponse.json({
    ok: true,
    hasSecret: !!process.env.STRIPE_SECRET_KEY,
    hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
    hasSetupPrice: !!process.env.PRICE_ID_QBO_SETUP,
    hasOnboardingPrice: !!process.env.PRICE_ID_ONBOARDING,
    redirect: `${siteUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
  });
}
