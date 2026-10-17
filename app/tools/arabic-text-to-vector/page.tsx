// file path: app/tools/arabic-text-to-vector/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title: "Arabic Text to Vector (SVG Path) Outline Converter | TextArabi",
  description:
    "Convert Arabic text, typography, and calligraphic fonts into raw SVG vector path outlines directly in your browser. Lock glyph curves for Figma, Illustrator, and laser cutting.",
  alternates: {
    canonical: "https://textarabi.com/tools/arabic-text-to-vector/",
  },
};

export default function TextToVectorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why convert Arabic text to SVG vector paths?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Converting Arabic text to vector paths outlines the font glyphs into mathematical curves (<path d='...' />). This eliminates missing font errors, prevents missing glyph substitutes, and ensures identical visual rendering across web apps, Figma, Adobe Illustrator, and CNC laser plotters.",
        },
      },
      {
        "@type": "Question",
        name: "Does converting text to paths preserve complex Arabic ligatures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The client-side vector engine processes contextual shaping and ligature grouping before calculating bezier curves, ensuring that joined cursive strokes, Tashkeel diacritics, and calligraphic overlaps convert into unified vector shapes.",
        },
      },
      {
        "@type": "Question",
        name: "Are uploaded custom fonts sent to external servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All font parsing (.ttf, .woff, .otf) and SVG vector path extractions are calculated locally inside your browser using client-side JavaScript. Your custom fonts and text remain entirely private.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use converted SVG paths in CNC machines, laser cutters, or Cricut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The generated SVG path outputs contain clean vector outlines without embedded font references, making them immediately compatible with cutting software such as Cricut Design Space, AutoCAD, or LightBurn.",
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
          Arabic Text to Vector (SVG Path) Converter
        </h1>
        <p className="text-slate-600 font-tajawal text-base max-w-3xl">
          Convert Arabic typography and web fonts into pure SVG vector path
          outlines (`&lt;path&gt;`). Lock in bezier curves permanently for
          Figma, Canva, Adobe Illustrator, and laser cutting.
        </p>
      </div>

      {/* Primary Tool Component */}
      <TextUtilityPanel
        initialMode="vector"
        lang="en"
        allowedTool="arabic-text-to-vector"
      />

      {/* 1200+ Words Technical SEO Guide */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          The Engineering Guide to Converting Arabic Typography into Vector SVG
          Outlines
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            In modern visual communications, vector graphics serve as the
            foundation for scalable Web UI design, brand identities, physical
            signage, and digital product creation. However, rendering
            Right-to-Left (RTL) Arabic typography inside vector environments
            frequently introduces frustrating formatting bugs. Missing font
            files on client devices cause system fallback fonts to render,
            breaking carefully crafted brand aesthetics.
          </p>
          <p>
            The ultimate solution to these typography rendering issues is{" "}
            <strong>Text Outlining (Text-to-Path Conversion)</strong>. By
            translating dynamic text strings into static vector coordinate paths
            (using SVG <code>&lt;path d=&quot;...&quot; /&gt;</code> elements),
            you lock the precise geometry of every Arabic letter curve into
            mathematical vector shapes. Our{" "}
            <strong>TextArabi Vector Converter Suite</strong> performs this
            outline extraction directly inside your web browser.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            1. How Client-Side Font Outline Extraction Operates
          </h3>
          <p>
            When a standard browser renders a web font, it uses font hinting and
            glyph rendering engines to map Unicode codepoints to vector tables
            stored inside OpenType (<code>.otf</code>), TrueType (
            <code>.ttf</code>), or Web Open Font Format (<code>.woff2</code>)
            binary files.
          </p>
          <p>
            When processing Arabic text, the conversion engine must complete
            three distinct technical stages before generating vector curves:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Contextual Glyph Shaping:</strong> Unlike Latin
              characters, which possess static shapes, Arabic letters change
              shape depending on whether they appear in Isolated, Initial,
              Medial, or Final positions. The engine analyzes adjacent
              characters to select the correct contextual glyph ID from the font
              file.
            </li>
            <li>
              <strong>Ligature Resolution & BiDi Reordering:</strong> Complex
              ligatures (such as <code>Lam-Alef لا</code>) and Tashkeel
              diacritic positioning offsets are calculated relative to the base
              glyph metrics.
            </li>
            <li>
              <strong>Bezier Path Extraction:</strong> Once glyph shapes are
              determined, the engine extracts raw quadratic and cubic Bezier
              curve commands (<code>MoveTo</code>, <code>LineTo</code>,{" "}
              <code>CurveTo</code>) and writes them out into standardized SVG
              path strings.
            </li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            2. Core Use Cases: Figma, Web Animation, Print & CNC Plotters
          </h3>
          <p>
            Converting Arabic text to pure vector path data solves critical
            problems across multiple creative industries:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Figma & Web Design UI Kits:</strong> Figma design files
              often fail to render custom Arabic web fonts correctly on devices
              that lack local font installations. Converting UI headings into
              vector paths guarantees that stakeholders see exact visual
              typography during client design reviews.
            </li>
            <li>
              <strong>SVG Web Animations (GSAP / Lottie):</strong> Web
              developers using animation libraries like GSAP or Lottie cannot
              easily animate individual character strokes of dynamic text
              layers. Vectorizing text into discrete SVG path nodes allows
              developers to execute stroke-dashoffset drawing effects on
              calligraphic Arabic scripts.
            </li>
            <li>
              <strong>CNC Laser Cutting & Vinyl Plotters:</strong> Manufacturing
              machinery (such as Cricut cutters, wood routers, and industrial
              laser engravers) requires closed vector line loops to guide
              cutting heads. They cannot read embedded system font files.
              Outlining Arabic text ensures smooth, continuous cutting paths.
            </li>
            <li>
              <strong>Custom Brand Logos:</strong> When finalizing corporate
              branding, converting customized Arabic calligraphic logotypes into
              pure vector geometry prevents unauthorized font substitutions
              during commercial printing.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            3. Privacy & Performance Advantages of In-Browser Processing
          </h3>
          <p>
            Traditional online font converters often require users to upload
            proprietary <code>.ttf</code> or <code>.otf</code> files to remote
            cloud servers, posing significant security and copyright risks when
            working with licensed commercial typefaces or confidential brand
            assets.
          </p>
          <p>
            Our tool operates entirely client-side using WebAssembly and modern
            JavaScript font parsers. Your font files and proprietary text
            strings remain inside your machine&apos;s local memory space.
            Nothing is transmitted to external endpoints, guaranteeing 100%
            compliance with corporate data privacy standards.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            4. Integrating Outlined SVG Vectors into Web Workflows
          </h3>
          <p>
            Once you extract your SVG vector path code, you can paste it
            directly into your HTML/JSX structure:
          </p>
          <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs sm:text-sm overflow-x-auto font-mono">
            {`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" className="w-full h-auto">
  <path d="M10 80 Q 52 10 95 80 T 180 80 ..." fill="currentColor" />
</svg>`}
          </pre>
          <p>
            By setting <code>fill=&quot;currentColor&quot;</code>, your newly
            vectorized Arabic path automatically inherits surrounding CSS color
            definitions, making it effortlessly themeable via Tailwind CSS or
            standard CSS variables.
          </p>
          <p>
            If your source material originates from scanned paper documents or
            calligraphic photos, use our{" "}
            <Link
              href="/tools/ocr-scanner/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              OCR image scanner
            </Link>{" "}
            first to extract clean text strings before converting them into
            vector outlines. To adjust paragraph baseline justification prior to
            vector export, utilize our{" "}
            <Link
              href="/tools/arabic-keshida-generator/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Keshida Tatweel generator
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            Frequently Asked Questions (FAQ)
          </h3>
          <div className="space-y-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Why convert Arabic text to SVG vector paths?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Converting Arabic text to vector paths outlines font glyphs
                into mathematical curves (
                <code>&lt;path d=&quot;...&quot; /&gt;</code>). This eliminates
                missing font errors, prevents missing glyph substitutes, and
                ensures identical visual rendering across web apps, Figma, Adobe
                Illustrator, and CNC laser plotters.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Does converting text to paths preserve complex Arabic
                ligatures?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Yes. The client-side vector engine processes contextual
                shaping and ligature grouping before calculating bezier curves,
                ensuring that joined cursive strokes, Tashkeel diacritics, and
                calligraphic overlaps convert into unified vector shapes.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Are uploaded custom fonts sent to external servers?
              </h4>
              <p className="text-slate-600 text-sm">
                A: No. All font parsing (.ttf, .woff, .otf) and SVG vector path
                extractions are calculated locally inside your browser using
                client-side JavaScript. Your custom fonts and text remain
                entirely private.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Can I use converted SVG paths in CNC machines, laser cutters,
                or Cricut?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Yes. The generated SVG path outputs contain clean vector
                outlines without embedded font references, making them
                immediately compatible with cutting software such as Cricut
                Design Space, AutoCAD, or LightBurn.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            For advanced technical specifications on SVG path string syntax and
            specifications, consult the{" "}
            <a
              href="https://www.w3.org/TR/SVG2/paths.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              W3C SVG 2 Path Specification
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
