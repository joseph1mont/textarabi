// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // IMPORTED: For optimized image delivery
import { usePathname } from "next/navigation";
import { Home, BookOpen, Globe, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);

  // 1. Dynamic Environment Detection
  const isArabic = pathname.startsWith("/ar");
  const currentDir = isArabic ? "rtl" : "ltr";

  // 2. Dynamic Language Toggling Path Logic
  const getTogglePath = () => {
    if (isArabic) {
      const baselineSegment = pathname.replace(/^\/ar/, "").replace(/^\/|\/$/g, "");
      return baselineSegment === "" ? "/" : `/${baselineSegment}`;
    } else {
      if (pathname === "/" || pathname === "/en") return "/ar";
      const normalizedSegment = pathname.replace(/^\/|\/$/g, "");
      return `/ar/${normalizedSegment}`;
    }
  };

  // 3. Dynamic Dictionary Translations Map
  const content = {
    home: isArabic ? "الرئيسية" : "Home",
    blog: isArabic ? "المدونة" : "Blog",
    contact: isArabic ? "اتصل بنا" : "Contact",
    homeLink: isArabic ? "/ar" : "/",
    blogLink: isArabic ? "/ar/blog" : "/blog",
    contactLink: isArabic ? "/ar/contact" : "/contact",
    langLabel: isArabic ? "English" : "العربية",
    fontClass: isArabic ? "font-tajawal" : "font-sans",
    ariaLabel: isArabic ? "تبديل القائمة" : "Toggle Navigation Menu",
    logoAlt: isArabic 
      ? "شعار تيكست عربي - محرك معالجة وتدقيق النصوص" 
      : "TextArabi Logo - Arabic Text Processing Engine"
  };

  return (
    <header className={`w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs ${content.fontClass}`} dir={currentDir}>
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Block */}
        <Link href={content.homeLink} className="flex items-center gap-2.5 group shrink-0">
          {/* UPDATED: Optimized Next.js Image wrapper replacing the lucide icon */}
          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 shadow-2xs group-hover:borderColor-blue-200 transition-colors">
            <Image 
              src="/textarabi-logo.svg" 
              alt={content.logoAlt}
              width={36} 
              height={36}
              priority // High priority loading for above-the-fold branding assets (LCP)
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900">
            {isArabic ? <>تيكست<span className="text-blue-600">عربي</span></> : <>Text<span className="text-blue-600">Arabi</span></>}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href={content.homeLink} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.home}</span>
          </Link>
          <Link href={content.blogLink} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.blog}</span>
          </Link>
          <Link href={content.contactLink} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.contact}</span>
          </Link>

          {/* Language Switcher */}
          <Link
            href={getTogglePath()}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 transition-all shadow-2xs hover:bg-slate-50 ml-2"
          >
            <Globe className="w-4 h-4 text-slate-400" />
            <span>{content.langLabel}</span>
          </Link>
        </nav>

        {/* Mobile View Interactive Action Bar */}
        <div className="flex md:hidden items-center gap-2.5">
          {/* Always Available Mobile Switcher */}
          <Link
            href={getTogglePath()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs bg-slate-50"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.langLabel}</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 focus:outline-hidden shadow-2xs"
            aria-label={content.ariaLabel}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Dropdown Draw Layer */}
      {isOpen && (
        <div className="md:hidden w-full bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-1 shadow-inner absolute left-0 right-0 top-16 z-50">
          <Link 
            href={content.homeLink} 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
          >
            <Home className="w-4 h-4 text-slate-400" />
            <span>{content.home}</span>
          </Link>
          <Link 
            href={content.blogLink} 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>{content.blog}</span>
          </Link>
          <Link 
            href={content.contactLink} 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>{content.contact}</span>
          </Link>
        </div>
      )}
    </header>
  );
}