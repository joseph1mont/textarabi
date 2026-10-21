"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Globe,
  Mail,
  User,
  Menu,
  X,
  Wrench,
  ChevronDown,
  Keyboard,
  Camera,
  Maximize2,
  Spline,
  FileText,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Dynamic Environment Detection
  const isArabic = pathname.startsWith("/ar");
  const currentDir = isArabic ? "rtl" : "ltr";

  // Dynamic Language Toggling Path Logic
  const getTogglePath = () => {
    if (isArabic) {
      const baselineSegment = pathname
        .replace(/^\/ar/, "")
        .replace(/^\/|\/$/g, "");
      return baselineSegment === "" ? "/" : `/${baselineSegment}`;
    } else {
      if (pathname === "/" || pathname === "/en") return "/ar";
      const normalizedSegment = pathname.replace(/^\/|\/$/g, "");
      return `/ar/${normalizedSegment}`;
    }
  };

  // Dynamic Dictionary Translations & Sublinks Map
  const content = {
    home: isArabic ? "الرئيسية" : "Home",
    tools: isArabic ? "الأدوات" : "Tools",
    blog: isArabic ? "المدونة" : "Blog",
    about: isArabic ? "من نحن" : "About",
    contact: isArabic ? "اتصل بنا" : "Contact",

    homeLink: isArabic ? "/ar" : "/",
    blogLink: isArabic ? "/ar/blog" : "/blog",
    aboutLink: isArabic ? "/ar/about" : "/about",
    contactLink: isArabic ? "/ar/contact" : "/contact",

    // Tool Sublinks definitions
    toolLinks: [
      {
        name: isArabic ? "اختبار سرعة الطباعة" : "Typing Speed Test",
        href: isArabic ? "/ar/tools/typing-test" : "/tools/typing-test",
        icon: Keyboard,
      },
      {
        name: isArabic ? "منقي ومعالج النصوص" : "Text Normalizer",
        href: isArabic
          ? "/ar/tools/arabic-text-normalizer"
          : "/tools/arabic-text-normalizer",
        icon: FileText,
      },
      {
        name: isArabic ? "مسح ضوئي OCR" : "OCR Scanner",
        href: isArabic ? "/ar/tools/ocr-scanner" : "/tools/ocr-scanner",
        icon: Camera,
      },
      {
        name: isArabic ? "مولد الكشيدة والتطويل" : "Keshida Generator",
        href: isArabic
          ? "/ar/tools/arabic-keshida-generator"
          : "/tools/arabic-keshida-generator",
        icon: Maximize2,
      },
      {
        name: isArabic ? "محول النص إلى متجه SVG" : "Text to SVG Vector",
        href: isArabic
          ? "/ar/tools/arabic-text-to-vector"
          : "/tools/arabic-text-to-vector",
        icon: Spline,
      },
    ],

    langLabel: isArabic ? "English" : "العربية",
    fontClass: isArabic ? "font-tajawal" : "font-sans",
    ariaLabel: isArabic ? "تبديل القائمة" : "Toggle Navigation Menu",
    logoAlt: isArabic
      ? "شعار تيكست عربي - محرك معالجة وتدقيق النصوص"
      : "TextArabi Logo - Arabic Text Processing Engine",
  };

  return (
    <header
      className={`w-full bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs ${content.fontClass}`}
      dir={currentDir}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Block */}
        <Link
          href={content.homeLink}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 shadow-2xs group-hover:border-blue-200 transition-colors">
            <Image
              src="/textarabi-logo.svg"
              alt={content.logoAlt}
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900">
            {isArabic ? (
              <>
                تيكست<span className="text-blue-600">عربي</span>
              </>
            ) : (
              <>
                Text<span className="text-blue-600">Arabi</span>
              </>
            )}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5" ref={dropdownRef}>
          <Link
            href={content.homeLink}
            className="inline-flex items-center gap-1.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.home}</span>
          </Link>

          {/* Tools Dropdown Menu with Hover Bridge */}
          <div
            className="relative inline-flex items-center py-1.5 group before:content-[''] before:absolute before:-bottom-3 before:left-0 before:w-full before:h-4"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setToolsOpen(!toolsOpen)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors focus:outline-none cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              <span>{content.tools}</span>
              <ChevronDown
                className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                  toolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Submenu Dropdown Container */}
            <div
              className={`absolute top-full mt-2 w-64 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50 flex flex-col gap-0.5 text-start transition-all duration-150 origin-top ${
                isArabic ? "right-0" : "left-0"
              } ${
                toolsOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {content.toolLinks.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={idx}
                    href={tool.href}
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all"
                  >
                    <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{tool.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href={content.blogLink}
            className="inline-flex items-center gap-1.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.blog}</span>
          </Link>
          <Link
            href={content.aboutLink}
            className="inline-flex items-center gap-1.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.about}</span>
          </Link>
          <Link
            href={content.contactLink}
            className="inline-flex items-center gap-1.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
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

        {/* Mobile View Action Bar */}
        <div className="flex md:hidden items-center gap-2.5">
          <Link
            href={getTogglePath()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs bg-slate-50"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>{content.langLabel}</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 focus:outline-none shadow-2xs"
            aria-label={content.ariaLabel}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Layer */}
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

          {/* Mobile Tools Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all w-full text-start"
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-slate-400" />
                <span>{content.tools}</span>
              </div>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                  toolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {toolsOpen && (
              <div className="flex flex-col gap-1 pl-6 pr-2 py-1 bg-slate-50/50 rounded-xl my-1">
                {content.toolLinks.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={idx}
                      href={tool.href}
                      onClick={() => {
                        setIsOpen(false);
                        setToolsOpen(false);
                      }}
                      className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-white transition-all"
                    >
                      <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{tool.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href={content.blogLink}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>{content.blog}</span>
          </Link>
          <Link
            href={content.aboutLink}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
          >
            <User className="w-4 h-4 text-slate-400" />
            <span>{content.about}</span>
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
