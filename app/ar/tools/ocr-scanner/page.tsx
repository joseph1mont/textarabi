// file path: app/ar/tools/ocr-scanner/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title: "أداة استخراج النصوص OCR من الصور اونلاين | TextArabi",
  description:
    "استخرج النصوص العربية والإنجليزية بدقة عالية من الصور، لقطات الشاشة، والمستندات الممسوحة ضوئياً بشكل فوري وآمن داخل المتصفح.",
  alternates: {
    canonical: "https://textarabi.com/ar/tools/ocr-scanner/",
  },
};

export default function OcrTextScannerArPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "هل استخدام أداة الاستخراج الضوئي مجاني بالكامل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، يمكنك إجراء عمليات استخراج غير محدودة مجاناً دون الحاجة لتسجيل حساب أو تثبيت برامج خارجية.",
        },
      },
      {
        "@type": "Question",
        name: "كيف أضمن الحصول على أعلى دقة ممكنة في قراءة النصوص؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تأكد من أن الصورة واضحة وليست مشوشة، وذات تباين عالي (نصوص داكنة على خلفية فاتحة) للحصول على أفضل نتائج ممكنة.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-16" dir="rtl">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-cairo mb-3">
          محول الصور إلى نصوص (OCR) واستخراج الحروف العربية والإنجليزية
        </h1>
        <p className="text-slate-600 font-tajawal text-sm lg:text-base max-w-2xl mx-auto">
          أداة ويب سريعة وآمنة لاستخراج وتحويل النصوص من المستندات، التصميمات،
          ولقطات الشاشة فورياً دون رفع ملفاتك لخوادم خارجية.
        </p>
      </div>

      <TextUtilityPanel
        initialMode="scan"
        lang="ar"
        allowedTool="ocr-scanner"
      />

      {/* SEO & Technical Overview */}
      <section
        className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          دليل تقني حول التعرف الضوئي على الحروف (OCR) للنصوص المعقدة
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            يواجه صناع المحتوى والمطورون تحديات مستمرة عند محاولة استخراج النصوص
            من التصميمات التي تحتوي على حروف عربية متصلة أو اتجاهات كتابة مزدوجة
            (RTL). الأدوات التقليدية غالباً ما تفشل أو تفكك الحروف، مما يتطلب
            تقنيات ذكاء اصطناعي متطورة تفهم طبيعة الخطوط العربية والإنجليزية
            معاً.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            لماذا تعد المعالجة المحلية داخل المتصفح أفضل لخصوصيتك؟
          </h3>
          <p>
            تعتمد هذه الأداة على محركات ذكاء اصطناعي تعمل بالكامل داخل متصفحك
            (Client-Side)، مما يعني أن صورك وفواتيرك الخاصة لا تغادر جهازك أبداً
            ولا يتم تخزينها على أي خوادم خارجية. بعد استخراج النص، يمكنك توجيهه
            مباشرة إلى{" "}
            <Link
              href="/ar/tools/arabic-text-normalizer/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              أداة إزالة التشكيل وتنظيف النصوص
            </Link>{" "}
            لتحضير الكلمات لمحركات البحث وقواعد البيانات.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            الأسئلة الشائعة (FAQ)
          </h3>
          <div className="space-y-4 my-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: هل استخدام أداة الاستخراج الضوئي مجاني بالكامل؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: نعم، يمكنك إجراء عمليات استخراج غير محدودة مجاناً دون الحاجة
                لتسجيل حساب أو تثبيت برامج خارجية.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: كيف أضمن الحصول على أعلى دقة ممكنة في قراءة النصوص؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: تأكد من أن الصورة واضحة وليست مشوشة، وذات تباين عالي (نصوص
                داكنة على خلفية فاتحة) للحصول على أفضل نتائج ممكنة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
