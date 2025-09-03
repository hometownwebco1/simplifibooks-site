export const metadata = {
  title: "Cash vs. Accrual for Small Businesses: How to Choose the Right Method",
  description: "Understand the tradeoffs, preview both views, and pick a method you can execute consistently.",
  alternates: { canonical: "https://www.simplifibooks.com/blog/cash-vs-accrual-small-business" },
};

import Link from "next/link";

export default function Page() {
  return (
    <div className="container py-16 prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold">Cash vs. Accrual for Small Businesses: How to Choose the Right Method</h1>
      <p className="text-sm text-gray-500">Written for DIY bookkeepers. This article is educational and does not constitute accounting advice.</p>
      <div className="mt-6">
        <p className='mb-4 text-gray-800'>Choosing between cash and accrual accounting affects how you read your business — not just how you file taxes. Cash recognizes revenue and expenses when money moves. Accrual recognizes them when they’re earned or incurred. The right choice depends on your model, margins, and how you make decisions.</p>

<p className='mb-4 text-gray-800'>Use cash if simplicity and cash management are your priorities. You’ll see money in and money out when it happens, which is helpful for very small service businesses and solo operators without inventory. However, cash can hide problems like mounting unpaid invoices because revenue appears only when customers pay.</p>

<p className='mb-4 text-gray-800'>Use accrual if timing matters — for example, if you invoice ahead of delivery or carry inventory. Accrual shows the full picture of work performed and costs incurred even if cash hasn’t moved. This supports better pricing, margin analysis, and lender conversations, but it requires more discipline.</p>

<p className='mb-4 text-gray-800'>Consider tax alignment. Many small businesses can choose either method for taxes (subject to IRS rules), but financial reporting doesn’t have to match taxes. You can manage the business on accrual and convert to cash for tax filing. Talk with your tax preparer about the pros and cons for your situation.</p>

<p className='mb-4 text-gray-800'>Run both views before deciding. In QuickBooks, toggle reports between Cash and Accrual to see how revenue, gross margin, and net income differ. If the difference is small, cash may be fine. If the difference is large, accrual likely gives you better insight for decisions.</p>

<p className='mb-4 text-gray-800'>Document your choice. Once you pick a method, create a short policy explaining how you’ll handle common scenarios — deposits, retainers, refunds, and prepaid expenses. Consistency matters more than perfection; a consistent imperfect method beats a perfect method applied inconsistently.</p>

<p className='mb-4 text-gray-800'>If you want a second opinion before settling on a method, SimplifiBooks can review a sample month under both views and summarize how each affects your key numbers — then monitor consistency going forward.</p>
      </div>
      <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-xl font-semibold">Prefer a professional to run these checks monthly?</h2>
        <p className="mt-2 text-gray-700">That’s exactly what SimplifiBooks does for <strong>$84/month</strong>: a 30‑point review and a simple 2‑page feedback report — no audits, no tax prep. <Link className="underline" href="/">Learn more</Link>.</p>
        <p className="mt-2 text-xs text-gray-500">Powered by <a className="underline" href="https://www.raleighbookkeeping.com" target="_blank" rel="noopener noreferrer">Raleigh Bookkeeping</a>.</p>
      </div>
    </div>
  );
}
