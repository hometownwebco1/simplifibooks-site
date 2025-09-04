// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
              DIY your books with confidence. Practical guidance, monthly
              review reports, and clear next steps.
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
              <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:hello@simplifibooks.com"
                  className="hover:underline"
                >
                  hello@simplifibooks.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thesimplifibooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61575052181543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@SimplifiBooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© {year} SimplifiBooks. All rights reserved.</p>
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
  );
}
