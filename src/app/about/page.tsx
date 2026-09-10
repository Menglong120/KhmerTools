import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ShieldCheck, Heart, Sparkles, Zap, Laptop, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | អំពីយើង',
  description: 'Learn about the mission, values, and client-side architecture of KhmerTools 🇰🇭.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-2 sm:py-6">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <span>🇰🇭 KhmerTools Project</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          About KhmerTools • អំពីយើង
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>KhmerTools</strong> is a free, fast, and user-friendly online tools platform designed for Cambodian users and the global developer community. The website provides a collection of useful everyday, Khmer-language, mathematical, text, and developer tools that can be accessed directly from a web browser without requiring an account or backend server.
        </p>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>KhmerTools</strong> គឺជាគេហទំព័រឧបករណ៍អនឡាញឥតគិតថ្លៃ រហ័ស និងងាយស្រួលប្រើប្រាស់ ដែលត្រូវបានបង្កើតឡើងសម្រាប់ប្រជាជនកម្ពុជា សិស្ស និស្សិត និងអ្នកអភិវឌ្ឍន៍ទូទាំងពិភពលោក។ ឧបករណ៍ទាំងអស់ដំណើរការផ្ទាល់ក្នុង Browser ដោយមិនទាមទារការចុះឈ្មោះ ឬម៉ាស៊ីនមេឡើយ។
        </p>

        <hr className="border-slate-100 dark:border-slate-800" />

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-500" />
            <span>Our Principles • គោលការណ៍ចម្បងរបស់យើង</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Simple • សាមញ្ញ</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Intuitive interfaces with minimum steps to achieve your desired results.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Fast • រហ័ស</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Real-time, zero-latency computations that happen right in your web browser.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Useful • មានប្រយោជន៍</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Solving real daily problems in Khmer text processing, finance, and software engineering.
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
      </div>
    </div>
  );
}
