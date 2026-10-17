// file path: app/ar/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import BasePostPage from "@/components/BasePostPage";
import BlogSidebar from "@/components/BlogSidebar";
import JsonLd from "@/components/JsonLd";
import { getArticleAlternates } from "@/lib/get-article-alternates";

interface Props {
  params: Promise<{ slug: string }>;
}

// Guarantee no dynamic rendering attempts during static export
export const dynamicParams = false;

function cleanSlug(slug: string) {
  if (!slug) return "";
  return slug
    .replace(/^\/+/, "")
    .replace(/^blog\//, "")
    .replace(/^ar\/blog\//, "")
    .replace(/\/$/, "")
    .trim();
}

export async function generateStaticParams() {
  return articles
    .filter((art) => art.lang === "ar")
    .map((art) => ({
      slug: cleanSlug(art.slug),
    }))
    .filter((item) => item.slug.length > 0);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const targetSlug = cleanSlug(slug);

  const article = articles.find(
    (a) => cleanSlug(a.slug) === targetSlug && a.lang === "ar",
  );

  if (!article) return {};

  const alternates = getArticleAlternates(article);
  const canonicalUrl = `https://textarabi.com/ar/blog/${targetSlug}/`;

  return {
    title: `${article.title} | TextArabi`,
    description: article.excerpt,
    alternates: {
      ...alternates,
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      siteName: "TextArabi",
      locale: "ar_AR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArabicPostPage({ params }: Props) {
  const { slug } = await params;
  const targetSlug = cleanSlug(slug);

  // Find the exact Arabic article
  const article = articles.find(
    (a) => cleanSlug(a.slug) === targetSlug && a.lang === "ar",
  );

  if (!article) {
    notFound();
  }

  const currentSlug = `ar/blog/${targetSlug}`;
  const canonicalUrl = `https://textarabi.com/ar/blog/${targetSlug}/`;
  const toolEndpoint = "/ar/tools/arabic-text-normalizer/";

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <JsonLd article={article} canonicalUrl={canonicalUrl} />

      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <BasePostPage
              slug={currentSlug}
              lang="ar"
              dictionary={{
                backLink: "← العودة إلى قائمة المقالات",
                backPath: "/ar/blog",
                dateLabel: "تاريخ النشر",
                ctaTitle: "تسهيل وتنسيق سير العمل للنصوص والصور العربية",
                ctaDesc:
                  "استخرج النصوص من الصور (OCR)، قم بإزالة التشكيل، تنسيق نصوص JSON، أو تصحيح الأحرف المعكوسة فوراً داخل متصفحك.",
                ctaBtn: "تجربة كافة الأدوات",
                ctaPath: toolEndpoint,
              }}
            />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            {/* Developer & Design Tools 4-Button Suite (RTL) */}
            <section className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <strong className="block text-slate-900 font-bold text-base mb-1">
                أدوات الويب المجانية للمطورين والمصممين
              </strong>
              <p className="text-slate-600 text-xs mb-4">
                معالجة فورية ومباشرة للنصوص والرسومات العربية داخل متصفحك 100%:
              </p>

              <div className="space-y-3">
                {/* Button 1: Text Normalizer */}
                <Link
                  href="/ar/tools/arabic-text-normalizer/"
                  className="flex items-center justify-between p-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pl-2">
                    <span className="block text-xs font-bold text-emerald-950 group-hover:text-emerald-900">
                      مصحح ومنظم النصوص العربية
                    </span>
                    <span className="block text-[11px] text-emerald-800 mt-0.5">
                      تعديل النص المعكوس وإزالة التشكيل
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-emerald-600 group-hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    تشغيل ←
                  </span>
                </Link>

                {/* Button 2: OCR Scanner */}
                <Link
                  href="/ar/tools/ocr-scanner/"
                  className="flex items-center justify-between p-3.5 bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pl-2">
                    <span className="block text-xs font-bold text-blue-950 group-hover:text-blue-900">
                      القارئ الضوئي واستخراج النص (OCR)
                    </span>
                    <span className="block text-[11px] text-blue-800 mt-0.5">
                      استخراج النص من الصور وملفات PDF
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-blue-600 group-hover:bg-blue-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    تشغيل ←
                  </span>
                </Link>

                {/* Button 3: Keshida Generator */}
                <Link
                  href="/ar/tools/arabic-keshida-generator/"
                  className="flex items-center justify-between p-3.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pl-2">
                    <span className="block text-xs font-bold text-amber-950 group-hover:text-amber-900">
                      مولد الكشيدة والتطويل العربي
                    </span>
                    <span className="block text-[11px] text-amber-800 mt-0.5">
                      محاذاة وضبط السطر في النصوص العربية
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-amber-600 group-hover:bg-amber-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    تشغيل ←
                  </span>
                </Link>

                {/* Button 4: Text to Vector */}
                <Link
                  href="/ar/tools/arabic-text-to-vector/"
                  className="flex items-center justify-between p-3.5 bg-purple-50 hover:bg-purple-100 border border-purple-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pl-2">
                    <span className="block text-xs font-bold text-purple-950 group-hover:text-purple-900">
                      تحويل النص إلى فكتور SVG
                    </span>
                    <span className="block text-[11px] text-purple-800 mt-0.5">
                      تحويل الخطوط إلى مسارات متجهة لـ Figma
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-purple-600 group-hover:bg-purple-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    تشغيل ←
                  </span>
                </Link>
              </div>
            </section>

            {/* Next.js & Bilingual Development Agency Promo Sidebar Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col gap-4 relative overflow-hidden group hover:border-blue-300 transition-all duration-300">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500"></div>

              <div className="flex flex-col gap-1.5 text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full w-fit">
                  خدمات التطوير الاحترافية
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  هل تبني موقعاً أو تطبيق Next.js يدعم اللغتين (RTL/LTR)؟
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  نقدم خدمات هندسة وتطوير واجهات برمجية فائقة السرعة، مخصصة
                  للمؤسسات والشركات الناشئة في أمريكا والخليج.
                </p>
              </div>

              <a
                href="https://freelancewebdesignusa.com/?utm_source=textarabi&utm_medium=sidebar_card&utm_campaign=nextjs_rtl_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                style={{ color: "#ffffff !important", textDecoration: "none" }}
              >
                <span>استشر مهندس تطوير Next.js</span>
                <span className="transform group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
              </a>
            </div>

            <BlogSidebar currentSlug={currentSlug} lang="ar" />
          </aside>
        </div>
      </div>
    </>
  );
}
