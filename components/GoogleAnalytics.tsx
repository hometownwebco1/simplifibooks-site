'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Only run in the browser and if GA is initialized
    if (!gaId || typeof window === 'undefined' || !(window as any).gtag) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');
    (window as any).gtag('config', gaId, { page_path: url });
  }, [pathname, searchParams, gaId]);

  return null;
}
