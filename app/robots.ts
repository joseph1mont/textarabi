import { MetadataRoute } from 'next';

// إلزامي عند استخدام output: export لإجبار المحرك على إخراج الملف كـ Static Text
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://textarabi.com/sitemap.xml',
  };
}