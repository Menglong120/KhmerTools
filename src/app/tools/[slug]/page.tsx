import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS, getToolBySlug, CATEGORIES, ToolMeta } from '@/lib/tools-registry';
import { SITE_URL } from '@/lib/site-config';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ToolRenderer } from '@/components/tools/ToolRenderer';
import { ToolCard } from '@/components/common/ToolCard';
import { FAQSection } from '@/components/common/FAQSection';
import { AdSlot } from '@/components/layout/AdSlot';
import { ToolIcon } from '@/components/common/ToolIcon';
import { ShieldCheck, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  const title = `${tool.name.en} | ${tool.name.km}`;
  const description = `${tool.description.en} ${tool.description.km}`;

  return {
    title,
    description,
    keywords: [...tool.tags, tool.name.en, tool.name.km, 'KhmerTools', 'online utility'],
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name.en} 🇰🇭 | KhmerTools`,
      description: tool.shortDescription.en,
      url: `${SITE_URL}/tools/${tool.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name.en} 🇰🇭 | KhmerTools`,
      description: tool.shortDescription.en,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const categoryInfo = CATEGORIES[tool.category];
  const relatedTools = TOOLS.filter(
    (t) => t.category === tool.category && t.slug !== tool.slug
  ).slice(0, 3);

  // Schema.org Structured Data with Rich Snippets (WebApplication, BreadcrumbList, FAQPage)
  const schemaGraph: any[] = [
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}/tools/${tool.slug}#webapp`,
      name: tool.name.en,
      alternateName: tool.name.km,
      description: tool.description.en,
      url: `${SITE_URL}/tools/${tool.slug}`,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/tools/${tool.slug}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: categoryInfo.name.en,
          item: `${SITE_URL}/category/${tool.category}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: tool.name.en,
          item: `${SITE_URL}/tools/${tool.slug}`,
        },
      ],
    },
  ];

  if (tool.faqs && tool.faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/tools/${tool.slug}#faq`,
      mainEntity: tool.faqs.map((faq) => ({
        '@type': 'Question',
        name: `${faq.question.en} (${faq.question.km})`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${faq.answer.en} ${faq.answer.km}`,
        },
      })),
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return (
    <article className="max-w-4xl mx-auto space-y-8 py-2 sm:py-6">
      {/* JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: categoryInfo.name.en, href: `/category/${tool.category}` },
          { label: tool.name.en },
        ]}
      />

      {/* Tool Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              {categoryInfo.name.en} • {categoryInfo.name.km}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>100% Client-Side</span>
            </span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Tools</span>
          </Link>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <ToolIcon name={tool.iconName} className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {tool.name.en} <span className="text-indigo-600 dark:text-indigo-400 font-bold block sm:inline">({tool.name.km})</span>
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {tool.description.en}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {tool.description.km}
            </p>
          </div>
        </div>
      </div>

      {/* Top AdSlot */}
      <AdSlot slotId="tool-top-banner" />

      {/* Main Interactive Tool UI */}
      <div className="mt-6">
        <ToolRenderer slug={tool.slug} />
      </div>

      {/* Bottom AdSlot */}
      <AdSlot slotId="tool-bottom-banner" />

      {/* How to Use Section */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
            How to Use • របៀបប្រើប្រាស់
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {/* English Instructions */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              English Guide
            </h3>
            <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-decimal list-inside">
              {tool.instructions.en.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Khmer Instructions */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              ការណែនាំជាភាសាខ្មែរ
            </h3>
            <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-decimal list-inside">
              {tool.instructions.km.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <FAQSection faqs={tool.faqs} />

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="pt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>Related {categoryInfo.name.en}</span>
            </h2>
            <Link
              href={`/category/${tool.category}`}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTools.map((relTool) => (
              <ToolCard key={relTool.id} tool={relTool} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
