// app/sitemap.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date("2026-06-01T00:37:17.168Z");
  const baseUrl = "https://textarabi.com";

  // Complete list of slugs mapped directly from articles.ts imports
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
  ];

  return [
    // Core English Platform Pages
    {
      url: `${baseUrl}/`,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    // Core Arabic Platform Pages
    {
      url: `${baseUrl}/ar/`,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar/about/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ar/blog/`,
      lastModified: buildDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ar/contact/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ar/privacy-policy/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ar/terms/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },

    // English Blog Articles (17 items matching articles.ts)
    ...slugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Arabic Blog Articles (17 items matching articles.ts)
    ...slugs.map((slug) => ({
      url: `${baseUrl}/ar/blog/${slug}/`,
      lastModified: buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
