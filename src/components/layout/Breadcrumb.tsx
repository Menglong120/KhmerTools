'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useApp();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500 dark:text-slate-400 py-3">
      <ol className="flex items-center space-x-1.5 flex-wrap">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.home}</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
