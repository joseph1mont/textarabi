import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أدوات معالجة ومصحح النصوص العربية وحساب الحروف | تيكست عربي",
  description:
    "منصة برمجية متطورة لتنظيف وإزالة تشكيل النصوص العربية، معالجة مشاكل فوتوشوب وإليستريتور، وحساب عدد الكلمات بدقة بالاعتماد على محرك Sandbox آمن ولحظي.",
  alternates: {
    canonical: "/ar/",
  },
};

export default function ArabicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="font-tajawal w-full min-h-screen flex flex-col bg-slate-50 text-slate-800"
    >
      <div className="flex-grow w-full">{children}</div>
    </div>
  );
}
