// app/about/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About | Eng. Joseph Thomas",
  description:
    "Meet Eng. Joseph Thomas, a CS Engineer with 25+ years of experience in SEO, web development, and former IT instructor at Aleppo University.",
};

export default function AboutEN() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-black mb-6">About Eng. Joseph Thomas</h1>
        <p className="text-lg text-slate-700 mb-6">
          I am Eng. Joseph Thomas, a Computer Science Engineer and graduate of
          Aleppo University. With a career spanning over 25 years, I have been
          deeply involved in web development and SEO since 1999. My professional
          journey includes serving as an IT instructor at Aleppo University,
          where I shared my technical knowledge with the next generation of
          engineers.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Technical & Linguistic Expertise
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
          <li>
            <strong>Academic Background:</strong> Former IT Instructor at Aleppo
            University and CS Engineering graduate.
          </li>
          <li>
            <strong>Software Engineering:</strong> Extensive experience in Adobe
            Suite and full-stack web development.
          </li>
          <li>
            <strong>Linguistic Mastery:</strong> Specialist in Arabic grammar,
            vocalization (Tashkeel), and algorithmic text processing.
          </li>
          <li>
            <strong>Multilingual Background:</strong> With academic experience
            at Concordia University in Montreal, I bring a unique cross-cultural
            perspective to web design, specializing in bilingual (AR/EN/FR)
            architectures.
          </li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2">My Mission</h3>
          <p className="text-slate-700">
            I leverage my academic background and 25 years of industry
            experience to provide precision tools for text processing. From SEO
            audits to resolving complex RTL (Right-to-Left) typography issues, I
            am dedicated to engineering robust, high-performance digital
            solutions.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t">
          <p>Learn more about my professional services:</p>
          <Link
            href="https://freelancewebdesignusa.com/"
            className="text-blue-600 font-bold hover:underline"
          >
            https://freelancewebdesignusa.com/
          </Link>
        </div>
      </div>
    </div>
  );
}
