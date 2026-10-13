import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy | KhmerTools 🇰🇭',
  description: 'Learn how KhmerTools protects your privacy with 100% in-browser processing and transparent cookie policies.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | KhmerTools 🇰🇭',
    description: 'Learn how KhmerTools protects your privacy with 100% in-browser processing and transparent cookie policies.',
    url: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-2 sm:py-6">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-xs text-slate-400">
          Last updated: October 2026
        </p>

        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
          <div>
            <strong>Summary:</strong> KhmerTools is a 100% client-side web application. We do not store, log, or transmit any numbers, texts, JSON payloads, passwords, or personal inputs you enter into our tools.
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            1. Client-Side Data Processing
          </h2>
          <p>
            Every tool on KhmerTools (including the Khmer Number Converter, Text Utilities, Calculators, JSON Formatter, UUID Generator, Base64 Converter, and JWT Decoder) operates using JavaScript executed solely within your web browser. No data entered into these tools is ever transmitted over the network to our servers.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            2. Local Storage
          </h2>
          <p>
            We use your browser&apos;s local storage (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs">localStorage</code>) strictly to remember your user interface preferences, such as your chosen language and your preferred theme (Dark or Light mode).
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            3. Third-Party Advertising & Cookies (Google AdSense)
          </h2>
          <p>
            Third-party vendors, including Google, use cookies to serve advertisements based on a user&apos;s prior visits to KhmerTools or other websites on the Internet.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to our visitors based on their visit to our site and/or other sites across the web.
          </p>
          <p>
            Users may opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 underline font-medium"
            >
              Google Ads Settings
            </a>
            . Alternatively, you can opt out of third-party vendors&apos; use of cookies for personalized advertising by visiting{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 underline font-medium"
            >
              www.aboutads.info
            </a>
            .
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            4. Analytics
          </h2>
          <p>
            We may monitor aggregated website traffic statistics (such as page views, browser types, and general geographic regions) through privacy-focused analytics to understand which tools are most helpful and improve site performance. No personally identifiable information (PII) is recorded.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            5. Contact Us
          </h2>
          <p>
            If you have questions, feedback, or concerns regarding this Privacy Policy, please contact our team through our contact page or by emailing{' '}
            <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">support@khmertools.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
