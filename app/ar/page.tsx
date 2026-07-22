// app/ar/page.tsx
import React from "react";
import Link from "next/link";
import Script from "next/script";
import { BookOpen, ChevronLeft, ShieldCheck, Code } from "lucide-react";
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
    <main className="w-full py-12 px-4 max-w-5xl mx-auto flex-grow">
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

      {/* Grow Widget Integration */}
      <Script
        id="grow-initializer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));})();
          `,
        }}
      />
      <Script
        id="grow-widget-loader"
        src="https://faves.grow.me/main.js"
        data-grow-faves-site-id="U2l0ZTo3ZTM0ZjQ2Ni0wM2Y5LTRlN2ItOTY5OS1kMThlMTgyN2ZmMzI="
        strategy="afterInteractive"
        defer
      />
    </main>
  );
}
