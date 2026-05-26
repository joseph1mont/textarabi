import Link from "next/link";
import { BookOpen, PenTool, FileText, Code, ChevronLeft } from "lucide-react";
import TextUtilityPanel from "@/components/TextUtilityPanel";
import { WhyTextArabi } from "@/components/WhyTextArabi"; 

export default function HomePage() {
  // مصفوفة لمحاكاة المقالات الـ 20 مقسمة حسب التصنيف (لسرعة الفهرسة والسيو)
  const designArticles = [
    { title: "حل مشكلة الكتابة المعكوسة في الفوتوشوب", href: "/fix-arabic-photoshop" },
    { title: "حل مشكلة الخطوط المتقطعة في Adobe Illustrator", href: "/fix-illustrator-arabic" },
    { title: "كيفية تثبيت الخطوط العربية داخل برنامج Premiere Pro", href: "/premiere-arabic-fonts" },
    { title: "أفضل 10 خطوط عربية مجانية للتصميم الرقمي لعام 2026", href: "/best-arabic-fonts" },
  ];

  const seoArticles = [
    { title: "كيفية حساب عدد الكلمات والحروف في النصوص بدقة", href: "/word-character-counter-guide" },
    { title: "أهمية الكثافة الحرفية وطول المقال في تصدر نتائج السيو", href: "/seo-article-length-guide" },
    { title: "كيفية كتابة وصف الميتا (Meta Description) المتوافق مع جوجل", href: "/meta-description-guide" },
    { title: "استراتيجيات الكلمات المفتاحية الطويلة للمواقع الناشئة", href: "/long-tail-keywords-seo" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section Banner */}
      <div className="text-center max-w-2xl mx-auto mb-8 px-4">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl mb-3 font-tajawal">
          أدوات معالجة النصوص العربية الاحترافية
        </h1>
        <p className="text-slate-600 text-md leading-relaxed">
          منصة متكاملة ومحلية وآمنة للمصممين والكتاب لتنظيف النصوص من التشكيل، حساب الكلمات، وعلاج مشكلات توافق البرامج.
        </p>
      </div>

      {/* Main Core Text App Component */}
      <TextUtilityPanel initialMode="strip" />

      {/* Performance Dropdown Container Area */}
      <WhyTextArabi />

      {/* قسم الـ 20 مقالاً الاحترافي المطور لحفظ سرعة الصفحة (Page Speed) */}
      <div className="w-full max-w-5xl mx-auto mt-24 px-4 font-cairo">
        <div className="border-t border-slate-200/80 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2 font-tajawal">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>أكاديمية تيكست عربي الفنية</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">دليلك التقني الشامل لاحتراف معالجة النصوص والتصميم الرقمي السليم</p>
            </div>
            {/* زر يوجه للأرشيف الكامل لمطالعة كافة المقالات الـ 20 */}
            <Link href="/blog" className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group bg-blue-50 py-2 px-4 rounded-xl transition-all">
              <span>تصفح جميع المقالات الـ 20</span>
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
          
          {/* شبكة التصنيفات (20 مقالاً موزعة بهندسة بصرية مريحة) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* العمود الأول: تصنيف التصميم والجرافيك */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <PenTool className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-slate-900 font-tajawal">شروحات الجرافيك والتصميم</h3>
              </div>
              <div className="space-y-2">
                {designArticles.map((article, index) => (
                  <Link 
                    key={index} 
                    href={article.href} 
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/60 hover:border-blue-500 hover:bg-blue-50/20 transition-all text-sm group"
                  >
                    <span className="text-slate-700 group-hover:text-blue-600 font-medium transition-colors">{article.title}</span>
                    <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* العمود الثاني: تصنيف السيو وصناعة المحتوى */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileText className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 font-tajawal">السيو وصناعة المحتوى الرقمي</h3>
              </div>
              <div className="space-y-2">
                {seoArticles.map((article, index) => (
                  <Link 
                    key={index} 
                    href={article.href} 
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/60 hover:border-emerald-500 hover:bg-emerald-50/20 transition-all text-sm group"
                  >
                    <span className="text-slate-700 group-hover:text-emerald-600 font-medium transition-colors">{article.title}</span>
                    <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}