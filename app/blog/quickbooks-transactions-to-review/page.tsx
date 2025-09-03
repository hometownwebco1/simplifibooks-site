export const metadata = {
  title: "QuickBooks Says You Have Transactions to Review: Here’s What to Do",
  description: "Clear the bank feed queue fast — without sacrificing accuracy.",
  alternates: { canonical: "https://www.simplifibooks.com/blog/quickbooks-transactions-to-review" },
};

import Link from "next/link";

export default function Page() {
  return (
    <div className="container py-16 prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold">QuickBooks Says You Have Transactions to Review: Here’s What to Do</h1>
      <p className="text-sm text-gray-500">Written for DIY bookkeepers. This article is educational and does not constitute accounting advice.</p>
      <div className="mt-6">
        <p className='mb-4 text-gray-800'>QuickBooks’ “Transactions to Review” queue is both helpful and dangerous. It centralizes unreviewed bank feed items but tempts busy owners to click “Add” without considering context. This walkthrough explains how to clear the queue quickly while maintaining accuracy.</p>

<p className='mb-4 text-gray-800'>Begin with filters. Narrow the list to one account and one month to avoid context switching. Sort by Payee, then by Amount. Recognizing patterns is easier when similar items sit together.</p>

<p className='mb-4 text-gray-800'>Create specific bank rules for true recurring transactions, and apply them in review — not blindly to the whole register. Rules should require a combination of payee and memo or amount range. If a rule misfires, fix it immediately and tighten the conditions.</p>

<p className='mb-4 text-gray-800'>Match before you add. If a payment is related to an existing bill or an invoice deposit, always use “Match” so QuickBooks links the transactions and preserves subledger detail. Adding a new entry creates duplicates and breaks reports like A/R and A/P aging.</p>

<p className='mb-4 text-gray-800'>Use the Split function liberally. Many transactions include multiple purposes — fuel plus snacks, or a deposit that includes two invoices and a rebate. Splitting at review time keeps categories clean and reduces rework later.</p>

<p className='mb-4 text-gray-800'>Finally, leave notes. Add a short memo when something is unusual. These breadcrumbs are invaluable when you (or your tax preparer) revisit a transaction months later and wonder what happened.</p>

<p className='mb-4 text-gray-800'>A disciplined approach to the review queue saves hours. If you want this discipline without the time burden, SimplifiBooks will check that the queue is being processed correctly and call out anything that needs a second look.</p>
      </div>
      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold">Prefer a professional to run these checks monthly?</h2>
        <p className="mt-2 text-gray-700">That’s exactly what SimplifiBooks does for <strong>$84/month</strong>: a 30‑point review and a simple 2‑page feedback report — no audits, no tax prep. <Link className="underline" href="/">Learn more</Link>.</p>
        <p className="mt-2 text-xs text-gray-500">Powered by <a className="underline" href="https://www.raleighbookkeeping.com" target="_blank" rel="noopener noreferrer">Raleigh Bookkeeping</a>.</p>
      </div>
    </div>
  );
}
