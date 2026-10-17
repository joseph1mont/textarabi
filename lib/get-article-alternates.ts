// file path: lib/get-article-alternates.ts
import { Article } from "@/data/types";

export function getArticleAlternates(article: Article) {
  // Strip language prefixes and surrounding slashes to get the raw slug
  const rawSlug = article.slug
    .replace(/^(ar\/blog\/|blog\/|en\/blog\/)/, "")
    .replace(/^\/+/, "")
    .replace(/\/$/, "");

  // Enforce consistent trailing slashes across all URLs
  const enUrl = `https://textarabi.com/blog/${rawSlug}/`;
  const arUrl = `https://textarabi.com/ar/blog/${rawSlug}/`;

  return {
    canonical: article.lang === "ar" ? arUrl : enUrl,
    languages: {
      en: enUrl,
      ar: arUrl,
      "x-default": enUrl,
    },
  };
}
