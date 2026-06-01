// app/ar/blog/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { articles } from '@/data/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

// تهيئة مسارات المقالات الثابتة للنسخة العربية
export async function generateStaticParams() {
  return articles.filter(art => art.lang === 'ar').map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug && a.lang === 'ar');
  if (!article) return {};

  return {
    title: `${article.title} | تيكست عربي`,
    description: article.excerpt,
    keywords: article.targetKeyword,
  };
}

export default async function ArabicPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug && a.lang === 'ar');

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-tajawal" dir="rtl">
      <div className="max-w-3xl mx-auto">
        
        {/* التعديل الجوهري: استبدال وسم <nav> بـ div دلالي مخصص لمنع التداخل مع الهيدر الرئيسي وتسهيل زحف محركات السيو */}
        <div aria-label="Breadcrumb" className="mb-6">
          <Link href="/ar/blog" className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
            → العودة إلى قائمة المقالات والأدلة
          </Link>
        </div>

        <article className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-2xs">
          <header className="mb-8 pb-6 border-b border-slate-100">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight mb-4 font-tajawal">
              {article.title}
            </h1>
            <div className="flex gap-4 text-xs font-mono text-slate-400">
              <span>تاريخ النشر: {article.publishedAt}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          {/* محتوى المقال يظهر الآن مباشرة في الأعلى لتحسين أرشفة الكلمات المفتاحية الطويلة */}
          <div 
            className="text-slate-600 leading-relaxed space-y-6 text-sm sm:text-base prose max-w-none font-tajawal"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          {/* نقل صندوق الدعوة الإجرائية (CTA) أسفل متن المقال كخيار تحويلي بعد القراءة */}
          <div className="bg-blue-50 border border-blue-200 p-5 mt-8 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-bold text-blue-900 text-sm font-tajawal">هل تحتاج إلى اختصار فوري لتهيئة ومعالجة نصوصك؟</h3>
              <p className="text-xs text-blue-700 mt-0.5 font-tajawal">استخدم محرك المعالجة المباشر المتوفر لتوفير الوقت يدويًا.</p>
            </div>
            <Link 
              href="/ar"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-lg shrink-0 transition-colors inline-block text-center font-tajawal"
            >
              تشغيل الأداة فوراً
            </Link>
          </div>
          
        </article>
      </div>
    </main>
  );
}