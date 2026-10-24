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

  // Semrush Impact Affiliate Tracking Link
  const semrushAffiliateUrl = "https://semrush.sjv.io/c/7969469/1438303/13053";

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <JsonLd article={article} canonicalUrl={canonicalUrl} />

      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Content */}
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

          {/* Sidebar Section */}
          <aside className="lg:col-span-4 space-y-6">
            {/* 1. Custom RTL & Arabic Solutions Banner (Primary Agency Service) */}
            <div className="bg-gradient-to-b from-[#0238a8] to-[#012573] text-white rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col items-center text-center border border-blue-900 group">
              {/* Badge Icon */}
              <div className="mb-2.5 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-400/20 border border-blue-300/30 flex items-center justify-center text-xs font-black text-blue-200 shadow-inner">
                  RTL ⇄
                </div>
              </div>

              {/* Subtitle / Domain */}
              <span className="text-[11px] font-semibold text-blue-200 tracking-wider uppercase mb-1">
                freelancewebdesignusa.com
              </span>

              {/* Headline */}
              <h3 className="text-xl font-black leading-snug mb-3 text-white">
                هل تحتاج حلول ويب مخصصة للغة العربية و RTL؟
              </h3>

              {/* Bulleted Capabilities List (Centered container with high-contrast Arabic text) */}
              <div className="w-full max-w-[280px] mx-auto mb-6">
                <ul className="text-xs text-blue-50 space-y-2 text-right leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">
                      ✓
                    </span>
                    <span>تصحيح مشاكل اتجاه النص (RTL) وتنسيقات CSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">
                      ✓
                    </span>
                    <span>تحسين المواقع ثنائية اللغة للمستخدم العربي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">
                      ✓
                    </span>
                    <span>تكامل API مخصص وتضبيط البيانات العربية</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://freelancewebdesignusa.com/?utm_source=textarabi&utm_medium=sidebar_card&utm_campaign=custom_rtl_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-[#00a859] hover:bg-[#008f4c] active:bg-[#007a41] text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.01]"
              >
                <span>احصل على عرض أسعار ←</span>
              </a>
            </div>

            {/* 2. Semrush SEO & Audit Card (Native Arabic Graphic Component) */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3 px-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  مصدر موصى به
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  إعلان برعاية
                </span>
              </div>

              <a
                href={semrushAffiliateUrl}
                target="_blank"
                rel="nofollow sponsored"
                className="block w-full group transition-all"
              >
                {/* Native Custom Graphic Card */}
                <div className="w-full bg-slate-900 rounded-xl p-5 border border-slate-800 text-right relative overflow-hidden mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black tracking-widest text-orange-400 uppercase">
                      SEMRUSH
                    </span>
                    <span className="bg-orange-500/20 text-orange-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-orange-500/30">
                      أدوات السيو SEO
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-orange-400 transition-colors">
                    كل ما تحتاجه للنجاح في تحسين محركات البحث
                  </h4>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                    فحص صحة المواقع ثنائية اللغة، تتبع ترتيب الكلمات المفتاحية
                    العربية، وتحليل المنافسين.
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                    <span>✓ فترة تجريبية مجانية لمدة 7 أيام</span>
                  </div>
                </div>

                <div className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-slate-950 font-extrabold text-xs rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 shadow-xs">
                  <span>جرب Semrush مجاناً ←</span>
                </div>
              </a>
            </div>

            {/* 3. Developer & Design Tools 4-Button Suite (RTL) */}
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

            {/* 4. Popular Posts Navigation */}
            <BlogSidebar currentSlug={currentSlug} lang="ar" />
          </aside>
        </div>
      </div>
    </>
  );
}
