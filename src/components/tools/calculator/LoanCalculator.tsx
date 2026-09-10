'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { toKhmerDigits } from '@/lib/khmer-converter';
import { Landmark, DollarSign, Coins, ChevronDown, ChevronUp } from 'lucide-react';

export function LoanCalculator() {
  const { locale } = useApp();
  const [currency, setCurrency] = useState<'USD' | 'KHR'>('USD');
  const [amount, setAmount] = useState<string>('20000');
  const [rate, setRate] = useState<string>('8.5');
  const [termType, setTermType] = useState<'years' | 'months'>('years');
  const [termValue, setTermValue] = useState<string>('5');
  const [showSchedule, setShowSchedule] = useState(false);

  const principal = parseFloat(amount) || 0;
  const annualRate = parseFloat(rate) || 0;
  const totalMonths = termType === 'years' ? (parseFloat(termValue) || 0) * 12 : parseFloat(termValue) || 0;

  // Monthly interest rate
  const monthlyRate = annualRate / 100 / 12;

  let monthlyPayment = 0;
  let totalInterest = 0;
  let totalCost = 0;
  const schedule: { month: number; principalPayment: number; interestPayment: number; remainingBalance: number }[] = [];

  if (principal > 0 && totalMonths > 0) {
    if (monthlyRate === 0) {
      monthlyPayment = principal / totalMonths;
      totalCost = principal;
      totalInterest = 0;
    } else {
      monthlyPayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
      totalCost = monthlyPayment * totalMonths;
      totalInterest = totalCost - principal;
    }

    // Generate schedule
    let balance = principal;
    for (let m = 1; m <= totalMonths; m++) {
      const interestPart = balance * monthlyRate;
      const principalPart = monthlyPayment - interestPart;
      balance = Math.max(0, balance - principalPart);
      schedule.push({
        month: m,
        principalPayment: principalPart,
        interestPayment: interestPart,
        remainingBalance: balance,
      });
    }
  }

  const formatMoney = (val: number) => {
    const formatted = val.toLocaleString(undefined, {
      minimumFractionDigits: currency === 'KHR' ? 0 : 2,
      maximumFractionDigits: currency === 'KHR' ? 0 : 2,
    });
    if (currency === 'KHR') {
      return `${locale === 'km' ? toKhmerDigits(formatted) : formatted} ៛`;
    }
    return `$${formatted}`;
  };

  const principalPercent = totalCost > 0 ? (principal / totalCost) * 100 : 50;
  const interestPercent = totalCost > 0 ? (totalInterest / totalCost) * 100 : 50;

  return (
    <div className="space-y-6">
      {/* Input Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Landmark className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'ព័ត៌មានកម្ចី' : 'Loan Details'}</span>
          </span>

          {/* Currency Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => {
                setCurrency('USD');
                if (amount === '80000000') setAmount('20000');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                currency === 'USD'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                  : 'text-slate-500'
              }`}
            >
              USD ($)
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrency('KHR');
                if (amount === '20000') setAmount('80000000');
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                currency === 'KHR'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                  : 'text-slate-500'
              }`}
            >
              KHR (៛)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Loan Amount */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
              {locale === 'km' ? 'ចំនួនប្រាក់កម្ចី (ប្រាក់ដើម)' : 'Loan Amount'}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full text-base px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
              {locale === 'km' ? 'អត្រាការប្រាក់ (% / ឆ្នាំ)' : 'Annual Interest Rate (%)'}
            </label>
            <input
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full text-base px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Term */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {locale === 'km' ? 'រយៈពេលកម្ចី' : 'Loan Term'}
              </label>
              <div className="flex text-[11px] gap-2">
                <button
                  type="button"
                  onClick={() => setTermType('years')}
                  className={`font-semibold ${termType === 'years' ? 'text-indigo-600 dark:text-indigo-400 underline' : 'text-slate-400'}`}
                >
                  {locale === 'km' ? 'ឆ្នាំ' : 'Years'}
                </button>
                <button
                  type="button"
                  onClick={() => setTermType('months')}
                  className={`font-semibold ${termType === 'months' ? 'text-indigo-600 dark:text-indigo-400 underline' : 'text-slate-400'}`}
                >
                  {locale === 'km' ? 'ខែ' : 'Months'}
                </button>
              </div>
            </div>
            <input
              type="number"
              value={termValue}
              onChange={(e) => setTermValue(e.target.value)}
              className="w-full text-base px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Monthly Repayment */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
            {locale === 'km' ? 'ប្រាក់ត្រូវបង់ប្រចាំខែ' : 'Monthly Payment'}
          </span>
          <span className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 mt-2 block">
            {formatMoney(monthlyPayment)}
          </span>
          <span className="text-xs text-slate-400 mt-2 block">
            {locale === 'km' ? `សរុប ${toKhmerDigits(totalMonths)} ខែ` : `For ${totalMonths} months`}
          </span>
        </div>

        {/* Total Interest */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
            {locale === 'km' ? 'ការប្រាក់សរុប' : 'Total Interest'}
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-2 block">
            {formatMoney(totalInterest)}
          </span>
          <span className="text-xs text-slate-400 mt-2 block">
            {interestPercent.toFixed(1)}% {locale === 'km' ? 'នៃទឹកប្រាក់សរុប' : 'of total loan'}
          </span>
        </div>

        {/* Total Payment */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
          <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
            {locale === 'km' ? 'ទឹកប្រាក់សរុបត្រូវសង' : 'Total Repayment'}
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2 block">
            {formatMoney(totalCost)}
          </span>
          <span className="text-xs text-slate-400 mt-2 block">
            {locale === 'km' ? 'ប្រាក់ដើម + ការប្រាក់' : 'Principal + Interest'}
          </span>
        </div>
      </div>

      {/* Breakdown Bar */}
      {totalCost > 0 && (
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-indigo-600 dark:text-indigo-400">
              {locale === 'km' ? 'ប្រាក់ដើម' : 'Principal'}: {formatMoney(principal)} ({principalPercent.toFixed(1)}%)
            </span>
            <span className="text-amber-600 dark:text-amber-400">
              {locale === 'km' ? 'ការប្រាក់' : 'Interest'}: {formatMoney(totalInterest)} ({interestPercent.toFixed(1)}%)
            </span>
          </div>
          <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
            <div className="bg-indigo-600 h-full" style={{ width: `${principalPercent}%` }} />
            <div className="bg-amber-500 h-full" style={{ width: `${interestPercent}%` }} />
          </div>
        </div>
      )}

      {/* Amortization Schedule Toggle */}
      {schedule.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs overflow-hidden">
          <button
            type="button"
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full p-4 flex items-center justify-between font-bold text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <span>{locale === 'km' ? 'តារាងរំលស់ប្រចាំខែ (Amortization Schedule)' : 'Monthly Amortization Schedule'}</span>
            <span className="flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
              {showSchedule ? (locale === 'km' ? 'បិទ' : 'Hide') : (locale === 'km' ? 'មើលតារាង' : 'Show Schedule')}
              {showSchedule ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>

          {showSchedule && (
            <div className="border-t border-slate-100 dark:border-slate-800 max-h-96 overflow-y-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/70 text-slate-500 sticky top-0">
                  <tr>
                    <th className="p-3">#</th>
                    <th className="p-3">{locale === 'km' ? 'ប្រាក់ត្រូវបង់' : 'Payment'}</th>
                    <th className="p-3">{locale === 'km' ? 'ប្រាក់ដើម' : 'Principal'}</th>
                    <th className="p-3">{locale === 'km' ? 'ការប្រាក់' : 'Interest'}</th>
                    <th className="p-3">{locale === 'km' ? 'សមតុល្យនៅសល់' : 'Balance'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {schedule.map((row) => (
                    <tr key={row.month} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 font-mono">
                      <td className="p-3 font-sans font-medium text-slate-500">{row.month}</td>
                      <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">{formatMoney(monthlyPayment)}</td>
                      <td className="p-3 text-indigo-600 dark:text-indigo-400">{formatMoney(row.principalPayment)}</td>
                      <td className="p-3 text-amber-600 dark:text-amber-400">{formatMoney(row.interestPayment)}</td>
                      <td className="p-3 text-slate-500">{formatMoney(row.remainingBalance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
