// app/ar/page.tsx
import Link from "next/link";
import {
  BookOpen,
  ChevronLeft,
  ShieldCheck,
  Code,
  Cpu,
  Database,
  FileText,
} from "lucide-react";
import TextUtilityPanel from "@/components/TextUtilityPanel";
import { WhyTextArabi } from "@/components/WhyTextArabi";

export const metadata = {
  title:
    "أَدَوَات مُعَالَجَةِ النُّصُوصِ العَرَبِيَّةِ وَحِسَابِ الكَلِمَاتِ | TextArabi",
  description:
    "مجموعة أدوات برمجية متكاملة للمصممين والمطورين لتنظيف النصوص، إزالة الحركات والتشكيل، وتصحيح الكلمات المعكوسة في برامج التصميم مع دعم النسخ بترميز HTML الاحترافي.",
};

export default function ArabicHomePage() {
  return (
    <main className="w-full py-12 px-4 max-w-5xl mx-auto flex-grow" dir="rtl">
      {/* Right-Aligned Premium Hero Header with Full Tashkeel */}
      <div className="text-start max-w-3xl mb-10">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl mb-4 font-tajawal leading-tight tracking-tight">
          أَدَوَاتُ مُعَالَجَةِ النُّصُوصِ الْعَرَبِيَّةِ وَاحْتِرَافِيَّةِ
          التَّعْرِيبِ الرَّقْمِيِّ
        </h1>
        <p className="text-slate-600 text-md leading-relaxed font-tajawal mb-4">
          مَنَصَّةٌ مُتَكَامِلَةٌ لِإِزَالَةِ التَّشْكِيلِ مِنَ النَّصِّ،
          وَحِسَابِ عَدَدِ الكَلِمَاتِ وَالحُرُوفِ بِدِقَّةٍ فِائِقَةٍ.
          تَتَضَمَّنُ الأَدَاةُ مُصَحِّحَ الكِتَابَةِ المَعْكُوسَةِ فِي
          الفُوتُوشُوبِ وَبَرَامِجِ التَّصْمِيمِ الرَّقْمِيِّ، مَعَ خِيَارِ
          نَسْخِ النُّصُوصِ كَـ كُودِ HTML سِيْمَانْتِكْ مُعَدٍّ خِصِّيصاً
          لِمُصَمِّمِي الكُتُبِ الإِلِكْتُرُونِيَّةِ (EPUB) وَمُطَوِّرِي الوِيبِ
          لِضَمَانِ ثَبَاتِ التَّنْسِيقِ وَالمُحَاذَاةِ.
        </p>
        <div
          className="flex flex-wrap gap-2 text-xs text-slate-500 font-tajawal"
          dir="rtl"
        >
          <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            ✓ إِضَافَةُ / إِزَالَةُ الْحَرَكَاتِ وَالتَّشْكِيلِ تِلْقَائِيًّا
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            ✓ حِسَابُ عَدَدِ الْكَلِمَاتِ (Word Counter)
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            ✓ مَصْفُوفَاتُ تَعْرِيبِ الْوِيبِ وَالْكُودِ
          </span>
        </div>
      </div>

      {/* Arabic Utility Panel Workspace Grid */}
      <TextUtilityPanel initialMode="strip" lang="ar" />
      <WhyTextArabi lang="ar" />

      {/* Substantive Editorial & Technical Architecture Section for AdSense Compliance */}
      <section className="my-16 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4 border border-blue-100 font-tajawal">
            <Cpu className="w-3.5 h-3.5" />
            <span>الهندسة التقنية وحلول معالجة النصوص</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight font-tajawal">
            حل تحديات تجزئة الحروف العربية متعددة البايتات في منصات الويب
            الحديثة
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-tajawal">
            <p>
              تتطلب هندسة وتطوير منصات الويب الخدمية ومواقع النشر الرقمي باللغة
              العربية معالجة دقيقة لمشاكل ترميز الحروف وأنظمة التباين اللغوي.
              بخلاف اللغات اللاتينية، تفرض النصوص العربية تحديات فريدة تتمثل في
              أحرف التشكيل المركبة (
              <Link
                href="/ar/blog/comprehensive-tashkeel-guide"
                className="text-blue-600 hover:underline font-medium"
              >
                الحركات
              </Link>
              )، ومتغيرات الهمزات والألفات، وقواعد الاتجاه من اليمين لليسار
              (RTL) والتي تتسبب غالباً في أخطاء مطابقة الكلمات وفشل قواعد
              البيانات في أرشفة الكلمات بدقة.
            </p>
            <p>
              عند تخزين النصوص المشكولة المشتملة على علامات الفتحة والضمة والشدة
              مباشرة في فهارس البحث دون تنقية مسبقة، ترتفع معدلات فقدان نتائج
              البحث (Query Miss Rate) بشكل ملحوظ. يبحث المستخدمون عادةً بدون
              تشكيل، مما يؤدي إلى عدم تطابق النتائج وتراجع تقييمات جودة تجربة
              المستخدم لدى خوارزميات محركات البحث. توفر منصة تيكست عربي للمطورين
              والمصممين أدوات برمجة متطورة، وتعبيرات نمطية (Regex)،{" "}
              <Link
                href="/ar/blog/clean-arabic-database-sql"
                className="text-blue-600 hover:underline font-medium"
              >
                ومعمارية جداول مزدوجة
              </Link>{" "}
              تفصل العرض البشري عن محركات البحث لضمان أقصى سرعة وكفاءة تقنية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100 font-tajawal">
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Database className="w-4 h-4 text-blue-600" />
                <span>تسوية قواعد البيانات</span>
              </div>
              <p className="text-xs text-slate-500">
                فصل نصوص العرض البشري عن كلمات البحث المفهرسة لتحقيق أعلى
                توافقية.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>دقة اليونيكود</span>
              </div>
              <p className="text-xs text-slate-500">
                فلاتر ذكية لحماية الرموز الخفية وعلامات الربط المدمجة في النصوص
                الطويلة.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Code className="w-4 h-4 text-blue-600" />
                <span>معالجة محلية آمنة</span>
              </div>
              <p className="text-xs text-slate-500">
                معالجة كاملة داخل المتصفح لضمان السرية المطلقة لبيانات الشركات
                والمؤلفين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Framework Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 w-full">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 text-purple-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-tajawal">
              بِيئَةُ مُعَالَجَةٍ آمِنَةٍ وَمُشَفَّرَةٍ بِالكَامِلِ (Sandbox)
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-tajawal">
              جَمِيعُ عَمَلِيَّاتِ تَنْظِيفِ وَتَعْدِيلِ النُّصُوصِ، وَحَذْفِ
              الحَرَكَاتِ، وَمُعَالَجَةِ السَّلَاسِلِ النَّصِّيَّةِ تَتِمُّ
              مَحَلِّيّاً بالكَامِلِ دَاخِلَ مُتَصَفِّحِكَ. نَحْنُ نَضْمَنُ
              خُصُوصِيَّةَ بَيَانَاتِ الشَّرِكَاتِ (Corporate Publishing)،
              حَيْثُ لَا يِتِمُّ حِفْظُ أَوْ إِرْسَالُ نُصُوصِكَ إِلَى أَيِّ
              خَوَادِمَ خَارِجِيَّةٍ.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between group">
          <div>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-tajawal">
              تَوْثِيقٌ وَمُسْتَنَدَاتٌ تَقْنِيَّةٌ لِخِدْمَاتِ التَّعْرِيبِ
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 font-tajawal">
              اِطَّلِعْ عَلَى أَفْضَلِ الأَدِلَّةِ البَرْمَجِيَّةِ لِمُطَوِّرِي
              الوِيبِ (Next.js & React) الَّتِي تَشْرَحُ التَّعْبِيرَاتِ
              النَّمَطِيَّةِ (Regex) لِفَلْتَرَةِ الحُرُوفِ العَرَبِيَّةِ
              مُتَعَدِّدَةِ البَايْتِ، وَتَحْسِينِ مَعَايِيرِ السِّيُو (SEO)
              لِمَوَاقِعِ الشَّرِكَاتِ وَمِنَصَّاتِ النَّشْرِ الرَّقْمِيِّ.
            </p>
          </div>
          <Link
            href="/ar/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 mt-2 font-tajawal"
          >
            <span>تصفح أدلة تعريب المواقع والمقالات التقنية</span>
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Articles Section for Internal Linking */}
      <section className="my-16 font-tajawal">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              أبرز المقالات والدلائل التقنية
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              شروحات برمجية متعمقة حول الخطوط العربية، تصميم قواعد البيانات،
              وتحسين محركات البحث.
            </p>
          </div>
          <Link
            href="/ar/blog"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 hidden sm:inline-flex items-center gap-1"
          >
            <span>عرض كل المقالات</span>
            <span>←</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Article Card 1 */}
          <Link
            href="/ar/blog/clean-arabic-database-sql"
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-blue-300 transition-all group block"
          >
            <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-3">
              هندسة قواعد البيانات
            </span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              بناء قواعد بيانات SQL نظيفة وعالية الأداء لفهارس النصوص العربية
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
              تعرف على أنماط التصميم الهيكلي للتعامل مع متغيرات الحروف والتشكيل
              في محركات البحث.
            </p>
          </Link>

          {/* Article Card 2 */}
          <Link
            href="/ar/blog/comprehensive-tashkeel-guide"
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-blue-300 transition-all group block"
          >
            <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-3">
              السيو والتشكيل
            </span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              الدليل الشامل للتشكيل العربي: الموازنة بين سلامة القراءة وظهور
              محركات البحث
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
              احتراف إدارة التشكيل العربي في المحتوى الرقمي مع الحفاظ على أعلى
              معايير الظهور لمحركات البحث والثقة.
            </p>
          </Link>
        </div>
      </section>

      {/* Knowledge Academy Section Box */}
      <div className="w-full mt-24">
        <div className="border-t border-slate-200/80 pt-12">
          <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/30 border border-slate-200/60 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2 font-tajawal">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>
                  مَقَالَاتُ تِيكْسْت عَرَبِي لِلتَّطْوِيرِ الرَّقْمِيِّ
                </span>
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl font-tajawal">
                دَلِيلُكَ المِعْيَارِيُّ لِتَحْسِينِ ظُهُورِ المَوَاقِعِ
                العَرَبِيَّةِ فِي جُوجِلْ، وَإِتْقَانِ حُلُولِ التَّصْمِيمِ
                وَالتَّعْرِيبِ الخَاصَّةِ بِالشَّرِكَاتِ وَدُورِ النَّشْرِ.
              </p>
            </div>
            <Link
              href="/ar/blog"
              className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl transition-all shadow-xs shrink-0 group text-center font-tajawal"
            >
              <span>تصفح أدلة السيو والتعريب المتاحة</span>
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
