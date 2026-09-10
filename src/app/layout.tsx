import type { Metadata } from 'next';
import { Kantumruy_Pro, Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchModal } from '@/components/common/SearchModal';
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/site-config';

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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-Y3XZNNNZX9';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | KhmerTools 🇰🇭',
  },
  description: SITE_DESCRIPTION,
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
    'QR code generator',
    'Color converter',
  ],
  authors: [{ name: 'KhmerTools Community' }],
  creator: 'KhmerTools',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'km_KH',
    alternateLocale: 'en_US',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    google: '5f029db7ec44286a',
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
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
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
