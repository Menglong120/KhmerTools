'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import { Fingerprint, RefreshCw, Download, Copy } from 'lucide-react';

export function UuidGenerator() {
  const { locale, t } = useApp();
  const [quantity, setQuantity] = useState<number>(5);
  const [isUppercase, setIsUppercase] = useState<boolean>(false);
  const [noHyphens, setNoHyphens] = useState<boolean>(false);
  const [uuids, setUuids] = useState<string[]>([]);

  const generateUuids = () => {
    const list: string[] = [];
    const count = Math.min(100, Math.max(1, quantity));
    for (let i = 0; i < count; i++) {
      let id = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          });

      if (noHyphens) {
        id = id.replace(/-/g, '');
      }
      if (isUppercase) {
        id = id.toUpperCase();
      } else {
        id = id.toLowerCase();
      }
      list.push(id);
    }
    setUuids(list);
  };

  useEffect(() => {
    generateUuids();
  }, [quantity, isUppercase, noHyphens]);

  const allUuidsText = uuids.join('\n');

  const downloadTxt = () => {
    const blob = new Blob([allUuidsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uuids.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {locale === 'km' ? 'ចំនួន UUID:' : 'Quantity:'}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
              className="w-20 px-3 py-1.5 text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <span className="text-xs text-slate-400">(Max 100)</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isUppercase}
                onChange={(e) => setIsUppercase(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>{locale === 'km' ? 'អក្សរធំ (Uppercase)' : 'Uppercase'}</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={noHyphens}
                onChange={(e) => setNoHyphens(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>{locale === 'km' ? 'គ្មានសញ្ញាដក (-)' : 'Remove Hyphens'}</span>
            </label>
          </div>

          <button
            type="button"
            onClick={generateUuids}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs ml-auto"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{locale === 'km' ? 'បង្កើតសារជាថ្មី' : 'Regenerate'}</span>
          </button>
        </div>
      </div>

      {/* Output List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {locale === 'km' ? `បញ្ជី UUID v4 (${uuids.length})` : `Generated UUIDs (${uuids.length})`}
          </span>

          <div className="flex items-center gap-2">
            <CopyButton textToCopy={allUuidsText} label={locale === 'km' ? 'ចម្លងទាំងអស់' : 'Copy All'} copiedLabel={t.copied} />
            <button
              type="button"
              onClick={downloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>.txt</span>
            </button>
          </div>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
          {uuids.map((id, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 group"
            >
              <span className="select-all truncate">{id}</span>
              <div className="shrink-0 pl-2">
                <CopyButton textToCopy={id} label={t.copy} copiedLabel="✓" className="py-1 px-2 text-[11px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
