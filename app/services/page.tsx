// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Add-Ons",
  description:
    "QuickBooks Setup, Onboarding Review, Monthly Bookkeeping Reviews, and Cleanup projects. Transparent pricing and plain-English deliverables.",
};

export default function Page() {
  return (
    <div className="container py-16">
      {/* Hero */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Services & Add-Ons
        </h1>
        <p className="mt-5 text-lg text-gray-700">
          No fluff. We set up your system, verify your baseline, and keep you
          on track with a monthly, plain-English review. If your books need work
          first, we’ll tell you exactly what’s required — and only then start
          monthly reviews.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:hello@simplifibooks.com" className="btn btn-primary">
            Email Us to Get Started
          </a>
          <Link href="/blog" className="btn btn-outline">
            See Our Guides
          </Link>
        </div>
      </div>

      {/* QuickBooks Setup */}
      <section className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold">QuickBooks Setup</h2>
          </div>
          <p className="mt-4 text-gray-700">
            For owners starting fresh or without a proper configuration. We build
            the foundation the right way so you don’t pay for mistakes later.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700">
            <li>• Chart of accounts tailored to your business</li>
            <li>• Bank feeds and rules configured</li>
            <li>• Sales tax, invoices, and receipts workflow</li>
            <li>• Company settings, users, and baseline controls</li>
          </ul>
        </div>
        <div className="card p-6">
          <p className="text-sm tracking-wide text-gray-500">Flat Fee</p>
          <p className="mt-1 text-3xl font-extrabold">$297</p>
          <p className="mt-3 text-gray-700">
            Typical turnaround in a few business days once we have access.
          </p>
          <a href="mailto:hello@simplifibooks.com" className="btn btn-primary mt-6">
            Start Setup
          </a>
        </div>
      </section>

      {/* Onboarding Review */}
      <section className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Onboarding Review</h2>
          <p className="mt-4 text-gray-700">
            A diagnostic pass on your current books to confirm they’re ready
            for monthly review — or to outline what needs cleanup first.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700">
            <li>• 30-point baseline check</li>
            <li>• Find miscodings, missing docs, and broken links</li>
            <li>• Plain-English findings + next steps</li>
            <li>• Qualifies you for the monthly review program</li>
          </ul>
        </div>
        <div className="card p-6">
          <p className="text-sm tracking-wide text-gray-500">One-Time</p>
          <p className="mt-1 text-3xl font-extrabold">
            $149 <span className="text-base font-semibold text-gray-500">intro price</span>
          </p>
          <p className="mt-3 text-gray-700">
            If we find major issues, we’ll spell out the cleanup scope and options
            before moving forward.
          </p>
          <a href="mailto:hello@simplifibooks.com" className="btn btn-primary mt-6">
            Book Review
          </a>
        </div>
      </section>

      {/* Monthly Review */}
      <section className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Monthly Bookkeeping Review</h2>
          <p className="mt-4 text-gray-700">
            We review your books monthly using our 30-point checklist and send
            a clear 2-page report with fixes and priorities. Confidence for DIY
            bookkeepers — without paying for a full bookkeeping service.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700">
            <li>• 30-point monthly check-behind</li>
            <li>• Plain-English report with action items</li>
            <li>• Flag issues early (before tax time)</li>
            <li>• Email support for questions about the report</li>
          </ul>
        </div>
        <div className="card p-6">
          <p className="text-sm tracking-wide text-gray-500">Per Month</p>
          <p className="mt-1 text-3xl font-extrabold">$200</p>
          <p className="mt-3 text-gray-700">
            Requires a clean baseline via Setup or Onboarding Review.
          </p>
          <a href="mailto:hello@simplifibooks.com" className="btn btn-primary mt-6">
            Join Monthly Review
          </a>
        </div>
      </section>

      {/* Cleanup Projects */}
      <section className="mt-16">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Cleanup Projects</h2>
          <p className="mt-4 text-gray-700">
            If your books are behind or messy, we’ll scope a focused cleanup
            project: catch-up, reclassifications, missing statements, sales tax
            corrections, and more. Pricing depends on scope; we’ll estimate after
            the Onboarding Review.
          </p>
          <a href="mailto:hello@simplifibooks.com" className="btn btn-outline mt-6">
            Request Cleanup Estimate
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">FAQs</h2>
        <div className="mt-6 grid gap-6">
          <div>
            <h3 className="font-semibold">Do I need QuickBooks for the monthly review?</h3>
            <p className="text-gray-700">
              Yes — we support QuickBooks Online. If you’re brand new, start with
              QuickBooks Setup. If you already use QBO, do the Onboarding Review.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What if my books are a mess?</h3>
            <p className="text-gray-700">
              We’ll identify issues during the Onboarding Review and provide a
              cleanup plan. Monthly reviews start after the baseline is clean.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I cancel monthly reviews anytime?</h3>
            <p className="text-gray-700">
              Yes. There’s no long-term contract; simply let us know before your
              next cycle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
