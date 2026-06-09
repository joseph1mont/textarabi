import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';

interface BasePostProps {
  slug: string;
  lang: 'ar' | 'en';
  dictionary: {
    backLink: string;
    backPath: string;
    dateLabel: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    ctaPath: string;
  };
}

export default function BasePostPage({ slug, lang, dictionary }: BasePostProps) {
  const article = articles.find((a) => a.slug === slug && a.lang === lang);
  if (!article) notFound();

  const isAr = lang === 'ar';

  return (
    <main className={`min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 ${isAr ? 'font-tajawal' : 'font-sans'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        
        <div aria-label="Breadcrumb" className="mb-6">
          <Link href={dictionary.backPath} className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
            {dictionary.backLink}
          </Link>
        </div>

        <article className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-2xs">
          <header className="mb-8 pb-6 border-b border-slate-100">
            <h1 className={`text-2xl sm:text-3xl tracking-tight text-slate-900 leading-tight mb-4 ${isAr ? 'font-black' : 'font-extrabold'}`}>
              {article.title}
            </h1>
            <div className="flex gap-4 text-xs font-mono text-slate-400">
              <span>{dictionary.dateLabel}: {article.publishedAt}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div 
            className={`max-w-none text-sm sm:text-base ${isAr ? 'prose-arabic' : 'prose-english'}`}
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          <div className="bg-blue-50 border border-blue-200 p-5 mt-8 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-bold text-blue-900 text-sm">{dictionary.ctaTitle}</h3>
              <p className="text-xs text-blue-700 mt-0.5">{dictionary.ctaDesc}</p>
            </div>
            <Link href={dictionary.ctaPath} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-lg shrink-0 transition-colors inline-block text-center">
              {dictionary.ctaBtn}
            </Link>
          </div>
          
        </article>
      </div>
    </main>
  );
}