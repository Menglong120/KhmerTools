import type { Metadata } from 'next';
import { Kantumruy_Pro, Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchModal } from '@/components/common/SearchModal';

const kantumruy = Kantumruy_Pro({
  variable: '--font-kantumruy',
  subsets: ['khmer', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khmertools.com'),
  title: {
    default: 'KhmerTools 🇰🇭 | Free, Fast & Private Online Tools for Cambodians & Developers',
    template: '%s | KhmerTools 🇰🇭',
  },
  description:
    'Free online tools platform for Cambodia and developers: Khmer number converter, Buddhist Era date converter, Khmer text utilities, age calculator, percentage calculator, loan calculator, JSON formatter, UUID generator, Base64, and JWT decoder.',
  keywords: [
    'Khmer tools',
    'Khmer number converter',
    'ឧបករណ៍ខ្មែរ',
    'បម្លែងលេខខ្មែរ',
    'ម៉ាស៊ីនគិតលេខ',
    'អាយុ',
    'JSON formatter',
    'UUID generator',
    'Buddhist Era',
    'Cambodia tools',
    'Riel converter',
  ],
  authors: [{ name: 'KhmerTools Community' }],
  creator: 'KhmerTools',
  openGraph: {
    type: 'website',
    locale: 'km_KH',
    alternateLocale: 'en_US',
    url: 'https://khmertools.com',
    title: 'KhmerTools 🇰🇭 | Free Online Utilities',
    description:
      'Fast, simple, and 100% client-side online tools for Cambodian users and developers worldwide.',
    siteName: 'KhmerTools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KhmerTools 🇰🇭 | Free Online Utilities',
    description:
      'Fast, simple, and 100% client-side online tools for Cambodian users and developers worldwide.',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html
      lang="km"
      className={`${kantumruy.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        {adClientId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <AppProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
          <SearchModal />
        </AppProvider>
      </body>
    </html>
  );
}
