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

// app/blog/[slug]/page.tsx

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

  return (
    <>
      {/* Inject Structured Data Schemas */}
      <JsonLd article={article} canonicalUrl={canonicalUrl} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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

          <aside className="lg:col-span-4 space-y-6">
            {/* Developer & Design Tools 4-Button Suite */}
            <section className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <strong className="block text-slate-900 font-bold text-base mb-1">
                Free Online Developer & Design Tools
              </strong>
              <p className="text-slate-600 text-xs mb-4">
                Instant 100% client-side web utilities for Arabic text & vector
                workflows:
              </p>

              <div className="space-y-3">
                {/* Button 1: Text Normalizer */}
                <Link
                  href="/tools/arabic-text-normalizer/"
                  className="flex items-center justify-between p-3.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pr-2">
                    <span className="block text-xs font-bold text-emerald-950 group-hover:text-emerald-900">
                      Text Normalizer & Reverser
                    </span>
                    <span className="block text-[11px] text-emerald-800 mt-0.5">
                      Fix RTL formatting & strip diacritics
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-emerald-600 group-hover:bg-emerald-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    Open →
                  </span>
                </Link>

                {/* Button 2: OCR Scanner */}
                <Link
                  href="/tools/ocr-scanner/"
                  className="flex items-center justify-between p-3.5 bg-blue-50 hover:bg-blue-100 border border-blue-300 rounded-xl transition-all duration-200 shadow-2xs group"
                >
                  <div className="pr-2">
                    <span className="block text-xs font-bold text-blue-950 group-hover:text-blue-900">
                      Bilingual OCR Scanner
                    </span>
                    <span className="block text-[11px] text-blue-800 mt-0.5">
                      Extract text from images & PDFs
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 bg-blue-600 group-hover:bg-blue-700 text-white font-semibold rounded-lg text-xs transition-colors">
                    Open →
                  </span>
                </Link>

                {/* Button 3: Keshida Generator */}
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

                {/* Button 4: Text to Vector */}
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

            {/* Next.js & Bilingual Development Agency Promo Card (English) */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col gap-4 relative overflow-hidden group hover:border-blue-300 transition-all duration-300">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500"></div>

              <div className="flex flex-col gap-1.5 text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full w-fit">
                  Expert Engineering Services
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  Building a Bilingual (RTL/LTR) Next.js App?
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We engineer high-performance web applications and custom
                  frontend architectures optimized for global markets.
                </p>
              </div>

              <a
                href="https://freelancewebdesignusa.com/?utm_source=textarabi&utm_medium=sidebar_card&utm_campaign=nextjs_rtl_en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                style={{ color: "#ffffff !important", textDecoration: "none" }}
              >
                <span>Hire a Next.js Expert</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            <BlogSidebar currentSlug={currentSlug} lang="en" />
          </aside>
        </div>
      </div>
    </>
  );
}
