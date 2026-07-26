// app/page.tsx
import React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  BookOpen,
  ChevronRight,
  ShieldCheck,
  Code,
  Cpu,
  Database,
  FileText,
} from "lucide-react";
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

      {/* Substantive Editorial & Technical Architecture Section for AdSense Compliance */}
      <section className="my-16 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4 border border-blue-100">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Architecture & Engineering Insights</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
            Solving Multi-Byte Arabic Text Fragmentation in Modern Web Stacks
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              Developing scalable web applications, publishing portals, and
              content management systems for the Arabic language requires
              solving core character encoding and normalization challenges.
              Unlike Latin-script environments where tokenization is
              straightforward, Arabic typography introduces combining diacritics
              (
              <Link
                href="/blog/comprehensive-tashkeel-guide"
                className="text-blue-600 hover:underline font-medium"
              >
                Tashkeel
              </Link>
              ), dual-byte character variants, and right-to-left (RTL)
              directional rendering rules that routinely cause query mismatches
              and broken indexing states in relational database engines.
            </p>
            <p>
              When raw vocalized strings containing combining marks such as
              Fatha, Damma, and Shadda are stored directly in search indices,
              query miss rates can skyrocket. Users typing unvocalized search
              queries fail to retrieve matching database records, degrading user
              experience and signaling low search utility to automated
              evaluation crawlers. TextArabi provides frontend architects and
              backend engineers with the precise string manipulation layers,
              regular expression middleware utilities, and{" "}
              <Link
                href="/blog/clean-arabic-database-sql"
                className="text-blue-600 hover:underline font-medium"
              >
                dual-column schema patterns
              </Link>{" "}
              required to decouple human-facing typography from
              machine-optimized search vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100">
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Database className="w-4 h-4 text-blue-600" />
                <span>SQL Normalization</span>
              </div>
              <p className="text-xs text-slate-500">
                Dual-column patterns separating human display text from
                indexable search strings.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Unicode Precision</span>
              </div>
              <p className="text-xs text-slate-500">
                Regex filtering protecting zero-width joiners and combining mark
                sequences.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Code className="w-4 h-4 text-blue-600" />
                <span>Client-Side Sandbox</span>
              </div>
              <p className="text-xs text-slate-500">
                Zero-retention local processing guaranteeing strict proprietary
                data security.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Featured Articles Section for Internal Linking */}
      <section className="my-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              Featured Technical Guides & Articles
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Deep-dive engineering tutorials on Arabic typography, database
              normalization, and SEO.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 hidden sm:inline-flex items-center gap-1"
          >
            <span>View all articles</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Article Card 1 */}
          <Link
            href="/blog/clean-arabic-database-sql"
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-blue-300 transition-all group block"
          >
            <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-3">
              Database Architecture
            </span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              Structuring Clean SQL Databases for High-Performance Text Content
              Indexes
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
              Learn structural design patterns for handling character variants
              and diacritics in database lookup engines.
            </p>
          </Link>

          {/* Article Card 2 */}
          <Link
            href="/blog/comprehensive-tashkeel-guide"
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-blue-300 transition-all group block"
          >
            <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-3">
              SEO & Diacritics
            </span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              The Comprehensive Guide to Arabic Diacritics: Balancing Literacy
              and SEO
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
              Master managing Arabic diacritics in digital content while
              maintaining high search engine visibility and E-E-A-T.
            </p>
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

      {/* Grow Widget Integration */}
      <Script
        id="grow-initializer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));})();
          `,
        }}
      />
      <Script
        id="grow-widget-loader"
        src="https://faves.grow.me/main.js"
        data-grow-faves-site-id="U2l0ZTo3ZTM0ZjQ2Ni0wM2Y5LTRlN2ItOTY5OS1kMThlMTgyN2ZmMzI="
        strategy="afterInteractive"
        defer
      />
    </main>
  );
}
