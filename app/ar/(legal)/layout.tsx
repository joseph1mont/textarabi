// app/ar/(legal-ar)/layout.tsx
import React from "react";
import Footer from "@/components/Footer";

export default function LegalArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50" dir="rtl">
      {/* Dynamic Content Area */}
      <main className="flex-grow w-full">
        {children}
      </main>
    </div>
  );
}