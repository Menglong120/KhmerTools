'use client';

import React, { useState } from 'react';
import { ToolFAQ } from '@/lib/tools-registry';
import { useApp } from '@/context/AppContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  faqs: ToolFAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const { locale, t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {t.faqs}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden bg-white dark:bg-slate-900/60 transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span className="pr-4">{faq.question[locale]}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-indigo-500' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/30">
                  {faq.answer[locale]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
