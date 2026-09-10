'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}

export function CopyButton({
  textToCopy,
  label = 'Copy',
  copiedLabel = 'Copied!',
  className = '',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!textToCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all shadow-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
        copied
          ? 'bg-emerald-600 text-white dark:bg-emerald-500'
          : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60'
      } ${className}`}
      title={label}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}
