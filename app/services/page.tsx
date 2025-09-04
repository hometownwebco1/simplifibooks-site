// app/services/page.tsx
<li className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-5 w-5 text-green-600"/> Fast, secure Stripe checkout for setup</li>
<li className="flex items-start gap-2"><Shield className="mt-1 h-5 w-5"/> No long contracts — cancel monthly checks with 10‑day notice</li>
<li className="flex items-start gap-2"><Clock className="mt-1 h-5 w-5"/> Approval required before monthly checks (we don't take on messy books blindly)</li>
</ul>
</div>
<div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
<Image src="/images/services-hero.jpg" alt="SimplifiBooks services" fill className="object-cover"/>
</div>
</div>
</section>


{/* Cards */}
<section className="container mx-auto px-4 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* QuickBooks Setup & Onboarding Review */}
<div className="rounded-2xl border p-6 md:p-8 shadow-sm bg-white">
<h2 className="text-2xl font-bold">QuickBooks Setup & Onboarding Review</h2>
<p className="mt-3 text-gray-700">
We configure key settings, chart of accounts sanity check, connect banks/feeds, and deliver a clean onboarding
review so you start from solid ground.
</p>
<ul className="mt-6 space-y-2 text-gray-700">
<li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600"/> Chart of Accounts review & clean‑up recommendations</li>
<li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600"/> Bank feed connections & settings validation</li>
<li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600"/> Opening balances & basic workflows</li>
<li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600"/> 1:1 handoff call with action items</li>
</ul>
<div className="mt-8">
<PurchaseButton label="Buy Setup & Review" productKey="qbo-setup" icon={CreditCard} />
<p className="mt-3 text-sm text-gray-500">Secure checkout via Stripe. Price shown at checkout (unchanged from current pricing).</p>
</div>
</div>


{/* SimplifiBooks Confidence Check (Monthly) */}
<div className="rounded-2xl border p-6 md:p-8 shadow-sm bg-white">
<h2 className="text-2xl font-bold">SimplifiBooks Confidence Check</h2>
<p className="mt-3 text-gray-700">
Our monthly, 30‑point double‑check of your books with a clear, 2‑page feedback report.
<strong> $84/month</strong>, billed automatically.
Must cancel at least <strong>10 days</strong> prior to your next billing date.
</p>
<ul className="mt-6 space-y-2 text-gray-700">
<li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600"/> 30‑point review covering bank recs, categorizations, aging, and more</li>
<li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600"/> 2‑page feedback report with fixes & priorities</li>
<li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600"/> Turnaround aimed for within 5 business days</li>
</ul>
<div className="mt-8 space-y-3">
<a
href="#confidence-check-apply"
className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
>
Start Approval for Confidence Check
</a>
<p className="text-sm text-gray-500">Approval required. We don’t accept subscriptions until your books are in workable shape.</p>
</div>
</div>
</div>
</section>


{/* Approval Form Anchor */}
<section id="confidence-check-apply" className="bg-gray-50 border-t">
<div className="container mx-auto px-4 py-16">
<h3 className="text-2xl font-bold">Apply for the SimplifiBooks Confidence Check</h3>
<p className="mt-3 text-gray-700 max-w-2xl">
Tell us a bit about your current QuickBooks setup. If approved, we’ll send an invite to activate your
$84/month Confidence Check subscription.
</p>
<div className="mt-8 rounded-2xl bg-white p-6 md:p-8 shadow-sm">
<Suspense fallback={<div>Loading…</div>}>
<LeadForm />
</Suspense>
<p className="mt-4 text-sm text-gray-500">
Prefer to talk first? <Link href="https://calendly.com/simplifibooks2025/30min" className="underline">Book a 30‑minute call</Link>.
</p>
</div>
</div>
</section>
</main>
);
}