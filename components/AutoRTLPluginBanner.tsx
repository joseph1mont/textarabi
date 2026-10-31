"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AutoRTLPluginBanner() {
  const pathname = usePathname();

  // All pages under /ar/ use Arabic.
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8">
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="p-6 bg-gradient-to-r from-amber-50/90 to-emerald-50/90 border border-amber-200/80 rounded-2xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Value Proposition & Copy */}
        <div
          className={
            isArabic ? "text-center sm:text-right" : "text-center sm:text-left"
          }
        >
          <strong
            className={`block text-stone-900 font-bold text-lg mb-1 ${
              isArabic ? "font-cairo" : ""
            }`}
          >
            {isArabic
              ? "🎨 هل تعبت من عكس النصوص العربية يدويًا في فوتوشوب؟"
              : "🎨 Tired of manually fixing reversed Arabic text in Photoshop?"}
          </strong>

          <p
            className={`text-stone-700 text-sm font-medium m-0 ${
              isArabic ? "font-tajawal" : ""
            }`}
          >
            {isArabic
              ? "احصل على AutoRTL Pro، الإضافة الاحترافية لحل مشاكل الحروف المقطعة والمعكوسة بنقرة واحدة."
              : "Get AutoRTL Pro, the ultimate one-click plugin for flawless Arabic typography and layout shaping."}
          </p>
        </div>

        {/* Buy Me a Coffee / Product Link Button */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <a
            href="https://buymeacoffee.com/fwdusa/e/593481"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
            aria-label={
              isArabic
                ? "احصل على إضافة AutoRTL Pro عبر Buy Me a Coffee"
                : "Get AutoRTL Pro on Buy Me a Coffee"
            }
          >
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt={isArabic ? "احصل على الإضافة" : "Get the Plugin"}
              width={545}
              height={153}
              className="h-12 w-auto object-contain shadow-xs rounded-lg"
              unoptimized
            />
          </a>
          <span className="text-xs font-semibold text-amber-800">
            {isArabic
              ? "⚡ تحميل فوري • $9 فقط"
              : "⚡ Instant Download • Only $9"}
          </span>
        </div>
      </div>
    </div>
  );
}
