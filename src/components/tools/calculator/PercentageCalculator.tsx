'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { toKhmerDigits } from '@/lib/khmer-converter';
import { CopyButton } from '@/components/common/CopyButton';
import { Percent, TrendingUp, TrendingDown } from 'lucide-react';

export function PercentageCalculator() {
  const { locale, t } = useApp();

  // Mode 1: What is X% of Y?
  const [val1_x, setVal1_x] = useState<string>('15');
  const [val1_y, setVal1_y] = useState<string>('200');

  // Mode 2: X is what % of Y?
  const [val2_x, setVal2_x] = useState<string>('30');
  const [val2_y, setVal2_y] = useState<string>('120');

  // Mode 3: Change from X to Y
  const [val3_x, setVal3_x] = useState<string>('80');
  const [val3_y, setVal3_y] = useState<string>('100');

  // Mode 1 calculation
  const num1_x = parseFloat(val1_x) || 0;
  const num1_y = parseFloat(val1_y) || 0;
  const res1 = (num1_x / 100) * num1_y;

  // Mode 2 calculation
  const num2_x = parseFloat(val2_x) || 0;
  const num2_y = parseFloat(val2_y) || 0;
  const res2 = num2_y !== 0 ? (num2_x / num2_y) * 100 : 0;

  // Mode 3 calculation
  const num3_x = parseFloat(val3_x) || 0;
  const num3_y = parseFloat(val3_y) || 0;
  const diff3 = num3_y - num3_x;
  const res3 = num3_x !== 0 ? (diff3 / num3_x) * 100 : 0;
  const isIncrease = res3 >= 0;

  return (
    <div className="space-y-6">
      {/* Mode 1: What is X% of Y? */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
          <Percent className="w-4 h-4 text-indigo-500" />
          <span>{locale === 'km' ? '១. រកតម្លៃ X% នៃ Y' : '1. What is X% of Y?'}</span>
        </h3>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={val1_x}
              onChange={(e) => setVal1_x(e.target.value)}
              className="w-24 text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <span className="font-semibold text-slate-600 dark:text-slate-300">%</span>
          </div>

          <span className="text-sm text-slate-500">{locale === 'km' ? 'នៃ' : 'of'}</span>

          <input
            type="number"
            value={val1_y}
            onChange={(e) => setVal1_y(e.target.value)}
            className="w-32 text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <span className="text-lg font-bold text-slate-400">=</span>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {res1.toLocaleString(undefined, { maximumFractionDigits: 4 })}
            </span>
            <CopyButton textToCopy={String(res1)} label={t.copy} copiedLabel={t.copied} />
          </div>
        </div>

        <p className="mt-2 text-xs text-slate-400">
          Formula: ({val1_x} / 100) × {val1_y} = {res1}
        </p>
      </div>

      {/* Mode 2: X is what % of Y? */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
          <Percent className="w-4 h-4 text-indigo-500" />
          <span>{locale === 'km' ? '២. តើ X ជាប៉ុន្មានភាគរយនៃ Y?' : '2. X is what percentage of Y?'}</span>
        </h3>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="number"
            value={val2_x}
            onChange={(e) => setVal2_x(e.target.value)}
            className="w-28 text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <span className="text-sm text-slate-500">{locale === 'km' ? 'លើ' : 'is what % of'}</span>

          <input
            type="number"
            value={val2_y}
            onChange={(e) => setVal2_y(e.target.value)}
            className="w-28 text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <span className="text-lg font-bold text-slate-400">=</span>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {res2.toFixed(2)}%
            </span>
            <CopyButton textToCopy={`${res2.toFixed(2)}%`} label={t.copy} copiedLabel={t.copied} />
          </div>
        </div>

        <p className="mt-2 text-xs text-slate-400">
          Formula: ({val2_x} / {val2_y}) × 100 = {res2.toFixed(2)}%
        </p>
      </div>

      {/* Mode 3: Percentage increase / decrease */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
          <Percent className="w-4 h-4 text-indigo-500" />
          <span>{locale === 'km' ? '៣. គណនាការកើនឡើង ឬថយចុះ (%)' : '3. Percentage Increase or Decrease'}</span>
        </h3>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400">{locale === 'km' ? 'ពី' : 'From'}</span>
            <input
              type="number"
              value={val3_x}
              onChange={(e) => setVal3_x(e.target.value)}
              className="w-28 text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400">{locale === 'km' ? 'ទៅ' : 'To'}</span>
            <input
              type="number"
              value={val3_y}
              onChange={(e) => setVal3_y(e.target.value)}
              className="w-28 text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <span className="text-lg font-bold text-slate-400">=</span>

          <div className="flex items-center gap-2 ml-auto">
            <div className={`flex items-center gap-1 text-2xl font-extrabold ${isIncrease ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
              {isIncrease ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
              <span>{Math.abs(res3).toFixed(2)}%</span>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {isIncrease
                ? (locale === 'km' ? 'កើនឡើង' : 'Increase')
                : (locale === 'km' ? 'ថយចុះ' : 'Decrease')}
            </span>
            <CopyButton textToCopy={`${isIncrease ? '+' : '-'}${Math.abs(res3).toFixed(2)}%`} label={t.copy} copiedLabel={t.copied} />
          </div>
        </div>

        <p className="mt-2 text-xs text-slate-400">
          Formula: (({val3_y} - {val3_x}) / {val3_x}) × 100 = {res3.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
