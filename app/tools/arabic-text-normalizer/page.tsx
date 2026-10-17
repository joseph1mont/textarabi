// file path: app/tools/arabic-text-normalizer/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title:
    "All-in-One Arabic Text Normalizer, Character Counter & JSON Tool | TextArabi",
  description:
    "Free online Arabic text normalizer, reversed text fixer, diacritics stripper, character counter, JSON formatter, and browser-based OCR extractor for SEO and software developers.",
  alternates: {
    canonical: "https://textarabi.com/tools/arabic-text-normalizer/",
  },
};

export default function ArabicTextNormalizerEnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does the Arabic Text Normalizer & Utility Suite do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TextArabi workspace consolidates six core text-processing functions: fixing reversed/unshaping Arabic text, stripping diacritics (Tashkeel), counting characters and byte lengths, formatting JSON with Arabic keys, running browser-based OCR extraction, and previewing UI typography.",
        },
      },
      {
        "@type": "Question",
        name: "Why do Arabic meta descriptions get truncated in Google search results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arabic characters consume more horizontal pixel width on SERP containers compared to standard Latin characters. Relying strictly on character counts can cause snippet truncation. Our counter monitors both string length and multi-byte UTF-8 overhead.",
        },
      },
      {
        "@type": "Question",
        name: "How does diacritic stripping help database search performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Database queries usually fail when comparing plain user searches against records stored with full diacritics (Fatha, Damma, Kasra, Shadda). Stripping diacritics normalizes strings so exact-match SQL queries work reliably.",
        },
      },
      {
        "@type": "Question",
        name: "Is client-side OCR extraction secure for confidential images?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All optical character recognition is executed locally inside your WebAssembly browser instance. Your uploaded graphics, screenshots, or documents are never transmitted to external remote servers.",
        },
      },
      {
        "@type": "Question",
        name: "Does formatting JSON alter or corrupt Arabic UTF-8 Unicode strings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The parser preserves native UTF-8 multi-byte encoding while formatting, preventing unescaped hexadecimal conversions (e.g., \\u0627\\u0644) and maintaining strict Schema.org standards.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-16" dir="ltr">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 mb-8 text-center sm:text-left">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-cairo mb-3">
          All-in-One Arabic Text Normalizer & Developer Utility Suite
        </h1>
        <p className="text-slate-600 font-tajawal text-base max-w-3xl">
          Fix reversed text, remove diacritics, count visual characters, format
          UTF-8 JSON payloads, and extract text from images using an all-in-one,
          privacy-first browser workspace.
        </p>
      </div>

      {/* Primary Tool Panel */}
      <TextUtilityPanel initialMode="reverse" lang="en" />

      {/* Technical Overview Section */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          Complete Architectural Guide: Processing Arabic BiDi Strings for
          Modern Web Systems
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            Building internationalized software products, managing database
            migrations, or optimizing multilingual search engine landing pages
            presents complex engineering hurdles when working with Right-to-Left
            (RTL) Arabic scripts.
          </p>
          <p>
            Our <strong>TextArabi Unified Processing Suite</strong> integrates
            the tools previously distributed across separate endpoints into a
            single client-side engine designed to eliminate string degradation,
            formatting bugs, and serialization errors.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            1. Text Reshaping & BiDi Reversal Corrections
          </h3>
          <p>
            Non-RTL design software often renders Arabic script backwards with
            detached letters. The reshaping engine calculates contextual glyph
            joining and reverses letter order so strings copy cleanly without
            manual character re-entry.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            2. Eliminating Index Fragmentation via Tashkeel Normalization
          </h3>
          <p>
            While Arabic vowel markers provide linguistic precision, SQL
            databases often struggle to match vowelled entries against plain
            queries. Strip diacritics to keep internal site searches and
            external index crawlers aligned. For database architecture
            guidelines, review our analysis on{" "}
            <Link
              href="/blog/clean-arabic-database-sql"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              structuring high-performance SQL tables for Arabic text indexes
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            3. Character Counting & SERP Snippet Optimization
          </h3>
          <p>
            Traditional JavaScript counters can be misleading when working with
            complex UTF-8 strings containing diacritics. Our counter engine
            tracks character density, word frequencies, and byte allocations to
            keep your meta tags inside SERP snippet limits.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            4. UTF-8 JSON Formatting & Schema Validation
          </h3>
          <p>
            Standard JSON validators frequently escape raw Arabic keys into
            hexadecimal sequences. Our integrated formatter parses, beautifies,
            and validates JSON-LD payloads while preserving human-readable
            Arabic strings.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            5. Secure Browser-Based OCR Text Extraction
          </h3>
          <p>
            Extracting text from scanned documents or app screenshots usually
            requires sending files to third-party services. Our WebAssembly OCR
            engine processes images entirely within your browser for full data
            privacy.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            Frequently Asked Questions (FAQ)
          </h3>
          <div className="space-y-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Why were the separate tool endpoints merged into this single
                page?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Combining text reshaping, diacritic stripping, character
                counting, JSON formatting, and OCR scanning into one workspace
                prevents context switching and lets you chain operations
                smoothly.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Why do Arabic meta descriptions get truncated in Google
                search results?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Arabic characters take up more horizontal pixel width on
                screen than standard Latin characters. Monitoring visual pixel
                budget prevents unexpected truncation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: How does diacritic stripping help database search
                performance?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Most user queries are unvowelled. Normalizing database lookup
                strings ensures query records match unvowelled user searches.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Is client-side OCR extraction secure for sensitive developer
                data?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Yes. All processing is handled locally by WebAssembly scripts
                in your browser without external file uploads.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            For further technical specifications on bidirectional text
            compliance, refer to the{" "}
            <a
              href="https://unicode.org/faq/arabic.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Unicode Arabic Technical FAQ
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
