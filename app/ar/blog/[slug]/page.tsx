import { Metadata } from "next";
import { articles } from "@/data/articles";
import BasePostPage from "@/components/BasePostPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles
    .filter((art) => art.lang === "ar")
    .map((art) => ({
      // نقوم بإزالة "ar/blog/" ليتبقى فقط المتغير
      slug: art.slug.replace("ar/blog/", ""),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(
    (a) => a.slug === `ar/blog/${slug}` && a.lang === "ar",
  );
  if (!article) return {};

  return {
    title: `${article.title} | TextArabi`,
    description: article.excerpt,
    keywords: article.targetKeyword,
  };
}

export default async function ArabicPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <BasePostPage
      slug={`ar/blog/${slug}`}
      lang="ar"
      dictionary={{
        backLink: "← العودة إلى قائمة الأدلة",
        backPath: "/ar/blog",
        dateLabel: "تاريخ النشر",
        ctaTitle: "هل تحتاج إلى اختصار تقني فوري؟",
        ctaDesc: "قم بمعالجة نصوصك مباشرة عبر محركنا البرمجي.",
        ctaBtn: "تشغيل الأداة",
        ctaPath: "/ar",
      }}
    />
  );
}
