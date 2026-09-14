'use client';

import React, { useEffect } from 'react';
import { ADSENSE_CLIENT_ID } from '@/lib/site-config';

interface AdSlotProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
}

export function AdSlot({
  slotId,
  format = 'auto',
  className = '',
}: AdSlotProps) {
  const adClientId = ADSENSE_CLIENT_ID;
  const isNumericSlot = Boolean(slotId && /^\d{8,12}$/.test(slotId));

  useEffect(() => {
    // Only trigger adsbygoogle push for valid numeric slot IDs to prevent TagError crashes
    if (adClientId && isNumericSlot && typeof window !== 'undefined') {
      try {
        // @ts-expect-error Google AdSense adsbygoogle
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.debug('AdSense push notice: ', e);
        }
      }
    }
  }, [adClientId, isNumericSlot]);

  // When no numeric slot ID is specified (site in review or awaiting unit creation in AdSense dashboard),
  // Auto Ads from the head script handles ad placement automatically without causing slot errors.
  if (!adClientId || !isNumericSlot) {
    return null;
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
