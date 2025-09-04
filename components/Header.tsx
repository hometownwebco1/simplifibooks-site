// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <img src="/logo.svg" alt="SimplifiBooks logo" className="h-8 w-8" />
            <span className="text-base font-semibold tracking-tight text-gray-900">
              SimplifiBooks
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/blog" className="text-sm text-gray-700 hover:underline">
              Blog
            </Link>
            <Link href="/services" className="text-sm text-gray-700 hover:underline">
              Services
            </Link>
            <a
              href="https://www.raleighbookkeeping.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:underline"
            >
              Raleigh Bookkeeping
            </a>
            <a
              href="mailto:hello@simplifibooks.com"
              className="rounded-md bg-gradient-to-r from-brand-blue to-brand-green px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95"
            >
              Email Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav panel */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              <Link
                href="/blog"
                className="rounded px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={close}
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="rounded px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={close}
              >
                Services
              </Link>
              <a
                href="https://www.raleighbookkeeping.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={close}
              >
                Raleigh Bookkeeping
              </a>
              <a
                href="mailto:hello@simplifibooks.com"
                className="rounded-md bg-gradient-to-r from-brand-blue to-brand-green px-3 py-2 text-sm font-medium text-white shadow hover:opacity-95"
                onClick={close}
              >
                Email Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
