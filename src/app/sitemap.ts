import { MetadataRoute } from 'next';
import { projectsData } from '@/lib/projects-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://jlc-fire.vercel.app';

  const staticRoutes = [
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

  const staticSitemap: MetadataRoute.Sitemap = staticRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8
  }));

  const dynamicProjectsSitemap: MetadataRoute.Sitemap = projectsData.map(
    project => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.64
    })
  );

  return [...staticSitemap, ...dynamicProjectsSitemap];
}
