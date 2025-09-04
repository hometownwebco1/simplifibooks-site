"use client";

import Link from "next/link";

interface Props {
  label: string;
  productKey: "qbo-setup";
  icon?: any;
}

export default function PurchaseButton({ label, icon: Icon }: Props) {
  // TEMP STUB: replace with real Stripe flow later
  return (
    <Link
      href="https://calendly.com/simplifibooks2025/30min"
      className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
    >
      {Icon ? <Icon className="h-5 w-5" /> : null}
      {label}
    </Link>
  );
}
