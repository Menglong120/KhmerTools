'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { HeartPulse, Activity } from 'lucide-react';

export function BmiCalculator() {
  const { locale } = useApp();
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [heightCm, setHeightCm] = useState<string>('170');
  const [weightKg, setWeightKg] = useState<string>('65');

  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('7');
  const [weightLbs, setWeightLbs] = useState<string>('145');

  let bmi = 0;
  let heightMeters = 0;

  if (unit === 'metric') {
    const h = parseFloat(heightCm) / 100;
    const w = parseFloat(weightKg);
    heightMeters = h;
    if (h > 0 && w > 0) {
      bmi = w / (h * h);
    }
  } else {
    const totalInches = (parseFloat(heightFt) || 0) * 12 + (parseFloat(heightIn) || 0);
    const w = parseFloat(weightLbs) || 0;
    heightMeters = totalInches * 0.0254;
    if (totalInches > 0 && w > 0) {
      bmi = (w / (totalInches * totalInches)) * 703;
    }
  }

  // Categories (Asian standards: < 18.5 Underweight, 18.5 - 22.9 Normal, 23.0 - 27.4 Overweight, >= 27.5 Obese)
  let status = {
    label: { en: 'Normal', km: 'ទម្ងន់សមស្រប (ធម្មតា)' },
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
    barPercent: 50,
  };

  if (bmi < 18.5) {
    status = {
      label: { en: 'Underweight', km: 'ស្គម (ក្រោមស្តង់ដារ)' },
      color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40',
      barPercent: Math.min(25, (bmi / 18.5) * 25),
    };
  } else if (bmi <= 22.9) {
    status = {
      label: { en: 'Normal & Healthy', km: 'ទម្ងន់សមស្រប និងល្អ' },
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
      barPercent: 25 + ((bmi - 18.5) / (22.9 - 18.5)) * 25,
    };
  } else if (bmi <= 27.4) {
    status = {
      label: { en: 'Overweight', km: 'លើសទម្ងន់បន្តិច' },
      color: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800/40',
      barPercent: 50 + ((bmi - 23.0) / (27.4 - 23.0)) * 25,
    };
  } else {
    status = {
      label: { en: 'Obese', km: 'ធាត់ខ្លាំង' },
      color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/40',
      barPercent: Math.min(100, 75 + ((bmi - 27.5) / 10) * 25),
    };
  }

  // Ideal weight range for height
  const minIdealKg = heightMeters > 0 ? (18.5 * heightMeters * heightMeters).toFixed(1) : '0';
  const maxIdealKg = heightMeters > 0 ? (22.9 * heightMeters * heightMeters).toFixed(1) : '0';

  return (
    <div className="space-y-6">
      {/* Unit switch */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setUnit('metric')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              unit === 'metric'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {locale === 'km' ? 'ប្រព័ន្ធម៉ែត្រ (cm, kg)' : 'Metric (cm, kg)'}
          </button>
          <button
            type="button"
            onClick={() => setUnit('imperial')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              unit === 'imperial'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {locale === 'km' ? 'ប្រព័ន្ធអង់គ្លេស (ft, lbs)' : 'Imperial (ft, lbs)'}
          </button>
        </div>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {unit === 'metric' ? (
          <>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100 block mb-2">
                {locale === 'km' ? 'កម្ពស់ (សង់ទីម៉ែត្រ)' : 'Height (Centimeters)'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="w-full text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <span className="absolute right-4 top-3 text-sm text-slate-400">cm</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100 block mb-2">
                {locale === 'km' ? 'ទម្ងន់ (គីឡូក្រាម)' : 'Weight (Kilograms)'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <span className="absolute right-4 top-3 text-sm text-slate-400">kg</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100 block mb-2">
                {locale === 'km' ? 'កម្ពស់ (ហ្វីត និង អ៊ីញ)' : 'Height (Feet & Inches)'}
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    className="w-full text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                  <span className="absolute right-4 top-3 text-sm text-slate-400">ft</span>
                </div>
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    className="w-full text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                  <span className="absolute right-4 top-3 text-sm text-slate-400">in</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100 block mb-2">
                {locale === 'km' ? 'ទម្ងន់ (ផោន)' : 'Weight (Pounds)'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(e.target.value)}
                  className="w-full text-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <span className="absolute right-4 top-3 text-sm text-slate-400">lbs</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* BMI Result Display */}
      {bmi > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {locale === 'km' ? 'ពិន្ទុ BMI របស់អ្នក' : 'Your Body Mass Index (BMI)'}
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-slate-100">
                  {bmi.toFixed(1)}
                </span>
                <span className={`text-sm font-bold px-3 py-1 rounded-full border ${status.color}`}>
                  {status.label[locale]}
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block">
                {locale === 'km' ? 'ទម្ងន់ដែលសមស្របនឹងកម្ពស់' : 'Healthy Weight Range'}
              </span>
              <span className="text-base font-bold text-slate-700 dark:text-slate-200 mt-1 block">
                {minIdealKg} kg – {maxIdealKg} kg
              </span>
            </div>
          </div>

          {/* Visual BMI Gauge Bar */}
          <div className="space-y-2">
            <div className="h-3 w-full rounded-full bg-linear-to-r from-amber-400 via-emerald-400 via-50% via-orange-400 to-rose-500 relative overflow-hidden">
              <div
                className="absolute top-0 bottom-0 w-2 bg-slate-900 dark:bg-white shadow-md rounded-full transition-all duration-300 -ml-1"
                style={{ left: `${Math.min(99, Math.max(1, status.barPercent))}%` }}
              />
            </div>

            <div className="flex justify-between text-[11px] text-slate-400">
              <span>&lt; 18.5 ({locale === 'km' ? 'ស្គម' : 'Under'})</span>
              <span>18.5 - 22.9 ({locale === 'km' ? 'ធម្មតា' : 'Normal'})</span>
              <span>23 - 27.4 ({locale === 'km' ? 'លើសទម្ងន់' : 'Over'})</span>
              <span>&gt; 27.5 ({locale === 'km' ? 'ធាត់' : 'Obese'})</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
