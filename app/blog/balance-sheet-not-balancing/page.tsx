export const metadata = {
  title: "Balance Sheet Not Balancing? 5 Common Causes and How to Fix Them",
  description: "What to check in QuickBooks when your balance sheet refuses to balance — and how to correct it safely.",
  alternates: { canonical: "https://www.simplifibooks.com/blog/balance-sheet-not-balancing" },
};

import Link from "next/link";

export default function Page() {
  return (
    <div className="container py-16 prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold">Balance Sheet Not Balancing? 5 Common Causes and How to Fix Them</h1>
      <p className="text-sm text-gray-500">Written for DIY bookkeepers. This article is educational and does not constitute accounting advice.</p>
      <div className="mt-6">
        <p className='mb-4 text-gray-800'>A balance sheet that doesn’t balance feels like a paradox: the equation Assets = Liabilities + Equity is non‑negotiable. When it doesn’t hold, the problem isn’t “math” — it’s data integrity. Something was recorded incorrectly, recorded twice, or not recorded at all. This article breaks down the five most common causes of an unbalanced balance sheet and how to correct each one in QuickBooks without blowing up your historical records.</p>

<p className='mb-4 text-gray-800'>The first and most common culprit is a corrupted or incomplete bank reconciliation. If prior reconciliations were forced to zero using a plug number, or if opening balances were entered without supporting entries, your balance sheet will begin to drift. Review the reconciliation reports for the months leading up to the imbalance. Undo and redo only what you must, and never “force” a reconciliation; all differences should be resolved by finding the actual missing or duplicated transactions.</p>

<p className='mb-4 text-gray-800'>Next, look for transactions dated “before” your opening balance date. It’s easy to import historical transactions that precede your official start date and forget to clean them up. Those stray entries distort retained earnings and cause mismatches. Run a General Ledger beginning on the earliest date in your file. Anything before your go‑live that doesn’t belong should be deleted or moved to the correct date.</p>

<p className='mb-4 text-gray-800'>Miscalculated sales tax and payroll liabilities create phantom balances that throw off totals. If a sales tax return was recorded as a Journal Entry to expense instead of as a payment against the liability, you’ll see a growing negative or positive in Sales Tax Payable. The same happens with payroll when taxes are double‑booked. Always record remittances against the liability accounts they settle.</p>

<p className='mb-4 text-gray-800'>Undeposited Funds is another frequent source of imbalance. This clearing account should never carry a large or long‑standing balance. When invoices are marked paid but funds are posted directly to bank deposits, Undeposited Funds accumulates duplicates. Use the Bank Deposit screen to combine payments into the actual deposit and clear the balance; then fix any direct‑to‑bank postings that bypassed the workflow.</p>

<p className='mb-4 text-gray-800'>Finally, check for damaged links between transactions — for example, an invoice that was partially applied to a payment, then both were edited later. Run an Open Invoices and Customer Balance Detail report to identify impossible scenarios, such as negative receivables for a customer or unapplied credits that should have been matched. Re‑link payments to invoices carefully to restore the integrity of Accounts Receivable.</p>

<p className='mb-4 text-gray-800'>Once your balance sheet balances again, document the root causes you found and create preventative rules. If keeping it clean every month feels like a lot, SimplifiBooks can perform a structured review each cycle so small posting errors never grow into month‑end mysteries.</p>
      </div>
      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold">Prefer a professional to run these checks monthly?</h2>
        <p className="mt-2 text-gray-700">That’s exactly what SimplifiBooks does for <strong>$84/month</strong>: a 30‑point review and a simple 2‑page feedback report — no audits, no tax prep. <Link className="underline" href="/">Learn more</Link>.</p>
        <p className="mt-2 text-xs text-gray-500">Powered by <a className="underline" href="https://www.raleighbookkeeping.com" target="_blank" rel="noopener noreferrer">Raleigh Bookkeeping</a>.</p>
      </div>
    </div>
  );
}
