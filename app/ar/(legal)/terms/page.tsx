// file path: app/ar/(legal-ar)/terms/page.tsx
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Scale, ShieldAlert, FileText, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "شروط الخدمة | تيكست عربي",
  description:
    "اقرأ شروط الخدمة الخاصة بـ تيكست عربي. تعرف على مسؤوليات المستخدم، وقيود موارد جانب العميل، وقواعد الترخيص.",
  alternates: {
    canonical: "https://textarabi.com/ar/terms",
  },
};

export default function TermsOfServiceAR() {
  const lastUpdated = "28 مايو 2026";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "شروط الخدمة | تيكست عربي",
      description:
        "شروط الخدمة التي تحكم استخدام أدوات تيكست عربي، والترخيص، والمعالجة من جانب العميل.",
      url: "https://textarabi.com/ar/terms",
      inLanguage: "ar",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://textarabi.com/ar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "شروط الخدمة",
          item: "https://textarabi.com/ar/terms",
        },
      ],
    },
  ];

  return (
    <div
      className="max-w-4xl mx-auto px-4 py-12 md:py-16 font-tajawal text-slate-800"
      dir="rtl"
    >
      {/* Schema.org Structured Data */}
      {jsonLd.map((schema, index) => (
        <script
          key={`terms-ar-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Back to Application Link (Fixed for RTL) */}
      <div className="mb-8">
        <Link
          href="/ar"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group"
        >
          <ArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-[4px]" />
          <span>العودة إلى التطبيق الرئيسي</span>
        </Link>
      </div>

      {/* Main Structural Card Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-2xs space-y-8">
        {/* Document Header */}
        <div className="border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            شروط الخدمة
          </h1>
          <p className="text-xs font-medium text-slate-400">
            آخر تحديث: {lastUpdated}
          </p>
        </div>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          مرحباً بكم في تيكست عربي. من خلال الوصول إلى موقعنا الإلكتروني
          المتواجد على{" "}
          <Link
            href="https://textarabi.com/ar"
            className="text-blue-600 hover:underline font-sans"
            dir="ltr"
          >
            textarabi.com/ar
          </Link>{" "}
          أو استخدامه، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا
          توافق على جميع هذه الشروط، فلا تقم بالوصول إلى محركات وأدوات المنصة
          الخاصة بنا أو استخدامها.
        </p>

        {/* Section 1 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Scale className="w-5 h-5 text-blue-600" />
            <h2>1. الموافقة على الشروط</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            تشكل هذه الشروط اتفاقية ملزمة قانوناً بينك، سواء شخصياً أو نيابة عن
            كيان، وبين تيكست عربي، فيما يتعلق بوصولك إلى أدوات الويب الخاصة بنا
            واستخدامها. أنت توافق على أنه بمجرد دخولك إلى الموقع، فإنك قد قرأت
            وفهمت ووافقت على الالتزام بجميع هذه الشروط.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <FileText className="w-5 h-5 text-blue-600" />
            <h2>2. حقوق الملكية الفكرية</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            ما لم يُذكر خلاف ذلك، فإن الموقع، بما في ذلك جميع أكواد البرمجة،
            وقواعد البيانات، والوظائف، والبرمجيات، وتصميمات الموقع، والمحتوى
            النصي، والصور، والرسومات (إجمالاً، &quot;المحتوى&quot;)، والعلامات
            التجارية وشعارات الخدمة الواردة فيه هي ملك لنا أو تحت سيطرتنا،
            ومحمية بموجب قوانين حقوق النشر والعلامات التجارية. يتم توفير هذه
            الأدوات لك &quot;كما هي&quot; لاستخدامك الشخصي والمعلوماتي والتطويري
            الوظيفي فقط.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Ban className="w-5 h-5 text-blue-600" />
            <h2>3. الأنشطة المحظورة</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            لا يجوز لك الوصول إلى الموقع أو استخدامه لأي غرض آخر غير الذي نجعل
            المنصة متاحة من أجله. تشمل الأنشطة المحظورة، على سبيل المثال لا
            الحصر: استرداد البيانات أو أصول البرمجة بشكل منهجي لإنشاء أو تجميع
            قاعدة بيانات أو تطبيق برمجيات دون إذن كتابي؛ وتجاوز أو العبث بطبقات
            الأمان من جانب العميل؛ أو تحميل برمجيات محرك المتصفح بملفات كشط
            مؤتمتة ضارة.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <ShieldAlert className="w-5 h-5 text-blue-600" />
            <h2>4. إخلاء المسؤولية عن الضمانات وحدودها</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            يتم توفير هذا الموقع على أساس &quot;كما هو&quot; و &quot;حسب
            توفره&quot;. أنت توافق على أن استخدامك للموقع وأدواتنا سيكون على
            مسؤوليتك الفردية. وإلى أقصى حد يسمح به القانون، فإننا نخلي مسؤوليتنا
            عن جميع الضمانات، الصريحة أو الضمنية، المتعلقة بالموقع واستخدامك له.
            نحن لا نقدم أي ضمانات أو تمثيلات حول دقة أو اكتمال مخرجات تنسيق
            الموقع، أو نتائج تحليل المحرك، أو التخطيطات الهيكلية.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <span className="w-5 h-5 text-blue-600 flex items-center justify-center font-bold text-sm">
              5.
            </span>
            <h2>التعديلات وانقطاع الخدمة</h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pr-7">
            نحتفظ بالحق في تغيير محتويات الموقع أو تعديلها أو إزالتها في أي وقت
            أو لأي سبب وفقاً لتقديرنا الخاص ودون إشعار مسبق. ونحتفظ أيضاً بالحق
            في تعديل أو إيقاف كل أو جزء من الأدوات دون إشعار في أي وقت. لن نكون
            مسؤولين تجاهك أو تجاه أي طرف ثالث عن أي تعديل أو تغيير في الرسوم أو
            تعليق أو إيقاف للموقع.
          </p>
        </section>
      </div>
    </div>
  );
}
