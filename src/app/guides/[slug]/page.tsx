import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES, getGuideBySlug } from '@/lib/guides-data';
import { getToolBySlug } from '@/lib/tools-registry';
import { SITE_URL } from '@/lib/site-config';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { AdSlot } from '@/components/layout/AdSlot';
import { ToolCard } from '@/components/common/ToolCard';
import { Clock, Calendar, User, ArrowLeft, Bookmark, Wrench } from 'lucide-react';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: `${guide.title.en} | KhmerTools 🇰🇭 Guides`,
    description: guide.summary.en,
    keywords: [...guide.tags, 'Cambodia', 'KhmerTools Guide', 'Tutorial'],
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title.en} | KhmerTools 🇰🇭`,
      description: guide.summary.en,
      url: `${SITE_URL}/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title.en} | KhmerTools 🇰🇭`,
      description: guide.summary.en,
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedTools = guide.relatedToolSlugs
    .map((s) => getToolBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: guide.title.en,
    alternativeHeadline: guide.title.km,
    description: guide.summary.en,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: {
      '@type': 'Organization',
      name: guide.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'KhmerTools',
      url: SITE_URL,
      logo: `${SITE_URL}/images.png`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/guides/${guide.slug}`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto space-y-10 py-2 sm:py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: 'Guides', href: '/guides' },
          { label: guide.title.en },
        ]}
      />

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all guides</span>
          </Link>

          <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium">
            {guide.category === 'khmer' ? '🇰🇭 Cultural Reference' : '💻 Technical Reference'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          {guide.title.en}
        </h1>
        <p className="text-base sm:text-lg text-indigo-600 dark:text-indigo-400 font-medium">
          {guide.title.km}
        </p>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span>{guide.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Updated {guide.updatedAt}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{guide.readTime}</span>
          </span>
        </div>
      </header>

      {/* Executive Summary */}
      <div className="p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">
          Executive Summary • សេចក្តីសង្ខេប
        </span>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          {guide.summary.en}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          {guide.summary.km}
        </p>
      </div>

      {/* Table of Contents */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-indigo-500" />
          <span>Table of Contents • មាតិកាអត្ថបទ</span>
        </h2>
        <ul className="space-y-1.5 text-sm">
          {guide.sections.map((section, idx) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline inline-flex items-center gap-2"
              >
                <span className="text-xs font-mono text-slate-400">{idx + 1}.</span>
                <span>{section.title.en}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Top AdSlot */}
      <AdSlot slotId="guide-top-banner" />

      {/* Main Article Body Sections */}
      <div className="space-y-10">
        {guide.sections.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4 scroll-mt-20"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-500 font-semibold">
                Section 0{idx + 1}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {section.title.en}
              </h2>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 block">
                {section.title.km}
              </span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-2">
              <div className="whitespace-pre-line">{section.content.en}</div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line italic">
                {section.content.km}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom AdSlot */}
      <AdSlot slotId="guide-bottom-banner" />

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <span className="text-xs text-slate-400 font-medium">Topics:</span>
        {guide.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Interactive Tools */}
      {relatedTools.length > 0 && (
        <section className="pt-6 space-y-4 border-t border-slate-200/80 dark:border-slate-800/80">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-indigo-500" />
            <span>Related Interactive Tools • ឧបករណ៍ដែលពាក់ព័ន្ធ</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
