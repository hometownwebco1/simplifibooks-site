export const metadata = {
  title: "Uncategorized Income in QuickBooks: What It Means and How to Fix It",
  description: "What Uncategorized Income really indicates and how to remove it — for good.",
  alternates: { canonical: "https://www.simplifibooks.com/blog/fix-uncategorized-income-quickbooks" },
};

import Link from "next/link";

export default function Page() {
  return (
    <div className="container py-16 prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold">Uncategorized Income in QuickBooks: What It Means and How to Fix It</h1>
      <p className="text-sm text-gray-500">Written for DIY bookkeepers. This article is educational and does not constitute accounting advice.</p>
      <div className="mt-6">
        <p className='mb-4 text-gray-800'>“Uncategorized Income” in QuickBooks is like a warning light on your dashboard. It doesn’t tell you the underlying issue, just that something needs attention. Leaving amounts in that account skews revenue, confuses your tax prep, and makes trend analysis useless. Here’s how to clean it up quickly and prevent it from returning.</p>

<p className='mb-4 text-gray-800'>Start by drilling down on the Uncategorized Income account within your Profit & Loss for the period. Identify the source of each entry. Common causes include deposits recorded without customer names, bank rules that apply too broadly, and transfers that were actually sales. Reclassify each transaction to the appropriate income account or to Owner Contribution if it was a capital injection.</p>

<p className='mb-4 text-gray-800'>If you collect through Stripe, PayPal, or another processor, verify that fees are being recorded separately. Many DIY files show the net deposit as “income,” which is wrong; you should record the gross sale and the associated fee expense. Use a clearing account or the “Bank Deposit” workflow to combine individual payments and fees into the real‑world deposit amount.</p>

<p className='mb-4 text-gray-800'>Create precise bank rules to stop the problem at the source. Rules should be narrow: build them around payee names, amounts, or memo keywords. For example, “Stripe Payout” deposits should go to a clearing account, while square‑dollar transfers from the owner should hit equity. Review rules monthly; widening them carelessly is how transactions end up in Uncategorized in the first place.</p>

<p className='mb-4 text-gray-800'>Audit your Chart of Accounts. If you only have a single “Sales” account but multiple revenue streams, split them out: Services, Product Sales, Subscription Revenue, etc. Clarity in the chart makes classification faster and reporting better. The more your chart reflects how your business earns money, the easier it is to post accurately.</p>

<p className='mb-4 text-gray-800'>Finally, run a P&L by Month for the last six months and scan for spikes in Uncategorized Income. Investigate those months first; they often correlate with workflow changes — a new payment processor, someone else touching the books, or a bank feed reconnect. Addressing the process behind the error keeps your file clean going forward.</p>

<p className='mb-4 text-gray-800'>If clearing Uncategorized Income each month sounds tedious, you’re right — it is. But it’s also one of the highest‑leverage housekeeping tasks you can do. If you’d rather have a professional perform this sweep monthly, SimplifiBooks includes it in our 30‑point review and flags anything that needs your attention.</p>
      </div>
      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold">Prefer a professional to run these checks monthly?</h2>
        <p className="mt-2 text-gray-700">That’s exactly what SimplifiBooks does for <strong>$84/month</strong>: a 30‑point review and a simple 2‑page feedback report — no audits, no tax prep. <Link className="underline" href="/">Learn more</Link>.</p>
        <p className="mt-2 text-xs text-gray-500">Powered by <a className="underline" href="https://www.raleighbookkeeping.com" target="_blank" rel="noopener noreferrer">Raleigh Bookkeeping</a>.</p>
      </div>
    </div>
  );
}
