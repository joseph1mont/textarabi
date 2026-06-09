import React from 'react';
import { Metadata } from 'next';
import { articles } from '@/data/articles';
import BasePostPage from '@/components/BasePostPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.filter(art => art.lang === 'en').map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug && a.lang === 'en');
  if (!article) return {};

  return {
    title: `${article.title} | TextArabi`,
    description: article.excerpt,
    keywords: article.targetKeyword,
  };
}

export default async function EnglishPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <BasePostPage 
      slug={slug} 
      lang="en" 
      dictionary={{
        backLink: "← Return to Index Layouts",
        backPath: "/blog",
        dateLabel: "Published",
        ctaTitle: "Need an Immediate Production Automation Shortcut?",
        ctaDesc: "Process your string formats inside our sandbox engine instance.",
        ctaBtn: "Launch Live Module",
        ctaPath: "/"
      }}
    />
  );
}