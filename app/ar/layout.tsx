// file name: app/ar/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "أدوات معالجة ومصحح النصوص العربية وحساب الحروف | تيكست عربي",
  description:
    "منصة برمجية متطورة لتنظيف وإزالة تشكيل النصوص العربية، معالجة مشاكل فوتوشوب وإليستريتور، وحساب عدد الكلمات بدقة بالاعتماد على محرك Sandbox آمن ولحظي.",
  alternates: {
    canonical: "https://textarabi.com/ar/",
  },
};

export default function ArabicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* Official Grow Script Implementation for Arabic Locale */}
        <Script
          id="grow-script-ar"
          strategy="beforeInteractive"
          data-grow-initializer=""
          dangerouslySetInnerHTML={{
            __html: `
              !(function () {
                window.growMe || ((window.growMe = function (e) { window.growMe._.push(e); }), (window.growMe._ = []));
                var e = document.createElement("script");
                e.type = "text/javascript";
                e.async = !0;
                e.src = "https://faves.grow.me/main.js";
                e.setAttribute("data-grow-faves-site-id", "U2l0ZTo3ZTM0ZjQ2Ni0wM2Y5LTRlN2ItOTY5OS1kMThlMTgyN2ZmMzI=");
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t);
              })();
            `,
          }}
        />
      </head>
      <div
        dir="rtl"
        lang="ar"
        className="font-tajawal w-full min-h-screen flex flex-col bg-slate-50 text-slate-800"
      >
        <div className="flex-grow w-full">{children}</div>
      </div>
      <GoogleAnalytics gaId="G-M3KFLTY6T7" />
    </>
  );
}
