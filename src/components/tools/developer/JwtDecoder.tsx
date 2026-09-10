'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import { ShieldCheck, AlertCircle, CheckCircle2, Clock, Key } from 'lucide-react';

export function JwtDecoder() {
  const { locale, t } = useApp();
  const SAMPLE_JWT =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZpc2FsIFNva2giLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDk4NTYwMDAsImV4cCI6MjA4NzE3NzYwMH0.' +
    'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  const [token, setToken] = useState<string>(SAMPLE_JWT);

  // Decode JWT
  let header = null;
  let payload = null;
  let signature = '';
  let error: string | null = null;
  let isExpired = false;
  let expDate: Date | null = null;

  try {
    const parts = token.trim().split('.');
    if (parts.length !== 3) {
      throw new Error('A valid JWT must have 3 parts separated by dots (.)');
    }

    const base64UrlDecode = (str: string) => {
      let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      return decodeURIComponent(
        Array.prototype.map
          .call(atob(base64), (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
    };

    header = JSON.parse(base64UrlDecode(parts[0]));
    payload = JSON.parse(base64UrlDecode(parts[1]));
    signature = parts[2];

    if (payload.exp) {
      expDate = new Date(payload.exp * 1000);
      isExpired = expDate.getTime() < Date.now();
    }
  } catch (err: unknown) {
    error = (err as Error).message;
  }

  return (
    <div className="space-y-6">
      {/* Input */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {locale === 'km' ? 'បញ្ចូលកូដ JWT Token' : 'Encoded JWT Token'}
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setToken(SAMPLE_JWT)}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              {locale === 'km' ? 'គំរូ Sample JWT' : 'Load Sample'}
            </button>
            {token && (
              <button
                type="button"
                onClick={() => setToken('')}
                className="text-xs text-rose-500 font-semibold hover:underline"
              >
                {t.clear}
              </button>
            )}
          </div>
        </div>

        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          rows={4}
          placeholder="Paste eyJhbGciOi..."
          className="w-full p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-mono break-all focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        {/* Expiry Badge */}
        {payload && payload.exp && (
          <div className="mt-3 flex items-center gap-2 text-xs">
            {isExpired ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{locale === 'km' ? 'Token បានផុតកំណត់ហើយ' : 'Token Expired'}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{locale === 'km' ? 'Token មានសុពលភាព' : 'Token Valid'}</span>
              </span>
            )}
            <span className="text-slate-400">
              {locale === 'km' ? 'ផុតកំណត់នៅ៖ ' : 'Expires at: '}
              {expDate?.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {error ? (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs">
          ⚠ {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Header */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5" />
                <span>Header (Algorithm & Token Type)</span>
              </span>
              <CopyButton
                textToCopy={JSON.stringify(header, null, 2)}
                label={t.copy}
                copiedLabel={t.copied}
              />
            </div>
            <pre className="p-3 bg-slate-950 text-rose-300 rounded-xl text-xs font-mono overflow-x-auto min-h-36">
              {JSON.stringify(header, null, 2)}
            </pre>
          </div>

          {/* Payload */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Payload (Data & Claims)</span>
              </span>
              <CopyButton
                textToCopy={JSON.stringify(payload, null, 2)}
                label={t.copy}
                copiedLabel={t.copied}
              />
            </div>
            <pre className="p-3 bg-slate-950 text-indigo-300 rounded-xl text-xs font-mono overflow-x-auto min-h-36">
              {JSON.stringify(payload, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
