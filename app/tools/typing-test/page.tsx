import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title: "Typing Speed Test & WPM Calculator (Arabic & English) | TextArabi",
  description:
    "Test your typing speed and accuracy in real-time with our interactive WPM calculator for both English and Arabic. Features a live 60-second timer, word error strikethrough, and custom text loading.",
  alternates: {
    canonical: "https://textarabi.com/tools/typing-test/",
  },
};

export default function TypingTestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is Words Per Minute (WPM) calculated in the typing test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WPM is calculated based on standard industry metrics where every 5 characters (including spaces and punctuation) equal one standard word. Your net WPM factors in accuracy penalties for uncorrected errors during the timed session.",
        },
      },
      {
        "@type": "Question",
        name: "Does the typing test support both Arabic and English languages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our interactive typing test engine supports both Arabic and English text banks, automatically handling Right-to-Left (RTL) and Left-to-Right (LTR) text flow, diacritics, and keyboard layouts.",
        },
      },
      {
        "@type": "Question",
        name: "When does the timer start during the typing speed test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timer initiates instantly the exact moment you type your first keystroke into the active input box, eliminating friction and providing zero-latency feedback.",
        },
      },
      {
        "@type": "Question",
        name: "Can I load custom texts or practice specific vocabulary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can easily load alternative text blocks or refresh the test dictionary to practice different word sets, technical terminology, or standard literature.",
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
          Typing Speed Test & WPM Practice (Arabic & English)
        </h1>
        <p className="text-slate-600 font-tajawal text-base max-w-3xl">
          Measure your keyboard proficiency, track real-time WPM and accuracy,
          and improve your touch-typing skills in both Arabic and English with
          instant error feedback.
        </p>
      </div>

      {/* Primary Tool Component */}
      <TextUtilityPanel
        initialMode="typing-test"
        lang="en"
        allowedTool="typing-test"
      />

      {/* 1200+ Words Technical SEO Guide */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          The Developer&apos;s Guide to Keyboard Ergonomics, Touch-Typing, and
          WPM Optimization
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            As software developers, full-stack engineers, and digital content
            creators, our primary physical interface with codebases,
            documentation, and communication channels is the keyboard. High
            typing speed coupled with exceptional accuracy directly reduces
            cognitive friction, allowing developers to maintain &quot;flow
            state&quot; while writing complex Next.js architectures, SQL
            queries, or Markdown documentation.
          </p>
          <p>
            Traditional online typing tests often rely on cluttered interfaces
            or server-rendered delays. We engineered the{" "}
            <strong>TextArabi Typing Test Engine</strong> to provide a
            high-performance, distraction-free environment that instantly starts
            upon your first keystroke, applies real-time visual feedback (such
            as word-level strikethrough for errors), and accommodates both
            English and Arabic typographic workflows.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            1. Understanding the Mathematics of WPM and CPM
          </h3>
          <p>
            When evaluating typing efficiency across different languages,
            benchmarking tools convert raw keystrokes into standardized metrics
            to ensure fair comparison:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Characters Per Minute (CPM):</strong> The raw count of
              individual keystrokes, including spaces and punctuation marks,
              executed within a 60-second window.
            </li>
            <li>
              <strong>Gross WPM:</strong> Calculated by dividing total CPM by 5
              (since the industry standard assumes an average word length of 5
              characters).
            </li>
            <li>
              <strong>Net WPM:</strong> Gross WPM minus penalties for
              uncorrected errors. This is the true benchmark of professional
              productivity, rewarding precision over erratic keyboard smashing.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            2. Ergonomic Best Practices for Touch-Typing in Bilingual
            Environments
          </h3>
          <p>
            Switching between Latin scripts (English) and Right-to-Left scripts
            (Arabic) presents unique neuromuscular challenges. To build lasting
            muscle memory:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Home Row Anchor Discipline:</strong> Always anchor your
              index fingers on the tactile bumps of the <code>F</code> and{" "}
              <code>J</code> keys (for English QWERTY) or their equivalent
              Arabic layout positions (<code>ب</code> and <code>ش</code>).
            </li>
            <li>
              <strong>Eliminate Visual Gaze Shifting:</strong> Practice looking
              exclusively at the screen prompt rather than glancing down at
              keycaps. Tools with inline visual tracking help train your eyes to
              anticipate upcoming words.
            </li>
            <li>
              <strong>Prioritize Rhythm Over Burst Speed:</strong> Consistency
              beats erratic bursts. A smooth, metronomic cadence prevents hand
              fatigue and drastically lowers error rates.
            </li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            3. Integrating Speed Testing into Your Daily Creator Routine
          </h3>
          <p>
            Regular 1-minute daily warm-ups on typing utilities can increase
            your average output by 15 to 30 words per minute over a few weeks.
            Once you finish testing your typing speed, you can take your
            generated copy or code notes and clean them up using our other
            utility suites, such as the{" "}
            <Link
              href="/tools/arabic-text-normalizer/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              Arabic text normalizer and cleaner
            </Link>{" "}
            or convert display titles into vector graphics via our{" "}
            <Link
              href="/tools/arabic-text-to-vector/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              SVG text converter tool
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            Frequently Asked Questions (FAQ)
          </h3>
          <div className="space-y-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: How is Words Per Minute (WPM) calculated in the typing test?
              </h4>
              <p className="text-slate-600 text-sm">
                A: WPM is calculated based on standard industry metrics where
                every 5 characters (including spaces and punctuation) equal one
                standard word. Your net WPM factors in accuracy penalties for
                uncorrected errors during the timed session.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Does the typing test support both Arabic and English
                languages?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Yes, our interactive typing test engine supports both Arabic
                and English text banks, automatically handling Right-to-Left
                (RTL) and Left-to-Right (LTR) text flow, diacritics, and
                keyboard layouts.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: When does the timer start during the typing speed test?
              </h4>
              <p className="text-slate-600 text-sm">
                A: The timer initiates instantly the exact moment you type your
                first keystroke into the active input box, eliminating friction
                and providing zero-latency feedback.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                Q: Can I load custom texts or practice specific vocabulary?
              </h4>
              <p className="text-slate-600 text-sm">
                A: Yes, you can easily load alternative text blocks or refresh
                the test dictionary to practice different word sets, technical
                terminology, or standard literature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
