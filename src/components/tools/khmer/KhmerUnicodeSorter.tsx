'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { normalizeKhmerUnicode } from '@/lib/khmer-text';
import { CopyButton } from '@/components/common/CopyButton';
import { Wrench, CheckCircle2, RefreshCw } from 'lucide-react';

export function KhmerUnicodeSorter() {
  const { locale, t } = useApp();
  const [inputText, setInputText] = useState<string>(
    'អត្ថបទខ្មែរមួយចំនួន ដែលចម្លងចេញពី PDF ឬប្រព័ន្ធចាស់ តែងតែជួបបញ្ហាស្រៈរត់ខុសកន្លែង ឬជើងខូច។'
  );

  const normalizedText = normalizeKhmerUnicode(inputText);
  const isChanged = inputText !== normalizedText;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'បញ្ចូលអត្ថបទដែលត្រូវការជួសជុល' : 'Input Corrupted / Unsorted Khmer Text'}</span>
          </label>
          {inputText && (
            <button
              type="button"
              onClick={() => setInputText('')}
              className="text-xs text-rose-500 hover:text-rose-600 font-medium"
            >
              {t.clear}
            </button>
          )}
        </div>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={5}
          placeholder={locale === 'km' ? 'ចម្លងអត្ថបទដែលខូច ឬរត់ស្រៈខុសនៅទីនេះ...' : 'Paste misordered or broken text here...'}
          className="w-full p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-sans text-base leading-relaxed resize-y"
        />
      </div>

      {/* Result Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {locale === 'km' ? 'អត្ថបទដែលបានជួសជុល និងតម្រៀបរួច (Unicode Standard)' : 'Normalized & Corrected Unicode Output'}
            </span>
          </div>

          <CopyButton
            textToCopy={normalizedText}
            label={t.copy}
            copiedLabel={t.copied}
          />
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 min-h-24">
          <p className="text-base text-slate-900 dark:text-slate-100 leading-relaxed whitespace-pre-wrap select-all">
            {normalizedText || '—'}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span>
            {isChanged
              ? (locale === 'km' ? '✨ បានរកឃើញ និងកែតម្រូវលំដាប់តួអក្សរខុស' : '✨ Fixed and reordered invalid Unicode character sequences')
              : (locale === 'km' ? '✓ អត្ថបទមានទម្រង់យូនីកូដត្រឹមត្រូវស្រាប់' : '✓ Text is already compliant with Unicode standard')}
          </span>
          <span className="font-mono">Unicode NFC</span>
        </div>
      </div>
    </div>
  );
}
