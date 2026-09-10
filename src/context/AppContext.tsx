'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, UI_STRINGS } from '@/lib/translations';

type Theme = 'light' | 'dark' | 'system';

interface AppContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: typeof UI_STRINGS['en'];
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('km');
  const [theme, setThemeState] = useState<Theme>('light');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved locale
    const savedLocale = localStorage.getItem('khmertools_locale') as Locale | null;
    if (savedLocale === 'en' || savedLocale === 'km') {
      setLocaleState(savedLocale);
    } else {
      // Default to Khmer
      setLocaleState('km');
    }

    // Read saved theme
    const savedTheme = localStorage.getItem('khmertools_theme') as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setThemeState(initialTheme);
      applyTheme(initialTheme);
    }

    setMounted(true);
  }, []);

  const applyTheme = (th: Theme) => {
    const root = document.documentElement;
    if (th === 'dark') {
      root.classList.add('dark');
    } else if (th === 'light') {
      root.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('khmertools_locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    const next = locale === 'km' ? 'en' : 'km';
    setLocale(next);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('khmertools_theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const t = UI_STRINGS[locale];

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
        theme,
        setTheme,
        toggleTheme,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
