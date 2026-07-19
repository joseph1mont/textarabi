import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata = {
  title: "منقي ومعالج النصوص العربية للمطورين والمصممين",
  description:
    "أداة احترافية لمعالجة النصوص العربية: إزالة التشكيل، إصلاح تداخل حروف الفوتوشوب، والتحويل البرمجي للنصوص لضمان دقة الأرشفة.",
};

export default function ArabicToolPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-10" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 font-cairo">
          منقي ومعالج النصوص العربية الاحترافي
        </h1>
        <p className="text-slate-600 mb-8 font-tajawal">
          مجموعة أدوات تقنية متكاملة للمطورين لضمان سلامة وتوافق النصوص العربية
          مع قواعد البيانات ومحركات البحث.
        </p>
      </div>

      <TextUtilityPanel initialMode="strip" lang="ar" />

      {/* SEO & AdSense Contextual Content */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo">
          دليل المطور: معالجة النصوص العربية برمجياً
        </h2>
        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-4">
          <p>
            تعد معالجة النصوص العربية أحد أكبر التحديات التي تواجه المطورين،
            خاصة عند التعامل مع قواعد البيانات أو أدوات التصميم. إن أداة{" "}
            <strong>منقي النصوص العربية</strong> ليست مجرد واجهة بسيطة، بل هي
            محرك يقوم بتنظيف وتوحيد ترميز النصوص لضمان أفضل أداء تقني.
          </p>

          <h3 className="text-lg font-bold">
            تحسين أداء قواعد البيانات (SEO & Indexing)
          </h3>
          <p>
            تؤثر الحركات (التشكيل) بشكل كبير على عملية الفهرسة في قواعد
            البيانات. من خلال إزالة التشكيل، يمكنك ضمان أن عملية البحث داخل
            موقعك أو عبر محركات البحث تعمل بكفاءة عالية، مما يرفع من تصنيف موقعك
            ويقلل من معدلات الارتداد (Bounce Rate).
          </p>

          <h3 className="text-lg font-bold">حل مشاكل التصميم في برامج Adobe</h3>
          <p>
            يعاني المصممون من مشكلة &quot;الحروف المتقطعة&quot; عند نقل النصوص
            من الفوتوشوب إلى الويب. أداة <em>مصحح الفوتوشوب</em> المدمجة لدينا
            تعالج هذه المشكلة جذرياً، مما يوفر عليك ساعات من العمل اليدوي ويضمن
            عرض النصوص بشكل صحيح على جميع المتصفحات.
          </p>
        </div>
      </section>
    </main>
  );
}
