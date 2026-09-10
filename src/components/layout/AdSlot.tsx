'use client';

import React, { useEffect } from 'react';
import { ADSENSE_CLIENT_ID } from '@/lib/site-config';

interface AdSlotProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
}

export function AdSlot({
  slotId = '1234567890',
  format = 'auto',
  className = '',
}: AdSlotProps) {
  const adClientId = ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (adClientId && typeof window !== 'undefined') {
      try {
        // @ts-expect-error Google AdSense adsbygoogle
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error: ', e);
      }
    }
  }, [adClientId]);

  if (!adClientId) {
    // Elegant Placeholder with AdSense indication
    return (
      <div
        className={`w-full my-6 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/30 flex flex-col items-center justify-center text-center ${className}`}
      >
        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-1">
          Advertisement Space
        </span>
        <p className="text-xs text-slate-400 dark:text-slate-600">
          Google AdSense Unit (Auto-activated when client ID is provided)
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full my-6 overflow-hidden text-center ${className}`}>
      <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">
        Sponsored
      </span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
