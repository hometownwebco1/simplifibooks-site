import LeadForm from "@/components/LeadForm";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
              Do your own books? <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">We’ll make sure you did them right.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-2xl">
              SimplifiBooks reviews your bookkeeping each month using a 30‑point checklist and sends back a clear, 2‑page feedback report. Confidence for DIY bookkeepers — no audits, no tax prep, just a clean, professional check‑behind.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Monthly 30‑point review with actionable notes</li>
              <li>• Clean 2‑page PDF report: ✅ Good, ⚠️ Needs Attention, 💡 Suggestions</li>
              <li>• Support email for simple bookkeeping questions</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#get-checklist" className="btn btn-primary">Get the Free 30‑Point Checklist</a>
              <Link href="/blog" className="btn btn-outline">Read the Blog</Link>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Powered by{" "}
              <a className="underline" href="https://www.raleighbookkeeping.com" target="_blank" rel="noopener noreferrer">
                Raleigh Bookkeeping
              </a> — trusted, local expertise with a national‑ready product.
            </p>
          </div>
          <div id="get-checklist">
            <LeadForm />
            <p className="mt-3 text-xs text-gray-500">
              You’ll receive a direct download link to the PDF on the next page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="container py-14">
          <h2 className="text-2xl font-bold">The SimplifiBooks Confidence Check — $84/month, cancel anytime</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-semibold">What’s Included</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Monthly 30‑point review of your books</li>
                <li>• 2‑page feedback PDF with fixes & insights</li>
                <li>• Simple Q&A support by email (clarifications only)</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">What’s Not Included</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• We don’t enter transactions or do tax prep</li>
                <li>• We don’t provide audits or assurance engagements</li>
                <li>• We don’t replace your bookkeeper or CPA</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Who It’s For</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Freelancers & solopreneurs</li>
                <li>• Realtors, contractors & small service businesses</li>
                <li>• Anyone who DIYs bookkeeping and wants a safety net</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-4 space-y-3 text-gray-700">
          <li><strong>1) Capture:</strong> You submit your info and connect read‑only access or upload statements.</li>
          <li><strong>2) Review:</strong> We run your books through our 30‑point checklist.</li>
          <li><strong>3) Report:</strong> You receive a 2‑page PDF with what’s good, what needs attention, and suggestions.</li>
        </ol>
        <p className="mt-4 text-sm text-gray-600">Important: SimplifiBooks is not a CPA firm and does not provide audits or tax preparation.</p>
      </section>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="container py-16">
          <h2 className="text-2xl font-bold">From the blog</h2>
          <p className="mt-2 text-gray-700">Specific solutions for DIY bookkeeping problems.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard href="/blog/check-if-quickbooks-is-correct" title="How to Know If Your QuickBooks Is Correct" />
            <ArticleCard href="/blog/balance-sheet-not-balancing" title="Balance Sheet Not Balancing? 5 Common Causes" />
            <ArticleCard href="/blog/fix-uncategorized-income-quickbooks" title="Uncategorized Income in QuickBooks: Fix It" />
            <ArticleCard href="/blog/owner-draw-vs-expense" title="Owner Draws vs. Business Expenses" />
            <ArticleCard href="/blog/negative-income-on-profit-and-loss" title="Negative Income on Your P&L? Here's Why" />
            <ArticleCard href="/blog/why-monthly-bank-reconciliation" title="Why Monthly Bank Reconciliation Matters" />
          </div>
          <div className="mt-6">
            <Link href="/blog" className="btn btn-outline">View all articles</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="card p-5 hover:shadow-md transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">Problem‑solving guidance for DIY bookkeepers, written in plain English.</p>
      <span className="mt-4 inline-block text-sm text-brand-blue">Read →</span>
    </Link>
  );
}
