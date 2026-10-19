// file path: components/BlogTagFilter.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  targetTool?: string;
  publishedAt?: string;
  modifiedAt?: string;
  updatedAt?: string;
  readTime?: string;
}

interface BlogTagFilterProps {
  articles: Article[];
  lang: "en" | "ar";
}

export default function BlogTagFilter({ articles, lang }: BlogTagFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const uniqueTags = Array.from(
    new Set(articles.map((art) => art.targetTool).filter(Boolean)),
  ) as string[];

  const filteredArticles =
    selectedTag === "All" || selectedTag === "الكل"
      ? articles
      : articles.filter((art) => art.targetTool === selectedTag);

  return (
    <div>
      {/* Filter Tabs / Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTag(lang === "en" ? "All" : "الكل")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            selectedTag === "All" || selectedTag === "الكل"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400"
          }`}
        >
          {lang === "en" ? "All" : "الكل"}
        </button>

        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedTag === tag
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredArticles.map((article) => {
          const cleanSlug = article.slug.replace(/^(ar\/)?blog\//, "");
          const href =
            lang === "en" ? `/blog/${cleanSlug}` : `/ar/blog/${cleanSlug}`;

          // شرط استخدام تاريخ التحديث أو النشر في بطاقات القائمة
          const displayDate =
            article.modifiedAt || article.updatedAt || article.publishedAt;

          return (
            <article
              key={article.slug}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md mb-3">
                  {article.targetTool}
                </span>

                <h2 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <Link href={href}>{article.title}</Link>
                </h2>

                <p className="text-slate-600 mt-2 text-sm sm:text-base line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-mono">
                <span>
                  {displayDate} • {article.readTime}
                </span>
                <Link
                  href={href}
                  className="text-blue-600 font-bold hover:underline"
                >
                  {lang === "en" ? "Read >" : "قراءة ←"}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
