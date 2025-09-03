import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog — DIY Bookkeeping Fixes & Guidance",
  description: "Specific, practical guidance for common DIY bookkeeping problems. Written for small business owners.",
};

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">SimplifiBooks Blog</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">
        Targeted, plain‑English solutions to bookkeeping problems DIY business owners actually face. If you’d rather we run these checks monthly and send a simple report, our service is <strong>$84/month</strong>.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-5 hover:shadow-md transition">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
            <span className="mt-4 inline-block text-sm text-brand-blue">Read →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
