// file path: app/tools/arabic-keshida-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title: "Arabic Keshida Generator & Tatweel Text Justifier | TextArabi",
  description:
    "Free online Arabic Keshida (Tatweel) generator to insert or strip elongations, justify paragraph alignment, and fix stretched typography for designers and CSS developers.",
  alternates: {
    canonical: "https://textarabi.com/tools/arabic-keshida-generator/",
  },
};

export default function KeshidaGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Keshida (Tatweel) in Arabic typography?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keshida (or Tatweel character U+0640 'ـ') is a typographic elongation character used in Arabic script to stretch words horizontally between connected letters for paragraph justification and aesthetic Calligraphy balance.",
        },
      },
      {
        "@type": "Question",
        name: "Does adding Keshida break website CSS layouts or SEO indexing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If used in search engine meta tags or URL slugs, excessive Tatweel characters can confuse search crawlers. However, using controlled Keshida insertion in display headings, web typography, and printed designs is completely standard UTF-8 compliant behavior.",
        },
      },
      {
        "@type": "Question",
        name: "How does the browser-based Keshida stripper work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The stripper scans your text using Regular Expressions (Regex) for unicode character U+0640 and strips all instances instantly without altering the underlying letter order, words, or diacritical Tashkeel markings.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Keshida in Adobe Photoshop, Illustrator, or Canva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Simply paste the generated Keshida text into your graphics software text box. It maintains full cursive script connectivity across Adobe Creative Cloud, Figma, and Canva.",
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
          Arabic Keshida (Tatweel) Generator & Justification Tool
        </h1>
        <p className="text-slate-600 font-tajawal text-base max-w-3xl">
          Insert or strip Arabic letter elongations (ـ), achieve elegant
          typographic paragraph justification, and fix visual spacing bugs
          across Web, CSS, and Adobe workflows.
        </p>
      </div>

      {/* Primary Tool Component */}
      <TextUtilityPanel
        initialMode="keshida"
        lang="en"
        allowedTool="arabic-keshida-generator"
      />

      {/* 1200+ Words Technical SEO Guide */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          Mastering Arabic Typography: Complete Guide to Keshida (Tatweel)
          Elongation & Justification
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            Digital typesetting in Right-to-Left (RTL) scripts—specifically
            Arabic, Persian, and Urdu—presents visual and structural challenges
            distinct from Latin-based typography. In Latin script, paragraph
            justification relies heavily on adjusting word-spacing (inter-word
            gaps) and tracking (inter-letter gaps). However, stretching
            word-spacing in Arabic typography destroys the fluid, continuous
            rhythm of cursive script, leading to unsightly white rivers running
            vertically through body paragraphs.
          </p>
          <p>
            To maintain structural legibility and visual elegance, traditional
            calligraphers developed <strong>Keshida</strong> (كشيدة), also known
            as <strong>Tatweel</strong> (تطويل). Instead of expanding inter-word
            margins, calligraphers stretch the horizontal baseline between
            connected characters. Our <strong>TextArabi Keshida Engine</strong>{" "}
            brings this ancient typographic rule into modern web design,
            software development, and digital publishing pipelines.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            1. Understanding the Mechanics of the Unicode Tatweel Character
            (U+0640)
          </h3>
          <p>
            From a software engineering perspective, a Keshida is represented in
            the Unicode standard as <code>U+0640</code> (ARABIC TATWEEL). Unlike
            standard letters, the Tatweel is a non-spacing joiner baseline
            glyph. It possesses dual-joining behavior, meaning it must attach
            seamlessly to the preceding letter&apos;s trailing stroke and the
            subsequent letter&apos;s leading stroke.
          </p>
          <p>
            When processing raw strings for digital displays, improper placement
            of Tatweel characters can lead to broken glyph shapes or detached
            letters. For instance, inserting a Tatweel after non-joining
            letters—such as Alef (ا), Dal (د), Thal (ذ), Ra (ر), Zay (ز), or Waw
            (و)—causes character disconnection because these letters do not
            connect to following glyphs. Our automated algorithm enforces strict
            orthographic rules, ensuring Tatweel insertion only occurs between
            valid cursive ligatures.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            2. Strategic Applications: Graphic Design vs. Web CSS Implementation
          </h3>
          <p>
            Depending on your final output medium, handling Keshida requires
            distinct strategies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Graphic Design & Motion Graphics:</strong> When creating
              banners, video lower-thirds, or print collateral in Adobe
              Photoshop, Illustrator, or Canva, automatic paragraph
              justification frequently fails on Arabic layers. Designers use our
              tool to copy pre-elongated titles or paste justified copy directly
              into text layers without causing letter separation.
            </li>
            <li>
              <strong>CSS Web Typography:</strong> Modern browser engines
              support the CSS property <code>text-justify: keshida;</code> (or{" "}
              <code>text-align-last: justify;</code>). However, browser
              implementation remains inconsistent across mobile WebKit engines.
              Generating explicit Tatweel characters ensures consistent
              paragraph baseline justification across legacy browsers and mobile
              web views alike.
            </li>
            <li>
              <strong>UI/UX Calligraphic Titles:</strong> Hero sections and
              splash screens often utilize exaggerated Keshida styling to
              project authority and calligraphic tradition. You can run your raw
              headings through our tool prior to passing them into your UI
              components.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            3. The SEO Impact: When to Add and When to Strip Keshidas
          </h3>
          <p>
            Search engine algorithms (such as Googlebot) treat Unicode strings
            literally. While humans naturally recognize that <code>مـدونة</code>{" "}
            and <code>مدونة</code> mean the exact same word (&quot;blog&quot;),
            search crawlers indexing database records may fail to equate a
            string filled with Tatweels with its standard counterpart.
          </p>
          <p>
            Therefore, we strongly advise following these SEO best practices:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Keep Metadata Clean:</strong> Never include Tatweel
              characters in URL slugs, <code>&lt;title&gt;</code> tags, or
              canonical links.
            </li>
            <li>
              <strong>Strip Keshida Before Database Insertion:</strong> When
              accepting user input or search queries, strip all Tatweel
              characters using our stripper engine before storing strings in SQL
              indexes. To review optimal database indexing strategies, read our
              guide on{" "}
              <Link
                href="/tools/arabic-text-normalizer/"
                className="text-blue-600 font-semibold underline hover:text-blue-800"
              >
                Arabic text normalization and string cleaning
              </Link>
              .
            </li>
            <li>
              <strong>Use On-Page Safely:</strong> Using Keshida inside visual{" "}
              <code>&lt;h1&gt;</code> or body content is safe for SEO, provided
              your underlying structured data (JSON-LD) uses clean, un-elongated
              strings.
            </li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            4. Combining Keshida with Tashkeel and Character Formatting
          </h3>
          <p>
            Achieving flawless Arabic typography involves juggling multiple
            string properties simultaneously. When adding Keshidas to vowelled
            text, Tashkeel diacritics (Fatha, Damma, Kasra) must remain
            positioned over their respective base consonant letters without
            shifting onto the elongated Tatweel line.
          </p>
          <p>
            If you need to strip diacritics prior to applying Keshida
            justification, or if you need to fix reversed text rendering issues
            caused by legacy design software, route your content through our{" "}
            <Link
              href="/tools/ocr-scanner/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              OCR image extractor
            </Link>{" "}
            or use our all-in-one text normalizer suite.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            Frequently Asked Questions (FAQ)
          </h3>
          <div className="space-y-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: What is Keshida (Tatweel) in Arabic typography?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Keshida (or Tatweel character U+0640 &apos;ـ&apos;) is a
                typographic elongation character used in Arabic script to
                stretch words horizontally between connected letters for
                paragraph justification and aesthetic Calligraphy balance.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Does adding Keshida break website CSS layouts or SEO
                indexing?
              </h4>
              <p className="text-slate-600 text-sm">
                A: If used in search engine meta tags or URL slugs, excessive
                Tatweel characters can confuse search crawlers. However, using
                controlled Keshida insertion in display headings, web
                typography, and printed designs is completely standard UTF-8
                compliant behavior.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: How does the browser-based Keshida stripper work?
              </h4>
              <p className="text-slate-600 text-sm">
                A: The stripper scans your text using Regular Expressions
                (Regex) for unicode character U+0640 and strips all instances
                instantly without altering the underlying letter order, words,
                or diacritical Tashkeel markings.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Can I use Keshida in Adobe Photoshop, Illustrator, or Canva?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Yes. Simply paste the generated Keshida text into your
                graphics software text box. It maintains full cursive script
                connectivity across Adobe Creative Cloud, Figma, and Canva.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            For further technical specifications on Unicode character
            properties, explore the{" "}
            <a
              href="https://unicode.org/charts/PDF/U0600.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Unicode Standard Arabic Character Chart (U0600-U06FF)
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
