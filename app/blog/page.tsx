import React from "react";
import Link from "next/link";
import { BookOpen, PenTool, FileText, Code, ChevronLeft, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

// 1. تهيئة الـ Metadata المخصصة لصفحة أرشيف المدونة الرئيسية
export const metadata = {
  title: "مدونة تيكست عربي الشاملة | شروحات التصميم والسيو ومعالجة النصوص",
  description: "تصفح المقالات والشروحات التقنية والفنية لمنصة تيكست عربي. أدوات وحلول متكاملة لمشاكل الخطوط، حساب الكلمات، السيو، وتنظيف النصوص للمصممين والكتاب.",
  alternates: { canonical: "https://textarabi.com/blog" },
};

export default function BlogArchivePage() {
  // قاعدة البيانات الثابتة للمقالات الـ 20 (مقسمة تقنياً لتسهيل الفهرسة والقراءة)
  const allArticles = [
    // القسم الأول: شروحات التصميم والخطوط (جرافيك)
    {
      title: "حل مشكلة الكتابة المعكوسة والحروف المتقطعة في الفوتوشوب",
      desc: "دليل شامل لتعديل إعدادات محرك النصوص داخل برنامج Photoshop وتعديل الخطوط المقلوبة والمتقطعة يدوياً وآلياً.",
      href: "/fix-arabic-photoshop",
      category: "تصميم وجرافيك",
      icon: PenTool,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "حل مشكلة الخطوط المتقطعة في Adobe Illustrator يدعم العربية",
      desc: "خطوات تفعيل المحرك العالمي المستجيب للغات الشرق أوسطية في برنامج الإليستريتور لحل مشاكل فصل الحروف الفنية.",
      href: "/fix-illustrator-arabic",
      category: "تصميم وجرافيك",
      icon: PenTool,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "كيفية تثبيت واستخدام الخطوط العربية داخل برنامج Premiere Pro",
      desc: "طريقة دمج الخطوط العربية في حزم النصوص والمؤثرات الجاهزة لبرامج المونتاج دون الحاجة لبرامج وسيطة مقلوبة.",
      href: "/premiere-arabic-fonts",
      category: "تصميم وجرافيك",
      icon: PenTool,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "أفضل 10 خطوط عربية مجانية للتصميم الرقمي لعام 2026",
      desc: "مراجعة شاملة لأحدث الخطوط العربية المهيأة للويب والتصميم الإعلاني المتاحة مجاناً للتحميل التجاري والاستخدام السليم.",
      href: "/best-arabic-fonts",
      category: "تصميم وجرافيك",
      icon: PenTool,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },

    // القسم الثاني: السيو وصناعة المحتوى الرقمي
    {
      title: "كيفية حساب عدد الكلمات والحروف في النصوص العربية بدقة",
      desc: "دليل المحررين وصناع المحتوى والباحثين الأكاديميين لإحصاء الكلمات، الحروف، والمسافات برمجياً وبأعلى كفاءة لغوية.",
      href: "/word-character-counter-guide",
      category: "سيو وصناعة محتوى",
      icon: FileText,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "أهمية الكثافة الحرفية وطول المقال في تصدر نتائج السيو (SEO)",
      desc: "لماذا يفضل جوجل المقالات الطويلة والشاملة؟ وكيف تستخدم عداد الحروف لضبط الكثافة الطبيعية للكلمات المفتاحية.",
      href: "/seo-article-length-guide",
      category: "سيو وصناعة محتوى",
      icon: FileText,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "كيفية كتابة وصف الميتا (Meta Description) المتوافق مع جوجل",
      desc: "طريقة حساب عدد حروف وأطوال أوصاف الميتا بدقة لضمان عدم قطعها في صفحة نتائج بحث جوجل وضمان زيادة النقرات.",
      href: "/meta-description-guide",
      category: "سيو وصناعة محتوى",
      icon: FileText,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "استراتيجيات الكلمات المفتاحية الطويلة للموقع الرقمية الناشئة",
      desc: "كيف تستهدف الكلمات الدلالية منخفضة المنافسة وسحب ترافيك سريع لمدونتك التقنية لضمان أرباح أدسينس مستقرة.",
      href: "/long-tail-keywords-seo",
      category: "سيو وصناعة محتوى",
      icon: FileText,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },

    // القسم الثالث: معالجة البيانات والحلول البرمجية
    {
      title: "طريقة إزالة التشكيل والحركات من النص العربي دفعة واحدة",
      desc: "دليل تقني يشرح كيفية تنظيف النصوص العربية وحذف الفتحة والضمة والكسرة لتسهيل معالجة البيانات والبحث البرمجي النظيف.",
      href: "/strip-arabic-diacritics",
      category: "معالجة بيانات وبرمجة",
      icon: Code,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "معالجة الحروف والرموز الخاصة أونلاين دون الخروج عن النص",
      desc: "كيفية تنظيف وتصفية قواعد البيانات النصية الكبيرة من الرموز العشوائية والمسافات الميتة لزيادة الكفاءة الهندسية للتطبيقات.",
      href: "/clean-special-characters",
      category: "معالجة بيانات وبرمجة",
      icon: Code,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "فهم ترميز النصوص (UTF-8) وعلاج مشاكل علامات الاستفهام العربية",
      desc: "حلول تقنية لمشكلة ظهور النصوص العربية على هيئة طلاسم أو علامات استفهام عند سحبها أو تصديرها من خوادم الويب وقواعد البيانات.",
      href: "/understand-utf8-arabic",
      category: "معالجة بيانات وبرمجة",
      icon: Code,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "أهمية التعبيرات النمطية (Regex) في تنظيف وترتيب اللغة العربية",
      desc: "أدلة برمجية للمطورين لبناء فلاتر ذكية قادرة على فرز وتعديل النصوص وتدقيقها آلياً داخل المتصفح بكفاءة وسرعة عالية.",
      href: "/regex-arabic-processing",
      category: "معالجة بيانات وبرمجة",
      icon: Code,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 font-cairo" dir="rtl">
      
      {/* مسار التنقل العلوي البسيط (Breadcrumbs) */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors group"
        >
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          <span>العودة إلى الصفحة الرئيسية للأدوات</span>
        </Link>
      </div>

      {/* عنوان الصفحة ووصفها الاستراتيجي للأرشفة */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-2 font-tajawal">
            <BookOpen className="w-7 h-7 text-blue-600" />
            <span>مدونة المنصة التعليمية والشروحات</span>
          </h1>
          <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
            مظلة معرفية برمجية متكاملة مخصصة لمصممي الجرافيك، كتاب المحتوى، والمطورين العرب لمساعدتهم على تذليل عقبات معالجة النصوص الرقمية.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50/50 border border-blue-100 py-2 px-4 rounded-xl text-xs text-blue-700 font-semibold shrink-0">
          <Sparkles className="w-4 h-4" />
          <span>تحديث مستمر ومحتوى حصري 2026</span>
        </div>
      </div>

      {/* شبكة المقالات الشاملة (عرض هندسي فائق السرعة والأداء) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allArticles.map((article, index) => {
          const IconComponent = article.icon;
          return (
            <article 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* وسم التصنيف العلوي للمقال */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${article.bgColor} ${article.color}`}>
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">مايو 2026</span>
                </div>

                {/* عنوان المقال والوصف */}
                <div className="space-y-2">
                  <h2 className="text-base md:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug font-tajawal">
                    <Link href={article.href}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {article.desc}
                  </p>
                </div>
              </div>

              {/* رابط القراءة الفوري السريع */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-slate-300" />
                  <span>دليل تقني مصدق</span>
                </div>
                <Link 
                  href={article.href} 
                  className="text-xs md:text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/btn"
                >
                  <span>اقرأ الدليل بالكامل</span>
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* صندوق معلومات تعزيز الثقة بالأسفل (AdSense Quality Indicator) */}
      <div className="mt-12 bg-slate-100/60 border border-slate-200/80 rounded-2xl p-5 text-center text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto">
        تلتزم مدونة <strong>تيكست عربي</strong> بتقديم شروحات حصرية ومكتوبة بأيدي مهندسي ويب ومصممين محترفين. كافة الحلول البرمجية المذكورة في الأدلة يتم تنفيذها محلياً وآمنة تماماً لحماية خصوصية بيانات المستخدمين.
      </div>

    </div>
  );
}