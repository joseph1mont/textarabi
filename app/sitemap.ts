// app/sitemap.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date("2026-08-03T00:00:00.000Z"); // Updated to current date
  const baseUrl = "https://textarabi.com";

  const slugs = [
    "fix-photoshop-arabic-text",
    "seo-strip-diacritics",
    "instant-translate-localization",
    "tashkeel-keypad-guide",
    "ui-font-preview-guide",
    "fix-premiere-illustrator-arabic",
    "clean-arabic-database-sql",
    "translate-ecommerce-dropshipping",
    "tashkeel-academic-texts",
    "optimize-bounce-rate-rtl",
    "comprehensive-tashkeel-guide",
    "fix-disconnected-letters",
    "forming-arabic-diacritics-corporate-letters",
    "accurate-tashkeel-ebooks-novels",
    "forming-arabic-text-saudi-vision-2030",
    "how-to-use-arabic-nlp-tools-academic-research",
    "optimizing-arabic-content-seo-diacritization",
    "wordpress-arabic-rtl-fix",
    "handling-arabic-reshaping-in-web-canvas-elements",
    "fix-arabic-text-photoshop-figma-python",
    "saudi-official-letters-protocols-guide",
    "export-arabic-svg-illustrator-to-web", // Added export arabic svg illustrator to web guide
  ];

  return [
    // Core Platform Pages
    {
      url: `${baseUrl}/`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/arabic-text-normalizer/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    }, // New tool page

    // Core Arabic Platform Pages
    {
      url: `${baseUrl}/ar/`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar/about/`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ar/blog/`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ar/contact/`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ar/privacy-policy/`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ar/terms/`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ar/tools/arabic-text-normalizer/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    }, // New Arabic tool page

    // English Blog Articles
    ...slugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Arabic Blog Articles
    ...slugs.map((slug) => ({
      url: `${baseUrl}/ar/blog/${slug}/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
