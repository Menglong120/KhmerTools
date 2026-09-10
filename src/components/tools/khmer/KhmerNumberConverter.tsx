'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  toKhmerDigits,
  toArabicDigits,
  numberToKhmerWords,
  numberToKhmerCurrency,
} from '@/lib/khmer-converter';
import { CopyButton } from '@/components/common/CopyButton';
import { RefreshCw, DollarSign, Coins, Sparkles, Hash } from 'lucide-react';

export function KhmerNumberConverter() {
  const { locale, t } = useApp();
  const [inputVal, setInputVal] = useState<string>('1250000');

  const khmerNumerals = toKhmerDigits(inputVal);
  const arabicNumerals = toArabicDigits(inputVal);
  const spelledKhmerWords = numberToKhmerWords(inputVal);
  const rielCurrency = numberToKhmerCurrency(inputVal, 'KHR');
  const usdCurrency = numberToKhmerCurrency(inputVal, 'USD');

  const presets = ['1000', '15000', '100000', '500000', '1250000', '10000000'];

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Hash className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'បញ្ចូលលេខ (អារ៉ាប់ ឬលេខខ្មែរ)' : 'Enter Number (Arabic or Khmer digits)'}</span>
          </label>
          {inputVal && (
            <button
              type="button"
              onClick={() => setInputVal('')}
              className="text-xs text-rose-500 hover:text-rose-600 dark:hover:text-rose-400 font-medium"
            >
              {t.clear}
            </button>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={locale === 'km' ? 'ឧទាហរណ៍៖ 1250000 ឬ ១២៥០០០០' : 'e.g. 1250000 or ១២៥០០០០'}
            className="w-full text-xl sm:text-2xl font-mono px-4 py-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
        </div>

        {/* Quick Presets */}
        <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
          <span className="text-slate-400 dark:text-slate-500 font-medium">
            {locale === 'km' ? 'លេខគំរូ៖' : 'Presets:'}
          </span>
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setInputVal(preset)}
              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors font-mono"
            >
              {toKhmerDigits(Number(preset).toLocaleString())} ({Number(preset).toLocaleString()})
            </button>
          ))}
        </div>
      </div>

      {/* Output Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Khmer Numerals */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {locale === 'km' ? 'លេខខ្មែរ (០-៩)' : 'Khmer Numerals'}
              </span>
              <CopyButton textToCopy={khmerNumerals} label={t.copy} copiedLabel={t.copied} />
            </div>
            <div className="min-h-14 flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <p className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 font-mono select-all">
                {khmerNumerals || '—'}
              </p>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            {locale === 'km' ? 'បម្លែងពីលេខ 0-9 ទៅ ០-៩' : 'Standard Cambodian Unicode digits'}
          </p>
        </div>

        {/* Arabic Numerals */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {locale === 'km' ? 'លេខអារ៉ាប់ (0-9)' : 'Arabic Numerals'}
              </span>
              <CopyButton textToCopy={arabicNumerals} label={t.copy} copiedLabel={t.copied} />
            </div>
            <div className="min-h-14 flex items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <p className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 font-mono select-all">
                {arabicNumerals || '—'}
              </p>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            {locale === 'km' ? 'បម្លែងពី ០-៩ មក 0-9 វិញ' : 'Standard Arabic / Western digits'}
          </p>
        </div>
      </div>

      {/* Spelled-Out Khmer Words */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {locale === 'km' ? 'អក្សរខ្មែរ (ពាក្យអាន)' : 'Spelled-Out Khmer Words'}
            </h3>
          </div>
          <CopyButton textToCopy={spelledKhmerWords} label={t.copy} copiedLabel={t.copied} />
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700/60">
          <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-slate-100 leading-relaxed select-all">
            {spelledKhmerWords || '—'}
          </p>
        </div>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          {locale === 'km'
            ? 'ត្រឹមត្រូវតាមក្បួនអក្ខរាវិរុទ្ធខ្មែរ ស័ក្តិសមសម្រាប់សរសេរលើសែក វិក្កយបត្រ និងកិច្ចសន្យាផ្លូវការ។'
            : 'Accurate Khmer orthography suitable for checks, invoices, and official legal contracts.'}
        </p>
      </div>

      {/* Currency Formats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cambodian Riels (KHR) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5" />
              <span>{locale === 'km' ? 'ទម្រង់ប្រាក់រៀល (KHR ៛)' : 'Cambodian Riel (KHR ៛)'}</span>
            </span>
            <CopyButton textToCopy={rielCurrency} label={t.copy} copiedLabel={t.copied} />
          </div>
          <div className="p-3 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl border border-amber-200/40 dark:border-amber-900/30">
            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 select-all">
              {rielCurrency || '—'}
            </p>
          </div>
        </div>

        {/* US Dollars (USD) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" />
              <span>{locale === 'km' ? 'ទម្រង់ប្រាក់ដុល្លារ (USD $)' : 'US Dollar (USD $)'}</span>
            </span>
            <CopyButton textToCopy={usdCurrency} label={t.copy} copiedLabel={t.copied} />
          </div>
          <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200/40 dark:border-emerald-900/30">
            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 select-all">
              {usdCurrency || '—'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
