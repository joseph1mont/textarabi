// app/(legal)/layout.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50" dir="ltr">
      {/* Dynamic Content Area */}
      <main className="flex-grow w-full">
          {children}
      </main>
    </div>
  );
}