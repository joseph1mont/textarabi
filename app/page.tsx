// app/page.tsx
import React from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, ShieldCheck, Code } from "lucide-react";
import TextUtilityPanel from "@/components/TextUtilityPanel";
import { WhyTextArabi } from "@/components/WhyTextArabi"; 

export const metadata = {
  title: "Arabic Text Developer Utilities & Counter | TextArabi",
  description: "Advanced text processing tools, code cleaners, and SEO optimization utilities engineered for fast performance and programmatic monetization.",
  alternates: {
    canonical: "https://textarabi.com",
  },
};

export default function EnglishHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-inter">
      <main className="w-full flex-grow py-12 px-4 max-w-5xl mx-auto">
        {/* Left-Aligned Premium Hero Header */}
        <div className="text-start max-w-2xl mb-10">
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl mb-3 leading-tight tracking-tight">
            Professional Arabic Text Processing & Web Localization Utilities
          </h1>
          <p className="text-slate-600 text-md leading-relaxed">
            An integrated, secure local toolbox for developers and writers to strip diacritics, run string analytics, and resolve cross-platform software typography errors.
          </p>
        </div>

        {/* English Utility Panel Workspace */}
        <TextUtilityPanel initialMode="strip" lang="en" />
        <WhyTextArabi lang="en" />

        {/* Trust Framework Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 w-full">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 text-purple-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Fully Secured Client-Side Sandbox Ecosystem</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                All string trimming, syntax normalization, and normalization filters run locally within your active browser runtime via optimized vanilla engines. No text content ever touches secondary data servers.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between group">
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Comprehensive Developer Guides</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
                Explore dense technical blueprints explaining regex mechanics for Arabic text filtering, multi-byte character calculations, and strategic web architectures engineered for modern SEO targets.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 mt-2">
              <span>Browse Technical Guides and Articles</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </section>

        {/* Knowledge Academy Section */}
        <div className="w-full mt-24">
          <div className="border-t border-slate-200/80 pt-12">
            <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/30 border border-slate-200/60 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>TextArabi Articles</span>
                </h2>
                <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl">
                  Your core technical manual for string optimization, digital formatting, and modern layout design.
                </p>
              </div>
              <Link 
                href="/blog" 
                className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl transition-all shadow-xs shrink-0 group text-center"
              >
                <span>Explore All Available Articles</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}