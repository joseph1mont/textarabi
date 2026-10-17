// file path: app/ar/blog/page.tsx
import React from "react";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import BlogSidebar from "@/components/BlogSidebar";
import BlogTagFilter from "@/components/BlogTagFilter";

export const metadata: Metadata = {
  title: "الأدلة التقنية والمدونة الرقمية | TextArabi",
  description:
    "مقالات فنية وتطويرية مخصصة لمعالجة النصوص العربية، تحسين السيو، وضبط خطوط واجهات الاستخدام.",
  alternates: {
    canonical: "https://textarabi.com/ar/blog",
  },
};

export default function ArabicBlogIndex() {
  const arabicArticles = articles.filter((a) => a.lang === "ar");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "الأدلة التقنية وتطوير النصوص | TextArabi",
      description:
        "مقالات فنية وتطويرية مخصصة لمعالجة النصوص العربية، تحسين السيو، وضبط خطوط واجهات الاستخدام.",
      url: "https://textarabi.com/ar/blog",
      inLanguage: "ar",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://textarabi.com/ar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "المدونة",
          item: "https://textarabi.com/ar/blog",
        },
      ],
    },
  ];

  return (
    <main
      className="min-h-screen bg-slate-50 text-slate-800 px-4 sm:px-6 lg:px-8 font-tajawal"
      dir="rtl"
    >
      {/* Schema.org Structured Data */}
      {jsonLd.map((schema, index) => (
        <script
          key={`ar-blog-index-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Narrower container optimized for layout viewability */}
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 border-b border-slate-200 pb-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-tajawal">
            الأدلة التقنية وتطوير النصوص
          </h1>
          <p className="text-slate-500 mt-2 text-base sm:text-lg font-tajawal">
            استراتيجيات برمجية وهندسية متقدمة لمعالجة اللغات ثنائية الاتجاه
            وتحسين محركات البحث.
          </p>
        </header>

        {/* Layout with Main Filterable Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Filterable Content Component */}
          <div className="lg:col-span-8">
            <BlogTagFilter articles={arabicArticles} lang="ar" />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <BlogSidebar lang="ar" />
          </aside>
        </div>
      </div>
    </main>
  );
}
