'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import { Link2, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export function UrlEncoder() {
  const { locale, t } = useApp();
  const [direction, setDirection] = useState<'encode' | 'decode'>('encode');
  const [encodeMode, setEncodeMode] = useState<'component' | 'full'>('component');
  const [inputVal, setInputVal] = useState<string>('https://khmertools.com/search?q=បម្លែងលេខខ្មែរ&lang=km');

  let outputVal = '';
  let error: string | null = null;
  const params: { key: string; value: string }[] = [];

  try {
    if (direction === 'encode') {
      outputVal = encodeMode === 'component' ? encodeURIComponent(inputVal) : encodeURI(inputVal);
    } else {
      outputVal = decodeURIComponent(inputVal);
    }

    // Try parsing URL query params
    const rawUrl = direction === 'encode' ? inputVal : outputVal;
    if (rawUrl.includes('?')) {
      const queryString = rawUrl.split('?')[1];
      const urlParams = new URLSearchParams(queryString);
      urlParams.forEach((val, key) => {
        params.push({ key, value: val });
      });
    }
  } catch (err: unknown) {
    error = (err as Error).message;
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setDirection('encode')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              direction === 'encode'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Encode URL
          </button>
          <button
            type="button"
            onClick={() => setDirection('decode')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              direction === 'decode'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Decode URL
          </button>
        </div>

        {direction === 'encode' && (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="encMode"
                checked={encodeMode === 'component'}
                onChange={() => setEncodeMode('component')}
                className="text-indigo-600"
              />
              <span>encodeURIComponent (Strict)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer ml-2">
              <input
                type="radio"
                name="encMode"
                checked={encodeMode === 'full'}
                onChange={() => setEncodeMode('full')}
                className="text-indigo-600"
              />
              <span>encodeURI (Keep ://)</span>
            </label>
          </div>
        )}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            {direction === 'encode' ? (locale === 'km' ? 'URL ធម្មតា' : 'Plain URL') : (locale === 'km' ? 'URL ដែលបាន Encode' : 'Encoded URL')}
          </label>
          <textarea
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            rows={6}
            className="w-full p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {direction === 'encode' ? 'Encoded Output' : (locale === 'km' ? 'URL ធម្មតា' : 'Decoded Output')}
              </span>
              <CopyButton textToCopy={outputVal} label={t.copy} copiedLabel={t.copied} />
            </div>
            <textarea
              readOnly
              value={outputVal}
              rows={6}
              className="w-full p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-mono select-all"
            />
          </div>
          {error && <p className="text-xs text-rose-500 mt-2">⚠ {error}</p>}
        </div>
      </div>

      {/* Query Parameters Breakdown */}
      {params.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            {locale === 'km' ? 'ប៉ារ៉ាម៉ែត្រ Query Parameters ដែលបានរកឃើញ' : 'Detected Query Parameters'}
          </span>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {params.map((param, i) => (
              <div key={i} className="py-2 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{param.key}</span>
                <span className="text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                  {param.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
