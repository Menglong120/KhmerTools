import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES } from '@/lib/guides-data';
import { SITE_URL } from '@/lib/site-config';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Educational Guides & Reference Documentation | KhmerTools 🇰🇭',
  description:
    'Comprehensive guides and technical documentation on Cambodian Riel currency, Khmer numbers, Buddhist Era calendar calculations, and client-side developer security.',
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    title: 'Guides & Documentation | KhmerTools 🇰🇭',
    description:
      'Learn about Cambodian Riel currency rules, Khmer numerals, Buddhist Era conversion, and web development security.',
    url: `${SITE_URL}/guides`,
    type: 'website',
  },
};

export default function GuidesIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'KhmerTools Educational Guides',
    description:
      'In-depth technical and cultural guides for Cambodian utilities and web development.',
    url: `${SITE_URL}/guides`,
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-2 sm:py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: 'Guides & Documentation' }]} />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Educational Knowledge Base • មជ្ឈមណ្ឌលចំណេះដឹង</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Guides & Reference Documentation
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Deep dive into Cambodian numeral systems, currency conventions, Buddhist Era calendar calculations, and client-side developer privacy.
        </p>
      </div>

      {/* Grid of Guides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {GUIDES.map((guide) => (
          <article
            key={guide.slug}
            className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-indigo-400/60 dark:hover:border-indigo-500/60 hover:shadow-md transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                  {guide.category === 'khmer' ? '🇰🇭 Khmer Culture' : '💻 Developer'}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{guide.readTime}</span>
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <Link href={`/guides/${guide.slug}`}>
                  {guide.title.en}
                </Link>
              </h2>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 block font-normal -mt-1">
                {guide.title.km}
              </span>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {guide.summary.en}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3 h-3" />
                <span>{guide.updatedAt}</span>
              </span>
              <Link
                href={`/guides/${guide.slug}`}
                className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
