'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { TOOLS, ToolMeta, CATEGORIES } from '@/lib/tools-registry';
import { ToolIcon } from './ToolIcon';
import { Search, X, CornerDownLeft, Sparkles } from 'lucide-react';

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, locale, t } = useApp();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isSearchOpen]);

  // Filter tools based on query
  const filteredTools: ToolMeta[] = query.trim()
    ? TOOLS.filter((tool) => {
        const q = query.toLowerCase().trim();
        const matchNameEn = tool.name.en.toLowerCase().includes(q);
        const matchNameKm = tool.name.km.toLowerCase().includes(q);
        const matchDescEn = tool.description.en.toLowerCase().includes(q);
        const matchDescKm = tool.description.km.toLowerCase().includes(q);
        const matchTags = tool.tags.some((tag) => tag.toLowerCase().includes(q));
        const matchSlug = tool.slug.toLowerCase().includes(q);
        return matchNameEn || matchNameKm || matchDescEn || matchDescKm || matchTags || matchSlug;
      })
    : TOOLS.slice(0, 8); // Top default tools

  const handleSelect = (slug: string) => {
    setIsSearchOpen(false);
    router.push(`/tools/${slug}`);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredTools.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredTools.length) % Math.max(1, filteredTools.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredTools[selectedIndex]) {
        handleSelect(filteredTools[selectedIndex].slug);
      }
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={t.searchPrompt}
            className="w-full bg-transparent text-base sm:text-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="ml-2 text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-slate-100/50 dark:divide-slate-800/50">
          {filteredTools.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
              <p>{t.noResultsFound}</p>
            </div>
          ) : (
            <div>
              {!query && (
                <div className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{t.popularTools}</span>
                </div>
              )}
              {filteredTools.map((tool, idx) => {
                const isSelected = idx === selectedIndex;
                const cat = CATEGORIES[tool.category];
                return (
                  <div
                    key={tool.id}
                    onClick={() => handleSelect(tool.slug)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-100'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                        <ToolIcon name={tool.iconName} className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm truncate text-slate-900 dark:text-slate-100">
                            {tool.name[locale]}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                            {cat.name[locale]}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {tool.shortDescription[locale]}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 pl-2">
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                          <span>{t.viewTool}</span>
                          <CornerDownLeft className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Open</span>
            <span>ESC Close</span>
          </div>
          <span className="font-medium text-slate-400">KhmerTools 🇰🇭</span>
        </div>
      </div>
    </div>
  );
}
