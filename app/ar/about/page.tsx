// app/ar/about/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "من نحن | المهندس جوزيف توماس",
  description:
    "تعرف على المهندس جوزيف توماس، خبير هندسة البرمجيات والسيو. محاضر سابق في جامعة حلب ومطور منصات لغوية.",
};

export default function AboutAR() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-tajawal" dir="rtl">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-black mb-6">المهندس جوزيف توماس</h1>
        <p className="text-lg text-slate-700 mb-6">
          أنا المهندس جوزيف توماس، مهندس حاسب تخرجت من جامعة حلب، حيث تشرفت
          أيضاً بالعمل كمحاضر لمادة تكنولوجيا المعلومات في الجامعة نفسها. أعمل
          في مجال تطوير الويب وتحسين محركات البحث (SEO) منذ عام ١٩٩٩، وأجمع في
          عملي بين الخبرة الأكاديمية والخبرة العملية الطويلة.
        </p>

        <h2 className="text-2xl font-bold mb-4">الخلفية المهنية والأكاديمية</h2>
        <ul className="list-disc pr-6 space-y-2 mb-6 text-slate-700">
          <li>
            <strong>الخبرة الأكاديمية:</strong> محاضر سابق لعلوم الحاسب في جامعة
            حلب وخريج كليتها.
          </li>
          <li>
            <strong>هندسة البرمجيات:</strong> خبرة عميقة في حزم Adobe وتطوير
            الويب المتكامل.
          </li>
          <li>
            <strong>التخصص اللغوي:</strong> خبير في قواعد اللغة العربية،
            التشكيل، وعمليات معالجة النصوص البرمجية.
          </li>
          <li>
            <strong>تعدد اللغات:</strong> بفضل دراستي في جامعة كونكورديا
            (Concordia University) في مونتريال، أمتلك خبرة تقنية دولية في اللغة
            الفرنسية والإنجليزية، مما مكنني من بناء منصات لغوية مزدوجة متقدمة.
          </li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2">رؤيتي المهنية</h3>
          <p className="text-slate-700">
            أكرس خبرتي الممتدة لأكثر من ربع قرن، والتي صقلتها من خلال التدريس
            الجامعي والعمل الميداني، في تقديم أدوات دقيقة لمعالجة النصوص. هدفي
            هو تقديم حلول هندسية تخدم المستخدم العربي وتسهل تعامله مع تقنيات
            الويب الحديثة.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t">
          <p>للمزيد من المعلومات أو التعاون، يسعدني تواصلكم:</p>
          <Link
            href="https://freelancewebdesignusa.com/"
            className="text-blue-600 font-bold hover:underline"
          >
            https://freelancewebdesignusa.com/
          </Link>
        </div>
      </div>
    </div>
  );
}
