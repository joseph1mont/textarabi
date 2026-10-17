// file path: components/JsonLd.tsx
import { Article } from "@/data/types";
import { getArticleSchema } from "@/lib/get-article-schema";

interface JsonLdProps {
  article: Article;
  canonicalUrl: string;
}

/**
 * Renders validated JSON-LD Schema.org structured data (BlogPosting, BreadcrumbList, FAQPage)
 * into the document head for search crawlers & AI engine parser indexing.
 */
export default function JsonLd({ article, canonicalUrl }: JsonLdProps) {
  const schemas = getArticleSchema(article, canonicalUrl);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
