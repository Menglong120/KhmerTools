import type { Metadata } from 'next';
import { HomePageClient } from '@/components/home/HomePageClient';
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/site-config';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
