// file path: app/ar/tools/arabic-keshida-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TextUtilityPanel from "@/components/TextUtilityPanel";

export const metadata: Metadata = {
  title: "أداة تطويل النص العربي والكشيدة الذكية اونلاين | TextArabi",
  description:
    "أداة احترافية ومتقدمة لتطويل النصوص العربية وإضافة الكشيدة أونلاين: توازن تلقائي بين الحروف، تحسين المظهر البصري للعناوين والفقرات، ضبط محاذاة السطور للتصاميم والمطبوعات، ومعالجة ذكية تحافظ على الحركات والتشكيل وقواعد اليونيكود.",
  alternates: {
    canonical: "https://textarabi.com/ar/tools/arabic-keshida-generator/",
  },
};

export default function KashidaArPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ما هي الكشيدة (التطويل) في الخط العربي وكيف تعمل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الكشيدة أو التطويل هي حرف يونيكود مخصص (U+0640 Tatweel) يُزرع أفقياً بين الحروف العربية القابلة للوصل. تُستخدم الكشيدة لضبط محاذاة النص على الجانبين (Justification)، وتجميل الشعارات والعناوين، وموازنة السطور في التصاميم دون تغيير المعنى أو المساس بالقواعد الإملائية.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين التطويل الذكي/المتوازن والتطويل الكامل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "التطويل المتوازن يحسب طول الكلمة ومنازل الاتصال ليضيف رمز التطويل في الأماكن الأكثر تناسقاً بصرياً فقط لتجنب تشويه النص، بينما يزرع التطويل الكامل الكشيدة بين جميع الحروف القابلة للوصل للحصول على مد أقصى وممتد.",
        },
      },
      {
        "@type": "Question",
        name: "هل تؤثر الكشيدة على التشكيل أو معالجة النصوص في قواعد البيانات؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تحافظ الخوارزمية على التشكيل والحركات الإعرابية فوق الحروف دون إزاحتها. ومع ذلك، يُفضل تجريد النصوص من التطويل عند إدخالها في فهارس البحث ورموز SQL لضمان المطابقة التامة في الاستعلامات.",
        },
      },
      {
        "@type": "Question",
        name: "كيف أستفيد من الكشيدة في برامج أدوبي مثل Photoshop وIllustrator؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يمكنك نسخ النص الممتد مباشرة من أداة TextArabi ولصقه داخل طبقات النص في Photoshop أو Illustrator دون الحاجة لتثبيت إضافات أو تعديل خيارات التنسيق المعقدة.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-10 pb-16" dir="rtl">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 mb-8 text-right">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-cairo mb-3">
          مولد الكشيدة وتطويل النصوص العربية الذكي
        </h1>
        <p className="text-slate-600 font-tajawal text-base max-w-3xl">
          أضف التطويل والكشيدة للنصوص والعناوين العربية بتوازن بصري هندسي. اضبط
          أطوال السطور، زّين التصاميم الرقمية والمطبوعات، وحافظ على سلامة
          التشكيل وقواعد الاتصال الإملائي فورياً داخل متصفحك.
        </p>
      </div>

      {/* Primary Tool Panel */}
      <TextUtilityPanel
        initialMode="keshida"
        lang="ar"
        allowedTool="arabic-keshida-generator"
      />

      {/* SEO & Developer Comprehensive Technical Guide */}
      <section className="max-w-5xl mx-auto px-4 mt-12 py-8 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-4 font-cairo text-slate-900">
          الدليل الفني الشامل: معالجة واستخدامات التطويل (الكشيدة) في الخطوط
          الرقمية
        </h2>

        <div className="prose prose-slate max-w-none text-slate-700 font-tajawal space-y-6 text-base leading-relaxed">
          <p>
            تعد <strong>الكشيدة</strong> (Tatweel) إحدى أعرق الخصائص الطباعية في
            التراث الخطي العربي، حيث استخدمها الخطاطون القدامى لموازنة مسافات
            السطور وتأطير الصفحة اليدوية. وفي عصر النشر الرقمي وتطوير واجهات
            المستخدم (UI/UX)، أصبحت معالجة الكشيدة أداة حيوية لمنح النصوص
            العربية طابعاً بائناً وفخماً في العناوين الرئيسية، البطاقات
            التسويقية، وتصميم الشعارات.
          </p>
          <p>
            تعتمد منصة <strong>TextArabi</strong> على محرك معالجة نصية يطبق
            خوارزميات اليونيكود القياسية لزرع رمز التطويل (<code>U+0640</code>)
            بدقة متناهية دون كسر محاذاة الحروف أو التأثير على كفاءة خطوط الويب.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            1. قواعد الاتصال والتحليل المورفولوجي للحروف
          </h3>
          <p>
            لا تكتفي أداتنا بنسخ رمز التطويل بشكل عشوائي، بل تقوم بتحليل الكلمات
            إلى حروف منفصلة وتحديد نقاط الوصل الجائزة. الحروف غير المتصلة بما
            بعدها (مثل: أ، د، ذ، ر، ز، و) تُستثنى تلقائياً من عملية المد لتجنب
            الأخطاء الإملائية. بالإضافة إلى ذلك، تحسب الأداة موقع الحركات
            الإعرابية (كالفتحة والضمة والكسرة) وتُبقيها مثبتة فوق أحرفها
            الأصلية.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            2. الفرق بين خيارات التطويل المتوازن والتطويل الكامل
          </h3>
          <p>يوفر المحرك أنماطاً متعددة تناسب مختلف الاحتياجات:</p>
          <ul className="list-disc list-inside space-y-2 pr-4">
            <li>
              <strong>التطويل المتوازن (Balanced Kashida):</strong> يستهدف
              الكلمات المكونة من 4 حروف أو أكثر ويضيف كشيدة واحدة في الموضع
              الأكثر اتساعاً بصرياً. يوصى بهذا النمط للمقالات والفقرات الطويلة.
            </li>
            <li>
              <strong>التطويل الكامل (Full Extension):</strong> يزرع رموز
              التطويل بين جميع الحروف القابلة للوصل داخل الكلمة، مما يعطي مظهراً
              ممتداً للغاية يناسب عناوين الكتب والغلافات والشعارات.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            3. استخدام الكشيدة في تحسين محركات البحث (SEO) وقواعد البيانات
          </h3>
          <p>
            على الرغم من الجمالية البصرية للكشيدة، إلا أن إقحام رمز{" "}
            <code>U+0640</code> داخل الكلمات يغير القيمة الرقمية للسلسلة النصية
            (String Hash). هذا يعني أن كلمة &quot;تـسـويـق&quot; لن تطابق كلمة
            &quot;تسويق&quot; عند إجراء استعلام في قواعد البيانات. للحفاظ على
            دقة الأداء، يُنصح بـ:
          </p>
          <ul className="list-disc list-inside space-y-2 pr-4">
            <li>
              استخدام الكشيدة في العناوين العريضة (Headings) وعناصر العرض البصري
              فقط.
            </li>
            <li>
              تجريد النصوص من الكشيدة قبل تخزينها في جداول SQL أو فهارس
              Elasticsearch عبر{" "}
              <Link
                href="/ar/tools/arabic-text-normalizer/"
                className="text-blue-600 font-semibold underline hover:text-blue-800"
              >
                منقي ومعالج النصوص العربية
              </Link>
              .
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            4. التكامل مع برامج التصميم أدوبي (Photoshop & Illustrator)
          </h3>
          <p>
            تعاني بعض نسخ برامج التصميم من مشاكل في تفعيل محاذاة الكشيدة
            الأوتوماتيكية. توفر أداتنا حلاً مباشراً من خلال توليد النص الممتد
            مسبقاً، مما يتيح للمصمم نسخه ولصقه في أداة الكتابة داخل Photoshop أو
            Figma دون القلق حول تفكك الحروف أو تغير اتجاه النص.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
            الأسئلة الشائعة (FAQ) حول التطويل والكشيدة
          </h3>
          <div className="space-y-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: هل تؤثر إزالة أو إضافة الكشيدة على معنى الكلمات العربية؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: لا، الكشيدة هي عنصر شكلي وتجميلي محض في الخط العربي ولا تغير
                المعنى اللغوي أو الإعرابي للكلمة نهائياً.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: كيف يمكنني التخلص من الكشيدة الموجودة في نص مسبقاً؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: يمكنك استخدام أداة منقي النصوص العربية المتاحة في موقعنا،
                والتي تقوم بحذف رمز التطويل U+0640 فورياً بنقرة زر واحدة.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-900 mb-1">
                س: هل تدعم جميع خطوط الويب (Web Fonts) عرض الكشيدة؟
              </h4>
              <p className="text-slate-600 text-sm">
                ج: نعم، جميع خطوط الويب العربية الحديثة مثل Cairo وTajawal
                وAmiri تدعم رمز Tatweel القياسي بشكل ممتاز وتتيح تمديده دون
                تشويه.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
