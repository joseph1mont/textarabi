// app/page.tsx
import React from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, ShieldCheck, Code } from "lucide-react";
import TextUtilityPanel from "@/components/TextUtilityPanel";
import { WhyTextArabi } from "@/components/WhyTextArabi";

export const metadata = {
  title: "Arabic Text Processing Tools & Word Counter | TextArabi",
  description:
    "A comprehensive suite of web tools for developers, designers, and editors to strip diacritics (Tashkeel), reverse backwards text for design software, count letters/words accurately, and copy clean semantic HTML.",
};

export default function EnglishHomePage() {
  return (
    <main className="w-full py-12 px-4 max-w-5xl mx-auto flex-grow">
      {/* Left-Aligned Premium Hero Header */}
      <div className="text-start max-w-3xl mb-10">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl mb-4 leading-tight tracking-tight">
          Arabic Text Processing & Professional Localization Tools
        </h1>
        <p className="text-slate-600 text-md leading-relaxed mb-4">
          An all-in-one platform engineered to instantly remove Arabic
          vocalization marks (Tashkeel), fix backwards text encoding for
          Photoshop or Illustrator, and calculate accurate multi-byte word and
          character counts. Perfect for digital publishers, web developers, and
          EPUB designers needing reliable text sanitation and clean semantic
          markup.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500" dir="ltr">
          <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            ✓ Automated Arabic Diacritics Addition / Removal
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            ✓ Precise Multi-Byte Arabic Word Counter
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            ✓ Clean Copy-to-HTML & CSS Safe Stacks
          </span>
        </div>
      </div>

      {/* English Utility Panel Workspace Grid */}
      <TextUtilityPanel initialMode="strip" lang="en" />
      <WhyTextArabi lang="en" />

      {/* Trust Framework Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 w-full">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 text-purple-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              100% Secure Local Sandbox Processing
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              All text cleaning, regex sorting, and string mutations occur
              completely client-side right inside your web browser. We
              prioritize absolute data confidentiality and enterprise publishing
              security—none of your copy or proprietary documents are ever
              transmitted or saved to external servers.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between group">
          <div>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Technical Documentation & Localization Guides
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
              Explore custom engineering resources and guides covering Next.js,
              React, and native regular expressions tailored specifically for
              multi-byte Arabic character normalization, layout-thrashing
              prevention, and localized search engine optimization (SEO)
              benchmarks.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 mt-2"
          >
            <span>Browse localization guides and technical articles</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Knowledge Academy Section Box */}
      <div className="w-full mt-24">
        <div className="border-t border-slate-200/80 pt-12">
          <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/30 border border-slate-200/60 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>TextArabi Digital Academy</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl">
                Your standard reference manual for optimizing Arabic language
                search visibility, mastering RTL typography, and implementing
                stable interface translations for international applications.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl transition-all shadow-xs shrink-0 group text-center"
            >
              <span>Explore Guides</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
