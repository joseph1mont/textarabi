// app/blog/page.tsx
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Technical Guides & Engineering Blog | TextArabi",
  description:
    "Deep dive technical resources covering bidirectional layout algorithms, font parsing performance, and internationalization SEO.",
};

export default function EnglishBlogIndex() {
  const englishArticles = articles.filter((a) => a.lang === "en");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Logs & Text Processing Guides
          </h1>
          <p className="text-slate-500 mt-2 text-base sm:text-lg">
            Advanced optimization procedures for building responsive
            multilingual web platforms.
          </p>
        </header>

        <div className="grid gap-8">
          {englishArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md mb-3">
                {article.targetTool} Asset
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${article.slug.replace("blog/", "")}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-slate-600 mt-2 text-sm sm:text-base line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-mono">
                <span>
                  Published: {article.publishedAt} • {article.readTime}
                </span>
                <Link
                  href={`/blog/${article.slug.replace("blog/", "")}`}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Read Guide &gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
