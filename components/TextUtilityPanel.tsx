// components/TextUtilityPanel.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Trash2,
  RefreshCw,
  Type,
  FileText,
  Check,
  Copy,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Keyboard,
  Languages
} from "lucide-react";

// Safe Imports for sub-components
import StatsBar from "./StatsBar";
import FontOptionsRibbon from "./FontOptionsRibbon";
import TashkeelKeyboard from "./TashkeelKeyboard";

const ARABIC_FONTS = [
  { name: "Amiri (نسخ كلاسيكي)", value: "font-amiri" },
  { name: "Cairo (عصري مرن)", value: "font-cairo" },
  { name: "Tajawal (ناعم وعصري)", value: "font-tajawal" },
];

const FONT_SIZES = [
  { name: "حجم صغير", value: "text-md" },
  { name: "حجم افتراضي", value: "text-xl" },
  { name: "حجم عريض", value: "text-2xl" },
];

function reverseArabicPreservingWords(text: string): string {
  const segmenter = new Intl.Segmenter("ar", { granularity: "grapheme" });
  return text.split('\n').map(line => {
    return line.split(' ').map(word => {
      const cleanWord = word.replace(/[\u064B-\u0652\u0653\u0670]/g, "");
      const segments = Array.from(segmenter.segment(cleanWord)).map(s => s.segment);
      return segments.reverse().join('');
    }).reverse().join(' ');
  }).join('\n');
}

function reshapeArabicText(text: string): string {
  try {
    return reverseArabicPreservingWords(text);
  } catch (e) {
    return text.split("").reverse().join("");
  }
}

interface TextUtilityPanelProps {
  initialMode?: "strip" | "reverse" | "preview" | "keyboard" | "translate";
  lang?: "ar" | "en";
}

// FIXED: Default initialMode set to "strip" (Strip Diacritics) as requested
export default function TextUtilityPanel({ initialMode = "strip", lang = "ar" }: TextUtilityPanelProps) {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<string>(initialMode);
  const [selectedFont, setSelectedFont] = useState("font-cairo");
  const [fontSize, setFontSize] = useState("text-xl");
  const [copied, setCopied] = useState(false);
  const [translationTarget, setTranslationTarget] = useState<"en" | "ar">("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedOutput, setTranslatedOutput] = useState("");
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isRtl = lang === "ar";

  const currentFontLabel = ARABIC_FONTS.find(f => f.value === selectedFont)?.name || "اختر الخط العربي";
  const currentSizeLabel = FONT_SIZES.find(s => s.value === fontSize)?.name || "حجم الخط";

  const charCountWithSpaces = inputText.length;
  const charCountNoSpaces = inputText.replace(/\s/g, "").length;
  const wordCount = inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;

  const [prevInitialMode, setPrevInitialMode] = useState(initialMode);
  if (initialMode !== prevInitialMode) {
    setPrevInitialMode(initialMode);
    setActiveTab(initialMode);
  }

  // Translation hook handler
  useEffect(() => {
    if (activeTab !== "translate" || !inputText.trim()) {
      return;
    }

    const controller = new AbortController();

    const delayDebounceFn = setTimeout(async () => {
      setIsTranslating(true);
      try {
        const sourceLang = translationTarget === "en" ? "ar" : "en";
        const targetLang = translationTarget;

        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(inputText)}`;
        
        const res = await fetch(url, {
          method: "GET",
          signal: controller.signal
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data[0]) {
            const translatedText = data[0]
              .map((x: any) => x[0])
              .filter(Boolean)
              .join("");
            setTranslatedOutput(translatedText);
          } else {
            setTranslatedOutput(isRtl ? "خطأ في معالجة البيانات" : "Data parsing error response...");
          }
        } else {
          setTranslatedOutput(isRtl ? "خطأ في الاتصال بخادم الترجمة" : "Translation error response...");
        }
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setTranslatedOutput(isRtl ? "فشلت الترجمة، يرجى التحقق من الاتصال" : "Translation execution timed out...");
        }
      } finally {
        setIsTranslating(false);
      }
    }, 600);

    return () => {
      clearTimeout(delayDebounceFn);
      controller.abort();
    };
  }, [inputText, activeTab, translationTarget, isRtl]);

  const insertCharacter = (char: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setInputText((prev) => prev + char);
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const newText = text.substring(0, start) + char + text.substring(end);
    setInputText(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + char.length, start + char.length);
    }, 0);
  };

  const handleBackspace = () => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setInputText((prev) => prev.slice(0, -1));
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    if (start === 0 && end === 0) return;
    
    const newText = start === end 
      ? text.substring(0, start - 1) + text.substring(end) 
      : text.substring(0, start) + text.substring(end);
      
    const newCursorPos = start === end ? start - 1 : start;
    
    setInputText(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  let outputText = "";
  if (inputText.trim() || activeTab === "keyboard") {
    if (activeTab === "strip") {
      outputText = inputText.replace(/[\u064B-\u0652\u0653\u0670]/g, "");
    } else if (activeTab === "reverse") {
      outputText = reshapeArabicText(inputText);
    } else if (activeTab === "translate") {
      outputText = translatedOutput;
    } else {
      outputText = inputText;
    }
  }

  const handleCopy = async () => {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-2 mb-8" dir={isRtl ? "rtl" : "ltr"}>
      
      <Tabs value={activeTab} onValueChange={(val) => {
        setActiveTab(val);
        if (val !== "translate") setTranslatedOutput("");
      }} className="w-full mb-4">
        {/* FIXED: Re-sorted layout tab order based on Search Volume Metrics (High -> Low) */}
        <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full bg-slate-100 p-1 rounded-xl gap-1 h-auto overflow-hidden">
          
          {/* 1. Instant Translate */}
          <TabsTrigger 
            value="translate" 
            className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Languages className="w-4 h-4 shrink-0" />
            <span>{isRtl ? "الترجمة الفورية" : "Instant Translate"}</span>
          </TabsTrigger>

          {/* 2. Arabic Keyboard (Renamed from Tashkeel Keypad for SEO Optimization) */}
          <TabsTrigger 
            value="keyboard" 
            className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Keyboard className="w-4 h-4 shrink-0" />
            <span>{isRtl ? "كيبورد عربي" : "Arabic Keyboard"}</span>
          </TabsTrigger>

          {/* 3. Photoshop Fixer */}
          <TabsTrigger 
            value="reverse" 
            className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <RefreshCw className="w-4 h-4 shrink-0" />
            <span>{isRtl ? "مصحح الفوتوشوب" : "Photoshop Fixer"}</span>
          </TabsTrigger>

          {/* 4. Strip Diacritics (Default Landing Tool) */}
          <TabsTrigger 
            value="strip" 
            className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Trash2 className="w-4 h-4 shrink-0" />
            <span>{isRtl ? "إزالة التشكيل" : "Strip Diacritics"}</span>
          </TabsTrigger>

          {/* 5. Font Preview */}
          <TabsTrigger 
            value="preview" 
            className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Type className="w-4 h-4 shrink-0" />
            <span>{isRtl ? "استعراض الخطوط" : "Font Preview"}</span>
          </TabsTrigger>

        </TabsList>
      </Tabs>

      <StatsBar 
        wordCount={wordCount} 
        charCountWithSpaces={charCountWithSpaces} 
        charCountNoSpaces={charCountNoSpaces} 
        isRtl={isRtl} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Column: Input Panel */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-cairo">
              <FileText className="w-3.5 h-3.5 text-slate-400" /> {isRtl ? "أدخل النص الأصلي هنا" : "Input Original Text Here"}
            </span>
            {inputText && (
              <Button variant="ghost" onClick={() => {
                setInputText("");
                setTranslatedOutput("");
              }} className="text-xs h-7 px-2 text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-md">
                {isRtl ? "مسح الكل" : "Clear All"}
              </Button>
            )}
          </div>
          <Textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              if (!e.target.value.trim()) setTranslatedOutput("");
            }}
            placeholder={isRtl ? "اكتب أو الصق النص هنا..." : "Type or paste text here..."}
            className="notranslate w-full min-h-[320px] flex-grow p-4 outline-none border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent resize-none text-slate-800 text-lg leading-relaxed font-cairo"
            dir={activeTab === "translate" && translationTarget === "ar" ? "ltr" : "rtl"}
          />
        </div>

        {/* Right Column: Processed Outputs Panel */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700 font-cairo">
              {activeTab === "keyboard" ? (isRtl ? "لوحة الحروف والتشكيل الذكية" : "Smart Arabic Keyboard") : (isRtl ? "النص المعالج الجاهز" : "Processed Ready Output")}
            </span>
            {outputText && activeTab !== "keyboard" && (
              <Button
                onClick={handleCopy}
                size="sm"
                variant={copied ? "outline" : "default"}
                className={`h-7 px-3 gap-1.5 text-xs font-medium rounded-md transition-all ${
                  copied ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isRtl ? "تم النسخ!" : "Copied!") : (isRtl ? "نسخ النص" : "Copy Text")}</span>
              </Button>
            )}
          </div>

          {activeTab === "preview" && (
            <FontOptionsRibbon
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
              fontSize={fontSize}
              setFontSize={setFontSize}
              currentFontLabel={currentFontLabel}
              currentSizeLabel={currentSizeLabel}
              isRtl={isRtl}
              fonts={ARABIC_FONTS}
              sizes={FONT_SIZES}
            />
          )}

          {activeTab === "translate" && (
            <div className="bg-slate-100/50 border-b border-slate-200 px-3 py-2 flex flex-wrap gap-3 items-center text-xs">
              <span className="text-slate-500 font-tajawal">{isRtl ? "اتجاه الترجمة:" : "Translation Direction:"}</span>
              <Select value={translationTarget} onValueChange={(val: "en" | "ar") => setTranslationTarget(val)}>
                <SelectTrigger className="w-[180px] h-8 bg-white border-slate-200 text-xs font-tajawal px-3 flex justify-between items-center">
                  <SelectValue />
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-slate-200 text-slate-700 p-1 rounded-lg">
                  <SelectItem value="en" className="text-xs font-tajawal py-1.5 cursor-pointer">العربية ➜ English</SelectItem>
                  <SelectItem value="ar" className="text-xs font-tajawal py-1.5 cursor-pointer">English ➜ العربية</SelectItem>
                </SelectContent>
              </Select>
              {isTranslating && (
                <span className="text-xs text-blue-500 animate-pulse font-tajawal flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 animate-spin" /> {isRtl ? "جاري المعالجة..." : "Translating content..."}
                </span>
              )}
            </div>
          )}

          {activeTab === "keyboard" ? (
            <TashkeelKeyboard
              onInsert={insertCharacter}
              onBackspace={handleBackspace}
              onClear={() => {
                setInputText("");
                setTranslatedOutput("");
              }}
              onCopy={handleCopy}
              disabledCopy={!inputText}
              isRtl={isRtl}
              copied={copied}
            />
          ) : (
            <div
              className={`w-full h-full min-h-[320px] md:min-h-0 p-4 text-slate-800 whitespace-pre-wrap leading-relaxed overflow-y-auto bg-slate-50/30 ${
                activeTab === "preview" ? selectedFont : "font-cairo"
              } ${fontSize}`}
              dir={activeTab === "translate" ? (translationTarget === "ar" ? "rtl" : "ltr") : (activeTab === "reverse" ? "ltr" : "rtl")}
            >
              {outputText ? (
                outputText
              ) : (
                <div className="flex items-center gap-1.5 text-slate-400 text-sm select-none font-tajawal">
                  {isRtl ? <ChevronLeft className="w-4 h-4 text-slate-300" /> : <ChevronRight className="w-4 h-4 text-slate-300" />}
                  <span>{isRtl ? "بانتظار إضافة نصوص في الخانة المقابلة..." : "Awaiting input text in the left panel..."}</span>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}