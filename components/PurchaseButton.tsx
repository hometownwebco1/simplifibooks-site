"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  label: string;
  productKey: "qbo-setup" | "onboarding-review";
}

export default function PurchaseButton({ label, productKey }: Props) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      // Debug log to help if anything fails in prod
      console.log("[PurchaseButton] starting checkout for", productKey);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productKey }),
      });

      const text = await res.text();
      let data: any = null;
      try { data = JSON.parse(text); } catch { /* non-JSON */ }

      console.log("[PurchaseButton] response", res.status, data || text);

      if (!res.ok) {
        const msg = (data && (data.error || data.message)) || `HTTP ${res.status}`;
        alert(`Checkout failed: ${msg}`);
        return;
      }

      if (data?.url) {
        window.location.href = data.url as string;
      } else {
        alert("Checkout failed: No redirect URL returned from API");
      }
    } catch (e: any) {
      console.error(e);
      alert(`Checkout error: ${e?.message || e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90 disabled:opacity-60"
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
      {loading ? "Starting checkout…" : label}
    </button>
  );
}
