import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Cookie, Eye, Scale } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | TextArabi",
  description: "Read the Privacy Policy for TextArabi. Learn how we handle information, our adherence to client-side privacy, and Google AdSense compliance rules.",
  alternates: { canonical: "https://textarabi.com/privacy-policy/" },
};

export default function PrivacyPolicyEN() {
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
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Privacy Policy</h1>
            <p className="text-xs font-medium text-slate-400">Last Updated: {lastUpdated}</p>
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            At TextArabi, accessible from <Link href="https://textarabi.com" className="text-blue-600 hover:underline">textarabi.com</Link>, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information that is collected and recorded by TextArabi and how we use it, specifically concerning compliance with web monetization networks and advertising partners like Google AdSense.
          </p>

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><ShieldCheck className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Local Processing</h4>
                <p className="text-xs text-slate-500 leading-normal">Your data remains client-side inside your browser engine. We do not store text inputs.</p>
              </div>
            </div>
            <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl flex items-start gap-3">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0"><Cookie className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">AdSense Cookies</h4>
                <p className="text-xs text-slate-500 leading-normal">Standard DART cookies serve contextual ads based on previous web interactions.</p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h2>1. Client-Side Runtime & Parsing Data</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              TextArabi operates as a client-side layout processing utility. Content strings, regex matches, and text inputs supplied inside our active dashboards run entirely inside your device sandbox runtime. We do not transmit, log, or persist your text manipulations across any external database infrastructures.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <Cookie className="w-5 h-5 text-blue-600" />
              <h2>2. Log Files and Analytical Cookies</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              TextArabi follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <Eye className="w-5 h-5 text-blue-600" />
              <h2>3. Google DoubleClick DART Cookie</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to textarabi.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <Link href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">https://policies.google.com/technologies/ads</Link>
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <Scale className="w-5 h-5 text-blue-600" />
              <h2>4. Third-Party Privacy Policies & Ad Networks</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              TextArabi&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. 
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
              <span className="w-5 h-5 text-blue-600 flex items-center justify-center font-bold text-sm">5.</span>
              <h2>CCPA & GDPR Data Protection Rights</h2>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pl-7">
              We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us via our official channels.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}