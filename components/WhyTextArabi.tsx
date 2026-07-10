"use client";

import React from "react";
import {
  HelpCircle,
  ShieldCheck,
  Zap,
  Globe,
  FileText,
  Languages,
  Cpu,
  CheckCircle2,
} from "lucide-react";

// تعريف الـ Props لدعم المتغير اللغوي بأمان مع TypeScript
interface WhyTextArabiProps {
  lang?: "ar" | "en";
}

export function WhyTextArabi({ lang = "ar" }: WhyTextArabiProps) {
  const isAr = lang === "ar";

  // مصفوفة الأسئلة الشائعة المترجمة بالكامل مع دمج الكلمات المفتاحية طويلة الذيل (Long-tail Keywords) لـ AdSense & SEO
  const faqs = isAr
    ? [
        {
          question:
            "كيف يمكن حل مشكلة الحروف العربية المعكوسة أو المقطعة في برامج Adobe مثل Photoshop وIllustrator؟",
          answer:
            "تحدث هذه المشكلة الشائعة بسبب افتقار بعض نسخ برامج التصميم لمحرك النصوص الشرق أوسطي (Middle Eastern Layout Engine). توفر أداتنا حلاً فورياً لـ 'معالجة النصوص العربية للفوتوشوب' دون الحاجة لتغيير إعدادات البرنامج، حيث تقوم بإعادة ترتيب صياغة وبنية المحارف والكلمات لتظهر بشكل سليم تماماً من اليمين إلى اليسار داخل لوحة التصميم الخاصة بك مع دعم التصدير المتوافق مع أنماط الويب (CSS Safe Stacks).",
        },
        {
          question:
            "هل تدعم المنصة ترجمة النصوص الأكاديمية الطويلة والأبحاث الكاملة دون قيود؟",
          answer:
            "نعم، تم تصميم نظامنا ليتجاوز قيود الأدوات التقليدية (مثل جوجل ترانسليت). يمكنك 'ترجمة النصوص الطويلة والمقالات الأكاديمية بالكامل' في جلسة واحدة مع الحفاظ على الصياغة اللغوية الدقيقة والسياق العلمي للمصطلحات، مما يجعلها الأداة المثالية للباحثين والمترجمين المحترفين.",
        },
        {
          question:
            "ما هي ميزة موقع تشكيل نصوص عربية تلقائياً بالذكاء الاصطناعي وكيف أستخدم الـ API؟",
          answer:
            "يوفر 'برنامج تشكيل النصوص تلقائياً' ضبطاً دقيقاً ومحكماً لأواخر الكلمات وبنية النص لرفع مستوى المحتوى التعليمي والإخباري، كما يدعم خيار إزالة التشكيل لتسهيل الزحف والأرشفة. بالإضافة إلى الواجهة اليدوية، نوفر واجهة برمجية متطورة (Automatic Arabic Tashkeel API) تتيح للمطورين وأصحاب المواقع أتمتة تشكيل الحروف وتصحيحها لغوياً عبر أنظمتهم البرمجية مباشرة لدعم سيو (SEO) المحتوى العربي.",
        },
        {
          question:
            "كيف تضمن المنصة أمان وسرية المستندات الأكاديمية والملفات الحساسة؟",
          answer:
            "نحن نطبق سياسة صارمة لخصوصية البيانات وأمان النقل (Secure Data Processing). يتم تشفير كافة النصوص الطويلة والوثائق الأكاديمية المتبادلة عبر بروتوكولات HTTPS المتقدمة أثناء معالجتها بواسطة الـ API، مع التزامنا المطلق بعدم حفظ، أرشفة، أو تخزين أي نصوص أو سجلات على خوادمنا نهائياً بمجرد انتهاء المعالجة اللحظية.",
        },
      ]
    : [
        {
          question:
            "How to fix Arabic backward text and disconnected letters in Adobe Photoshop or Illustrator?",
          answer:
            "This frequent bug occurs when graphic design suites lack the Middle Eastern Layout Engine. Our utility serves as an instant 'Adobe Arabic text fix tool' by programmatically restructuring character mapping and string sequences, ensuring your typography reads flawlessly from right-to-left inside your local design canvas with full support for clean, web-ready HTML output and CSS Safe Stacks.",
        },
        {
          question:
            "Can I translate long Arabic documents and academic research papers without character limits?",
          answer:
            "Absolutely. Unlike traditional platforms that restrict inputs to 5,000 characters, our 'long-form academic Arabic translation service' is engineered to handle massive text blocks, research essays, and entire books. It preserves context, syntax, and complex technical terminology across extensive documents smoothly.",
        },
        {
          question:
            "What makes your automatic Arabic text diacritization API suitable for developers?",
          answer:
            "Our engine delivers native-grade 'automated Arabic text diacritization (Auto Tashkeel)' and removal functions powered by contextual parsing. For engineering teams looking to scale, we provide an enterprise-grade REST API that hooks directly into custom platforms or WordPress systems to automate grammar checks, vowelization, and content formatting instantly.",
        },
        {
          question:
            "How does the platform ensure the confidentiality and safety of sensitive academic documents?",
          answer:
            "We strictly implement advanced data encryption and a secure data processing architecture. All long text blocks and academic materials processed through our API utilities are fully encrypted in transit via TLS. We enforce a rigid zero-retention policy—your data is processed in real time and is never logged, cached, or saved on our servers.",
        },
      ];

  // النصوص الثابتة للبطاقات والعناوين
  const content = {
    title: isAr
      ? "الأسئلة الشائعة وحلول معالجة النصوص"
      : "Frequently Asked Questions & Solutions",
    features: [
      {
        title: isAr ? "معالجة نصوص Adobe والـ OCR" : "Adobe Arabic Graphic Fix",
        desc: isAr
          ? "حل مشكلة الحروف المقطعة والمعكوسة في برامج الفوتوشوب والإن ديزاين فوراً."
          : "Instant processing tool to fix backward and disconnected Arabic characters in Adobe suites.",
      },
      {
        title: isAr
          ? "ترجمة المستندات الأكاديمية الطويلة"
          : "Long-Text Academic Translation",
        desc: isAr
          ? "دعم ترجمة الأبحاث والنصوص الضخمة دون قيود الحروف وبدقة لغوية متكاملة."
          : "Translate extensive scientific manuscripts and long documents without string volume limits.",
      },
      {
        title: isAr
          ? "التشكيل التلقائي الذكي والـ API"
          : "Automated Tashkeel & Dev API",
        desc: isAr
          ? "موقع تشكيل الحروف العربية تلقائياً مع توفير واجهة برمجية API مرنة للمطورين."
          : "Contextual automatic Arabic vowelization suite with a robust REST API for application developers.",
      },
      {
        title: isAr ? "تشفير البيانات وأمان النقل" : "Secure Data Processing",
        desc: isAr
          ? "معالجة مشفرة وآمنة بالكامل مع تطبيق سياسة عدم الاحتفاظ بالبيانات أو تخزينها."
          : "Fully encrypted processing architecture operating under a strict zero-retention logging policy.",
      },
    ],
    updatesTitle: isAr
      ? "ميزات معالجة البيانات الإضافية"
      : "Advanced Text Core Capabilities",
    updates: isAr
      ? [
          "إضافة وإزالة التشكيل تلقائياً بالذكاء الاصطناعي لتسهيل أرشفة السيو وزحف عناكب جوجل.",
          "عداد كلمات عربي دقيق للمحارف متعددة البايتات (Multi-Byte Word Counter) لحساب الكثافة اللغوية للأبحاث.",
          "نسخ نظيف ومباشر بصيغة HTML متوافق مع عائلات خطوط الويب الآمنة (CSS Safe Stacks) دون تشويه التنسيق.",
        ]
      : [
          "Automated Arabic diacritics addition & removal system optimized for semantic SEO indexing.",
          "Precise multi-byte Arabic word counter engineered for handling dense academic text metrics.",
          "Clean copy-to-HTML formatting tool fully compatible with modern CSS safe font stacks.",
        ],
  };

  return (
    <section
      className={`w-full max-w-5xl mx-auto px-4 py-12 ${isAr ? "font-cairo" : "font-inter"}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* شبكة ميزات وخدمات المنصة الأساسية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* الخدمة 1: إصلاح أدوبي */}
        <div className="bg-white p-5 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3
              className={`font-bold text-slate-900 text-sm mb-1 ${isAr ? "font-tajawal" : ""}`}
            >
              {content.features[0].title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {content.features[0].desc}
            </p>
          </div>
        </div>

        {/* الخدمة 2: النصوص الطويلة والأكاديمية */}
        <div className="bg-white p-5 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Languages className="w-5 h-5" />
          </div>
          <div>
            <h3
              className={`font-bold text-slate-900 text-sm mb-1 ${isAr ? "font-tajawal" : ""}`}
            >
              {content.features[1].title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {content.features[1].desc}
            </p>
          </div>
        </div>

        {/* الخدمة 3: التشكيل التلقائي والـ API */}
        <div className="bg-white p-5 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3
              className={`font-bold text-slate-900 text-sm mb-1 ${isAr ? "font-tajawal" : ""}`}
            >
              {content.features[2].title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {content.features[2].desc}
            </p>
          </div>
        </div>

        {/* الخدمة 4: تشفير البيانات وأمان النقل */}
        <div className="bg-white p-5 border border-slate-200/60 rounded-2xl flex gap-4 items-start shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3
              className={`font-bold text-slate-900 text-sm mb-1 ${isAr ? "font-tajawal" : ""}`}
            >
              {content.features[3].title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              {content.features[3].desc}
            </p>
          </div>
        </div>
      </div>

      {/* شريط الإضافات والميزات الفرعية الجديدة - تحسين هيكلية السيو وزيادة الكثافة المفتاحية */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 mb-12">
        <h3
          className={`text-sm font-bold text-slate-800 mb-4 ${isAr ? "font-tajawal" : ""}`}
        >
          {content.updatesTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.updates.map((update, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-slate-600 text-xs leading-relaxed">{update}</p>
            </div>
          ))}
        </div>
      </div>

      {/* قسم الأسئلة الشائعة والدليل المعرفي لـ AdSense */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
        <h2
          className={`text-lg md:text-xl font-black text-slate-900 mb-6 flex items-center gap-2 ${isAr ? "font-tajawal" : ""}`}
        >
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <span>{content.title}</span>
        </h2>

        <div className="space-y-6 divide-y divide-slate-100">
          {faqs.map((faq, index) => (
            <div key={index} className={`pt-6 ${index === 0 ? "pt-0" : ""}`}>
              <h3
                className={`font-bold text-slate-800 text-sm md:text-base mb-2 ${isAr ? "font-tajawal" : ""}`}
              >
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
