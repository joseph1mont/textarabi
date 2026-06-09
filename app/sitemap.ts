import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date('2026-06-01T00:37:17.168Z');
  const baseUrl = 'https://textarabi.com';

  return [
    // الصفحات العربية الأساسية
    { url: `${baseUrl}/ar/`, lastModified: buildDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/ar/blog/`, lastModified: buildDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/ar/contact/`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/ar/privacy-policy/`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/ar/terms/`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.3 },

    // قائمة المقالات (يجب أن تتطابق مع القائمة التي تعتبرها صحيحة)
    ...[
      'fix-photoshop-arabic-text', 'seo-strip-diacritics', 'instant-translate-localization',
      'tashkeel-keypad-guide', 'ui-font-preview-guide', 'fix-premiere-illustrator-arabic',
      'clean-arabic-database-sql', 'translate-ecommerce-dropshipping', 'tashkeel-academic-texts',
      'optimize-bounce-rate-rtl'
    ].map((slug) => ({
      url: `${baseUrl}/blog/${slug}/`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // النسخ العربية من المقالات
    ...[
      'fix-photoshop-arabic-text', 'seo-strip-diacritics', 'instant-translate-localization',
      'tashkeel-keypad-guide', 'ui-font-preview-guide', 'fix-premiere-illustrator-arabic',
      'clean-arabic-database-sql', 'translate-ecommerce-dropshipping', 'tashkeel-academic-texts',
      'optimize-bounce-rate-rtl'
    ].map((slug) => ({
      url: `${baseUrl}/ar/blog/${slug}/`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}