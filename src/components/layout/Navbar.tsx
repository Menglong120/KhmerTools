'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { TOOLS, CATEGORIES } from '@/lib/tools-registry';
import { ToolIcon } from '@/components/common/ToolIcon';
import {
  Search,
  Sun,
  Moon,
  Menu,
  X,
  Languages,
  Sparkles,
  ChevronDown,
  Wrench,
  Calculator,
  Code2,
} from 'lucide-react';

export function Navbar() {
  const { locale, toggleLocale, theme, toggleTheme, setIsSearchOpen, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileToolsExpanded, setMobileToolsExpanded] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const toolsDropdownRef = useRef<HTMLDivElement>(null);

  // Group tools by category for the dropdown
  const khmerTools = TOOLS.filter((tool) => tool.category === 'khmer');
  const calcTools = TOOLS.filter((tool) => tool.category === 'calculator');
  const devTools = TOOLS.filter((tool) => tool.category === 'developer');

  // Click outside and ESC key handlers to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setToolsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }

    if (toolsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toolsDropdownOpen]);

  const closeMenus = () => {
    setToolsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" onClick={closeMenus} className="flex items-center gap-2.5 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images.png"
              alt="KhmerTools Logo"
              className="w-9 h-6 rounded-md object-cover shadow-xs group-hover:scale-105 transition-transform"
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
          onClick={() => {
            closeMenus();
            setIsSearchOpen(true);
          }}
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
          {/* Tools Mega-Menu Dropdown */}
          <div className="relative" ref={toolsDropdownRef}>
            <button
              type="button"
              onClick={() => setToolsDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                toolsDropdownOpen
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
              aria-expanded={toolsDropdownOpen}
              aria-haspopup="true"
            >
              <Wrench className="w-4 h-4 text-indigo-500" />
              <span>{t.tools}</span>
              <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-indigo-100 dark:bg-indigo-900/80 text-indigo-600 dark:text-indigo-300 font-mono">
                {TOOLS.length}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  toolsDropdownOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {toolsDropdownOpen && (
              <div
                role="menu"
                aria-label="All Tools Dropdown"
                className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-[700px] lg:w-[840px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-2xl p-5 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Column 1: Khmer Tools */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <Link
                        href="/category/khmer"
                        onClick={closeMenus}
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        <Languages className="w-4 h-4 text-indigo-500" />
                        <span>{CATEGORIES.khmer.name[locale]}</span>
                      </Link>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold font-mono">
                        {khmerTools.length}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {khmerTools.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/tools/${tool.slug}`}
                          onClick={closeMenus}
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 group transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                            <ToolIcon name={tool.iconName} className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate">
                              {tool.name[locale]}
                            </div>
                            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                              {tool.shortDescription[locale]}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/category/khmer"
                      onClick={closeMenus}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-1"
                    >
                      <span>{locale === 'km' ? 'មើលទាំងអស់ →' : 'View all Khmer tools →'}</span>
                    </Link>
                  </div>

                  {/* Column 2: Calculators */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <Link
                        href="/category/calculator"
                        onClick={closeMenus}
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                      >
                        <Calculator className="w-4 h-4 text-emerald-500" />
                        <span>{CATEGORIES.calculator.name[locale]}</span>
                      </Link>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold font-mono">
                        {calcTools.length}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {calcTools.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/tools/${tool.slug}`}
                          onClick={closeMenus}
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 group transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                            <ToolIcon name={tool.iconName} className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate">
                              {tool.name[locale]}
                            </div>
                            <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                              {tool.shortDescription[locale]}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/category/calculator"
                      onClick={closeMenus}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
                    >
                      <span>{locale === 'km' ? 'មើលទាំងអស់ →' : 'View all calculators →'}</span>
                    </Link>
                  </div>

                  {/* Column 3: Developer Tools */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <Link
                        href="/category/developer"
                        onClick={closeMenus}
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Code2 className="w-4 h-4 text-blue-500" />
                        <span>{CATEGORIES.developer.name[locale]}</span>
                      </Link>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold font-mono">
                        {devTools.length}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 max-h-[280px] overflow-y-auto pr-1">
                      {devTools.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/tools/${tool.slug}`}
                          onClick={closeMenus}
                          className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/70 group transition-colors"
                        >
                          <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <ToolIcon name={tool.iconName} className="w-3 h-3" />
                          </div>
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                            {tool.name[locale]}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/category/developer"
                      onClick={closeMenus}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1"
                    >
                      <span>{locale === 'km' ? 'មើលទាំងអស់ →' : 'View all developer tools →'}</span>
                    </Link>
                  </div>
                </div>

                {/* Dropdown Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>
                      {locale === 'km'
                        ? 'ឧបករណ៍ទាំងអស់ ១៨ ដំណើរការផ្ទាល់ក្នុង Browser ឥតគិតថ្លៃ'
                        : 'All 18 utilities run 100% client-side & private'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      closeMenus();
                      setIsSearchOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>{locale === 'km' ? 'ស្វែងរកឧបករណ៍លម្អិត (Ctrl+K)' : 'Quick Search (Ctrl+K)'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#categories"
            onClick={closeMenus}
            className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {t.categories}
          </Link>
          <Link
            href="/about"
            onClick={closeMenus}
            className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {t.about}
          </Link>
          <Link
            href="/guides"
            onClick={closeMenus}
            className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {t.guides}
          </Link>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* Language Switch */}
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            title="Switch Language (EN / KM)"
          >
            <Languages className="w-3.5 h-3.5 text-indigo-500" />
            <span className={locale === 'en' ? 'font-bold text-indigo-600 dark:text-indigo-400 underline underline-offset-2' : 'text-slate-400'}>EN</span>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className={locale === 'km' ? 'font-bold text-indigo-600 dark:text-indigo-400 underline underline-offset-2' : 'text-slate-400'}>KM</span>
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
            onClick={() => {
              closeMenus();
              setIsSearchOpen(true);
            }}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={toggleLocale}
            className="px-2 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 inline-flex items-center gap-1"
            title="Switch Language (EN / KM)"
          >
            <span className={locale === 'en' ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}>EN</span>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className={locale === 'km' ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}>KM</span>
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
              onClick={closeMenus}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.home}
            </Link>
            <Link
              href="/#categories"
              onClick={closeMenus}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.categories}
            </Link>
            <Link
              href="/about"
              onClick={closeMenus}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.about}
            </Link>
            <Link
              href="/guides"
              onClick={closeMenus}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.guides}
            </Link>
          </div>

          {/* Mobile All Tools Accordion */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setMobileToolsExpanded(!mobileToolsExpanded)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-indigo-500" />
                <span>{locale === 'km' ? 'ឧបករណ៍ទាំងអស់' : 'All Tools'}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold font-mono">
                  {TOOLS.length}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  mobileToolsExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {mobileToolsExpanded && (
              <div className="mt-2 space-y-4 pl-2 pr-1 max-h-[55vh] overflow-y-auto">
                {/* Khmer Tools */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 px-2">
                    {CATEGORIES.khmer.name[locale]}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {khmerTools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.slug}`}
                        onClick={closeMenus}
                        className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ToolIcon name={tool.iconName} className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{tool.name[locale]}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Calculators */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 px-2">
                    {CATEGORIES.calculator.name[locale]}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {calcTools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.slug}`}
                        onClick={closeMenus}
                        className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ToolIcon name={tool.iconName} className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{tool.name[locale]}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Developer Tools */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 px-2">
                    {CATEGORIES.developer.name[locale]}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {devTools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.slug}`}
                        onClick={closeMenus}
                        className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ToolIcon name={tool.iconName} className="w-3.5 h-3.5 text-blue-500" />
                        <span>{tool.name[locale]}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Categories Quick Links */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              {t.categories}
            </div>
            <div className="grid grid-cols-1 gap-1">
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <Link
                  key={key}
                  href={`/category/${key}`}
                  onClick={closeMenus}
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
