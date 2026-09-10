import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES, ToolCategory, getToolsByCategory, TOOLS } from '@/lib/tools-registry';
import { SITE_URL } from '@/lib/site-config';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ToolCard } from '@/components/common/ToolCard';
import { ToolIcon } from '@/components/common/ToolIcon';
import { AdSlot } from '@/components/layout/AdSlot';

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
    title: `${cat.name.en} | ${cat.name.km}`,
    description: `${cat.description.en} ${cat.description.km}`,
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catKey = category as ToolCategory;
  const catInfo = CATEGORIES[catKey];

  if (!catInfo) {
    notFound();
  }

  const categoryTools = getToolsByCategory(catKey);

  return (
    <div className="space-y-8 py-2 sm:py-6">
      <Breadcrumb items={[{ label: catInfo.name.en }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-xs">
          <ToolIcon name={catInfo.icon} className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            {catInfo.name.en} <span className="text-indigo-600 dark:text-indigo-400 font-bold block sm:inline">({catInfo.name.km})</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {catInfo.description.en} • {catInfo.description.km}
          </p>
        </div>
      </div>

      <AdSlot slotId="category-banner" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
