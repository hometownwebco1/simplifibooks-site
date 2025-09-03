'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', businessType: '', software: ''
  });
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error('Submission failed');
      }
      router.push('/thank-you');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-green"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Business Type</label>
          <input
            type="text"
            value={form.businessType}
            onChange={(e) => setForm({ ...form, businessType: e.target.value })}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="e.g., freelancer, contractor, realtor"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bookkeeping Software</label>
          <select
            value={form.software}
            onChange={(e) => setForm({ ...form, software: e.target.value })}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white"
          >
            <option value="">Select</option>
            <option>QuickBooks</option>
            <option>Wave</option>
            <option>Xero</option>
            <option>Excel/Sheets</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className="btn btn-primary w-full">
        {loading ? 'Submitting…' : 'Get the Free 30‑Point Checklist'}
      </button>
      <p className="text-xs text-gray-500">
        By submitting, you agree to receive the checklist and occasional emails about SimplifiBooks. You can unsubscribe at any time.
      </p>
    </form>
  );
}
