// file path: app/ar/tools/arabic-text-normalizer/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title:
    "منقي ومعالج النصوص العربية، عداد الأحرف، تنسيق JSON واستخراج OCR | TextArabi",
  description:
    "أداة احترافية وشاملة لمعالجة النصوص العربية: إزالة التشكيل، إصلاح تداخل وحروف الفوتوشوب المقلوبة، عداد الأحرف وسوم الميتا، تنسيق بيانات JSON، واستخراج النصوص من الصور (OCR).",
  alternates: {
    canonical: "https://textarabi.com/ar/tools/arabic-text-normalizer/",
  },
};

export default function ArabicTextNormalizerArPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ماذا يقدم محرك منقي ومعالج النصوص العربية الشامل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يوفر المنقّي الشامل ست وظائف برمجية متكاملة: إصلاح النصوص المقلوبة والمفصولة، إزالة التشكيل والحركات الإعرابية، حساب عدد الأحرف والبايتات لوسوم الميتا، تنسيق وتجميل هياكل JSON الحاوية على مفاتيح عربية، واستخراج النصوص الضوئي من الصور (OCR) محلياً داخل المتصفح.",
        },
      },
      {
        "@type": "Question",
        name: "كيف تساهم إزالة التشكيل في رفع كفاءة قواعد البيانات ومحركات البحث (SEO)؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نادراً ما يدخل المستخدمون الحركات والإعراب أثناء البحث. بتوحيد النصوص وتجريدها من التشكيل (مثل الفتحة والضمة والكسرة) في السجلات وفهارس البحث، تضمن مطابقة الاستعلامات بدقة وتتجنب عدم توافق نتائج SQL وNoSQL.",
        },
      },
      {
        "@type": "Question",
        name: "لماذا يظهر النص العربي مقلوباً أو مفصولاً في برامج التصميم كـ Adobe Photoshop؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تعتمد بعض المحركات الرسومية والبرامج القديمة افتراضياً على تدفق النصوص اللاتينية (LTR) وتفتقر لمعالجة خوارزمية الاتجاه الثنائي (BiDi). تقوم أداتنا بإعادة تشكيل وتوصيل مصفوفات الحروف لتعمل بسلاسة داخل طبقات التصميم.",
        },
      },
      {
        "@type": "Question",
        name: "هل يؤدي تنسيق JSON إلى تلف أو تغيير ترميز الحروف العربية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "لا. يحافظ المحلل على ترميز UTF-8 الأصلي دون تحويل الحروف العربية إلى تسلسلات سداسية عشرية مشفرة (مثل \\u0627\\u0644)، مما يضمن صحة واستقرار بيانات Schema.org وواجهات APIs.",
        },
      },
      {
        "@type": "Question",
        name: "هل استخراج النصوص من الصور (OCR) آمن للبيانات والمستندات الحساسة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم بالتأكيد. تتم جميع عمليات التعرف الضوئي على الحروف محلياً داخل متصفحك عبر تقنيات WebAssembly دون رفع أي صور أو ملفات إلى خوادم خارجية.",
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

      <div className="max-w-5xl mx-auto px-4 mb-8 text-right">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-cairo mb-3">
          منقي ومعالج النصوص العربية الاحترافي ومنظومة المطورين
        </h1>
        <p className="text-slate-600 font-tajawal text-base max-w-3xl">
          أصلح النصوص المقلوبة، أزل التشكيل والحركات، احسب الأحرف لوسوم الميتا،
          نسّق ملفات JSON ثنائية الاتجاه، واستخرج النصوص من الصور (OCR) عبر بيئة
          عمل واحدة وآمنة داخل متصفحك.
        </p>
      </div>

      {/* Primary Tool Panel */}
      <TextUtilityPanel
        initialMode="reverse"
        lang="ar"
        allowedTool="arabic-text-normalizer"
      />

      {/* SEO & Developer Comprehensive Technical Guide */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          الدليل الهندسي الشامل: معالجة البيانات والنصوص العربية برمجياً
          لتطبيقات الويب الحديثة
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            تفرض معالجة الواجهات والتخطيطات العربية عبر بنيات الويب الموزعة
            تعقيداً هندسيًا كبيراً. فبخلاف اللغات اللاتينية، تتطلب اللغات ذات
            الكتابة من اليمين إلى اليسار (RTL) معالجة متقدمة لاتجاهات النص
            ثنائية الاتجاه (BiDi)، والتحكم في المؤشرات، وإعادة تشكيل الرموز
            ديناميكياً. وعندما تتفاعل تطبيقات الصفحة الواحدة المصممة بإطارات عمل
            حديثة مثل <strong>Next.js</strong> أو <strong>React</strong> مع
            قواعد بيانات قديمة، أو محركات بحث، أو برامج تصميم خارجية، قد تحدث
            اختلالات في تسلسل السلاسل النصية.
          </p>
          <p>
            تدمج منظومة <strong>TextArabi</strong> الأدوات والوظائف التقنية ضمن
            واجهة وحدوية فائقة الأداء للقضاء على تجزئة الفهارس، وأخطاء العرض
            البصري، وتلف ترميز البيانات.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            1. إعادة تشكيل الحروف وإصلاح الاتجاهات المعكوسة (BiDi)
          </h3>
          <p>
            عند نسخ النصوص العربية إلى برامج المونتاج أو محركات الرسم النقطي غير
            المهيأة، تظهر الحروف بشكل معكوس ومفصول (مثل &quot;ا ل س ل ا م&quot;
            بدلاً من &quot;السلام&quot;). يحسب محرك التشكيل الأشكال السياقية
            للحروف (في بداية الكلمة، وسطها، نهايتها، أو المنفصلة) ويقوم بتعديل
            ترتيب الرموز لتستقر وتظهر بسلاسة في كافة البرامج المحررة. لمزيد من
            التفاصيل حول برامج التصميم، مراجعة دليلنا حول{" "}
            <Link
              href="/ar/blog/fix-premiere-illustrator-arabic"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              حل مشكلة ظهور الكلمات العربية من اليسار إلى اليمين في برامج أدوبي
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            2. إزالة التشكيل وتوحيد فهارس البحث
          </h3>
          <p>
            تسبب علامات التشكيل (الفتحة، الضمة، الكسرة، التنوين، والشدة) فشلاً
            حاداً في استعلامات قواعد البيانات المطابقة تماماً (Exact Match)،
            نظراً لأن المستخدمين يكتبون كلمات البحث خالية تماماً من التشكيل.
            يقوم فلتر التنقية بحذف رموز التشكيل ضمن نطاق Unicode (U+064B إلى
            U+0652) مع الإبقاء على الحروف الأصلية، مما يرفع دقة نتائج البحث.
            يمكنك الاطلاع على{" "}
            <Link
              href="/ar/blog/seo-strip-diacritics"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              دراسة إزالة التشكيل لتحسين محركات البحث
            </Link>{" "}
            و{" "}
            <Link
              href="/ar/blog/clean-arabic-database-sql"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              هيكلة جداول SQL عالية الأداء لفهارس النصوص العربية
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            3. عداد الأحرف ودقة وسوم الميتا (Meta Tags Audit)
          </h3>
          <p>
            تستلك الحروف العربية مساحة عرض بصري (بالبكسل) أكبر داخل مستطيلات
            نتائج بحث جوجل مقارنة بالحروف اللاتينية. تتبع أداتنا عدد الحروف
            الفعلي، الكلمات، وحجم البايتات المستهلكة لضمان عدم قطع الملاحظات
            الوصفية والعناوين في صفحات النتائج. لمزيد من الشرح المعماري، راجع{" "}
            <Link
              href="/ar/blog/seo-developer-guide-character-counter-tashkeel-removal"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              دليل مطوري SEO لحساب الأحرف وإزالة التشكيل
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            4. تنسيق حمولات JSON ودعم ترميز UTF-8
          </h3>
          <p>
            تحول محلات JSON القياسية النصوص العربية إلى رموز يونيكود سداسية
            عشرية (مثل <code>\u0627\u0644</code>). يقوم المنسق بتجميل وتدقيق
            ملفات JSON مع الحفاظ الكامل على السلاسل العربية الواضحة وتوافق
            مخططات Schema.org، مما يمنع أخطاء التحليل في أدوات Google Search
            Console.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            5. استخراج النصوص الضوئي (OCR) محلياً وبأممان تام
          </h3>
          <p>
            استخرج النصوص العربية والإنجليزية من التصميمات، المستندات الممسوحة
            ضوئياً، ولقطات الشاشة فورياً. يتم تنفيذ المحرك الضوئي بالكامل داخل
            المتصفح، مما يعني أن مستنداتك وصورك الحساسة لا تترك جهازك مطلقاً ولا
            ترفع لأي سيرفرات خارجية.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            الأسئلة الشائعة (FAQ) حول الاختناقات التقنية
          </h3>
          <div className="space-y-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: لماذا تم دمج الأدوات الفرعية في هذه الصفحة الموحدة؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: يتيح دمج أدوات التشكيل، تنظيف التشكيل، عداد الأحرف، منسق
                JSON، والاستخراج الضوئي العمل على النص عبر مراحل متتابعة في مكان
                واحد دون الحاجة للتنقل بين عدة صفحات.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: هل تؤدي إزالة التشكيل إلى تغيير الحروف العربية الأساسية؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: لا. تستهدف الخوارزمية بدقة نطاق الحركات والإعراب فقط، وتترك
                الحروف الصامتة والأساسية كما هي دون أي تغيير.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: هل يتم تخزين البيانات أو الصور المعالجة على سيرفرات خارجية؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: إطلاقاً. تتم جميع عمليات المعالجة والتنسيق والاستخراج محلياً
                في متصفح المستخدم (Client-Side)، مما يوفر حماية كاملة لخصوصية
                بياناتك.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            للمزيد من المعايير والمواصفات العالمية المعتمَدة حول كتابة وتشكيل
            النصوص العربية، يمكنك الاطلاع على{" "}
            <a
              href="https://unicode.org/faq/arabic.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              المرجع التقني للكونسورتيوم الموحد للغة العربية (Unicode
              Consortium)
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
