"use client";

import React, { useState } from "react";
import { ChevronDown, Trash2, RefreshCw, BarChart3, Type } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function WhyTextArabi() {
  // Keep sections collapsed by default to optimize mobile CLS and speed up initial page paint
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqItems: AccordionItem[] = [
    {
      id: "tashkeel",
      title: "إزالة الحركات والتشكيل (Tashkeel Stripper)",
      icon: <Trash2 className="w-5 h-5 text-blue-600" />,
      content: (
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          تساعد الباحثين والطلاب على تنقية النصوص المنسوخة من الحركات التعبيرية (مثل الفتحة، الضمة، الكسرة، والتنوين) للحصول على نص خام متوافق مع محركات البحث أو الاستخدام في الاقتباسات الأكاديمية والتقارير الرسمية بيسر وسهولة.
        </p>
      ),
    },
    {
      id: "rtl-fix",
      title: "حل مشكلة الحروف المقطوعة والمعكوسة تلقائياً",
      icon: <RefreshCw className="w-5 h-5 text-emerald-600" />,
      content: (
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          إذا كنت تستخدم برامج التصميم والمونتاج القديمة أو غير المتوافقة تماماً مع الكتابة من اليمين إلى اليسار (RTL) مثل إصدارات Photoshop أو Premiere القديمة، فإن هذه الأداة تعيد تشكيل الحروف وربطها برمجياً لتبدو صحيحة تماماً داخل بيئة العمل.
        </p>
      ),
    },
    {
      id: "metrics",
      title: "عداد الحروف والكلمات الدقيق للمحتوى العربي (SEO)",
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
      content: (
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          أداة مدمجة كلياً لمساعدة كتاب المحتوى واختصاصي السيو (SEO) على ضبط أطوال العناوين والوصف (Meta Descriptions). يتميز العداد بالدقة العالية حيث يقوم بفرز الكلمات والمحافظة على الأداء السريع للمتصفح دون تحميل إضافي.
        </p>
      ),
    },
    {
      id: "preview",
      title: "معاينة الخطوط العربية واستعراض الأنماط قبل التحميل",
      icon: <Type className="w-5 h-5 text-amber-600" />,
      content: (
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          منصة متكاملة لـ معاينة الخطوط العربية الشهيرة (مثل خط كايرو، تاجاوال، والأميري) على نصوصك الخاصة مباشرة. يمكنك التحكم الكامل في حجم الخط ونوعه لرؤية النتيجة النهائية للمحتوى قبل اعتماده.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12" dir="rtl">
      {/* Intro Context Block */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs text-slate-700 mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 border-r-4 border-blue-600 pr-3">
          لماذا منصة تيكست عربي (TextArabi)؟
        </h3>
        <p className="leading-relaxed text-sm md:text-base text-slate-600">
          عند العمل مع المحتوى الرقمي العربي، يواجه الكثير من صناع المحتوى والمميزين والباحثين عوائق يومية تتعلق بتوافق النصوص وعرضها. تم بناء منصتنا باستخدام أحدث التقنيات لتقدم حلولاً برمجية فورية تعمل مباشرة في المتصفح دون الحاجة لتثبيت أي تطبيقات إضافية، مما يضمن أعلى مستويات الحماية والسرعة المطلقة.
        </p>
      </div>

      {/* Interactive Dropdown List */}
      <div className="space-y-3">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <article 
              key={item.id}
              className={`bg-white border rounded-xl transition-all duration-200 overflow-hidden ${
                isOpen ? "border-blue-500 shadow-md shadow-blue-500/5" : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <h3>
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-right font-bold text-slate-800 text-base md:text-lg gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-50 rounded-lg shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`} 
                  />
                </button>
              </h3>
              
              <div 
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-60 opacity-100 border-t border-slate-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="p-4 md:p-5 bg-slate-50/50">
                  {item.content}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}