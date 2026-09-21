import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TOOLS, getToolBySlug, CATEGORIES } from '@/lib/tools-registry';
import { SITE_URL } from '@/lib/site-config';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ToolRenderer } from '@/components/tools/ToolRenderer';
import { ToolCard } from '@/components/common/ToolCard';
import { FAQSection } from '@/components/common/FAQSection';
import { AdSlot } from '@/components/layout/AdSlot';
import { ToolIcon } from '@/components/common/ToolIcon';
import { getToolEditorial } from '@/lib/tool-details';
import { getGuideBySlug } from '@/lib/guides-data';
import {
  ShieldCheck,
  BookOpen,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Briefcase,
  Layers,
  ArrowRight,
} from 'lucide-react';

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
      title: `${tool.name.en} | KhmerTools 🇰🇭`,
      description: tool.shortDescription.en,
      url: `${SITE_URL}/tools/${tool.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name.en} | KhmerTools 🇰🇭`,
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
  const editorial = getToolEditorial(tool.slug, tool.name, tool.category);
  const relatedGuide = editorial.relatedGuideSlug
    ? getGuideBySlug(editorial.relatedGuideSlug)
    : undefined;

  const combinedFaqs = [...(tool.faqs || []), ...(editorial.extraFaqs || [])];

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

  if (combinedFaqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/tools/${tool.slug}#faq`,
      mainEntity: combinedFaqs.map((faq) => ({
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
    <article className="max-w-4xl mx-auto space-y-10 py-2 sm:py-6">
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

      {/* Deep Dive & How It Works (High Value Editorial Content) */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              About & How It Works
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ព័ត៌មានលម្អិត និងដំណើរការនៃឧបករណ៍
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>{editorial.overview.en}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
            {editorial.overview.km}
          </p>

          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 pt-2">
            Algorithmic Logic & Calculation
          </h3>
          <p>{editorial.howItWorks.en}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
            {editorial.howItWorks.km}
          </p>
        </div>

        {/* Technical Standards Box */}
        <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-xs text-indigo-900 dark:text-indigo-300 space-y-1">
          <span className="font-bold uppercase tracking-wider text-[10px] text-indigo-600 dark:text-indigo-400 block">
            Technical Standards & Compliance
          </span>
          <p>{editorial.standards.en}</p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span>Key Features & Capabilities • លក្ខណៈពិសេស</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {editorial.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs space-y-1.5"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {feat.title.en} <span className="text-xs text-indigo-600 dark:text-indigo-400 block font-normal">{feat.title.km}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {feat.desc.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-500" />
          <span>Practical Real-World Use Cases • ករណីប្រើប្រាស់ជាក់ស្ដែង</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {editorial.useCases.map((uc, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs space-y-1.5"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {uc.title.en}
              </h3>
              <span className="text-[11px] text-indigo-600 dark:text-indigo-400 block">
                {uc.title.km}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {uc.desc.en}
              </p>
            </div>
          ))}
        </div>
      </section>

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

      {/* Related Educational Guide Banner */}
      {relatedGuide && (
        <div className="p-5 sm:p-6 rounded-2xl bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200/60 dark:border-indigo-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              In-Depth Documentation • អត្ថបទចំណេះដឹង
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {relatedGuide.title.en}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
              {relatedGuide.summary.en}
            </p>
          </div>
          <Link
            href={`/guides/${relatedGuide.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0 transition-colors shadow-xs"
          >
            <span>Read Full Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Extended FAQs Accordion */}
      <FAQSection faqs={combinedFaqs} />

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="pt-4 space-y-4">
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
