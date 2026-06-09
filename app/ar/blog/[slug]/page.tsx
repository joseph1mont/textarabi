import React from 'react';
import { Metadata } from 'next';
import { articles } from '@/data/articles';
import BasePostPage from '@/components/BasePostPage';

interface Props {
  params: Promise<{ slug: string }>;
}

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

  return (
    <BasePostPage 
      slug={slug} 
      lang="ar" 
      dictionary={{
        backLink: "→ العودة إلى قائمة المقالات والأدلة",
        backPath: "/ar/blog",
        dateLabel: "تاريخ النشر",
        ctaTitle: "هل تحتاج إلى اختصار فوري لتهيئة ومعالجة نصوصك؟",
        ctaDesc: "استخدم محرك المعالجة المباشر المتوفر لتوفير الوقت يدويًا.",
        ctaBtn: "تشغيل الأداة فوراً",
        ctaPath: "/ar"
      }}
    />
  );
}