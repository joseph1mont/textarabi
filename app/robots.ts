// app/robots.ts
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
        '/ar/blog/',
        '/contact/',
        '/ar/contact/',
        '/privacy-policy/',
        '/ar/privacy-policy/',
        '/terms/',
        '/ar/terms/'
      ],
    },
    sitemap: 'https://textarabi.com/sitemap.xml',
  };
}