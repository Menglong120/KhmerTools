'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import { Clock, Globe, Calendar, RefreshCw } from 'lucide-react';

export function TimestampConverter() {
  const { locale, t } = useApp();
  const [currentEpoch, setCurrentEpoch] = useState<number>(() => Math.floor(Date.now() / 1000));
  const [inputTimestamp, setInputTimestamp] = useState<string>(() => String(Math.floor(Date.now() / 1000)));

  // Date to Timestamp state
  const [dateStr, setDateStr] = useState<string>(() => new Date().toISOString().slice(0, 16));

  // Ticking current epoch
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEpoch(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Parse input timestamp
  const tsNum = parseFloat(inputTimestamp.trim());
  let targetDate: Date | null = null;
  if (!isNaN(tsNum)) {
    // If greater than 100 billion, assume ms, else seconds
    const ms = tsNum > 100000000000 ? tsNum : tsNum * 1000;
    targetDate = new Date(ms);
  }

  const isValid = Boolean(targetDate && !isNaN(targetDate.getTime()));
  const validDate = targetDate && !isNaN(targetDate.getTime()) ? targetDate : null;

  // Formatting
  const phnomPenhTime = validDate
    ? validDate.toLocaleString('en-US', {
        timeZone: 'Asia/Phnom_Penh',
        dateStyle: 'full',
        timeStyle: 'medium',
      })
    : '—';

  const utcTime = validDate ? validDate.toUTCString() : '—';
  const isoTime = validDate ? validDate.toISOString() : '—';
  const localTime = validDate ? validDate.toString() : '—';

  // Date to timestamp conversion
  const parsedDate = new Date(dateStr);
  const convertedSeconds = !isNaN(parsedDate.getTime()) ? Math.floor(parsedDate.getTime() / 1000) : 0;
  const convertedMs = !isNaN(parsedDate.getTime()) ? parsedDate.getTime() : 0;

  return (
    <div className="space-y-6">
      {/* Live Current Epoch Banner */}
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-500 animate-pulse" />
            <span>{locale === 'km' ? 'Unix Epoch បច្ចុប្បន្ន (វិនាទី)' : 'Current Unix Epoch Timestamp'}</span>
          </span>
          <span className="text-3xl sm:text-4xl font-mono font-black text-indigo-600 dark:text-indigo-400 mt-1 block">
            {currentEpoch}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CopyButton textToCopy={String(currentEpoch)} label={t.copy} copiedLabel={t.copied} />
          <button
            type="button"
            onClick={() => setInputTimestamp(String(currentEpoch))}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            {locale === 'km' ? 'ប្រើក្នុងប្រអប់ខាងក្រោម' : 'Paste Below'}
          </button>
        </div>
      </div>

      {/* Timestamp to Date Converter */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Globe className="w-4 h-4 text-indigo-500" />
          <span>{locale === 'km' ? 'បម្លែងពី Unix Timestamp ទៅជាកាលបរិច្ឆេទ' : 'Convert Unix Timestamp to Human Date'}</span>
        </h3>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputTimestamp}
            onChange={(e) => setInputTimestamp(e.target.value)}
            placeholder="e.g. 1715000000"
            className="w-full text-base px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {isValid ? (
          <div className="space-y-3 pt-2">
            {/* Cambodia Time */}
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                  🇰🇭 Phnom Penh Time (ICT UTC+7)
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5 block select-all">
                  {phnomPenhTime}
                </span>
              </div>
              <CopyButton textToCopy={phnomPenhTime} label={t.copy} copiedLabel={t.copied} />
            </div>

            {/* UTC Time */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  UTC Time (Greenwich)
                </span>
                <span className="text-sm sm:text-base font-mono font-medium text-slate-800 dark:text-slate-200 mt-0.5 block select-all">
                  {utcTime}
                </span>
              </div>
              <CopyButton textToCopy={utcTime} label={t.copy} copiedLabel={t.copied} />
            </div>

            {/* ISO 8601 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  ISO 8601
                </span>
                <span className="text-sm sm:text-base font-mono font-medium text-slate-800 dark:text-slate-200 mt-0.5 block select-all">
                  {isoTime}
                </span>
              </div>
              <CopyButton textToCopy={isoTime} label={t.copy} copiedLabel={t.copied} />
            </div>
          </div>
        ) : (
          <p className="text-xs text-rose-500 font-medium">
            ⚠ {locale === 'km' ? 'សូមបញ្ចូលលេខ Timestamp ឱ្យបានត្រឹមត្រូវ' : 'Please enter a valid numeric Unix timestamp.'}
          </p>
        )}
      </div>

      {/* Date to Timestamp Converter */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-indigo-500" />
          <span>{locale === 'km' ? 'បម្លែងពីថ្ងៃខែ មកជា Timestamp វិញ' : 'Convert Human Date to Unix Timestamp'}</span>
        </h3>

        <div>
          <input
            type="datetime-local"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
            className="w-full sm:w-auto text-base px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Seconds (s)</span>
              <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 block select-all">
                {convertedSeconds}
              </span>
            </div>
            <CopyButton textToCopy={String(convertedSeconds)} label={t.copy} copiedLabel={t.copied} />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Milliseconds (ms)</span>
              <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 block select-all">
                {convertedMs}
              </span>
            </div>
            <CopyButton textToCopy={String(convertedMs)} label={t.copy} copiedLabel={t.copied} />
          </div>
        </div>
      </div>
    </div>
  );
}
