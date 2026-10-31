"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BuyMeACoffeeButton() {
  const pathname = usePathname();

  // All pages under /ar/ use Arabic.
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8">
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="p-6 bg-emerald-50/80 border border-emerald-200/80 rounded-2xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Support message */}
        <div
          className={
            isArabic ? "text-center sm:text-right" : "text-center sm:text-left"
          }
        >
          <strong
            className={`block text-emerald-900 font-bold text-lg mb-1 ${
              isArabic ? "font-cairo" : ""
            }`}
          >
            {isArabic
              ? "❤️ هل وفّرنا عليك عناء الأكواد ومشاكل التصميم؟"
              : "❤️ Did we save you time and frustration with coding and design?"}
          </strong>

          <p
            className={`text-emerald-700 text-sm font-medium m-0 ${
              isArabic ? "font-tajawal" : ""
            }`}
          >
            {isArabic
              ? "نشكر دعمكم لاستمرار الموقع مجانًا لجميع المصممين والمطورين العرب."
              : "Thank you for supporting us and keeping these tools free for designers and developers."}
          </p>
        </div>

        {/* Buy Me a Coffee button */}
        <div className="flex-shrink-0">
          <a
            href="https://buymeacoffee.com/fwdusa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
            aria-label={
              isArabic
                ? "دعم TextArabi عبر Buy Me a Coffee"
                : "Support TextArabi on Buy Me a Coffee"
            }
          >
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt={isArabic ? "ادعمنا عبر Buy Me a Coffee" : "Buy Me a Coffee"}
              width={545}
              height={153}
              className="h-12 w-auto object-contain"
              unoptimized
            />
          </a>
        </div>
      </div>
    </div>
  );
}
