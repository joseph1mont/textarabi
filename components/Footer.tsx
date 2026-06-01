import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  lang?: "en" | "ar";
}

export default function Footer({ lang = "en" }: FooterProps) {
  const isRtl = lang === "ar";

  return (
    <footer 
      className="w-full bg-white border-t border-slate-200 mt-auto py-8 px-4" 
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">
            {isRtl ? (
              <>&copy; {new Date().getFullYear()} تيكست عربي. جميع الحقوق محفوظة.</>
            ) : (
              <>&copy; {new Date().getFullYear()} TextArabi. All rights reserved.</>
            )}
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-xs text-slate-400 font-semibold">
          {isRtl ? (
            <>
              <Link href="/ar/privacy-policy/" className="hover:text-blue-600 transition-colors">سياسة الخصوصية</Link>
              <Link href="/ar/terms/" className="hover:text-blue-600 transition-colors">شروط الخدمة</Link>
              <Link href="/ar/contact/" className="hover:text-blue-600 transition-colors">اتصل بالدعم الفني</Link>
            </>
          ) : (
            <>
              <Link href="/privacy-policy/" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
              <Link href="/contact/" className="hover:text-blue-600 transition-colors">Contact Support</Link>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}