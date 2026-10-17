// file path: app/tools/ocr-scanner/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title: "OCR Text Extractor & Image Scanner Online | TextArabi",
  description:
    "Extract English and multi-language text accurately from images, documents, or screenshots instantly using browser-based AI OCR technology.",
  alternates: {
    canonical: "https://textarabi.com/tools/ocr-scanner/",
  },
};

export default function OcrTextScannerEnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is browser-based OCR free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, client-side tools powered by open-source machine learning models allow unlimited free conversions directly in your browser without requiring subscription fees or API keys.",
        },
      },
      {
        "@type": "Question",
        name: "Can I extract text from low-resolution screenshots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the tool can process low-resolution screenshots, results depend heavily on legibility. For best accuracy, ensure the text is clear, unblurred, and set against a solid contrasting background.",
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

      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-cairo mb-3">
          OCR Text Extractor & Image Scanner
        </h1>
        <p className="text-slate-600 font-tajawal text-sm lg:text-base max-w-2xl mx-auto">
          A fast, secure browser-based utility to extract and convert text from
          scanned documents, marketing flyers, and image captures instantly.
        </p>
      </div>

      <TextUtilityPanel
        initialMode="scan"
        lang="en"
        allowedTool="ocr-scanner"
      />

      <section
        className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200"
        dir="ltr"
      >
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          Advanced Script Optical Character Recognition: A Technical Overview
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            Digitizing printed materials, social media graphics, and
            multilingual documents containing mixed language scripts has
            historically presented a technical bottleneck. Standard optical
            character recognition (OCR) engines frequently fail when handling
            complex typography, directional right-to-left (RTL) baselines, or
            mixed-script layouts.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            Why Client-Side Processing Matters for Data Privacy
          </h3>
          <p>
            When handling corporate invoices, personal screenshots, or
            proprietary marketing designs, data privacy is a primary concern.
            Client-side browser OCR shifts 100% of the computational workload
            directly to your local machine. Your files never leave your device.
            Once extracted, route strings into our{" "}
            <Link
              href="/tools/arabic-text-normalizer/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              text normalization tool
            </Link>{" "}
            to prepare clean strings for meta tags and database entry.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            Frequently Asked Questions (FAQ)
          </h3>
          <div className="space-y-4 my-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Is browser-based OCR free to use?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Yes, client-side tools powered by open-source machine
                learning models allow unlimited free conversions directly in
                your browser without requiring subscription fees or API keys.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Can I extract text from low-resolution screenshots?
              </h4>
              <p className="text-slate-600 text-sm">
                A: While the tool can process low-resolution screenshots,
                results depend heavily on legibility. For best accuracy, ensure
                the text is clear, unblurred, and set against a solid
                contrasting background.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
