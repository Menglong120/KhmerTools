'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { CATEGORIES } from '@/lib/tools-registry';
import { Shield, Sparkles, Heart } from 'lucide-react';

export function Footer() {
  const { locale, t } = useApp();

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon.svg"
                alt="KhmerTools Logo"
                className="w-8 h-8 rounded-lg shadow-xs"
              />
              <span className="text-xl font-bold bg-linear-to-r from-slate-900 to-indigo-700 dark:from-white dark:to-indigo-300 bg-clip-text text-transparent">
                KhmerTools
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.tagline}
            </p>

            {/* Privacy Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.clientSideBadge}</span>
            </div>

            <p className="text-xs text-slate-400 dark:text-slate-500 italic">
              &quot;{t.freeAndOpen}&quot;
            </p>
          </div>

          {/* Categories Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {t.categories}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <li key={key}>
                  <Link
                    href={`/category/${key}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {cat.name[locale]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#popular"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {t.popularTools}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Tools Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {t.featuredTools}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  href="/tools/khmer-number-converter"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {locale === 'km' ? 'បម្លែងលេខខ្មែរ' : 'Khmer Number Converter'}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/age-calculator"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {locale === 'km' ? 'ម៉ាស៊ីនគិតអាយុ' : 'Age Calculator'}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/loan-calculator"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {locale === 'km' ? 'ម៉ាស៊ីនគិតកម្ចី' : 'Loan Calculator'}
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/json-formatter"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {locale === 'km' ? 'ឧបករណ៍ JSON' : 'JSON Formatter'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Site Info Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              {locale === 'km' ? 'ព័ត៌មាន និងច្បាប់' : 'Information & Legal'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} KhmerTools.</span>
            <span>{t.allRightsReserved}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for Cambodia & the Web.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
