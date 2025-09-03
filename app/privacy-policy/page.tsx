// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for SimplifiBooks.",
};

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        We respect your privacy. This page explains what information we collect,
        how we use it, and your choices. We collect only what is necessary to operate
        our website and services (e.g., analytics and contact email). We do not sell personal data.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Information We Collect</h2>
      <ul className="mt-3 list-disc pl-6 text-gray-700 max-w-3xl">
        <li>Basic analytics data (page views and events)</li>
        <li>Information you send us directly (e.g., email)</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">How We Use Information</h2>
      <ul className="mt-3 list-disc pl-6 text-gray-700 max-w-3xl">
        <li>Improve content and site performance</li>
        <li>Respond to messages and provide services</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-3 text-gray-700">Questions? Email: hello@simplifibooks.com</p>
      <p className="mt-8 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
