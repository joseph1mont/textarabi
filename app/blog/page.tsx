// app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata = {
  title: 'Localization & Typography Blueprints | TextArabi',
  description: 'Expert engineering guides to resolve right-to-left layout constraints, database normalization problems, and web font shifts.',
};

export default function EnglishBlogIndex() {
  const englishArticles = articles.filter((a) => a.lang === 'en');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Localization & Typography Blueprints</h1>
          <p className="text-slate-500 mt-2 text-lg">Deep analytical strategies for engineering bidirectional interfaces and high-performance typography layouts.</p>
        </header>

        <div className="grid gap-8">
          {englishArticles.map((article) => (
            <article key={article.slug} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow">
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
                {article.targetTool} Integration
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base line-clamp-3">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-mono">
                <span>{article.publishedAt} • {article.readTime}</span>
                <Link href={`/blog/${article.slug}`} className="text-blue-600 font-bold hover:underline">
                  Read Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}