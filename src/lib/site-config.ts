/**
 * Site configuration and canonical base URL helper.
 * Defaults to the live Vercel production URL: https://khmer-tools-self.vercel.app
 * Can be overridden via NEXT_PUBLIC_SITE_URL in production or when adding a custom domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://khmer-tools-self.vercel.app');

export const SITE_NAME = 'KhmerTools 🇰🇭';
export const SITE_TITLE = 'KhmerTools 🇰🇭 | Free, Fast & Private Online Tools for Cambodians & Developers';
export const SITE_DESCRIPTION =
  'Free online tools platform for Cambodia and developers: Khmer number converter, Buddhist Era date converter, Khmer text utilities, age calculator, percentage calculator, loan calculator, JSON formatter, UUID generator, Base64, and QR code generator.';

export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-9240559538885165';
