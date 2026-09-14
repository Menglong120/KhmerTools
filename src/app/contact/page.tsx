import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact & Feedback | ទំនាក់ទំនង',
  description: 'Have feedback, questions, or want to suggest a new tool for KhmerTools? We would love to hear from you.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Feedback | ទំនាក់ទំនង - KhmerTools 🇰🇭',
    description: 'Have feedback, questions, or want to suggest a new tool for KhmerTools? We would love to hear from you.',
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
