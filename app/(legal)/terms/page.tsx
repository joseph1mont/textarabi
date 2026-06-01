import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, ShieldAlert, FileText, Ban } from "lucide-react";

export const metadata = {
  title: "Terms of Service | TextArabi",
  description: "Read the Terms of Service for TextArabi. Learn about user responsibilities, client-side resource limitations, and licensing rules.",
  alternates: { canonical: "https://textarabi.com/terms/" },
};

export default function TermsOfServiceEN() {
  const lastUpdated = "May 28, 2026";

  return (
    <div className="w-full bg-slate-50/60 min-h-screen flex flex-col font-sans text-slate-800" dir="ltr">

      {/* MAIN CONTENT HERO */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 md:py-10">
        
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[4px]" />
            <span>Back to Application</span>
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs p-6 md:p-10 space-y-8">
          
          {/* Document Header */}
          <div className="border-b border-slate-100 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Terms of Service</h1>
            <p className="text-xs font-medium text-slate-400">Last Updated: {lastUpdated}</p>
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Welcome to TextArabi. By accessing or using our website located at <Link href="https://textarabi.com" className="text-blue-600 hover:underline">textarabi.com</Link>, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use our client-side platform engines.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <Scale className="w-5 h-5 text-blue-600" />
              <h2>1. Agreement to Terms</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              These Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and TextArabi, concerning your access to and use of our web tools. You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2>2. Intellectual Property Rights</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              Unless otherwise indicated, the site, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the &quote;Content&quot;) and the trademarks, service marks, and logos contained therein are owned or controlled by us, and are protected by copyright and trademark laws. The tools are provided to you &quot;AS IS&quot; for your personal informational and functional development use only.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <Ban className="w-5 h-5 text-blue-600" />
              <h2>3. Prohibited Activities</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              You may not access or use the site for any purpose other than that for which we make the platform available. Prohibited activities include, but are not limited to: systematically retrieving data or script assets to create or compile a database or software application without written permission; bypassing or tampering with client-side security layers; or overloading browser engine scripts with malicious automated scraping loops.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <ShieldAlert className="w-5 h-5 text-blue-600" />
              <h2>4. Disclaimer of Warranties and Limitations of Liability</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              This site is provided on an AS-IS and AS-AVAILABLE basis. You agree that your use of the site and our tools will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof. We make no warranties or representations about the accuracy or completeness of the site’s formatting outputs, engine parsing results, or layouts.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <span className="w-5 h-5 text-blue-600 flex items-center justify-center font-bold text-sm">5.</span>
              <h2>Modifications and Site Interruptions</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the tools without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the site.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}