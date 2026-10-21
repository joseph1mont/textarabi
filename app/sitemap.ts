// file path: app/sitemap.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date("2026-09-01T00:00:00.000Z");
  const newArticleDate = new Date("2026-09-28T00:00:00.000Z");
  const latestBatchDate = new Date("2026-09-29T00:00:00.000Z");
  const pythonArticleDate = new Date("2026-10-05T00:00:00.000Z");
  const typingTestDate = new Date("2026-10-20T00:00:00.000Z");
  const baseUrl = "https://textarabi.com";

  const slugs = [
    "python-arabic-text-shaping-reportlab-matplotlib",
    "how-to-architect-dual-language-rtl-ltr-nextjs-apps",
    "fix-indesign-arabic-text",
    "react-native-flutter-tailwind-rtl-arabic-fix",
    "fix-photoshop-arabic-text",
    "disable-photoshop-unified-text-engine-hebrew-fix",
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
    "export-arabic-svg-illustrator-to-web",
    "fix-reversed-arabic-text-online-instant-copy-paste",
    "seo-developer-guide-character-counter-tashkeel-removal",
    "json-formatter-utf8-unicode-guide",
    "fix-adobe-apps-arabic-text-guide",
    "bilingual-ocr-image-to-text-2026-guide",
    "extract-text-from-images-securely-guide",
    "text-to-digital-ocr-guide",
    "canadian-bilingual-ocr-image-to-text-guide",
    "zero-dependency-svg-typography-generator",
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
      lastModified: pythonArticleDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/arabic-text-normalizer/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/arabic-keshida-generator/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/arabic-text-to-vector/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/ocr-scanner/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/typing-test/`,
      lastModified: typingTestDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },

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
      lastModified: pythonArticleDate,
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
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar/tools/arabic-keshida-generator/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar/tools/arabic-text-to-vector/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar/tools/ocr-scanner/`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar/tools/typing-test/`,
      lastModified: typingTestDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // English Blog Articles
    ...slugs.map((slug) => {
      let modDate = buildDate;
      if (slug === "python-arabic-text-shaping-reportlab-matplotlib") {
        modDate = pythonArticleDate;
      } else if (
        slug === "how-to-architect-dual-language-rtl-ltr-nextjs-apps"
      ) {
        modDate = newArticleDate;
      } else if (
        slug === "fix-indesign-arabic-text" ||
        slug === "react-native-flutter-tailwind-rtl-arabic-fix"
      ) {
        modDate = latestBatchDate;
      }
      return {
        url: `${baseUrl}/blog/${slug}/`,
        lastModified: modDate,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    }),

    // Arabic Blog Articles
    ...slugs.map((slug) => {
      let modDate = buildDate;
      if (slug === "python-arabic-text-shaping-reportlab-matplotlib") {
        modDate = pythonArticleDate;
      } else if (
        slug === "how-to-architect-dual-language-rtl-ltr-nextjs-apps"
      ) {
        modDate = newArticleDate;
      } else if (
        slug === "fix-indesign-arabic-text" ||
        slug === "react-native-flutter-tailwind-rtl-arabic-fix"
      ) {
        modDate = latestBatchDate;
      }
      return {
        url: `${baseUrl}/ar/blog/${slug}/`,
        lastModified: modDate,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    }),
  ];
}
