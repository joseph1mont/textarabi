import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata = {
  title: "Professional Arabic Text Normalizer & Developer Toolkit",
  description:
    "A developer-focused Arabic utility to strip diacritics, fix Adobe character reversal, and normalize text for database and SEO efficiency.",
};

export default function ToolPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-10">
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 font-cairo">
          Arabic Text Normalizer & Utilities
        </h1>
        <p className="text-slate-600 mb-8 font-tajawal">
          The professional-grade toolkit for Arabic localization, web
          development, and SEO optimization.
        </p>
      </div>

      <TextUtilityPanel initialMode="strip" lang="en" />

      {/* SEO & AdSense Contextual Content */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo">
          Technical Guide: Normalizing Arabic for Modern Web Apps
        </h2>
        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-4">
          <p>
            Handling Arabic text in web applications often leads to technical
            debt. From Unicode normalization (NFC/NFD) conflicts to rendering
            issues in design software, developers face significant hurdles. Our{" "}
            <strong>Arabic Text Normalizer</strong> is designed to solve these
            exact pain points programmatically.
          </p>

          <h3 className="text-lg font-bold">Why Normalize Arabic Content?</h3>
          <p>
            Database performance and SEO rankings rely on data consistency.
            Diacritics (Tashkeel) are often essential for readability but
            detrimental to search indexing and database sorting. Stripping
            diacritics creates a &apos;canonical&apos; version of your strings,
            ensuring your search functionality returns accurate results
            regardless of how users type their queries.
          </p>

          <h3 className="text-lg font-bold">
            Solving the &quot;Photoshop/Adobe&quot; Reversal Bug
          </h3>
          <p>
            When you copy Arabic text from Adobe Illustrator or Photoshop,
            characters often appear reversed or disconnected. This is due to the
            lack of native RTL support in many creative suites. Our
            <em>Photoshop Fixer</em> re-orders these glyphs, making them usable
            in web-native environments like WordPress, React, or standard HTML
            templates.
          </p>
        </div>
      </section>
    </main>
  );
}
