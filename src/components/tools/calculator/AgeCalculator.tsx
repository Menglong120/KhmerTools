'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { toKhmerDigits } from '@/lib/khmer-converter';
import { KHMER_DAYS } from '@/lib/khmer-zodiac';
import { Hourglass, Cake, Calendar, Clock, Sparkles } from 'lucide-react';

export function AgeCalculator() {
  const { locale, t } = useApp();
  const [birthDate, setBirthDate] = useState<string>('1998-05-15');
  const [targetDate, setTargetDate] = useState<string>(() => {
    return new Date().toISOString().split('T')[0];
  });

  const bDate = new Date(birthDate);
  const tDate = new Date(targetDate);

  const isValid = !isNaN(bDate.getTime()) && !isNaN(tDate.getTime()) && tDate >= bDate;

  // Exact difference calculation
  let years = tDate.getFullYear() - bDate.getFullYear();
  let months = tDate.getMonth() - bDate.getMonth();
  let days = tDate.getDate() - bDate.getDate();

  if (days < 0) {
    months--;
    // days in previous month
    const prevMonthLastDay = new Date(tDate.getFullYear(), tDate.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Total metrics
  const diffTime = Math.abs(tDate.getTime() - bDate.getTime());
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;

  // Day of birth
  const dayOfWeekEn = bDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfWeekKm = KHMER_DAYS[bDate.getDay()] || '';

  // Next birthday calculation
  const nextBirthday = new Date(tDate.getFullYear(), bDate.getMonth(), bDate.getDate());
  if (nextBirthday < tDate) {
    nextBirthday.setFullYear(tDate.getFullYear() + 1);
  }
  const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - tDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-2">
            <Cake className="w-4 h-4 text-rose-500" />
            <span>{locale === 'km' ? 'ថ្ងៃខែឆ្នាំកំណើត' : 'Date of Birth'}</span>
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full text-base sm:text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-mono"
          />
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'គិតត្រឹមថ្ងៃ' : 'Calculate Age At (Target Date)'}</span>
          </label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full text-base sm:text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-mono"
          />
        </div>
      </div>

      {!isValid ? (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 text-rose-600 dark:text-rose-400 text-sm">
          {locale === 'km' ? 'សូមជ្រើសរើសកាលបរិច្ឆេទឱ្យបានត្រឹមត្រូវ (ថ្ងៃកំណើតត្រូវតែមុនថ្ងៃគិត)' : 'Please select a valid birth date (must be before the target date).'}
        </div>
      ) : (
        <>
          {/* Main Age Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs text-slate-900 dark:text-slate-100">
            <span className="text-xs font-bold tracking-wider uppercase text-slate-400 flex items-center gap-1.5">
              <Hourglass className="w-4 h-4 text-indigo-500" />
              <span>{locale === 'km' ? 'អាយុជាក់ស្តែងរបស់អ្នក' : 'Your Exact Current Age'}</span>
            </span>

            <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {locale === 'km' ? toKhmerDigits(years) : years}
                </span>
                <span className="text-lg font-semibold text-slate-600 dark:text-slate-300">{locale === 'km' ? 'ឆ្នាំ' : 'years'}</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200">
                  {locale === 'km' ? toKhmerDigits(months) : months}
                </span>
                <span className="text-base text-slate-500">{locale === 'km' ? 'ខែ' : 'months'}</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200">
                  {locale === 'km' ? toKhmerDigits(days) : days}
                </span>
                <span className="text-base text-slate-500">{locale === 'km' ? 'ថ្ងៃ' : 'days'}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span>
                {locale === 'km'
                  ? `កើតនៅ៖ ${dayOfWeekKm}`
                  : `Born on: ${dayOfWeekEn}`}
              </span>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full font-medium">
                {daysToNextBirthday === 0
                  ? (locale === 'km' ? '🎉 រីករាយថ្ងៃខួបកំណើតថ្ងៃនេះ!' : '🎉 Happy Birthday Today!')
                  : (locale === 'km'
                      ? `🎂 នៅសល់ ${toKhmerDigits(daysToNextBirthday)} ថ្ងៃទៀតដល់ខួបបន្ទាប់`
                      : `🎂 ${daysToNextBirthday} days until next birthday`)}
              </span>
            </div>
          </div>

          {/* Breakdown Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                {locale === 'km' ? 'ថ្ងៃសរុប' : 'Total Days'}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
                {locale === 'km' ? toKhmerDigits(totalDays.toLocaleString()) : totalDays.toLocaleString()}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                {locale === 'km' ? 'សប្តាហ៍សរុប' : 'Total Weeks'}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
                {locale === 'km' ? toKhmerDigits(totalWeeks.toLocaleString()) : totalWeeks.toLocaleString()}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                {locale === 'km' ? 'ម៉ោងសរុប' : 'Total Hours'}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
                {locale === 'km' ? toKhmerDigits(totalHours.toLocaleString()) : totalHours.toLocaleString()}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">
                {locale === 'km' ? 'នាទីសរុប' : 'Total Minutes'}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
                {locale === 'km' ? toKhmerDigits(totalMinutes.toLocaleString()) : totalMinutes.toLocaleString()}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
