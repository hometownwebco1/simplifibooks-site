// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY as string;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

const priceSetup = process.env.PRICE_ID_QBO_SETUP as string;       // $297 QuickBooks Set Up
const priceOnboarding = process.env.PRICE_ID_ONBOARDING as string; // $149 New Customer Onboarding Review

const stripe = new Stripe(stripeSecret, { apiVersion: "2024-06-20" });

export async function POST(req: NextRequest) {
  try {
    const { productKey } = await req.json();

    let priceId: string | undefined;
    switch (productKey) {
      case "qbo-setup":
        priceId = priceSetup;
        break;
      case "onboarding-review":
        priceId = priceOnboarding;
        break;
      default:
        return NextResponse.json({ error: "Unsupported product" }, { status: 400 });
    }

    if (!priceId) {
      return NextResponse.json({ error: "Missing price for product" }, { status: 500 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${siteUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`, // ✅ thank-you redirect
      cancel_url: `${siteUrl}/services?canceled=1`,
      metadata: { productKey, source: "services_page" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("checkout error", err);
    return NextResponse.json({ error: "checkout_failed" }, { status: 500 });
  }
}

// Optional health check
export async function GET() {
  return NextResponse.json({
    ok: true,
    hasSecret: !!process.env.STRIPE_SECRET_KEY,
    hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
    hasSetupPrice: !!process.env.PRICE_ID_QBO_SETUP,
    hasOnboardingPrice: !!process.env.PRICE_ID_ONBOARDING,
    redirect: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
  });
}
