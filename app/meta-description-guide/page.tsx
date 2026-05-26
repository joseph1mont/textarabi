import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, FileCode, Settings, HelpCircle, ShieldCheck, Eye } from "lucide-react";

// 1. تهيئة الـ Metadata الكاملة والمتقدمة لـ SEO وأدسينس
export const metadata = {
  title: "دليل كتابة الميتا ديسكربشن (Meta Description) المثالي للسيو | دليل 2026",
  description: "تعلم كيفية كتابة وصف المقال للسيو بشكل احترافي. اكتشف الطول المثالي للميتا ديسكربشن بالكمبيوتر والهاتف لتوليد نقرات حقيقية وضمان أرشفة جوجل.",
  alternates: { canonical: "https://textarabi.com/meta-description-guide" },
  openGraph: {
    title: "دليل كتابة الميتا ديسكربشن الاحترافي للسيو | تيكست عربي",
    description: "شرح شامل لكتابة الـ Meta Description المتوافق مع خوارزميات جوجل الحديثة لرفع نسبة النقر إلى الظهور CTR.",
    url: "https://textarabi.com/meta-description-guide",
    siteName: "تيكست عربي",
    locale: "ar_EG",
    type: "article",
  },
};

export default function MetaDescriptionGuidePage() {
  
  // 2. بناء بيانات السكيما المنظمة (JSON-LD) المتقدمة لتعزيز رتبة الظهور في جوجل
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "دليل كتابة الميتا ديسكربشن (Meta Description) المثالي للسيو وقواعد خوارزميات جوجل",
    "description": "دليل تقني مفصل يشرح المعايير البرمجية والتسويقية لكتابة الأكواد الخاصة بوصف الصفحات والمقالات لتتصدر نتائج البحث.",
    "inLanguage": "ar",
    "url": "https://textarabi.com/meta-description-guide",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://textarabi.com/meta-description-guide"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هو الطول المثالي للميتا ديسكربشن لعام 2026؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "الطول الموصى به برمجياً يتراوح بين 140 إلى 160 حرفاً (أو ما يعادل 960 بكسل على سطح المكتب و680 بكسل على الهواتف الذكية) لتجنب اقتطاع الوصف في صفحة نتائج البحث."
        }
      },
      {
        "@type": "Question",
        "name": "هل يؤثر الـ Meta Description في الترتيب المباشر بجوجل؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "لا يعد الوصف عامل ترتيب مباشر، ولكنه العامل الأساسي الأول في رفع نسبة النقر إلى الظهور (CTR)، وهي الإشارة التي تستخدمها جوجل لرفع رتبة موقعك تلقائياً."
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 font-cairo text-slate-800" dir="rtl">
      
      {/* حقن الـ JSON-LD في السيرفر برمجياً لعناكب جوجل */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* مسار التنقل العلوي (Breadcrumbs) لـ UX السليم والسيو الداخلي */}
      <div className="mb-6">
        <Link 
          href="/blog" 
          className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors group"
        >
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          <span>العودة إلى أرشيف الأكاديمية</span>
        </Link>
      </div>

      <div className="border border-slate-200 rounded-2xl shadow-xs bg-white p-6 md:p-10">
        <article className="space-y-6">
          
          <header className="border-b pb-6 border-slate-100">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 py-1.5 px-3 rounded-xl text-xs text-blue-700 font-bold mb-3">
              <FileCode className="w-3.5 h-3.5" />
              <span>تحسين محركات البحث والبرمجة</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight font-tajawal">
              دليل كتابة الميتا ديسكربشن (Meta Description) المثالي للسيو وقواعد جوجل 2026
            </h1>
            <p className="text-slate-500 text-xs md:text-sm">
              تصنيف: <span className="text-blue-600 font-medium">أكاديمية السيو التقني</span> | آخر تحديث: مايو 2026
            </p>
          </header>

          <p className="text-slate-600 leading-relaxed text-base md:text-md">
            يُعد الـ Meta Description بمثابة اللوحة الإعلانية المجانية لموقعك في ساحة نتائج بحث جوجل (SERPs). عندما يبحث المستخدم عن كلمة معينة، فإن أول ما يقع عليه نظره بعد عنوان الصفحة هو الوصف النصي الظاهر أسفله. إن إتقان <strong>كيفية كتابة وصف المقال للسيو</strong> لا يتوقف فقط عند صياغة جمل تسويقية جذابة، بل يمتد إلى الالتزام الصارم بقواعد برمجية دقيقة تخص <strong>الطول المثالي للميتا ديسكربشن</strong> لتفادي اقتطاع الكلمات وظهور النص بشكل غير مهني يضر بمعدلات النقر (CTR) لمدونات Google AdSense.
          </p>

          <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-xl flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1 font-tajawal text-sm md:text-base">تحديث هام من خوارزميات جوجل لعام 2026</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                تعتمد جوجل بشكل متزايد على الذكاء الاصطناعي لتوليد أوصاف بديلة إذا وجدت أن وصفك المكتوب برمجياً لا يطابق بدقة نية الباحث (User Intent). لضمان إجبار محرك البحث على عرض وصفك الخاص، يجب أن تضمن الكلمة المفتاحية المستهدفة في أول 80 حرفاً من الوصف بشكل طبيعي تماماً وبدون حشو.
              </p>
            </div>
          </div>

          {/* قسم القواعد البرمجية والطول المثالي */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal border-b border-slate-100 pb-2">
              <Settings className="w-5 h-5 text-blue-600" />
              <span>أولاً: المعايير التقنية لحجم وطول الوصف</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              هناك خطأ برملجي شائع يقع فيه المطورون وهو قياس الوصف بعدد الكلمات فقط. الحقيقة أن محركات البحث تقيس المساحة بناءً على **البكسل (Pixels)** وليس عدد الحروف المجردة، وتأتي المقاييس الهندسية الدقيقة كالتالي:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-3 pr-2 text-sm md:text-base">
              <li>
                <strong className="text-slate-900">الحد الأقصى للحروف:</strong> يفضل أن يتراوح طول النص بين 
                <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-xs mx-1 font-bold">140</span> إلى 
                <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-xs mx-1 font-bold">160</span> حرفاً شاملة المسافات.
              </li>
              <li>
                <strong className="text-slate-900">مقياس شاشات الكمبيوتر:</strong> يجب ألا يتجاوز النص وعرضه الإجمالي مسافة 
                <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-xs mx-1 font-bold">960px</span>.
              </li>
              <li>
                <strong className="text-slate-900">مقياس الهواتف الذكية:</strong> نظراً لصغر حجم الشاشة، تقوم جوجل أحياناً باقتصاص الأوصاف الطويلة لتظهر في مساحة لا تتعدى 
                <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-xs mx-1 font-bold">680px</span> (أي ما يعادل حوالي 120 حرفاً). لذا، ضع أهم معلوماتك دائماً في بداية الجملة.
              </li>
            </ul>
          </section>

          {/* قسم خطوات الكتابة الإحترافية */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal border-b border-slate-100 pb-2">
              <Eye className="w-5 h-5 text-emerald-600" />
              <span>ثانياً: استراتيجية صياغة وصف عالي الكفاءة للنقرات</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              لتحويل الباحث العادي إلى زائر دائم يتصفح موقعك ويتفاعل مع إعلانات أدسينس، اتبع التركيبة الفنية الاحترافية التالية عند الصياغة:
            </p>
            <ol className="list-decimal list-inside text-slate-600 space-y-2 pr-2 text-sm md:text-base">
              <li><span>ابدأ بـ <strong>فعل أمر محفز أو قيمة مضافة</strong> واضحة (مثال: اكتشف، تعلم، وفر، احصل على).</span></li>
              <li><span>ادمج <strong>الكلمة المفتاحية الرئيسية</strong> التي يبحث عنها المستخدم لتقوم جوجل بتظليلها باللون العريض (Bold) تلقائياً في نتائج البحث، مما يزيد جاذبية الرابط.</span></li>
              <li><span>أنهِ الوصف دائماً بعبارة حث على اتخاذ إجراء <strong>(Call to Action - CTA)</strong> صريحة ومقنعة مثل: &quot;اضغط هنا لقراءة المزيد&quot; أو &quot;دليلك الشامل لعام 2026&quot;.</span></li>
              <li><span>تجنب تماماً استخدام علامات التنصيص المزدوجة <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono font-bold">&quot; &quot;</code> داخل كود الميتا؛ لأن خوارزميات جوجل قد تفسرها برمجياً كنهاية للوسم وتقوم بقطع بقية النص تلقائياً في المتصفح.</span></li>
            </ol>
          </section>

          {/* قسم الدمج البرمجي في Next.js وسهولة التطبيق */}
          <section className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
              <span>ثالثاً: كيفية دمج كود الميتا ديسكربشن برمجياً في Next.js</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              في تطبيقات الـ React الحديثة المبنية بـ Next.js App Router، يتم معالجة الأوصاف والعناوين ديناميكياً على السيرفر (Server-side rendering) بكفاءة خارقة تعزز نقاط الأداء والسيو. يمكنك فحص أطوال الكلمات والحروف بدقة قبل تضمينها عبر الانتقال إلى <Link href="/seo-article-length-guide" className="text-blue-600 hover:underline font-bold">دليل عدد الكلمات المثالي للسيو</Link> المتوفر في منصتنا للحفاظ على بنية نصوص مثالية.
            </p>
          </section>

          {/* قسم الأسئلة الشائعة لإثراء جودة المحتوى لمراجعي أدسينس */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span>أسئلة شائعة يطرحها خبراء السيو ومديرو المواقع</span>
            </h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
                <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">ماذا يحدث إذا تركت حقل الـ Meta Description فارغاً؟</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  إذا لم تقم بإدخال الوصف يدوياً، ستقوم عناكب بحث جوجل باقتطاع أول 150 حرفاً تجدها في متن مقالك بشكل عشوائي وعرضها كبديل. غالباً ما تظهر هذه النصوص العشوائية بشكل غير متناسق ولن تخدم نسبة النقر إلى الظهور.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
                <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">هل تكرار نفس الميتا ديسكربشن في أكثر من صفحة يضر بالموقع؟</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  نعم، تكرار الأوصاف يسبب مشكلة تسمى (Duplicate Meta Descriptions) في أدوات قياس جوجل (Google Search Console). يعتبرها محرك البحث إشارة على ضعف جودة البنية الفنية للموقع وقد يتوقف عن أرشفة الصفحات المتشابهة. احرص على جعل وصف كل صفحة فريداً ومختلفاً بالكامل.
                </p>
              </div>
            </div>
          </section>

          <footer className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
            تم إعداد ومراجعة هذا الدليل الفني الاحترافي بواسطة منصة <strong>تيكست عربي</strong> لتمكين المطور والناشر العربي من صياغة كود متوافق بنسبة 100% مع معايير السيو والجودة التقنية لعام 2026.
          </footer>

        </article>
      </div>
    </div>
  );
}