import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/ar/',
        '/blog/',
        '/ar/blog/'
      ],
      disallow: [
        '/privacy-policy',
        '/terms',
        '/contact',
        '/ar/privacy-policy',
        '/ar/terms',
        '/ar/contact'
      ],
    },
    sitemap: 'https://textarabi.com/sitemap.xml',
  };
}