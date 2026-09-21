import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES, ToolCategory, getToolsByCategory } from '@/lib/tools-registry';
import { GUIDES } from '@/lib/guides-data';
import { SITE_URL } from '@/lib/site-config';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ToolCard } from '@/components/common/ToolCard';
import { ToolIcon } from '@/components/common/ToolIcon';
import { AdSlot } from '@/components/layout/AdSlot';
import { BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return (Object.keys(CATEGORIES) as ToolCategory[]).map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category as ToolCategory];

  if (!cat) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${cat.name.en} - Online Tools & Converters | KhmerTools 🇰🇭`,
    description: `${cat.description.en}. 100% free, fast, and private browser-based utilities for Cambodia and developers.`,
    alternates: {
      canonical: `/category/${category}`,
    },
    openGraph: {
      title: `${cat.name.en} | KhmerTools 🇰🇭`,
      description: cat.description.en,
      url: `${SITE_URL}/category/${category}`,
    },
  };
}

const CATEGORY_EDITORIAL: Record<
  ToolCategory,
  {
    aboutTitle: string;
    aboutText: string;
    aboutTextKm: string;
    highlights: string[];
    guideSlugs: string[];
  }
> = {
  khmer: {
    aboutTitle: 'About Khmer Language & Cultural Tools',
    aboutText:
      'Our Khmer Language & Cultural suite provides specialized utilities tailored to the unique typographic, mathematical, and historical traditions of the Khmer script. From converting numbers into official Chuon Nath dictionary words for legal contracts and bank checks to computing Buddhist Era calendar years and removing invisible Zero-Width Spaces (ZWSP), these tools bridge centuries-old Cambodian heritage with modern digital publishing standards.',
    aboutTextKm:
      'ឧបករណ៍ភាសាខ្មែរជួយសម្រួលដល់ការសរសេរលេខខ្មែរលើវិក្កយបត្រ គណនាកាលបរិច្ឆេទពុទ្ធសករាជ និងលុបចន្លោះមើលមិនឃើញ (ZWSP) ស្របតាមក្បួនវេយ្យាករណ៍ និងវចនានុក្រមខ្មែរ។',
    highlights: [
      'Official Chuon Nath Khmer dictionary spelling rules',
      'Accurate Buddhist Era (B.E.) calculations (+543/+544)',
      '100% in-browser processing with zero server tracking',
    ],
    guideSlugs: [
      'cambodian-riel-currency-and-number-system',
      'understanding-buddhist-era-calendar',
    ],
  },
  calculator: {
    aboutTitle: 'About Daily Life & Financial Calculators',
    aboutText:
      'Our Calculators collection delivers accurate, zero-latency financial and everyday mathematical computations directly inside your web browser. Calculate mortgage and loan amortization schedules with monthly breakdown tables, compute accurate biological age down to days and seconds, determine body mass index (BMI) against WHO standards, and calculate precise intervals between calendar dates.',
    aboutTextKm:
      'បណ្តុំម៉ាស៊ីនគិតលេខផ្ដល់នូវការគណនាកម្ចីប្រចាំខែ ការគណនាអាយុច្បាស់លាស់ ភាគរយ និងសន្ទស្សន៍ម៉ាសរាងកាយ (BMI) ដោយឥតគិតថ្លៃ និងមានសុវត្ថិភាព។',
    highlights: [
      'Standard loan amortization formulas with interest breakdown',
      'WHO-compliant BMI health classification metrics',
      'Instant responsive output with zero delay',
    ],
    guideSlugs: [
      'understanding-buddhist-era-calendar',
      'cambodian-riel-currency-and-number-system',
    ],
  },
  developer: {
    aboutTitle: 'About Client-Side Developer Utilities',
    aboutText:
      'Built specifically for software engineers, systems administrators, and cybersecurity professionals, our Developer Tools handle daily engineering tasks with strict zero-knowledge privacy. Parse, format, and minify JSON payloads, generate cryptographically secure UUID v4 tokens, encode and decode Base64 and URL parameters, and inspect JWT claims without ever leaking intellectual property or credentials across the network.',
    aboutTextKm:
      'ឧបករណ៍សម្រាប់អ្នកអភិវឌ្ឍន៍កម្មវិធី រួមមានការរៀបចំកូដ JSON, បង្កើត UUID, Decode JWT, និង Base64 ដោយដំណើរការផ្ទាល់ក្នុង Browser ធានាមិនបែកធ្លាយទិន្នន័យសម្ងាត់។',
    highlights: [
      'Strict IETF RFC 8259 (JSON) and RFC 4122 (UUID v4) compliance',
      'Native Web Cryptography API entropy generation',
      'Zero network egress—your code and tokens never touch a server',
    ],
    guideSlugs: [
      'client-side-privacy-guide-for-developer-tools',
      'json-data-formatting-and-validation-guide',
    ],
  },
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catKey = category as ToolCategory;
  const catInfo = CATEGORIES[catKey];

  if (!catInfo) {
    notFound();
  }

  const categoryTools = getToolsByCategory(catKey);
  const editorial = CATEGORY_EDITORIAL[catKey];
  const relatedGuides = editorial.guideSlugs
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${catInfo.name.en} | KhmerTools 🇰🇭`,
    description: catInfo.description.en,
    url: `${SITE_URL}/category/${category}`,
  };

  return (
    <div className="space-y-10 py-2 sm:py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: catInfo.name.en }]} />

      {/* Category Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-xs">
          <ToolIcon name={catInfo.icon} className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
            <ShieldCheck className="w-3 h-3" />
            <span>100% Client-Side & Free</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            {catInfo.name.en} <span className="text-indigo-600 dark:text-indigo-400 font-bold block sm:inline">({catInfo.name.km})</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {catInfo.description.en} • {catInfo.description.km}
          </p>
        </div>
      </div>

      <AdSlot slotId="category-banner" />

      {/* Tools Grid */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span>Available {catInfo.name.en} ({categoryTools.length})</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Rich Editorial & Overview Section */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
          {editorial.aboutTitle}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {editorial.aboutText}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/50">
          {editorial.aboutTextKm}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {editorial.highlights.map((hl, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              ✓ {hl}
            </div>
          ))}
        </div>
      </section>

      {/* Related Educational Guides */}
      {relatedGuides.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span>Related Documentation & Guides</span>
            </h2>
            <Link
              href="/guides"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View all guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400/80 dark:hover:border-indigo-500/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {guide.readTime}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {guide.title.en}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {guide.summary.en}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
