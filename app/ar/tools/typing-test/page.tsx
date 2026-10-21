import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title: "اختبار سرعة الطباعة بالعربية والإنجليزية (WPM) اونلاين | TextArabi",
  description:
    "اختبر سرعة ودقة طباعتك بالعربية والإنجليزية في الوقت الفعلي مع حاسبة الكلمات في الدقيقة (WPM). يتضمن مؤقتاً لمدى دقيقة واحدة، تتبع الأخطاء بالخطوط الحمراء، وخيار تحميل نصوص جديدة.",
  alternates: {
    canonical: "https://textarabi.com/ar/tools/typing-test/",
  },
};

export default function TypingTestArPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كيف يتم حساب عدد الكلمات في الدقيقة (WPM) في هذا الاختبار؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يتم حساب سرعة الكلمات في الدقيقة بناءً على المعايير القياسية، حيث يتم اعتبار كل 5 حروف (بما في ذلك المسافات وعلامات الترقيم) كلمة واحدة. تحسب السرعة الصافية مع خصم عقوبات الأخطاء غير المصححة خلال اختبار الدقيقة الواحدة.",
        },
      },
      {
        "@type": "Question",
        name: "هل يدعم اختبار الطباعة اللغتين العربية والإنجليزية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، يدعم محرك اختبار الطباعة التفاعلي لدينا نصوصاً باللغتين العربية والإنجليزية مع معالجة كاملة لاتجاهات الكتابة من اليمين إلى اليسار (RTL) ومن اليسار إلى اليمين (LTR).",
        },
      },
      {
        "@type": "Question",
        name: "متى يبدأ العد التنازلي للوقت أثناء اختبار الطباعة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يبدأ عداد الوقت تلقائياً في اللحظة التي تكتب فيها أول حرف داخل حقل الإدخال، مما يزيل أي تأخير ويمنحك تفاعلاً فورياً.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكنني تحميل نصوص أخرى أو تغيير الفقرة الحالية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، يمكنك النقر على خيار تحميل نص جديد أو تحديث بنك الكلمات لاختبار مهاراتك على نصوص ومفردات متنوعة متى شئت.",
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
          اختبار سرعة الطباعة بالعربية والإنجليزية (WPM)
        </h1>
        <p className="text-slate-600 font-tajawal text-base max-w-3xl">
          اختبر كفاءة طباعتك، وتتبع سرعة الكلمات في الدقيقة ودقة الأداء فورياً
          باللغتين العربية والإنجليزية مع إبراز الأخطاء وتجربة تفاعلية سلسة.
        </p>
      </div>

      {/* Primary Tool Component */}
      <TextUtilityPanel
        initialMode="typing-test"
        lang="ar"
        allowedTool="typing-test"
      />

      {/* Comprehensive Technical SEO & Developer Guide */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          دليل المطورين والمحترفين: هندسة سرعة الطباعة، الذاكرة العضلية وتحسين
          الإنتاجية
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            باعتبارنا مطوري واجهات برمجية وصناع محتوى رقمي، تظل لوحة المفاتيح
            الأداة الأساسية للتفاعل اليومي مع الأكواد، قواعد البيانات، وتدوين
            الأفكار التقنية. تساهم سرعة الطباعة الفائقة المقترنة بدقة عالية في
            خفض التشتت الذهني والحفاظ على حالة التركيز العميق (Flow State) أثناء
            كتابة التطبيقات والسكربتات.
          </p>
          <p>
            تغلب أداتنا <strong>TextArabi Typing Test</strong> على البطء الموجود
            في الأدوات التقليدية عبر توفير محرك تفاعلي يعمل بالكامل داخل المتصفح
            (Client-Side) مع بدء فوري للعد التنازلي مع أول ضغطة زر، وتمييز
            الكلمات الخاطئة بلغة بصرية واضحة.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            1. فهم حسابات الكلمات في الدقيقة (WPM) وعدد الأحرف (CPM)
          </h3>
          <p>
            تعتمد أدوات القياس الاحترافية على معايير موحدة لتقييم السرعة بغض
            النظر عن لغة النص:
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>
              <strong>الأحرف في الدقيقة (CPM):</strong> إجمالي عدد الضغطات
              الصحيحة والخاطئة بما في ذلك المسافات وعلامات الترقيم خلال دقيقة
              واحدة.
            </li>
            <li>
              <strong>السرعة الإجمالية (Gross WPM):</strong> ناتج قسمة إجمالي
              الأحرف على 5 (باعتبار أن طول الكلمة القياسي يعادل 5 أحرف)، ثم
              القسمة على الزمن بالدقائق.
            </li>
            <li>
              <strong>السرعة الصافية (Net WPM):</strong> السرعة الإجمالية
              مطروحاً منها عقوبات الأخطاء الإملائية غير المصححة، وهي المؤشر
              الحقيقي للإنتاجية المهنية.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            2. أفضل الممارسات والأوضاع المريحة للطباعة باللمس (Touch-Typing)
          </h3>
          <p>
            يتطلب الانتقال من أسلوب النقر العشوائي إلى الطباعة العمياء بناء
            ذاكرة عضلية مستدامة:
          </p>
          <ol className="list-decimal pr-6 space-y-2">
            <li>
              <strong>تثبيت أصابع الارتكاز (Home Row):</strong> المحافظة على
              تمركز أصابع السبابة على النتوات البارزة في مفاتيح <code>F</code> و{" "}
              <code>J</code> (أو ما يقابلها في لوحة المفاتيح العربية).
            </li>
            <li>
              <strong>منع النظر المتكرر للوحات المفاتيح:</strong> تدريب العين
              على متابعة النص المعروض على الشاشة مباشرة بدلاً من تفقد الحروف
              يدوياً.
            </li>
            <li>
              <strong>الاستمرارية والإيقاع المتزن:</strong> تفادي الاندفاع
              العشوائي الذي يرفع معدل الأخطاء، والتركيز على إيقاع متسق يقلل من
              إجهاد عضلات اليدين.
            </li>
          </ol>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            3. التكامل مع أدوات معالجة النصوص في منصتنا
          </h3>
          <p>
            بعد الانتهاء من اختبار سرعة الطباعة أو صياغة نصوصك وملاحظاتك
            البرمجية، يمكنك تضمينها وتحسينها عبر أدواتنا الأخرى مثل{" "}
            <Link
              href="/ar/tools/arabic-text-normalizer/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              منقي ومعالج النصوص العربية
            </Link>{" "}
            أو تحويل العناوين البارزة إلى رسومات متجهة عبر{" "}
            <Link
              href="/ar/tools/arabic-text-to-vector/"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              مُحول النصوص إلى SVG
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            الأسئلة الشائعة (FAQ)
          </h3>
          <div className="space-y-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: كيف يتم حساب عدد الكلمات في الدقيقة (WPM) في هذا الاختبار؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: يتم حساب سرعة الكلمات في الدقيقة بناءً على المعايير القياسية،
                حيث يتم اعتبار كل 5 حروف (بما في ذلك المسافات وعلامات الترقيم)
                كلمة واحدة. تحسب السرعة الصافية مع خصم عقوبات الأخطاء غير
                المصححة خلال اختبار الدقيقة الواحدة.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: هل يدعم اختبار الطباعة اللغتين العربية والإنجليزية؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: نعم، يدعم محرك اختبار الطباعة التفاعلي لدينا نصوصاً باللغتين
                العربية والإنجليزية مع معالجة كاملة لاتجاهات الكتابة من اليمين
                إلى اليسار (RTL) ومن اليسار إلى اليمين (LTR).
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: متى يبدأ العد التنازلي للوقت أثناء اختبار الطباعة؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: يبدأ عداد الوقت تلقائياً في اللحظة التي تكتب فيها أول حرف
                داخل حقل الإدخال، مما يزيل أي تأخير ويمنحك تفاعلاً فورياً.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: هل يمكنني تحميل نصوص أخرى أو تغيير الفقرة الحالية؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: نعم، يمكنك النقر على خيار تحميل نص جديد أو تحديث بنك الكلمات
                لاختبار مهاراتك على نصوص ومفردات متنوعة متى شئت.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
