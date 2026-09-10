'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { TOOLS, CATEGORIES, ToolCategory } from '@/lib/tools-registry';
import { SITE_URL } from '@/lib/site-config';
import { ToolCard } from '@/components/common/ToolCard';
import { ToolIcon } from '@/components/common/ToolIcon';
import { AdSlot } from '@/components/layout/AdSlot';
import {
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe2,
  Flame,
  ArrowRight,
} from 'lucide-react';

export default function HomePage() {
  const { locale, setIsSearchOpen, t } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<'all' | ToolCategory>('all');

  const popularTools = TOOLS.filter((tool) => tool.popular);

  const filteredTools =
    selectedFilter === 'all'
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === selectedFilter);

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'KhmerTools',
        alternateName: ['KhmerTools 🇰🇭', 'ឧបករណ៍ខ្មែរ'],
        description:
          'Free, fast, and private client-side online tools for Cambodia and developers worldwide.',
        inLanguage: ['km-KH', 'en-US'],
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'KhmerTools',
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
      },
    ],
  };

  return (
    <div className="space-y-16 py-4 sm:py-8">
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto space-y-6 pt-6 sm:pt-12">
        {/* Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold shadow-xs">
          <span className="text-base">🇰🇭</span>
          <span>{locale === 'km' ? 'គេហទំព័រឧបករណ៍អនឡាញឥតគិតថ្លៃ' : 'Free & Open Online Utilities Platform'}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {locale === 'km' ? (
            <>
              ឧបករណ៍រហ័ស សាមញ្ញ និងមានប្រយោជន៍ <br />
              <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
                សម្រាប់កម្ពុជា & អ្នកអភិវឌ្ឍន៍
              </span>
            </>
          ) : (
            <>
              Simple, Fast & Useful Online Tools for <br />
              <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-amber-500 bg-clip-text text-transparent">
                Cambodia & Global Developers
              </span>
            </>
          )}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {t.tagline}. {t.clientSideDescription}
        </p>

        {/* Big Search Trigger */}
        <div className="pt-2 max-w-xl mx-auto">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
              <Search className="w-5 h-5 text-indigo-500" />
              <span className="text-sm sm:text-base">{t.searchPlaceholder}</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
              Ctrl + K
            </kbd>
          </button>
        </div>

        {/* Quick Tag Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs pt-2">
          <span className="text-slate-400 font-medium">
            {locale === 'km' ? 'ពេញនិយម៖' : 'Popular:'}
          </span>
          {[
            { label: locale === 'km' ? 'បម្លែងលេខខ្មែរ' : 'Khmer Numbers', slug: 'khmer-number-converter' },
            { label: locale === 'km' ? 'គិតអាយុ' : 'Age Calculator', slug: 'age-calculator' },
            { label: locale === 'km' ? 'គិតកម្ចី' : 'Loan Calculator', slug: 'loan-calculator' },
            { label: 'JSON Formatter', slug: 'json-formatter' },
            { label: locale === 'km' ? 'កូដពណ៌ (Color)' : 'Color Converter', slug: 'color-converter' },
            { label: 'QR Code Generator', slug: 'qr-code-generator' },
          ].map((chip) => (
            <Link
              key={chip.slug}
              href={`/tools/${chip.slug}`}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Spotlight: Color Converter & QR Code Generator */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* QR Code Generator Spotlight Card */}
        <Link
          href="/tools/qr-code-generator"
          className="group rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>{locale === 'km' ? 'ឧបករណ៍ពេញនិយម' : 'Popular Utility'}</span>
              </span>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                {locale === 'km' ? 'បើកប្រើប្រាស់ →' : 'Open Tool →'}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-indigo-600 dark:text-indigo-400">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {locale === 'km' ? 'ឧបករណ៍បង្កើត QR Code' : 'QR Code Generator'}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'km'
                    ? 'បង្កើត QR Code សម្រាប់គេហទំព័រ អត្ថបទ Wi-Fi លេខទូរស័ព្ទ និងកាតទំនាក់ទំនង vCard ជាមួយការទាញយកជារូបភាព PNG កម្រិតច្បាស់។'
                    : 'Create custom QR codes for websites, Wi-Fi networks, plain text, and contact cards with instant high-res PNG download.'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono text-[11px]">PNG Download • Wi-Fi • Link • vCard</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {locale === 'km' ? 'ឥតគិតថ្លៃ' : 'Free & Instant'}
            </span>
          </div>
        </Link>

        {/* Color Converter Spotlight Card */}
        <Link
          href="/tools/color-converter"
          className="group rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>{locale === 'km' ? 'ឧបករណ៍ពេញនិយម' : 'Popular Utility'}</span>
              </span>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                {locale === 'km' ? 'បើកប្រើប្រាស់ →' : 'Open Tool →'}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-indigo-600 dark:text-indigo-400">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {locale === 'km' ? 'ឧបករណ៍បម្លែងកូដពណ៌ (Color Converter)' : 'Color Converter & Generator'}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'km'
                    ? 'បម្លែងកូដពណ៌ HEX, RGB, HSL, CMYK ពិនិត្យកម្រិត WCAG Contrast សម្រាប់រចនាគេហទំព័រ និងបង្កើតស្រមោលពណ៌ស្អាតៗ។'
                    : 'Convert HEX, RGB, HSL, CMYK in real-time, inspect WCAG text contrast accessibility ratios, and generate monochromatic color shades.'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-mono text-[11px]">HEX • RGB • HSL • CMYK • WCAG</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {locale === 'km' ? 'កូដពណ៌គ្រប់ប្រភេទ' : 'All Formats'}
            </span>
          </div>
        </Link>
      </section>

      {/* Top Ad slot */}
      <AdSlot slotId="home-top-banner" />

      {/* Categories Grid */}
      <section id="categories" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t.categories}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {locale === 'km' ? 'ជ្រើសរើសតាមផ្នែកដែលអ្នកត្រូវការ' : 'Browse tools organized by category'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(Object.entries(CATEGORIES) as [ToolCategory, (typeof CATEGORIES)['khmer']][]).map(
            ([key, cat]) => {
              const toolCount = TOOLS.filter((t) => t.category === key).length;
              return (
                <Link
                  key={key}
                  href={`/category/${key}`}
                  className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ToolIcon name={cat.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cat.name[locale]}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {cat.description[locale]}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <span>
                      {toolCount} {locale === 'km' ? 'ឧបករណ៍' : 'tools'}
                    </span>
                    <span>→</span>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </section>

      {/* Popular Tools Section */}
      <section id="popular" className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t.popularTools}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {locale === 'km' ? 'ឧបករណ៍ដែលត្រូវបានប្រើប្រាស់ច្រើនបំផុត' : 'Most frequently used utilities by the community'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularTools.slice(0, 6).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* All Tools with Filter Tabs */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {t.allTools}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {locale === 'km' ? 'រុករកឧបករណ៍ទាំងអស់' : 'Explore every utility available on KhmerTools'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {t.allTools} ({TOOLS.length})
            </button>
            {(['khmer', 'calculator', 'developer'] as ToolCategory[]).map((catKey) => (
              <button
                key={catKey}
                type="button"
                onClick={() => setSelectedFilter(catKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === catKey
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {CATEGORIES[catKey].name[locale]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Bottom Ad slot */}
      <AdSlot slotId="home-bottom-banner" />

      {/* Why KhmerTools Value Proposition */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {locale === 'km' ? 'ហេតុអ្វីត្រូវជ្រើសរើស KhmerTools?' : 'Why Choose KhmerTools?'}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {locale === 'km'
              ? 'រចនាឡើងដើម្បីផ្ដល់នូវបទពិសោធន៍រហ័ស មានសុវត្ថិភាពខ្ពស់ និងឥតគិតថ្លៃជានិច្ច។'
              : 'Engineered for speed, privacy, and simplicity with zero backend tracking.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {locale === 'km' ? 'សុវត្ថិភាពឯកជនភាព ១០០%' : '100% Client-Side Privacy'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {locale === 'km'
                ? 'ទិន្នន័យទាំងអស់របស់អ្នក ត្រូវបានគណនា និងដំណើរការផ្ទាល់ក្នុង Browser ដោយមិនបញ្ជូនចេញក្រៅឡើយ។'
                : 'All calculations and text processing happen securely inside your browser. No server storage or API leaks.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {locale === 'km' ? 'ល្បឿនលឿនទាន់ចិត្ត' : 'Blazing Fast Performance'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {locale === 'km'
                ? 'គ្មានការរង់ចាំ Server ឆ្លើយតប។ ទទួលលទ្ធផលភ្លាមៗនៅពេលអ្នកវាយបញ្ចូល។'
                : 'Zero latency. Built on Next.js with optimized client code for instantaneous response times.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              {locale === 'km' ? 'ឥតគិតថ្លៃ & គ្មានគណនី' : 'No Account & Free Forever'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {locale === 'km'
                ? 'ចូលប្រើប្រាស់បានភ្លាមៗ ដោយមិនបាច់ចុះឈ្មោះ ឬបង់ប្រាក់ឡើយ។'
                : 'Free to use anytime, anywhere on phone, tablet, or desktop with no paywalls or mandatory logins.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
