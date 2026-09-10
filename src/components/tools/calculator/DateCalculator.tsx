'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { toKhmerDigits } from '@/lib/khmer-converter';
import { CopyButton } from '@/components/common/CopyButton';
import { CalendarRange, Plus, Minus, ArrowRight } from 'lucide-react';

export function DateCalculator() {
  const { locale, t } = useApp();
  const [activeTab, setActiveTab] = useState<'diff' | 'add'>('diff');

  // Tab 1: Difference
  const [startDate, setStartDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });

  // Tab 2: Add/Subtract
  const [baseDate, setBaseDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [addDays, setAddDays] = useState<string>('14');
  const [addMonths, setAddMonths] = useState<string>('0');
  const [addYears, setAddYears] = useState<string>('0');

  // Difference Calculations
  const sDate = new Date(startDate);
  const eDate = new Date(endDate);
  const diffMs = eDate.getTime() - sDate.getTime();
  const totalDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  // Count weekdays
  let weekdays = 0;
  let weekends = 0;
  if (!isNaN(sDate.getTime()) && !isNaN(eDate.getTime())) {
    const cur = new Date(Math.min(sDate.getTime(), eDate.getTime()));
    const target = new Date(Math.max(sDate.getTime(), eDate.getTime()));
    while (cur < target) {
      cur.setDate(cur.getDate() + 1);
      const day = cur.getDay();
      if (day === 0 || day === 6) weekends++;
      else weekdays++;
    }
  }

  // Add/Subtract Calculation
  const bDate = new Date(baseDate);
  const factor = operation === 'add' ? 1 : -1;
  const resultDate = new Date(bDate);
  if (!isNaN(bDate.getTime())) {
    resultDate.setFullYear(resultDate.getFullYear() + factor * (parseInt(addYears, 10) || 0));
    resultDate.setMonth(resultDate.getMonth() + factor * (parseInt(addMonths, 10) || 0));
    resultDate.setDate(resultDate.getDate() + factor * (parseInt(addDays, 10) || 0));
  }

  const formattedResultDate = !isNaN(resultDate.getTime())
    ? resultDate.toLocaleDateString(locale === 'km' ? 'km-KH' : 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '—';

  return (
    <div className="space-y-6">
      {/* Mode Switch */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setActiveTab('diff')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'diff'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {locale === 'km' ? 'គម្លាតរវាងកាលបរិច្ឆេទ' : 'Difference Between Dates'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('add')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'add'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {locale === 'km' ? 'បូក ឬដកកាលបរិច្ឆេទ' : 'Add / Subtract Date'}
          </button>
        </div>
      </div>

      {activeTab === 'diff' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                {locale === 'km' ? 'កាលបរិច្ឆេទចាប់ផ្តើម' : 'Start Date'}
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full text-base px-4 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                {locale === 'km' ? 'កាលបរិច្ឆេទបញ្ចប់' : 'End Date'}
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full text-base px-4 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Difference Result */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {locale === 'km' ? 'គម្លាតសរុប' : 'Total Duration'}
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {Math.abs(totalDays).toLocaleString()}
              </span>
              <span className="text-lg font-bold text-slate-700 dark:text-slate-300">
                {locale === 'km' ? 'ថ្ងៃ' : 'days'}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block">{locale === 'km' ? 'ថ្ងៃធ្វើការ (ច័ន្ទ-សុក្រ)' : 'Working Days'}</span>
                <span className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{weekdays} {locale === 'km' ? 'ថ្ងៃ' : 'days'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">{locale === 'km' ? 'ចុងសប្តាហ៍ (សៅរ៍-អាទិត្យ)' : 'Weekend Days'}</span>
                <span className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{weekends} {locale === 'km' ? 'ថ្ងៃ' : 'days'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">{locale === 'km' ? 'សប្តាហ៍' : 'Weeks'}</span>
                <span className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{(Math.abs(totalDays) / 7).toFixed(1)} {locale === 'km' ? 'សប្តាហ៍' : 'weeks'}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                {locale === 'km' ? 'កាលបរិច្ឆេទគោល' : 'Base Starting Date'}
              </label>
              <input
                type="date"
                value={baseDate}
                onChange={(e) => setBaseDate(e.target.value)}
                className="w-full text-base px-4 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500">{locale === 'km' ? 'ប្រតិបត្តិការ៖' : 'Action:'}</span>
              <button
                type="button"
                onClick={() => setOperation('add')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  operation === 'add'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{locale === 'km' ? 'បូកបន្ថែម (+)' : 'Add (+)'}</span>
              </button>

              <button
                type="button"
                onClick={() => setOperation('subtract')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  operation === 'subtract'
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Minus className="w-3.5 h-3.5" />
                <span>{locale === 'km' ? 'ដកថយ (-)' : 'Subtract (-)'}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-500 block mb-1">{locale === 'km' ? 'ឆ្នាំ' : 'Years'}</label>
                <input
                  type="number"
                  min="0"
                  value={addYears}
                  onChange={(e) => setAddYears(e.target.value)}
                  className="w-full text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500 block mb-1">{locale === 'km' ? 'ខែ' : 'Months'}</label>
                <input
                  type="number"
                  min="0"
                  value={addMonths}
                  onChange={(e) => setAddMonths(e.target.value)}
                  className="w-full text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500 block mb-1">{locale === 'km' ? 'ថ្ងៃ' : 'Days'}</label>
                <input
                  type="number"
                  min="0"
                  value={addDays}
                  onChange={(e) => setAddDays(e.target.value)}
                  className="w-full text-base px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                />
              </div>
            </div>
          </div>

          {/* Add/Subtract Result */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {locale === 'km' ? 'កាលបរិច្ឆេទលទ្ធផល' : 'Computed Target Date'}
              </span>
              <CopyButton textToCopy={formattedResultDate} label={t.copy} copiedLabel={t.copied} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 select-all">
              {formattedResultDate}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
