// app/ar/(legal-ar)/privacy-policy/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Cookie, Eye, Scale } from "lucide-react";

export const metadata = {
  title: "سياسة الخصوصية | تيكست عربي",
  description: "اقرأ سياسة الخصوصية لـ تيكست عربي. تعرف على كيفية التعامل مع المعلومات، والتزامنا بالخصوصية من جانب العميل، وقواعد الامتثال لـ Google AdSense.",
  alternates: { canonical: "https://textarabi.com/ar/privacy-policy/" },
};

export default function PrivacyPolicyAR() {
  const lastUpdated = "٢٨ مايو ٢٠٢٦";

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 font-tajawal text-slate-800" dir="rtl">
      
      {/* Back to Application Link */}
      <div className="mb-8">
        <Link 
          href="/ar" 
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[4px]" />
          <span>العودة إلى التطبيق الرئيسي</span>
        </Link>
      </div>

      {/* Main Structural Card Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-2xs space-y-8">
        
        {/* Document Header */}
        <div className="border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">سياسة الخصوصية</h1>
          <p className="text-xs font-medium text-slate-400">آخر تحديث: {lastUpdated}</p>
        </div>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          في تيكست عربي، والتي يمكن الوصول إليها من <Link href="https://textarabi.com/ar" className="text-blue-600 hover:underline">textarabi.com/ar</Link>، تعد خصوصية زوارنا إحدى أولوياتنا الرئيسية. تحدد وثيقة سياسة الخصوصية هذه أنواع المعلومات التي يتم جمعها وتسجيلها بواسطة تيكست عربي وكيفية استخدامها، وتحديداً فيما يتعلق بالامتثال لشبكات تحقيق الدخل من الويب وشركاء الإعلانات مثل Google AdSense.
        </p>

        {/* Quick Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl flex items-start gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0"><ShieldCheck className="w-5 h-5" /></div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">المعالجة المحلية الكاملة</h4>
              <p className="text-xs text-slate-500 leading-normal">تبقى بياناتك بالكامل داخل محرك المتصفح الخاص بجهازك. نحن لا نقوم بحفظ أو تخزين النصوص المدخلة نهائياً.</p>
            </div>
          </div>
          <div className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl flex items-start gap-3">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0"><Cookie className="w-5 h-5" /></div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">ملفات تعريف ارتباط AdSense</h4>
              <p className="text-xs text-slate-500 leading-normal">تُستخدم ملفات تعريف الارتباط القياسية DART لخدمة الإعلانات السياقية بناءً على تفاعلات الويب السابقة.</p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <h2>١. بيئة عمل جانب العميل وبيانات التحليل نصياً</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            يعمل تيكست عربي كأداة معالجة وتنسيق من جانب العميل فقط (Client-Side). يتم تشغيل النصوص البرمجية، ومطابات الـ Regex، ومدخلات البيانات المضمنة داخل لوحات التحكم النشطة بالكامل داخل بيئة حماية جهازك المعزولة. نحن لا نقوم بنقل أو تسجيل أو الاحتفاظ ببياناتك ومعالجاتك عبر أي قواعد بيانات خارجية أو بنى تحتية سحابية.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Cookie className="w-5 h-5 text-blue-600" />
            <h2>٢. ملفات السجل وملفات تعريف الارتباط التحليلية</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            يتبع تيكست عربي الإجراءات القياسية لاستخدام ملفات السجل (Log Files). تقوم هذه ملفات بتسجيل الزوار عند زيارتهم للمواقف الإلكترونية، وتقوم جميع شركات الاستضافة بذلك كجزء من تحليلات خدمات الاستضافة. تشمل المعلومات التي تجمعها ملفات السجل عناوين بروتوكول الإنترنت (IP)، ونوع المتصفح، ومزود خدمة الإنترنت (ISP)، وطابع التاريخ والوقت، وصفحات الإحالة/الخروج، وربما عدد النقرات. هذه البيانات غير مرتبطة بأي معلومات تحدد الهوية الشخصية. الغرض من هذه المعلومات هو تحليل الاتجاهات، وإدارة الموقع، وتتبع حركة المستخدمين على الموقع، وجمع المعلومات الديموغرافية.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Eye className="w-5 h-5 text-blue-600" />
            <h2>٣. ملف تعريف الارتباط Google DoubleClick DART</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            تعد شركة Google أحد البائعين من الأطراف الثالثة على موقعنا. وتستخدم أيضاً ملفات تعريف الارتباط، المعروفة باسم ملفات تعريف الارتباط DART، لخدمة الإعلانات لزوار موقعنا بناءً على زيارتهم لموقع textarabi.com والمواقع الأخرى على الإنترنت. ومع ذلك، يجوز للزوار اختيار رفض استخدام ملفات تعريف الارتباط DART عن طريق زيارة سياسة الخصوصية الخاصة بشبكة إعلانات Google والمحتوى على الرابط التالي: <Link href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all font-sans">https://policies.google.com/technologies/ads</Link>
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Scale className="w-5 h-5 text-blue-600" />
            <h2>٤. سياسات خصوصية الأطراف الثالثة وشبكات الإعلانات</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            لا تنطبق سياسة خصوصية تيكست عربي على المعلنين أو المواقع الإلكترونية الأخرى. وبناءً على ذلك، فإننا ننصحك باستشارة سياسات الخصوصية الخاصة بخوادم إعلانات الأطراف الثالثة هذه للحصول على معلومات أكثر تفصيلاً، حيث قد تتضمن ممارساتهم وإرشاداتهم حول كيفية إلغاء الاشتراك في خيارات معينة.
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            يمكنك اختيار تعطيل ملفات تعريف الارتباط من خلال خيارات المتصفح الفردية الخاصة بك. ولمعرفة معلومات أكثر تفصيلاً حول إدارة ملفات تعريف الارتباط مع متصفحات ويب محددة، يمكن العثور عليها في المواقع الإلكترونية الخاصة بتلك المتصفحات.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <span className="w-5 h-5 text-blue-600 flex items-center justify-center font-bold text-sm">٥.</span>
            <h2>حقوق حماية البيانات بموجب CCPA و GDPR</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            نريد التأكد من أنك على دراية تامة بجميع حقوق حماية البيانات الخاصة بك. يحق لكل مستخدم الحصول على التالي: الحق في الوصول، والحق في التصحيح، والحق في المحو، والحق في تقييد المعالجة، والحق في الاعتراض على المعالجة، والحق في نقل البيانات. إذا قمت بتقديم طلب، فلدينا شهر واحد للرد عليك. إذا كنت ترغب في ممارسة أي من هذه الحقوق، يرجى الاتصال بنا عبر قنواتنا الرسمية.
          </p>
        </section>

      </div>
    </div>
  );
}