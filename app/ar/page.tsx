// app/ar/page.tsx
import React from "react";
import Link from "next/link";
import { BookOpen, ChevronLeft, ShieldCheck, Code } from "lucide-react";
import TextUtilityPanel from "@/components/TextUtilityPanel";
import { WhyTextArabi } from "@/components/WhyTextArabi"; 

export default function ArabicHomePage() {
  return (
    <main className="w-full py-12 px-4 max-w-5xl mx-auto flex-grow">
      
      {/* Right-Aligned Premium Hero Header */}
      <div className="text-start max-w-2xl mb-10">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl mb-3 font-tajawal leading-tight tracking-tight">
          أدوات معالجة النصوص العربية واحترافية التعريب الرقمي
        </h1>
        <p className="text-slate-600 text-md leading-relaxed font-tajawal">
          منصة متكاملة ومحلية وآمنة للمصممين ومطوري الويب تتضمن أدوات تعريب احترافية ومصحح نصوص ذكي لتنظيف النصوص من التشكيل، حساب الكلمات بدقة، وعلاج مشكلات توافق البرامج الرقمية وسلاسل الكود النصية.
        </p>
      </div>

      {/* Arabic Utility Panel Workspace Workspace Grid */}
      <TextUtilityPanel initialMode="strip" lang="ar" />
      <WhyTextArabi lang="ar" />

      {/* Trust Framework Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 w-full">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 text-purple-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-tajawal">بيئة معالجة آمنة ومشفرة بالكامل (Sandbox)</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-tajawal">
              جميع عمليات تنظيف وتعديل النصوص وتطبيق الحركات تتم محلياً بالكامل داخل متصفحك عبر محركات برمجية خاصة بجافا سكريبت. لا يتم إرسال أو حفظ أي نصوص في خوادم خارجية لضمان السرية المطلقة.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between group">
          <div>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-tajawal">توثيق ومستندات تقنية مكثفة</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 font-tajawal">
              اطلع على أدلة برمجية مكثفة تشرح التعبيرات النمطية لمعالجة النصوص العربية، تنظيف السلاسل النصية، وتحسين أداء المواقع والأدوات الرقمية لخدمة محركات البحث بذكاء.
            </p>
          </div>
          {/* Linked systematically to your Arabic technical writing sub-route */}
          <Link href="/ar/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 mt-2 font-tajawal">
            <span>تصفح الأدلة الفنية والمقالات العربية</span>
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
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
                <span>مقالات تيكست عربي</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl font-tajawal">
                دليلك التقني الأساسي لتحسين السلاسل النصية، التنسيق الرقمي، وتصميم التنسيقات والمخططات الحديثة.
              </p>
            </div>
            <Link 
              href="/ar/blog" 
              className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl transition-all shadow-xs shrink-0 group text-center font-tajawal"
            >
              <span>تصفح جميع المقالات المتاحة</span>
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}