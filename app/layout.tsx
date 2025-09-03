// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simplifibooks.com"),
  title: {
    default: "SimplifiBooks — Monthly Bookkeeping Confidence Checks",
    template: "%s | SimplifiBooks",
  },
  description:
    "Do your own books? We’ll make sure you did them right. Monthly bookkeeping double-checks with a simple feedback report.",
  openGraph: {
    title: "SimplifiBooks — Monthly Bookkeeping Confidence Checks",
    description: "Do your own books? We’ll make sure you did them right.",
    url: "https://www.simplifibooks.com",
    siteName: "SimplifiBooks",
    images: ["/og-image.png"],
    type: "website",
  },
  alternates: { canonical: "https://www.simplifibooks.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* GA4 base tag */}
        <Script
          id="ga4-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        <Header />
        <main>{children}</main>

        <footer className="mt-24 border-t border-gray-200">
          <div className="container mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} SimplifiBooks. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link href="/blog" className="hover:underline">Blog</Link>
                <a
                  href="https://www.raleighbookkeeping.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Powered by Raleigh Bookkeeping
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs">
              Important: SimplifiBooks is not a CPA firm and does not provide audits or tax preparation. We provide a monthly review and feedback service only.
            </p>
          </div>
        </footer>

        {/* Fires page_view on client-side route changes */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
