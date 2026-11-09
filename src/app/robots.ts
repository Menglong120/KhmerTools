import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
