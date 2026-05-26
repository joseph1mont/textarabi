import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, Database, Cpu, HelpCircle, ShieldCheck, Globe } from "lucide-react";

// 1. تهيئة الـ Metadata المتقدمة لـ SEO لضمان الأرشفة والصدارة في نتائج البحث
export const metadata = {
  title: "فهم ترميز النصوص UTF-8 وحل مشكلة علامات الاستفهام العربية | 2026",
  description: "دليل تقني شامل لفهم ترميز النصوص UTF-8. اكتشف كيفية حل مشكلة ظهور الحروف العربية على شكل علامات استفهام أو رموز غريبة في قواعد البيانات والويب.",
  alternates: { canonical: "https://textarabi.com/understand-utf8-arabic" },
  openGraph: {
    title: "فهم ترميز النصوص UTF-8 وعلاج مشاكل الحروف العربية | تيكست عربي",
    description: "دليل المطورين لإصلاح التشفير النصي المعطوب وحل مشكلة علامات الاستفهام والرموز الغريبة في المواقع وقواعد البيانات.",
    url: "https://textarabi.com/understand-utf8-arabic",
    siteName: "تيكست عربي",
    locale: "ar_EG",
    type: "article",
  },
};

export default function UnderstandUtf8ArabicPage() {
  
  // 2. بناء بيانات سكيما المنظمة (JSON-LD) لتعزيز رتبة الظهور (Rich Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "فهم ترميز النصوص UTF-8 وعلاج مشاكل علامات الاستفهام في الحروف العربية",
    "description": "دليل فني مفصل يشرح فلسفة نظام التشفير العالمي UTF-8 والحلول البرمجية الشاملة لعلاج مشاكل تداخل الرموز وظهور النصوص العربية بشكل معطوب.",
    "inLanguage": "ar",
    "url": "https://textarabi.com/understand-utf8-arabic",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://textarabi.com/understand-utf8-arabic"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "لماذا تظهر الحروف العربية كعلامات استفهام في المتصفح أو قاعدة البيانات؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تحدث هذه المشكلة عندما يتم حفظ النص بترميم محلي قديم (مثل Windows-1256) بينما يحاول الخادم أو المتصفح قراءته بترميم آخر مثل UTF-8، مما يسبب فشل فك التشفير البرمجي وعرض رموز معطوبة."
        }
      },
      {
        "@type": "Question",
        "name": "ما هو الترميز الأفضل لدعم اللغة العربية في المواقع؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تيرميز UTF-8 هو المعيار العالمي الأفضل والوحيد الموصى به برمجياً؛ لأنه يدعم جميع لغات العالم بما فيها العربية في نظام بكسل وحجم بيانات مرن وموفر للمساحة."
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

      {/* مسار التنقل العلوي (Breadcrumbs) لـ UX سليم وسيو داخلي قوي */}
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
              <Globe className="w-3.5 h-3.5" />
              <span>معالجة البيانات وبرمجة</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight font-tajawal">
              فهم ترميز النصوص (UTF-8) وعلاج مشاكل علامات الاستفهام العربية
            </h1>
            <p className="text-slate-500 text-xs md:text-sm">
              تصنيف: <span className="text-blue-600 font-medium">أكاديمية معالجة النصوص</span> | مايو 2026
            </p>
          </header>

          <p className="text-slate-600 leading-relaxed text-base md:text-md">
            تتعامل الحواسيب في بنيتها الأساسية مع الأرقام الثنائية والبتات (Bits) فقط، ولكي تظهر الكلمات العربية التي نقرؤها الآن على الشاشة، تحتاج الأنظمة إلى وسيط يقوم بترجمة هذه الأرقام إلى محارف بصرية مفهومة. هذا الوسيط هو ما يُعرف بنظام الترميز (Encoding). يُعد <strong>ترميز النصوص UTF-8</strong> الثورة الحقيقية التي أنقذت المحتوى الرقمي، ومع ذلك، لا يزال آلاف المطورين يقعون في فخ برمجى مزعج، وهو ما يدفعهم للبحث الحثيث عن <strong>حل مشكلة ظهور الحروف العربية على شكل علامات استفهام</strong> أو رموز هيروغليفية غريبة تفقد الموقع أرشفته وتدمر تجربة المستخدم في مدونات Google AdSense.
          </p>

          <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-xl flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1 font-tajawal text-sm md:text-base">لماذا تنهار الحروف العربية تحديداً؟</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                في الأنظمة القديمة (مثل ASCII)، كان يتم تخصيص بايت واحد فقط لكل حرف، وهو ما يكفي للغة الإنجليزية فقط. أما الحروف العربية، فتحتاج تقنياً إلى بايتين (2 Bytes) لتخزين الرمز البرمجي الفريد الخاص بها في Unicode. عندما يحاول مفسر قديم قراءة بايت واحد فقط من الحرف العربي، يعجز عن معالجته ويقوم باستبداله برمز عشوائي أو علامة استفهام <span className="font-mono bg-slate-200 px-1 rounded text-xs font-bold">؟</span>.
              </p>
            </div>
          </div>

          {/* قسم طبيعة ترميز UTF-8 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal border-b border-slate-100 pb-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>أولاً: ما هو ترميز UTF-8 ولماذا هو الخيار القياسي عالمياً؟</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              يرمز الاختصار إلى **Unicode Transformation Format - 8-bit**، وهو نظام ترميز ذكي متغير الطول (Variable-width encoding). يتميز بقدرته الفائقة على تمثيل الحروف باستخدام بايت واحد إلى 4 بايتات بحسب تعقيد الحرف اللغوي:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 pr-2 text-sm md:text-base">
              <li><strong className="text-slate-900">المرونة والحجم:</strong> يحفظ الحروف الإنجليزية في بايت واحد (توفيراً للمساحة) والحروف العربية في بايتين، والرموز التعبيرية المعقدة في 3 أو 4 بايتات.</li>
              <li><strong className="text-slate-900">التوافق البرمجي التام:</strong> تدعمه كافة لغات البرمجة الحديثة (مثل JavaScript/TypeScript) وأنظمة التشغيل وقواعد البيانات بشكل افتراضي لعام 2026.</li>
            </ul>
          </section>

          {/* قسم حلول المشكلة عملياً */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal border-b border-slate-100 pb-2">
              <Database className="w-5 h-5 text-emerald-600" />
              <span>ثانياً: خطوات حل مشكلة علامات الاستفهام في التطبيقات وقواعد البيانات</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              للقضاء التام على مشكلة تشوه النصوص وتأمين موقعك برمجياً، اتبع الثلاثية التقنية التالية في بيئة عملك:
            </p>
            
            <div className="space-y-3 pr-2">
              <div className="border-l-4 border-blue-500 pr-3 py-1">
                <strong className="text-slate-900 block font-tajawal">1. ضبط كود الهيدر في صفحات الويب (HTML Meta Tag)</strong>
                <span className="text-xs md:text-sm text-slate-600">تأكد دائماً من وجود وسم الـ Charset في قسم الهيدر بموقعك ليعرف المتصفح التشفير مسبقاً:</span>
                <pre className="bg-slate-900 text-slate-100 p-2 rounded-lg text-xs font-mono mt-1 text-left" dir="ltr">
                  {"<meta charset=\"UTF-8\" />"}
                </pre>
              </div>
              
              <div className="border-l-4 border-blue-500 pr-3 py-1">
                <strong className="text-slate-900 block font-tajawal">2. تهيئة قاعدة البيانات على تشفير (utf8mb4)</strong>
                <span className="text-xs md:text-sm text-slate-600">عند استخدام MySQL أو MariaDB، لا تكتفِ باختيار ترميز `utf8` القديم، بل استخدم دائماً خيار الكوليكشن المطور <code className="bg-slate-100 px-1 rounded text-xs font-mono font-bold">utf8mb4_unicode_ci</code>؛ فهو يدعم التميثل الكامل للأحرف العربية المعقدة والرموز التعبيرية بدقة 100%.</span>
              </div>

              <div className="border-l-4 border-blue-500 pr-3 py-1">
                <strong className="text-slate-900 block font-tajawal">3. تأمين اتصال مفسر اللغة (Database Connection String)</strong>
                <span className="text-xs md:text-sm text-slate-600">في لغات السيرفر مثل PHP أو Node.js، تأكد من إرسال أمر تعيين الترميز فور فتح الاتصال مع قاعدة البيانات مباشرة (مثل تنفيذ استعلام <code className="bg-slate-100 px-1 rounded text-xs font-mono font-bold">SET NAMES utf8mb4</code>) لضمان عدم تشوه البيانات أثناء النقل البيني.</span>
              </div>
            </div>
          </section>

          {/* نصيحة الربط البرمجي الداخلي للسيو */}
          <section className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal">
              <ShieldCheck className="w-5 h-5 text-purple-600" />
              <span>السيو التقني وتطهير مدخلات النصوص</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              إن سلامة معالجة الحروف والترميز تمنع محركات البحث من رؤية موقعك كمحتوى تالف (Broken Content). إذا كنت تقوم ببناء أدوات برمجية لمعالجة النصوص وتهيئتها للروابط النظيفة في السيو، نوصيك بالاطلاع على دليلنا السابق <Link href="/clean-special-characters" className="text-blue-600 hover:underline font-bold">تنظيف النص من الرموز الخاصة</Link> لضمان عزل الرموز التالفة والرموز البرمجية الغريبة وتأمين البيانات بشكل كامل وثابت.
            </p>
          </section>

          {/* قسم الأسئلة الشائعة المقوى للسيو وأدسينس */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-tajawal">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span>الأسئلة الشائعة حول ترميز النصوص Unicode</span>
            </h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
                <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">ما الفرق بين ترميز UTF-8 وترميز UTF-16؟</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  ترميز UTF-8 هو نظام متغير الطول يبدأ من بايت واحد وهو الأفضل لصفحات الويب لسرعة تحميله المذهلة. بينما نظام UTF-16 يستخدم بايتين على الأقل لكل حرف بشكل ثابت، وهو ما يجعله يستهلك مساحات تخزينية أكبر، ويقتصر استخدامه غالباً على البيئات الداخلية لأنظمة تشغيل مثل ويندوز وجافا.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/40">
                <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">هل يمكنني استعادة النصوص التي تحولت بالفعل إلى علامات استفهام داخل قاعدة البيانات؟</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  إذا تم حفظ البيانات وتخزينها فعلياً داخل خلايا قاعدة البيانات على شكل علامات استفهام حقيقية نتيجة تشفير خاطئ أثناء التمرير، فللأسف تكون البيانات الأصلية قد دُمِرت وفُقدت تماماً ولا يمكن استرجاعها لغوياً. يجب تعديل تشفير الاتصال أولاً ثم إعادة إدخال النصوص من جديد بشكل سليم.
                </p>
              </div>
            </div>
          </section>

          <footer className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
            تمت صياغة وتدقيق هذا الدليل المعرفي بواسطة مهندسي البيانات وتحليل النظم لمنصة <strong>تيكست عربي</strong> لضمان استقرار البنية التحتية البرمجية لموقعك ورفع معايير الأرشفة لعام 2026.
          </footer>

        </article>
      </div>
    </div>
  );
}