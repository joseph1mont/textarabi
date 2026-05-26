import React from "react";
import Link from "next/link";

function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-10" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
            ← العودة إلى الأداة الرئيسية
          </Link>
        </div>
        <main className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-xs">
          {children}
        </main>
      </div>
    </div>
  );
}

export default LegalLayout;