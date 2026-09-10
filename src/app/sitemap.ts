import type { MetadataRoute } from 'next';

// Assumes the site will deploy to the hospital's own domain (confirmed via its email address).
// Update if Sonny deploys elsewhere.
const BASE_URL = 'https://tanauanmedicalcenter.com';

const ROUTES = [
  '',
  '/about-us',
  '/services',
  '/locations',
  '/find-a-doctor',
  '/careers',
  '/contact-us',
  '/health-library',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
