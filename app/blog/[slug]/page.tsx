// file path: app/blog/[slug]/page.tsx
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
    .filter((art) => art.lang === "en")
    .map((art) => ({
      slug: cleanSlug(art.slug),
    }))
    .filter((item) => item.slug.length > 0);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const targetSlug = cleanSlug(slug);

  const article = articles.find(
    (a) => cleanSlug(a.slug) === targetSlug && a.lang === "en",
  );

  if (!article) return {};

  const alternates = getArticleAlternates(article);
  const canonicalUrl = `https://textarabi.com/blog/${targetSlug}/`;

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
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function EnglishPostPage({ params }: Props) {
  const { slug } = await params;
  const targetSlug = cleanSlug(slug);

  const article = articles.find(
    (a) => cleanSlug(a.slug) === targetSlug && a.lang === "en",
  );

  if (!article) {
    notFound();
  }

  const currentSlug = `blog/${targetSlug}`;
  const canonicalUrl = `https://textarabi.com/blog/${targetSlug}/`;
  const toolEndpoint = "/tools/arabic-text-normalizer/";

  // Semrush Impact Affiliate Tracking Link
  const semrushAffiliateUrl = "https://semrush.sjv.io/c/7969469/1438303/13053";

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <JsonLd article={article} canonicalUrl={canonicalUrl} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <BasePostPage
              slug={currentSlug}
              lang="en"
              dictionary={{
                backLink: "← Return to Index Layouts",
                backPath: "/blog",
                dateLabel: "Published",
                ctaTitle: "Streamline Your Arabic Text & Image Workflows",
                ctaDesc:
                  "Perform optical character recognition (OCR), diacritic stripping, JSON formatting, or RTL character normalization right inside your browser.",
                ctaBtn: "Try All Tools Free",
                ctaPath: toolEndpoint,
              }}
            />
          </div>

          {/* Sidebar Section */}
          <aside className="lg:col-span-4 space-y-6">
            {/* 1. High-Converting Custom RTL & Arabic Solutions Banner */}
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
                Need Custom RTL &amp; Arabic Web Solutions?
              </h3>

              {/* Bulleted Capabilities List (Centered container with high-contrast text) */}
              <div className="w-full max-w-[270px] mx-auto mb-6">
                <ul className="text-xs text-blue-50 space-y-2 text-left leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">
                      ✓
                    </span>
                    <span>Fix broken CSS &amp; RTL layout alignments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">
                      ✓
                    </span>
                    <span>Optimize bilingual (AR/EN) user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">
                      ✓
                    </span>
                    <span>Custom Arabic API &amp; typography integration</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="https://freelancewebdesignusa.com/?utm_source=textarabi&utm_medium=sidebar_card&utm_campaign=custom_rtl_en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-[#00a859] hover:bg-[#008f4c] active:bg-[#007a41] text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.01]"
              >
                <span>Get a Free Quote</span>
                <span className="text-base">→</span>
              </a>
            </div>

            {/* 2. Semrush SEO & Audit Card (Native Graphic Component) */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3 px-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Recommended Resource
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  Sponsored
                </span>
              </div>

              <a
                href={semrushAffiliateUrl}
                target="_blank"
                rel="nofollow sponsored"
                className="block w-full group transition-all"
              >
                {/* Native Custom Graphic Card */}
                <div className="w-full bg-slate-900 rounded-xl p-5 border border-slate-800 text-left relative overflow-hidden mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black tracking-widest text-orange-400 uppercase">
                      SEMRUSH
                    </span>
                    <span className="bg-orange-500/20 text-orange-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-500/30">
                      SEO Toolkit
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-orange-400 transition-colors">
                    Everything You Need to Succeed in SEO
                  </h4>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                    Audit bilingual site health, track Arabic keyword rankings,
                    &amp; analyze competitor backlinks.
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                    <span>✓ Free 7-Day Trial Access</span>
                  </div>
                </div>

                <div className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-slate-950 font-extrabold text-xs rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-1.5 shadow-xs">
                  <span>Try Semrush Free</span>
                  <span className="text-sm">→</span>
                </div>
              </a>
            </div>

            {/* 3. Developer & Design Tools 4-Button Suite */}
            <section className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <strong className="block text-slate-900 font-bold text-base mb-1">
                Free Online Developer &amp; Design Tools
              </strong>
              <p className="text-slate-600 text-xs mb-4">
                Instant 100% client-side web utilities for Arabic text &amp;
                vector workflows:
              </p>

              <div className="space-y-3">
                <Link
                  href="/tools/arabic-text-normalizer/"
                  className="flex items-center justify-between p-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pr-2">
                    <span className="block text-xs font-bold text-emerald-950 group-hover:text-emerald-900">
                      Text Normalizer &amp; Reverser
                    </span>
                    <span className="block text-[11px] text-emerald-800 mt-0.5">
                      Fix RTL formatting &amp; strip diacritics
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-emerald-600 group-hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    Open →
                  </span>
                </Link>

                <Link
                  href="/tools/ocr-scanner/"
                  className="flex items-center justify-between p-3.5 bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pr-2">
                    <span className="block text-xs font-bold text-blue-950 group-hover:text-blue-900">
                      Bilingual OCR Scanner
                    </span>
                    <span className="block text-[11px] text-blue-800 mt-0.5">
                      Extract text from images &amp; PDFs
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-blue-600 group-hover:bg-blue-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    Open →
                  </span>
                </Link>

                <Link
                  href="/tools/arabic-keshida-generator/"
                  className="flex items-center justify-between p-3.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pr-2">
                    <span className="block text-xs font-bold text-amber-950 group-hover:text-amber-900">
                      Keshida Tatweel Generator
                    </span>
                    <span className="block text-[11px] text-amber-800 mt-0.5">
                      Justify Arabic text baselines
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-amber-600 group-hover:bg-amber-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    Open →
                  </span>
                </Link>

                <Link
                  href="/tools/arabic-text-to-vector/"
                  className="flex items-center justify-between p-3.5 bg-purple-50 hover:bg-purple-100 border border-purple-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pr-2">
                    <span className="block text-xs font-bold text-purple-950 group-hover:text-purple-900">
                      Text-to-Vector (SVG)
                    </span>
                    <span className="block text-[11px] text-purple-800 mt-0.5">
                      Convert live fonts to vector paths
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-purple-600 group-hover:bg-purple-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    Open →
                  </span>
                </Link>
              </div>
            </section>

            {/* 4. Popular Posts Navigation */}
            <BlogSidebar currentSlug={currentSlug} lang="en" />
          </aside>
        </div>
      </div>
    </>
  );
}
