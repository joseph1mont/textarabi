"use client";

import React from "react";
import { HelpCircle, ShieldCheck, Zap, Globe } from "lucide-react";

// تعريف الـ Props لدعم المتغير اللغوي بأمان مع TypeScript
interface WhyTextArabiProps {
  lang?: "ar" | "en";
}

export function WhyTextArabi({ lang = "ar" }: WhyTextArabiProps) {
  const isAr = lang === "ar";

  // مصفوفة الأسئلة الشائعة المترجمة بالكامل
  const faqs = isAr
    ? [
        {
          question: "لماذا تظهر الحروف العربية معكوسة أو متقطعة في برنامج Photoshop؟",
          answer: "تحدث هذه المشكلة لأن بعض نسخ برامج الجرافيك القديمة أو غير المهيأة تفتقر إلى محرك النصوص الشرق أوسطي (Middle Eastern Layout Engine). تقوم أداتنا بإعادة جدولة صياغة وبنية المحارف والكلمات لكي تُقرأ بشكل سليم تماماً من اليسار إلى اليمين داخل برامج التصميم."
        },
        {
          question: "هل نصوصي ووثائقي آمنة وسرية عند استخدام أدوات المعالجة؟",
          answer: "تمماً وبشكل قاطع. منصة تيكست عربي مصممة لتعمل بالكامل داخل متصفحك (Client-Side Sandbox). لا يتم إرسال أو تخزين أي جمل أو نصوص على خوادم خارجية، مما يضمن أماناً وحماية مطلقة لبياناتك."
        },
        {
          question: "كيف تساعد أداة إزالة التشكيل في تحسين محركات البحث وسيو (SEO) الموقع؟",
          answer: "تجريد المحتوى من الحركات الزائدة والتعديلات الزخرفية يسهل على زواحف جوجل (Googlebots) فهرسة وقراءة الكلمات المفتاحية دون تشتيت، مما يرفع من دقة مطابقة العبارات البحثية للمستخدمين."
        }
      ]
    : [
        {
          question: "Why does Arabic text appear reversed or disconnected in Adobe Photoshop?",
          answer: "This bug occurs when older or unconfigured graphic design suites lack the Middle Eastern Layout Engine. Our utility programmatically restructures character mapping and string token joining sequences so they read flawlessly left-to-right inside your local design canvas."
        },
        {
          question: "Are my documents and textual data secure and private within your utilities?",
          answer: "Absolutely and unconditionally. TextArabi is engineered to run entirely inside your client-side browser context (Local Sandbox). No string data or text blocks are ever transmitted to external web servers, guaranteeing absolute data confidentiality."
        },
        {
          question: "How does the diacritic removal tool enhance multilingual SEO rankings?",
          answer: "Stripping excessive tashkeel and ornamental alterations enables search engine crawlers (Googlebots) to index and tokenize core keywords seamlessly without string fragmentation, matching user organic search intent with maximum precision."
        }
      ];

  // النصوص الثابتة للبطاقات والعناوين
  const content = {
    title: isAr ? "الأسئلة الشائعة حول المنصة" : "Frequently Asked Questions",
    features: [
      {
        title: isAr ? "خصوصية محلية كاملة" : "Local Data Sandbox",
        desc: isAr 
          ? "المعالجة تتم محلياً 100% داخل جهازك دون رفع أي بيانات للخوادم." 
          : "All data transformations occur 100% locally in-browser. Zero server log storage."
      },
      {
        title: isAr ? "سرعة فائقة مدمجة" : "Blazing Fast Runtimes",
        desc: isAr 
          ? "خوارزميات معالجة فورية تدعم معايير Core Web Vitals لسرعة الطلاء اللحظي." 
          : "Instant processing loops designed to comply with modern Core Web Vitals targets."
      },
      {
        title: isAr ? "دقة لغوية متكاملة" : "Advanced String Metrics",
        desc: isAr 
          ? "التعامل الذكي مع المحارف المعقدة والتشكيل وحساب الكثافة بدقة تامة." 
          : "Robust parsing engines for handling complex glyphs, character density, and scripts."
      }
    ]
  };

  return (
    <section 
      className={`w-full max-w-5xl mx-auto px-4 py-12 ${isAr ? "font-cairo" : "font-inter"}`} 
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* شبكة ميزات المنصة */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {/* البطاقة الأولى */}
        <div className="bg-white p-5 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-bold text-slate-900 text-sm mb-1 ${isAr ? "font-tajawal" : ""}`}>
              {content.features[0].title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {content.features[0].desc}
            </p>
          </div>
        </div>

        {/* البطاقة الثانية */}
        <div className="bg-white p-5 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-bold text-slate-900 text-sm mb-1 ${isAr ? "font-tajawal" : ""}`}>
              {content.features[1].title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {content.features[1].desc}
            </p>
          </div>
        </div>

        {/* text-purple-600 البطاقة الثالثة */}
        <div className="bg-white p-5 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-bold text-slate-900 text-sm mb-1 ${isAr ? "font-tajawal" : ""}`}>
              {content.features[2].title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {content.features[2].desc}
            </p>
          </div>
        </div>
      </div>

      {/* قسم الأسئلة الشائعة */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
        <h2 className={`text-lg md:text-xl font-black text-slate-900 mb-6 flex items-center gap-2 ${isAr ? "font-tajawal" : ""}`}>
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <span>{content.title}</span>
        </h2>

        <div className="space-y-6 divide-y divide-slate-100">
          {faqs.map((faq, index) => (
            <div key={index} className={`pt-6 ${index === 0 ? "pt-0" : ""}`}>
              <h3 className={`font-bold text-slate-800 text-sm md:text-base mb-2 ${isAr ? "font-tajawal" : ""}`}>
                {faq.question}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}