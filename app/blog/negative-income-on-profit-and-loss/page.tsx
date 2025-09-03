export const metadata = {
  title: "Negative Income on Your Profit & Loss? What It Really Means (and How to Fix It)",
  description: "Diagnose and fix the causes of negative income on a P&L without rewriting your entire file.",
  alternates: { canonical: "https://www.simplifibooks.com/blog/negative-income-on-profit-and-loss" },
};

import Link from "next/link";

export default function Page() {
  return (
    <div className="container py-16 prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold">Negative Income on Your Profit & Loss? What It Really Means (and How to Fix It)</h1>
      <p className="text-sm text-gray-500">Written for DIY bookkeepers. This article is educational and does not constitute accounting advice.</p>
      <div className="mt-6">
        <p className='mb-4 text-gray-800'>Seeing “negative income” on a Profit & Loss is jarring. Sometimes it’s expected — refunds, chargebacks, or year‑end adjustments — but often it signals a deeper posting issue. Before you panic, work through a structured checklist to identify what’s really happening and fix it cleanly.</p>

<p className='mb-4 text-gray-800'>Start with the obvious: returns and refunds. If you issue refunds, they should be recorded against a contra‑income account (e.g., Sales Returns & Allowances) rather than as negative sales or expenses. Using a contra account preserves gross revenue visibility while reflecting the give‑backs that reduce net income.</p>

<p className='mb-4 text-gray-800'>Check for double‑entered merchant fees. When fees are captured both as line‑item reductions to sales and as separate expenses, income can swing negative. Your goal is to record gross sales and classify processor fees once, in the appropriate expense account.</p>

<p className='mb-4 text-gray-800'>Review the timing of revenue recognition. If you switched from cash to accrual or started invoicing ahead of delivery, revenue may be deferred while costs are recognized now, creating temporary negatives. This isn’t necessarily wrong, but you should understand the pattern and ensure it reflects reality.</p>

<p className='mb-4 text-gray-800'>Scan for misclassified owner contributions hitting income. A deposit from your personal account that’s mistakenly posted as Sales will prop up a prior period and then get reversed later, creating noise. Reclassify contributions to equity and rebuild any dashboards that depended on the inflated revenue.</p>

<p className='mb-4 text-gray-800'>Finally, run a month‑over‑month P&L trend. Spikes or dips usually correlate with workflow changes — a new person in the books, a sync that failed, or a one‑time journal entry that never got reversed. Annotating those events creates institutional memory so you don’t chase the same ghost twice.</p>

<p className='mb-4 text-gray-800'>Negative income should lead to investigation, not assumptions. If you’d like a professional to perform this sanity check monthly and tell you exactly what needs attention, SimplifiBooks will run the analysis and summarize the corrections in a two‑page report so you can keep moving.</p>
      </div>
      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold">Prefer a professional to run these checks monthly?</h2>
        <p className="mt-2 text-gray-700">That’s exactly what SimplifiBooks does for <strong>$84/month</strong>: a 30‑point review and a simple 2‑page feedback report — no audits, no tax prep. <Link className="underline" href="/">Learn more</Link>.</p>
        <p className="mt-2 text-xs text-gray-500">Powered by <a className="underline" href="https://www.raleighbookkeeping.com" target="_blank" rel="noopener noreferrer">Raleigh Bookkeeping</a>.</p>
      </div>
    </div>
  );
}
