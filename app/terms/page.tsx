// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for SimplifiBooks.",
};

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        By using this site, you agree to these terms. All content is provided for
        informational purposes and does not constitute tax or legal advice. Our
        monthly review service provides feedback and guidance; it is not a substitute
        for bookkeeping, audits, or tax preparation.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Use of Service</h2>
      <ul className="mt-3 list-disc pl-6 text-gray-700 max-w-3xl">
        <li>Do not misuse or interfere with site operations</li>
        <li>Do not copy content without permission</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Limitation of Liability</h2>
      <p className="mt-3 text-gray-700 max-w-3xl">
        We are not liable for any damages resulting from the use of this site or
        services. You are responsible for decisions made based on the information provided.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-3 text-gray-700">Questions? Email: hello@simplifibooks.com</p>
      <p className="mt-8 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
