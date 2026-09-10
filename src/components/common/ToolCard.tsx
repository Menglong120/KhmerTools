'use client';

import React from 'react';
import Link from 'next/link';
import { ToolMeta, CATEGORIES } from '@/lib/tools-registry';
import { useApp } from '@/context/AppContext';
import { ToolIcon } from './ToolIcon';
import { ArrowUpRight, Flame } from 'lucide-react';

interface ToolCardProps {
  tool: ToolMeta;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { locale } = useApp();
  const categoryInfo = CATEGORIES[tool.category];

  const categoryColor = {
    khmer: 'text-amber-600 bg-amber-50 border-amber-200/70 dark:text-amber-400 dark:bg-amber-950/40 dark:border-amber-800/40',
    calculator: 'text-blue-600 bg-blue-50 border-blue-200/70 dark:text-blue-400 dark:bg-blue-950/40 dark:border-blue-800/40',
    developer: 'text-emerald-600 bg-emerald-50 border-emerald-200/70 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800/40',
  }[tool.category];

  const iconBg = {
    khmer: 'from-amber-500/10 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/50',
    calculator: 'from-blue-500/10 to-indigo-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/50',
    developer: 'from-emerald-500/10 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50',
  }[tool.category];

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative flex flex-col justify-between p-5 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-600/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all duration-500 pointer-events-none" />

      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
            <ToolIcon name={tool.iconName} className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>

          <div className="flex items-center gap-1.5">
            {tool.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40">
                <Flame className="w-3 h-3 text-rose-500 animate-pulse" />
                <span>{locale === 'km' ? 'ពេញនិយម' : 'Hot'}</span>
              </span>
            )}
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${categoryColor}`}>
              {categoryInfo.name[locale]}
            </span>
          </div>
        </div>

        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
          <span>{tool.name[locale]}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-indigo-500" />
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {tool.shortDescription[locale]}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
        <div className="flex flex-wrap gap-1">
          {tool.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[11px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              #{tag}
            </span>
          ))}
        </div>
        <span className="font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
          {locale === 'km' ? 'ប្រើប្រាស់' : 'Open'} →
        </span>
      </div>
    </Link>
  );
}
