import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | គោលការណ៍ឯកជនភាព',
  description: 'Learn how KhmerTools protects your privacy by processing data strictly inside your browser.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-2 sm:py-6">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Privacy Policy • គោលការណ៍ឯកជនភាព
        </h1>

        <p className="text-xs text-slate-400">
          Last updated: September 2026
        </p>

        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
          <div>
            <strong>Summary:</strong> KhmerTools is a 100% client-side application. We do not store, log, or transmit any numbers, texts, JSON payloads, passwords, or personal inputs you enter into our tools.
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
            We use your browser&apos;s local storage (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs">localStorage</code>) strictly to remember your user interface preferences, such as your chosen language (Khmer or English) and your preferred theme (Dark or Light mode).
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            3. Advertising & Cookies (Google AdSense)
          </h2>
          <p>
            To keep KhmerTools free and accessible for all users, we may display advertisements provided by Google AdSense. Google and third-party vendors use cookies to serve ads based on prior visits to this or other websites. You may opt out of personalized advertising by visiting Google Ad Settings.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            4. Analytics
          </h2>
          <p>
            We may monitor general aggregated website traffic statistics (such as page views and visitor countries) to understand which tools are most helpful and guide future development. No personally identifiable information (PII) is collected.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            5. Contact Us
          </h2>
          <p>
            If you have any questions or feedback regarding this Privacy Policy, please feel free to reach out via our contact page.
          </p>
        </div>
      </div>
    </div>
  );
}
