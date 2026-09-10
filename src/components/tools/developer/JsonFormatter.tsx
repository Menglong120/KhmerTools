'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import { Code, Download, Trash2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export function JsonFormatter() {
  const { locale, t } = useApp();
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(
      {
        project: 'KhmerTools',
        description: 'Fast, Free & Client-side Online Utilities',
        version: '1.0.0',
        author: {
          name: 'Developer Community',
          country: 'Cambodia',
          code: 'KH',
        },
        features: ['Khmer Number Converter', 'Age Calculator', 'JSON Validator'],
        active: true,
      },
      null,
      2
    )
  );

  const [error, setError] = useState<string | null>(null);

  const formatJson = (spaces: number = 2) => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonInput(JSON.stringify(parsed, null, spaces));
      setError(null);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonInput(JSON.stringify(parsed));
      setError(null);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  const sortKeys = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const sortObj = (obj: any): any => {
        if (Array.isArray(obj)) return obj.map(sortObj);
        if (obj !== null && typeof obj === 'object') {
          return Object.keys(obj)
            .sort()
            .reduce((acc: any, key) => {
              acc[key] = sortObj(obj[key]);
              return acc;
            }, {});
        }
        return obj;
      };
      setJsonInput(JSON.stringify(sortObj(parsed), null, 2));
      setError(null);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  const downloadJson = () => {
    const blob = new Blob([jsonInput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => formatJson(2)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer shadow-xs"
            >
              {locale === 'km' ? 'តម្រៀបស្អាត (២ Spaces)' : 'Prettify (2 Spaces)'}
            </button>
            <button
              type="button"
              onClick={() => formatJson(4)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              4 Spaces
            </button>
            <button
              type="button"
              onClick={minifyJson}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {locale === 'km' ? 'បង្រួមកូដ (Minify)' : 'Minify / Compact'}
            </button>
            <button
              type="button"
              onClick={sortKeys}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              {locale === 'km' ? 'តម្រៀបតាមអក្ខរក្រម' : 'Sort Keys'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <CopyButton textToCopy={jsonInput} label={t.copy} copiedLabel={t.copied} />
            <button
              type="button"
              onClick={downloadJson}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              title="Download JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.download}</span>
            </button>
            {jsonInput && (
              <button
                type="button"
                onClick={() => setJsonInput('')}
                className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                title={t.clear}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Editor Area */}
        <div className="relative">
          <textarea
            value={jsonInput}
            onChange={(e) => {
              setJsonInput(e.target.value);
              try {
                JSON.parse(e.target.value);
                setError(null);
              } catch (err: unknown) {
                setError((err as Error).message);
              }
            }}
            rows={14}
            placeholder="Paste your JSON payload here..."
            className="w-full p-4 bg-slate-950 text-slate-100 dark:bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-mono text-xs sm:text-sm leading-relaxed resize-y shadow-inner"
            spellCheck={false}
          />
        </div>

        {/* Status indicator */}
        <div className="mt-3">
          {error ? (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">{locale === 'km' ? 'កូដ JSON មានបញ្ហា៖' : 'Invalid JSON Syntax:'}</span>{' '}
                <span className="font-mono">{error}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>{locale === 'km' ? 'កូដ JSON ត្រឹមត្រូវតាមស្តង់ដារ (Valid JSON)' : 'Valid JSON Syntax'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
