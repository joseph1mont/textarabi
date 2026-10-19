// file path: lib/get-article-schema.ts
import { Article } from "@/data/types";

function extractFaqsFromContent(contentHtml: string) {
  if (!contentHtml) return [];

  const faqs: { question: string; answer: string }[] = [];
  const faqRegex =
    /<(h[23])(?:[^>]*?)>(.*?\??)<\/\1>\s*<p(?:[^>]*?)>(.*?)<\/p>/gi;
  let match: RegExpExecArray | null;

  while ((match = faqRegex.exec(contentHtml)) !== null) {
    const questionText = match[2].replace(/<[^>]+>/g, "").trim();
    const answerText = match[3].replace(/<[^>]+>/g, "").trim();

    if (
      questionText &&
      answerText &&
      (questionText.endsWith("?") ||
        questionText.includes("كيف") ||
        questionText.includes("ما") ||
        questionText.includes("هل") ||
        questionText.toLowerCase().includes("what") ||
        questionText.toLowerCase().includes("how") ||
        questionText.toLowerCase().includes("why"))
    ) {
      faqs.push({
        question: questionText,
        answer: answerText,
      });
    }
  }

  return faqs;
}

export function getArticleSchema(article: Article, canonicalUrl: string) {
  const isArabic = article.lang === "ar";
  const siteUrl = "https://textarabi.com";
  const blogHomeUrl = isArabic ? `${siteUrl}/ar/blog/` : `${siteUrl}/blog/`;

  // حل مشكلة TypeScript عبر Cast مؤقت للنوع
  const articleData = article as {
    modifiedAt?: string;
    updatedAt?: string;
    publishedAt?: string;
  };
  const modifiedDate =
    articleData.modifiedAt || articleData.updatedAt || articleData.publishedAt;

  // 1. Core BlogPosting / TechArticle Schema
  const blogPostingSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    inLanguage: isArabic ? "ar-SA" : "en-US",
    datePublished: article.publishedAt,
    dateModified: modifiedDate,
    author: {
      "@type": "Organization",
      name: "TextArabi",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "TextArabi",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };

  if (article.targetKeyword) {
    blogPostingSchema.keywords = article.targetKeyword;
  }

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isArabic ? "الرئيسية" : "Home",
        item: isArabic ? `${siteUrl}/ar/` : `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isArabic ? "المدونة" : "Blog",
        item: blogHomeUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  const schemas: Record<string, unknown>[] = [
    blogPostingSchema,
    breadcrumbSchema,
  ];

  // 3. Dynamically append FAQPage Schema if FAQs are detected in content
  const extractedFaqs = extractFaqsFromContent(article.content);
  if (extractedFaqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: extractedFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
}
