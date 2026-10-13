import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShieldCheck, Heart, Sparkles, Zap, Laptop, Target } from 'lucide-react';

import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Us | KhmerTools 🇰🇭',
  description: 'Learn about the mission, values, and client-side architecture of KhmerTools 🇰🇭.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | KhmerTools 🇰🇭',
    description: 'Learn about the mission, values, and client-side architecture of KhmerTools 🇰🇭.',
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-2 sm:py-6">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <span>KhmerTools Platform Overview</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          About KhmerTools
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>KhmerTools</strong> is an independent, free online utility and educational platform built to empower Cambodian professionals, students, and software engineers globally. The platform provides a curated suite of everyday mathematical calculators, linguistic tools, and developer utilities that execute entirely inside your modern web browser.
        </p>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Our core mission is two-fold: preserving and standardizing digital Khmer typographic traditions—such as formal Chuon Nath numeral-to-word conversions and Buddhist Era calendar calculations—while delivering high-performance, private developer utilities that never expose proprietary information to third-party servers.
        </p>

        <hr className="border-slate-100 dark:border-slate-800" />

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-500" />
            <span>Our Core Principles</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Simple & Clean</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Minimalist, distraction-free interfaces that produce immediate results with zero friction.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Instant Execution</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Zero network round-trips. Calculations compute instantly on your local device.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Real-World Utility</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Solving tangible workflows across banking, legal contracts, engineering, and education.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-slate-100 dark:border-slate-800" />

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Privacy by Architecture</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Unlike many online converters that transmit your private data (such as JSON payloads, tokens, documents, or personal figures) to third-party servers, KhmerTools is designed from the ground up as a <strong>100% frontend client-side web application</strong>. Your inputs are processed locally on your device and are never sent or stored on any server.
          </p>
        </div>

        <hr className="border-slate-100 dark:border-slate-800" />

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Laptop className="w-5 h-5 text-indigo-500" />
            <span>Technical Standards & Open Architecture</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            KhmerTools is engineered using modern Next.js 15, TypeScript, and standard Web Cryptography APIs. All linguistic utilities follow the Chuon Nath Khmer dictionary conventions, National Bank of Cambodia financial writing directives, and international standards including IETF RFC 8259 (JSON), RFC 4122 (UUID), and Unicode Standard 15.0 Khmer Block specifications.
          </p>
        </div>

        <hr className="border-slate-100 dark:border-slate-800" />

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Community & Editorial Standards</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Our educational guides and tool documentations are authored and verified by developers and native Khmer linguistic contributors. We ensure every guide is fact-checked against historical epigraphy, official regulatory publications, and authoritative computer science specifications.
          </p>
        </div>
      </div>
    </div>
  );
}
