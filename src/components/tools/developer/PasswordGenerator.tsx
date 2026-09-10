'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import { KeyRound, RefreshCw, ShieldCheck, ShieldAlert } from 'lucide-react';

export function PasswordGenerator() {
  const { locale, t } = useApp();
  const [length, setLength] = useState<number>(16);
  const [useUpper, setUseUpper] = useState<boolean>(true);
  const [useLower, setUseLower] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [avoidSimilar, setAvoidSimilar] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const generatePassword = () => {
    let chars = '';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (avoidSimilar) {
      upper = upper.replace(/[IO]/g, '');
      lower = lower.replace(/[lo]/g, '');
      numbers = numbers.replace(/[01]/g, '');
    }

    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (!chars) {
      setPassword('');
      return;
    }

    const array = new Uint32Array(length);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(array);
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }
    setPassword(result);
  };

  useEffect(() => {
    generatePassword();
  }, [length, useUpper, useLower, useNumbers, useSymbols, avoidSimilar]);

  // Evaluate strength
  let strengthScore = 0;
  if (length >= 12) strengthScore += 1;
  if (length >= 16) strengthScore += 1;
  if (useUpper && useLower) strengthScore += 1;
  if (useNumbers) strengthScore += 1;
  if (useSymbols) strengthScore += 1;

  let strengthLabel = { en: 'Weak', km: 'ខ្សោយ' };
  let strengthColor = 'bg-rose-500';
  let strengthPercent = 20;

  if (strengthScore >= 5) {
    strengthLabel = { en: 'Very Strong', km: 'រឹងមាំខ្លាំងបំផុត' };
    strengthColor = 'bg-emerald-500';
    strengthPercent = 100;
  } else if (strengthScore >= 4) {
    strengthLabel = { en: 'Strong', km: 'រឹងមាំល្អ' };
    strengthColor = 'bg-emerald-400';
    strengthPercent = 80;
  } else if (strengthScore >= 3) {
    strengthLabel = { en: 'Medium', km: 'មធ្យម' };
    strengthColor = 'bg-amber-400';
    strengthPercent = 60;
  }

  return (
    <div className="space-y-6">
      {/* Generated Password Box */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {locale === 'km' ? 'ពាក្យសម្ងាត់ដែលបានបង្កើត' : 'Generated Secure Password'}
          </span>
          <button
            type="button"
            onClick={generatePassword}
            className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{locale === 'km' ? 'បង្កើតថ្មី' : 'Regenerate'}</span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
          <span className="font-mono text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 select-all break-all">
            {password || '—'}
          </span>
          <CopyButton textToCopy={password} label={t.copy} copiedLabel={t.copied} />
        </div>

        {/* Strength meter */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-400">{locale === 'km' ? 'កម្រិតសុវត្ថិភាព៖' : 'Strength:'}</span>
            <span className="text-slate-700 dark:text-slate-300">{strengthLabel[locale]}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${strengthColor}`}
              style={{ width: `${strengthPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Configuration Options */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
        {/* Length Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {locale === 'km' ? 'ប្រវែងពាក្យសម្ងាត់ (Length)' : 'Password Length'}
            </label>
            <span className="text-base font-mono font-bold text-indigo-600 dark:text-indigo-400">
              {length}
            </span>
          </div>
          <input
            type="range"
            min="6"
            max="48"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        {/* Checkboxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
          <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 cursor-pointer">
            <input
              type="checkbox"
              checked={useUpper}
              onChange={(e) => setUseUpper(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span>{locale === 'km' ? 'អក្សរធំ (A-Z)' : 'Uppercase (A-Z)'}</span>
          </label>

          <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 cursor-pointer">
            <input
              type="checkbox"
              checked={useLower}
              onChange={(e) => setUseLower(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span>{locale === 'km' ? 'អក្សរតូច (a-z)' : 'Lowercase (a-z)'}</span>
          </label>

          <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 cursor-pointer">
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={(e) => setUseNumbers(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span>{locale === 'km' ? 'លេខ (0-9)' : 'Numbers (0-9)'}</span>
          </label>

          <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 cursor-pointer">
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={(e) => setUseSymbols(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span>{locale === 'km' ? 'និមិត្តសញ្ញា (!@#$)' : 'Symbols (!@#$...)'}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
