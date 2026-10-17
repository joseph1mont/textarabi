// file path: app/blog/page.tsx
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import BlogSidebar from "@/components/BlogSidebar";
import BlogTagFilter from "@/components/BlogTagFilter";

export const metadata: Metadata = {
  title: "Technical Guides & Engineering Blog | TextArabi",
  description:
    "Here is exactly how technical resources covering bidirectional layout algorithms, font parsing performance, and internationalization SEO.",
  alternates: {
    canonical: "https://textarabi.com/blog",
  },
};

export default function EnglishBlogIndex() {
  const englishArticles = articles.filter((a) => a.lang === "en");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Engineering Logs & Text Processing Guides | TextArabi",
      description:
        "Technical articles on web development, RTL text handling, and database optimization.",
      url: "https://textarabi.com/blog",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://textarabi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://textarabi.com/blog",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Schema.org Structured Data */}
      {jsonLd.map((schema, index) => (
        <script
          key={`blog-index-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-7xl mx-auto">
        <header className="mb-10 border-b border-slate-200 pb-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Logs & Text Processing Guides
          </h1>
          <p className="text-slate-500 mt-2 text-base sm:text-lg">
            Advanced optimization procedures for building responsive
            multilingual web platforms.
          </p>
        </header>

        {/* Layout with Main Filterable Grid & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <BlogTagFilter articles={englishArticles} lang="en" />
          </div>

          <div className="lg:col-span-4">
            <BlogSidebar lang="en" />
          </div>
        </div>
      </div>
    </main>
  );
}
