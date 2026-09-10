'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { CATEGORIES } from '@/lib/tools-registry';
import {
  Search,
  Sun,
  Moon,
  Menu,
  X,
  Languages,
  Sparkles,
} from 'lucide-react';

export function Navbar() {
  const { locale, toggleLocale, theme, toggleTheme, setIsSearchOpen, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.svg"
              alt="KhmerTools Logo"
              className="w-9 h-9 rounded-xl shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight bg-linear-to-r from-slate-900 via-indigo-950 to-indigo-700 dark:from-white dark:via-slate-200 dark:to-indigo-400 bg-clip-text text-transparent">
                KhmerTools
              </span>
              <span className="text-[10px] -mt-1 font-medium text-slate-500 dark:text-slate-400 hidden sm:block">
                {locale === 'km' ? 'ឧបករណ៍អនឡាញឥតគិតថ្លៃ' : 'Free Online Utilities'}
              </span>
            </div>
          </Link>
        </div>

        {/* Search Bar Trigger */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 w-72 lg:w-96 text-sm text-slate-400 dark:text-slate-500 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800/80 rounded-xl hover:border-indigo-400/80 dark:hover:border-indigo-500/80 transition-all cursor-pointer shadow-2xs group"
        >
          <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
          <span className="flex-1 text-left truncate">{t.searchPlaceholder}</span>
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">
            ⌘K
          </kbd>
        </button>

        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/#categories"
            className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {t.categories}
          </Link>
          <Link
            href="/about"
            className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {t.about}
          </Link>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* Language Switch */}
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            title="Toggle Language"
          >
            <Languages className="w-3.5 h-3.5 text-indigo-500" />
            <span>{locale === 'km' ? 'EN' : 'ខ្មែរ'}</span>
          </button>

          {/* Theme Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={toggleLocale}
            className="px-2 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {locale === 'km' ? 'EN' : 'ខ្មែរ'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 rounded-lg"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-3">
          <div className="grid grid-cols-1 gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.home}
            </Link>
            <Link
              href="/#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.categories}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.about}
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              {t.categories}
            </div>
            <div className="grid grid-cols-1 gap-1">
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <Link
                  key={key}
                  href={`/category/${key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-between"
                >
                  <span>{cat.name[locale]}</span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
