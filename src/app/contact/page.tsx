'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ContactPage() {
  const { locale, t } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', toolRequest: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-2 sm:py-6">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Contact & Feedback • ទំនាក់ទំនង
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {locale === 'km'
              ? 'មានសំណួរ យោបល់កែលម្អ ឬចង់ស្នើសុំឧបករណ៍ថ្មី? សូមទាក់ទងមកយើងខ្ញុំ។'
              : 'Have feedback, questions, or want to suggest a new tool? We would love to hear from you.'}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {locale === 'km' ? 'សូមអរគុណសម្រាប់សាររបស់អ្នក!' : 'Thank You for Your Feedback!'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {locale === 'km'
                ? 'យើងខ្ញុំបានទទួលសាររបស់អ្នករួចរាល់ហើយ និងកំពុងបន្តកែលម្អ KhmerTools ឱ្យកាន់តែប្រសើរឡើង។'
                : 'Your message has been received. Thank you for helping make KhmerTools better for everyone.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {locale === 'km' ? 'ឈ្មោះរបស់អ្នក' : 'Your Name'}
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Sokha"
                  className="w-full text-sm px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {locale === 'km' ? 'អ៊ីមែល' : 'Your Email'}
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sokha@example.com"
                  className="w-full text-sm px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                {locale === 'km' ? 'ឧបករណ៍ដែលចង់ស្នើសុំ (បើមាន)' : 'Tool Suggestion (Optional)'}
              </label>
              <input
                type="text"
                value={formData.toolRequest}
                onChange={(e) => setFormData({ ...formData, toolRequest: e.target.value })}
                placeholder="e.g. Khmer Spell Checker, Currency Exchange Converter"
                className="w-full text-sm px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                {locale === 'km' ? 'សាររបស់អ្នក' : 'Your Message'}
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you think..."
                className="w-full text-sm p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>{locale === 'km' ? 'ផ្ញើសារ' : 'Send Message'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
