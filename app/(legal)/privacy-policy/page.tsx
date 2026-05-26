import React from "react";

export const metadata = {
  title: "سياسة الخصوصية وملفات تعريف الارتباط - منصة تيكست عربي",
  description: "شفافية كاملة حول كيفية معالجة البيانات الشخصية وملفات تعريف الارتباط الخاصة بإعلانات Google AdSense في منصة تيكست عربي.",
  alternates: { canonical: "https://textarabi.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4" dir="rtl">
      <div className="border border-slate-200 rounded-2xl shadow-xs bg-white p-6 md:p-10">
        <article className="space-y-6">
          <header className="border-b pb-6 border-slate-100">
            <h1 className="text-3xl font-black text-slate-900 mb-2 font-tajawal">سياسة الخصوصية (Privacy Policy)</h1>
            <p className="text-xs text-slate-400 font-mono">آخر تحديث: مايو 2026</p>
          </header>

          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
            في منصة <strong className="text-blue-600">تيكست عربي (TextArabi)</strong>، نضع خصوصية زوارنا ومستخدمينا في مقدمة أولوياتنا. توضح هذه الوثيقة الشفافة طبيعة البيانات الرقمية التي يتم التعامل معها عند تصفح منصتنا أو استخدام أدواتنا البرمجية المتقدمة لتهيئة الخطوط العربية.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-r-4 border-blue-600 pr-3 font-tajawal">1. سلامة البيانات ومعالجة النصوص المحلية</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
              إن جميع أدوات معالجة النصوص المتاحة على منصة تيكست عربي، بما في ذلك أداة <strong>إزالة التشكيل والحركات (Tashkeel Stripper)</strong> وأداة <strong>معالجة الحروف المقطوعة والمعكوسة لبرامج التصميم</strong>، تعمل بصورة محلية كاملة بنسبة 100% داخل متصفح المستخدم الخاص بك عن طريق تنفيذ شفرات JavaScript البرمجية الآمنة. 
            </p>
            <blockquote className="bg-slate-50 border-r-4 border-slate-300 p-4 rounded-xl text-xs md:text-sm italic text-slate-600 font-cairo">
              نحن لا نقوم برفع، حفظ، تخزين، أو مراجعة النصوص والمحتويات التي تقوم بإدخالها أو معالجتها على خوادمنا على الإطلاق. تظل بياناتك آمنة وخاصة بجهازك الشخصي دائماً ولا تمر عبر أي سيرفر خارجي.
            </blockquote>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-r-4 border-blue-600 pr-3 font-tajawal">2. ملفات تعريف الارتباط وإعلانات الطرف الثالث (Google AdSense)</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
              نحن نستخدم خدمات إعلانية مخصصة تابعة لشركات طرف ثالث لعرض الإعلانات ومساندة استمرارية المنصة المجانية لتطوير المحتوى. وتعد شركة <strong>Google</strong> هي المورد الأساسي والشرعي لعرض الإعلانات على هذا الموقع بناءً على البنود التالية:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 pr-4 text-sm md:text-base font-cairo">
              <li>تستخدم Google ملفات تعريف ارتباط (Cookies) لتقديم الإعلانات للمستخدمين بناءً على زياراتهم السابقة لمنصتنا ومواقع الويب الأخرى على شبكة الإنترنت.</li>
              <li>يسمح استخدام ملف تعريف الارتباط <strong className="font-mono text-slate-700">DART</strong> لشركة Google وشركائها بتقديم إعلانات موجهة بدقة ومناسبة لاهتمامات الزوار وتفضيلاتهم الاستهلاكية.</li>
              <li>يمكن للزوار الكرام اختيار إلغاء تفعيل استخدام ملفات تعريف الارتباط للإعلانات المخصصة عبر الانتقال المباشر إلى <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">إعدادات إعلانات Google</a>.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-r-4 border-blue-600 pr-3 font-tajawal">3. ملفات السجل القياسية (Log Files)</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
              تتبع منصة تيكست عربي الإجراءات القياسية المعمول بها عالمياً في استخدام ملفات السجل الفنية. تتضمن المعلومات التي يتم تسجيلها تلقائياً بروتوكول الإنترنت (IP Address)، نوع المتصفح المستعمل، مزود خدمة الإنترنت (ISP)، طابع الوقت والتاريخ، وصفحات الإحالة والخروج. نؤكد أن هذه البيانات فنية بحتة تُستخدم فقط لتحليل الأداء العام وإدارة وتحسين سرعة الاستجابة، وهي غير مرتبطة نهائياً بأي معلومات تحدد هوية المستخدم الشخصية.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}