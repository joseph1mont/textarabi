import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertTriangle, Settings, RefreshCw, HelpCircle } from "lucide-react";

// 1. تهيئة الـ Metadata الكاملة لتحسين الظهور في نتائج البحث (SEO)
export const metadata = {
  title: "حل مشكلة الكتابة المعكوسة والحروف المتقطعة في الفوتوشوب يدعم العربية",
  description: "دليل شامل ومحدث لعام 2026 لحل مشكلة اللغة العربية في برنامج Photoshop وتعديل الخطوط المقلوبة والمتقطعة يدوياً أو باستخدام أداة المعالجة الفورية.",
  alternates: { canonical: "https://textarabi.com/fix-arabic-photoshop" },
  openGraph: {
    title: "حل مشكلة الكتابة المعكوسة والحروف المتقطعة في الفوتوشوب",
    description: "حل مشكلة اللغة العربية في برنامج Photoshop وتعديل الخطوط المقلوبة.",
    url: "https://textarabi.com/fix-arabic-photoshop",
    siteName: "تيكست عربي",
    locale: "ar_EG",
    type: "article",
  },
};

export default function PhotoshopArticlePage() {
  // 2. بناء بيانات ميكرو داتا (JSON-LD) لإخبار جوجل بهيكل المقال والأسئلة الشائعة
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "حل مشكلة الكتابة المعكوسة والحروف المتقطعة في الفوتوشوب يدعم العربية",
    "description": "دليل شامل ومحدث لحل مشكلة اللغة العربية في برنامج Photoshop وتعديل الخطوط المقلوبة والمتقطعة يدوياً أو باستخدام أداة المعالجة الفورية.",
    "inLanguage": "ar",
    "url": "https://textarabi.com/fix-arabic-photoshop",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://textarabi.com/fix-arabic-photoshop"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "لماذا تظهر الحروف مقطوعة ومعكوسة في الفوتوشوب؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تحدث هذه المشكلة بسبب عدم تفعيل محرك النصوص العالمي (World-Ready Layout) المسؤول عن معالجة اللغات التي تُكتب من اليمين إلى اليسار مثل العربية."
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4" dir="rtl">
      {/* حقن الـ JSON-LD في الـ Head برمجياً */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-8">
        <Link 
          href="/" 
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          <span>العودة إلى أداة معالجة النصوص الرئيسية</span>
        </Link>
      </div>

      <div className="border border-slate-200 rounded-2xl shadow-xs bg-white p-6 md:p-10 font-cairo">
        <article className="space-y-6">
          
          <header className="border-b pb-6 border-slate-100">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight font-tajawal">
              حل مشكلة الكتابة المعكوسة والحروف المتقطعة في الفوتوشوب يدعم العربية
            </h1>
            <p className="text-slate-500 text-sm">
              تصنيف: <span className="text-blue-600 font-medium">شروحات التصميم والسيو</span> | آخر تحديث: مايو 2026
            </p>
          </header>

          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            تعتبر مشكلة <strong>الكتابة المعكوسة في الفوتوشوب</strong> وظهور الحروف العربية بشكل متقطع ومنفصل (مثل: ت ي ك س ت ع ر ب ي) من أشهر المشاكل المزعجة التي تواجه المصممين وصناع المحتوى العرب عند فتح أو تحديث برامج Adobe الرائدة، وخاصة برنامج Photoshop. في هذا الدليل العملي، سنتعرف على الأسباب التقنية لهذه المشكلة وكيفية معالجتها يدوياً من الإعدادات، أو تلقائياً عبر أداتنا الذكية السريعة.
          </p>

          <div className="bg-amber-50/50 border border-amber-200 p-5 rounded-xl flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1 font-tajawal">لماذا تظهر الخطوط العربية مقلوبة في برامج التصميم؟</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                تحدث هذه المشكلة الفنية عندما يتم ضبط محرك النصوص الافتراضي داخل البرنامج على وضع (East Asian) بدلاً من محرك النصوص العالمي الذي يدعم خصائص اللغات الشرق أوسطية (Middle Eastern) التي تُكتب من اليمين إلى اليسار وتتطلب تشبيكاً ديناميكياً للحروف.
              </p>
            </div>
          </div>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal">
              <Settings className="w-5 h-5 text-slate-500" />
              <span>أولاً: تعديل إعدادات محرك النصوص داخل Photoshop</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              لإصلاح المشكلة بشكل دائم داخل إصدارات فوتوشوب الحديثة، اتبع الخطوات التقنية التالية بدقة:
            </p>
            <ol className="list-decimal list-inside text-slate-600 space-y-2 pr-2 text-sm md:text-base">
              <li>من القائمة العلوية للبرنامج، توجه إلى <strong className="font-mono text-slate-800">Edit</strong> ثم اختر <strong className="font-mono text-slate-800">Preferences</strong>.</li>
              <li>انقر على تبويب <strong className="font-medium text-blue-600">Type</strong> (الكتابة).</li>
              <li>ضمن خيارات محرك النصوص (Choose Text Engine Options)، قم بتحديد خيار <strong>World-Ready Layout</strong> أو <strong>Middle Eastern and South Asian</strong>.</li>
              <li>اضغط على <strong>OK</strong>، ثم قم بإغلاق برنامج الفوتوشوب وإعادة تشغيله مرة أخرى لتفعيل التغييرات.</li>
            </ol>
          </section>

          <section className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal">
              <RefreshCw className="w-5 h-5 text-blue-600" />
              <span>ثانياً: معالجة النصوص العربية المقلوبة فوراً (أونلاين)</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              إذا كنت تعمل على جهاز كمبيوتر عام، أو تستخدم إصداراً قديماً من برامج التصميم لا يدعم هذه الإعدادات، يمكنك استخدام الميزة المخصصة لدينا لتحويل النصوص برمجياً وتجهيزها للنسخ واللصق المباشر.
            </p>
            
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  تقوم أداة <strong>مصحح خطوط فوتوشوب</strong> في منصتنا بقلب وترتيب عظام الحروف برمجياً لتدخل إلى البرنامج وتظهر متناسقة تماماً ومقروءة من اليمين إلى اليسار.
                </p>
              </div>
              <Link 
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold py-2.5 px-4 rounded-lg shrink-0 transition-all text-center w-full sm:w-auto"
              >
                اصنع نصك المتوافق الآن مجاناً
              </Link>
            </div>
          </section>

          {/* قسم الأسئلة الشائعة لزيادة حجم المقال وإثراء الكلمات المفتاحية لمراجعي أدسينس */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              <span>أسئلة شائعة حول لغة فوتوشوب العربية</span>
            </h2>
            
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
                <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">هل يحل هذا التعديل مشكلة الكتابة في البريمير واليسريتور؟</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  نعم، نفس الفكرة البرمجية تنطبق على برامج Adobe الأخرى مثل Premiere Pro و Illustrator؛ حيث تحتوي إعدادات النصوص (Type) لديهم على خيار مشابه لتفعيل المحرك العالمي يدعم توجيه النصوص الشرق أوسطية.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
                <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">ماذا أفعل إذا استمرت المشكلة بعد تعديل الإعدادات؟</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  تأكد من حذف طبقة النص (Text Layer) القديمة المكتوبة قبل تعديل الإعدادات وفتح طبقة جديدة تماماً، لأن الإعدادات الجديدة لا تنطبق تلقائياً على النصوص المكتوبة مسبقاً.
                </p>
              </div>
            </div>
          </section>

          <footer className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
            تم إعداد هذا الدليل الفني لمساعدة المصممين العرب على تجاوز مشكلات الكتابة المعكوسة وتعديل الخطوط المقلوبة لرفع كفاءة الإنتاج الرقمي.
          </footer>

        </article>
      </div>
    </div>
  );
}