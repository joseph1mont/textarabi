// app/ar/sitemap.ts
import { MetadataRoute } from 'next';

// إلزامي عند استخدام output: export لإجبار المحرك على إخراج الملف كـ Static XML مسبق البناء
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // تم تعديل الرابط الأساسي ليشمل الشرطة المائلة النهائية لتطابق إعدادات next.config.ts
  const baseUrl = 'https://textarabi.com/ar/';
  
  // تثبيت التاريخ بصيغة ISO الثابتة لضمان استقرار ملف الـ XML وتجنب التغيير العشوائي عند كل بناء للموقع الثابت
  const buildDate = new Date('2026-06-01T00:37:17.168Z');

  return [
    {
      url: baseUrl, // تنتج: https://textarabi.com/ar/
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}blog/`, // تنتج: https://textarabi.com/ar/blog/
      lastModified: buildDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // الأدوات والصفحات الأساسية القانونية والإدارية
    {
      url: `${baseUrl}contact/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}privacy-policy/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}terms/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // أدلة التصميم والجرافيك (موجّهة داخل مسار المدونة الهيكلي)
    {
      url: `${baseUrl}blog/fix-arabic-photoshop/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/fix-illustrator-arabic/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/premiere-arabic-fonts/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/best-arabic-fonts/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // أدلة السيو وصناعة المحتوى
    {
      url: `${baseUrl}blog/word-character-counter-guide/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/seo-article-length-guide/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/meta-description-guide/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/long-tail-keywords-seo/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // أدلة معالجة البيانات والبرمجة النصية
    {
      url: `${baseUrl}blog/strip-arabic-diacritics/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/clean-special-characters/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/understand-utf8-arabic/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}blog/regex-arabic-processing/`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}