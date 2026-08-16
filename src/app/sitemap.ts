import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app';

  const routes = [
    '',
    '/about',
    '/certifications',
    '/contact',
    '/projects',
    '/services/access-control',
    '/services/aspiration-systems',
    '/services/bms',
    '/services/fire-detection',
    '/services/fire-piping',
    '/services/fire-suppression',
    '/services/fusion-fiber',
    '/services/maintenance',
    '/services/software-graphic'
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8
  }));
}
