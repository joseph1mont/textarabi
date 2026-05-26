import React from "react";

export const metadata = {
  title: "شروط الاستخدام والأحكام العامة - منصة تيكست عربي",
  description: "قواعد وشروط استخدام منصة تيكست عربي المجانية لمعالجة النصوص وتهيئة المحتوى الرقمي.",
  alternates: { canonical: "https://textarabi.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4" dir="rtl">
      <div className="border border-slate-200 rounded-2xl shadow-xs bg-white p-6 md:p-10">
        <article className="space-y-6">
          <header className="border-b pb-6 border-slate-100">
            <h1 className="text-3xl font-black text-slate-900 mb-2 font-tajawal">شروط وأحكام الاستخدام</h1>
            <p className="text-xs text-slate-400 font-mono">آخر تحديث: مايو 2026</p>
          </header>

          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
            بمجرّد تصفحك، وصولك، أو استخدامك لأي من الأدوات والخدمات المتاحة داخل منصة <strong>تيكست عربي (TextArabi)</strong>، فإنك تقر بموافقتك الكاملة وغير المشروطة على الالتزام بجميع البنود والشروط المذكورة في هذه الاتفاقية القانونية.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-r-4 border-blue-600 pr-3 font-tajawal">1. الترخيص السليم والاستخدام المقبول</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
              تُقدم منصة تيكست عربي أدوات مجانية تماماً لمعالجة، تنظيف، وتعديل النصوص للجمهور العربي. يُسمح لك كمنشئ محتوى، طالب، باحث، أو مصمم استخدام المخرجات المستخرجة في المشاريع الشخصية والأعمال التجارية الاحترافية (مثل التصاميم الإعلانية والأبحاث الأكاديمية) بحرية تامة دون أي قيود مالية أو حقوق ملكية تابعة لنا.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-r-4 border-blue-600 pr-3 font-tajawal">2. حظر الاستخدام السيئ والآلي</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
              يُحظر تماماً محاولة استغلال الأداة لإرسال برمجيات خبيثة، أو استخدام أدوات برمجية مؤتمتة (مثل زواحف الويب أو برامج البوت الضارة) لإجراء طلبات مكثفة تؤثر سلباً على أداء البنية التحتية للخوادم أو تؤدي إلى تدهور تجربة الاستخدام السريعة لبقية المستخدمين.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-r-4 border-blue-600 pr-3 font-tajawal">3. إخلاء المسؤولية القانونية للخدمة المجانية</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
              يتم توفير الأدوات البرمجية وأنظمة محاكاة النصوص داخل هذا الموقع <strong>&quot;كما هي&quot;</strong> وبشكل مجاني بالكامل دون أي نوع من الضمانات الصريحة أو الضمنية. وعلى الرغم من حرصنا البالغ على تقديم أعلى مستويات الجودة البرمجية والتدقيق اللغوي، فإن منصة تيكست عربي ومطوريها لا يتحملون أدنى مسؤولية عن أي أخطاء لغوية غير مقصودة، أو فقدان مؤقت للبيانات، أو عدم توافق مخرجات النصوص مع بعض إصدارات البرامج الخارجية الخاصة بك.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-r-4 border-blue-600 pr-3 font-tajawal">4. التعديل المستمر على الخدمات</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-cairo">
              نحتفظ بالحق الكامل، في أي وقت ولأي سبب نراه مناسباً، في تحسين ميزات الموقع، أو تعديل شروط الاتفاقية الحالية، أو إيقاف بعض الخدمات البرمجية بشكل مؤقت لإجراء عمليات الصيانة الفنية لتعزيز سرعة تصفح المنصة وتجربتها.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}