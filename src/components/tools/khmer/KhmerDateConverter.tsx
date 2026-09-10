'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { getKhmerZodiacInfo, KHMER_ANIMALS } from '@/lib/khmer-zodiac';
import { CopyButton } from '@/components/common/CopyButton';
import { CalendarDays, Sparkles, Clock } from 'lucide-react';

export function KhmerDateConverter() {
  const { locale, t } = useApp();
  // Default to today
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const zodiacInfo = getKhmerZodiacInfo(selectedDate);

  const setToday = () => {
    setSelectedDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="space-y-6">
      {/* Date Picker Control */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'ជ្រើសរើសកាលបរិច្ឆេទសកល (គ.ស.)' : 'Select Gregorian Date (A.D.)'}</span>
          </label>
          <button
            type="button"
            onClick={setToday}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
          >
            {locale === 'km' ? 'កំណត់ជាថ្ងៃនេះ' : 'Set to Today'}
          </button>
        </div>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full sm:w-auto text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-mono"
        />
      </div>

      {/* Main Result Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'កាលបរិច្ឆេទពេញលេញតាមទំនៀមទម្លាប់ខ្មែរ' : 'Complete Khmer Date Format'}</span>
          </span>
          <CopyButton
            textToCopy={zodiacInfo.formattedKhmer}
            label={t.copy}
            copiedLabel={t.copied}
          />
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700/60">
          <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-relaxed select-all">
            {zodiacInfo.formattedKhmer}
          </p>
        </div>
      </div>

      {/* Highlight Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Buddhist Era Year */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            {locale === 'km' ? 'ពុទ្ធសករាជ (ព.ស.)' : 'Buddhist Era (B.E.)'}
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {zodiacInfo.beYearKhmer}
            </span>
            <span className="text-sm font-semibold text-slate-500 font-mono">
              ({zodiacInfo.beYear})
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            {locale === 'km' ? 'ឆ្នាំគ.ស. + ៥៤៤ / ៥៤៣' : 'AD year + 544 / 543'}
          </p>
        </div>

        {/* Animal Zodiac */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            {locale === 'km' ? 'ឆ្នាំទាំង ១២ (រាសីចក្រ)' : 'Khmer 12 Animal Zodiac'}
          </span>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-4xl">{zodiacInfo.animal.emoji}</span>
            <div>
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 block">
                ឆ្នាំ{zodiacInfo.animal.khmer}
              </span>
              <span className="text-xs text-slate-500">
                {zodiacInfo.animal.transcription} ({zodiacInfo.animal.english})
              </span>
            </div>
          </div>
        </div>

        {/* Sak (Lunar Era) */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            {locale === 'km' ? 'ស័ក (វដ្ត ១០ ឆ្នាំ)' : 'Sak (10-Year Era Cycle)'}
          </span>
          <div className="mt-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 block">
              {zodiacInfo.sak.khmer}
            </span>
            <span className="text-xs text-slate-500">
              {zodiacInfo.sak.english} (ស័កទី {zodiacInfo.sak.number})
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            {locale === 'km' ? 'គិតតាមលេខចុងក្រោយនៃព.ស.' : 'Derived from Buddhist Era year'}
          </p>
        </div>
      </div>
    </div>
  );
}
