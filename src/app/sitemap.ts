import { MetadataRoute } from 'next';
import { TOOLS, CATEGORIES, ToolCategory } from '@/lib/tools-registry';
import { SITE_URL } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  // Use a stable release timestamp for search engine indexers
  const releaseDate = new Date('2026-09-14T00:00:00.000Z');

  const toolRoutes = TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: releaseDate,
    changeFrequency: 'weekly' as const,
    priority: tool.popular ? 0.9 : 0.8,
  }));

  const categoryRoutes = (Object.keys(CATEGORIES) as ToolCategory[]).map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: releaseDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: releaseDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes];
}
