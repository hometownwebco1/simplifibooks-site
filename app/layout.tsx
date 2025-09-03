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
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand blurb */}
              <div>
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" alt="SimplifiBooks logo" className="h-6 w-6" />
                  <span className="font-semibold text-gray-900">SimplifiBooks</span>
                </div>
                <p className="mt-3 max-w-xs">
                  DIY your books with confidence. Practical guidance, monthly review
                  reports, and clear next steps.
                </p>
              </div>

              {/* Explore */}
              <div>
                <h3 className="font-semibold text-gray-900">Explore</h3>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                  <li><Link href="/services" className="hover:underline">Services</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold text-gray-900">Legal</h3>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:underline">Terms &amp; Conditions</Link></li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="font-semibold text-gray-900">Connect</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="https://www.youtube.com/@SimplifiBooks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      aria-label="SimplifiBooks on YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@simplifibooks.com" className="hover:underline">
                      hello@simplifibooks.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} SimplifiBooks. All rights reserved.</p>
              <div className="flex items-center gap-6">
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
              Important: SimplifiBooks is not a CPA firm and does not provide audits or tax preparation.
              We provide a monthly review and feedback service only.
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
