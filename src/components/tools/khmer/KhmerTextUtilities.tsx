'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  analyzeKhmerText,
  removeZWSP,
  highlightZWSP,
  normalizeKhmerUnicode,
  ZWSP,
} from '@/lib/khmer-text';
import { CopyButton } from '@/components/common/CopyButton';
import { Trash2, Eye, Wand2, FileText, CheckCircle } from 'lucide-react';

export function KhmerTextUtilities() {
  const { locale, t } = useApp();
  const [text, setText] = useState<string>(
    `ប្រទេសកម្ពុជា${ZWSP}ជាប្រទេសមួយ${ZWSP}ស្ថិតនៅ${ZWSP}អាស៊ីអាគ្នេយ៍${ZWSP}ដែលមាន${ZWSP}វប្បធម៌${ZWSP}និង${ZWSP}ប្រវត្តិសាស្ត្រ${ZWSP}ដ៏យូរលង់។`
  );
  const [highlightMode, setHighlightMode] = useState(false);

  const stats = analyzeKhmerText(text);

  const handleRemoveZWSP = () => {
    setText((prev) => removeZWSP(prev));
  };

  const handleNormalize = () => {
    setText((prev) => normalizeKhmerUnicode(prev));
  };

  const displayText = highlightMode ? highlightZWSP(text, ' [ZWSP] ') : text;

  return (
    <div className="space-y-6">
      {/* Editor Box */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <label className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'ប្រអប់អត្ថបទខ្មែរ' : 'Khmer Text Input'}</span>
          </label>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setHighlightMode(!highlightMode)}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1 ${
                highlightMode
                  ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-950 dark:border-amber-700 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{highlightMode ? (locale === 'km' ? 'លាក់ ZWSP' : 'Hide ZWSP') : (locale === 'km' ? 'បង្ហាញ ZWSP' : 'Highlight ZWSP')}</span>
            </button>

            <CopyButton textToCopy={text} label={t.copy} copiedLabel={t.copied} />

            {text && (
              <button
                type="button"
                onClick={() => setText('')}
                className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                title={t.clear}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <textarea
          value={displayText}
          onChange={(e) => {
            if (highlightMode) {
              setText(e.target.value.replace(/ \[ZWSP\] /g, ZWSP));
            } else {
              setText(e.target.value);
            }
          }}
          rows={6}
          placeholder={locale === 'km' ? 'បញ្ចូល ឬចម្លងអត្ថបទខ្មែរនៅទីនេះ...' : 'Type or paste your Khmer text here...'}
          className="w-full p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-sans text-base leading-relaxed resize-y"
        />

        {/* Quick Action Toolbar */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleRemoveZWSP}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{locale === 'km' ? 'លុប ZWSP ទាំងអស់' : 'Strip All ZWSP'}</span>
          </button>

          <button
            type="button"
            onClick={handleNormalize}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>{locale === 'km' ? 'សម្អាត និងតម្រៀបយូនីកូដ' : 'Normalize Unicode'}</span>
          </button>
        </div>
      </div>

      {/* Analytics & Counters Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {locale === 'km' ? 'ស្ថិតិអត្ថបទ និងតួអក្សរ' : 'Text & Linguistic Statistics'}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* Total Characters */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'តួអក្សរសរុប' : 'Total Characters'}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
              {stats.totalChars.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? 'មិនរាប់ដកឃ្លា៖ ' : 'No spaces: '}
              {stats.totalCharsNoSpaces.toLocaleString()}
            </span>
          </div>

          {/* Word Count */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'ចំនួនពាក្យ (ប៉ាន់ស្មាន)' : 'Words (approx)'}
            </span>
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1 block">
              {stats.wordCount.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? 'ផ្អែកលើ ZWSP និងដកឃ្លា' : 'Based on spaces & ZWSP'}
            </span>
          </div>

          {/* ZWSP Counter */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'ចន្លោះ ZWSP' : 'ZWSP (\u200B)'}
            </span>
            <span className={`text-2xl font-bold mt-1 block ${stats.zwspCount > 0 ? 'text-amber-500' : 'text-slate-900 dark:text-slate-100'}`}>
              {stats.zwspCount.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? 'ចន្លោះកាត់ពាក្យមើលមិនឃើញ' : 'Invisible break characters'}
            </span>
          </div>

          {/* Consonants */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'ព្យញ្ជនៈខ្មែរ (ក-អ)' : 'Khmer Consonants'}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
              {stats.consonantsCount.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? 'ព្យញ្ជនៈ ៣៣ តួ' : 'Base consonants'}
            </span>
          </div>

          {/* Subscript (Coeng ្) */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'ជើងអក្សរ (្)' : 'Subscripts (Coeng ្)'}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
              {stats.coengCount.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? 'សញ្ញាជើងព្យញ្ជនៈ' : 'Consonant subscripts'}
            </span>
          </div>

          {/* Dependent Vowels */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'ស្រៈនិស្ស័យ' : 'Dependent Vowels'}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
              {stats.dependentVowelsCount.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? 'ស្រៈ ា ិ ី ឹ ឺ...' : 'Attached vowels'}
            </span>
          </div>

          {/* Diacritics & Punctuation */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'វណ្ណយុត្តិ & សញ្ញា' : 'Punctuation & Signs'}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
              {(stats.diacriticsCount + stats.punctuationCount).toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? '់ ៌ ៍ ៕ ៖ ៗ ៘' : 'Diacritics & marks'}
            </span>
          </div>

          {/* Lines */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              {locale === 'km' ? 'ចំនួនបន្ទាត់' : 'Total Lines'}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1 block">
              {stats.lineCount.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-400">
              {locale === 'km' ? 'កថាខណ្ឌ' : 'Paragraphs & breaks'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
