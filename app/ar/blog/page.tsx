import React from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata = {
  title: 'الأدلة التقنية والمدونة الرقمية | TextArabi',
  description: 'مقالات فنية وتطويرية مخصصة لمعالجة النصوص العربية، تحسين السيو، وضبط خطوط واجهات الاستخدام.',
};

export default function ArabicBlogIndex() {
  const arabicArticles = articles.filter((a) => a.lang === 'ar');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-tajawal" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-tajawal">
            الأدلة التقنية وتطوير النصوص
          </h1>
          <p className="text-slate-500 mt-2 text-base sm:text-lg font-tajawal">
            استراتيجيات برمجية وهندسية متقدمة لمعالجة اللغات ثنائية الاتجاه وتحسين محركات البحث.
          </p>
        </header>

        <div className="grid gap-8">
          {arabicArticles.map((article) => (
            <article key={article.slug} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow">
              
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md mb-3 font-tajawal">
                أداة {article.targetTool}
              </span>
              
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors font-tajawal">
                <Link href={`/ar/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              
              <p className="text-slate-600 mt-2 text-sm sm:text-base line-clamp-3 font-tajawal">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-mono">
                <span className="font-tajawal">نُشر في: {article.publishedAt} • {article.readTime}</span>
                <Link href={`/ar/blog/${article.slug}`} className="text-blue-600 font-bold hover:underline font-tajawal">
                  قراءة الدليل التقني ←
                </Link>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}