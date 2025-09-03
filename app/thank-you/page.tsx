import Link from "next/link";

export const metadata = {
  title: "Thank You — Download Your Checklist",
  description: "Download the SimplifiBooks Confidence Checklist and learn about our $84/month review service.",
};

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Thank you — your checklist is ready</h1>
      <p className="mt-4 text-gray-700">
        Download your copy of the <strong>SimplifiBooks Confidence Checklist</strong> below. If you’d like us to complete this each month and send you a 2‑page feedback report, our service is $84/month and can be canceled anytime.
      </p>
      <div className="mt-6">
        <a className="btn btn-primary" href="/files/simplifibooks_confidence_checklist.pdf" target="_blank" rel="noopener noreferrer">
          Download the 30‑Point Checklist (PDF)
        </a>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        Questions? You can reply to the confirmation email once your sending domain is set up in GHL.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn btn-outline">Return to homepage</Link>
      </div>
    </div>
  );
}
