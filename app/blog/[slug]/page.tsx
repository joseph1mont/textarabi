// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { articles } from "@/data/articles";
import BasePostPage from "@/components/BasePostPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles
    .filter((art) => art.lang === "en")
    .map((art) => ({
      // قص "blog/" من الـ slug لأن المسار `/blog/` محجوز بالفعل في هيكل المجلدات
      slug: art.slug.replace("blog/", ""),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // البحث يجب أن يتم باستخدام الـ slug الكامل (مع إضافة blog/ للبحث في البيانات)
  const article = articles.find(
    (a) => a.slug === `blog/${slug}` && a.lang === "en",
  );
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
      slug={`blog/${slug}`} // تمرير المسار الكامل للمكون ليعثر على البيانات
      lang="en"
      dictionary={{
        backLink: "← Return to Index Layouts",
        backPath: "/blog",
        dateLabel: "Published",
        ctaTitle: "Need an Immediate Production Automation Shortcut?",
        ctaDesc:
          "Process your string formats inside our sandbox engine instance.",
        ctaBtn: "Launch Live Module",
        ctaPath: "/",
      }}
    />
  );
}
