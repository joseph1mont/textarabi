"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Trash2,
  RefreshCw,
  Type,
  FileText,
  Check,
  Copy,
  SlidersHorizontal,
  ChevronLeft,
  ChevronDown
} from "lucide-react";

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

interface TextUtilityPanelProps {
  initialMode?: "strip" | "reverse" | "preview";
}

export default function TextUtilityPanel({ initialMode = "strip" }: TextUtilityPanelProps) {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<string>(initialMode);
  const [selectedFont, setSelectedFont] = useState("font-cairo");
  const [fontSize, setFontSize] = useState("text-xl");
  const [copied, setCopied] = useState(false);

  const currentFontLabel = ARABIC_FONTS.find(f => f.value === selectedFont)?.name || "اختر الخط العربي";
  const currentSizeLabel = FONT_SIZES.find(s => s.value === fontSize)?.name || "حجم الخط";

  const charCountWithSpaces = inputText.length;
  const charCountNoSpaces = inputText.replace(/\s/g, "").length;
  const wordCount = inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;

  let outputText = "";
  if (inputText.trim()) {
    if (activeTab === "strip") {
      outputText = inputText.replace(/[\u064B-\u0652\u0653\u0670]/g, "");
    } else if (activeTab === "reverse") {
      outputText = reshapeArabicText(inputText);
    } else {
      outputText = inputText;
    }
  }

  function reshapeArabicText(text: string): string {
    try {
      return reverseArabicPreservingWords(text);
    } catch (e) {
      return text.split("").reverse().join("");
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
    <div className="w-full max-w-5xl mx-auto px-4 py-2 mb-8" dir="rtl">
      
      {/* شريط التنقل العلوي - يعرض كعمود واحد في الموبايل ومرن في الشاشات الأكبر */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-4" dir="rtl">
        <TabsList className="flex flex-col sm:flex-row w-full bg-slate-100 p-1 rounded-xl gap-1 h-auto overflow-hidden">
          <TabsTrigger
            value="strip"
            className="flex items-center justify-start sm:justify-center gap-3 px-4 py-3 text-sm font-medium font-tajawal rounded-lg transition-all cursor-pointer pointer-events-auto select-none w-full sm:w-auto data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
          >
            <Trash2 className="w-4 h-4 shrink-0" />
            <span>إزالة التشكيل والحركات</span>
          </TabsTrigger>

          <TabsTrigger
            value="reverse"
            className="flex items-center justify-start sm:justify-center gap-3 px-4 py-3 text-sm font-medium font-tajawal rounded-lg transition-all cursor-pointer pointer-events-auto select-none w-full sm:w-auto data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
          >
            <RefreshCw className="w-4 h-4 shrink-0" />
            <span>مصحح خطوط الفوتوشوب</span>
          </TabsTrigger>

          <TabsTrigger
            value="preview"
            className="flex items-center justify-start sm:justify-center gap-3 px-4 py-3 text-sm font-medium font-tajawal rounded-lg transition-all cursor-pointer pointer-events-auto select-none w-full sm:w-auto data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
          >
            <Type className="w-4 h-4 shrink-0" />
            <span>معاينة واستعراض الخطوط</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

{/* لوحة عرض البيانات الإحصائية المطورة - نمط بيكسل كلين رائع للعين */}
<div className="w-full bg-white rounded-xl p-4 mb-5 grid grid-cols-3 gap-2 border border-slate-200 shadow-2xs text-center" dir="rtl">
  <div className="flex flex-col justify-center items-center gap-1 border-l border-slate-100 last:border-0">
    <span className="text-[11px] font-tajawal font-medium text-slate-400 tracking-wide uppercase">الكلمات</span>
    <span className="text-2xl font-bold font-mono tracking-tight text-slate-800">{wordCount}</span>
  </div>
  <div className="flex flex-col justify-center items-center gap-1 border-l border-slate-100 last:border-0">
    <span className="text-[11px] font-tajawal font-medium text-slate-400 tracking-wide uppercase">الحروف</span>
    <span className="text-2xl font-bold font-mono tracking-tight text-blue-600">{charCountWithSpaces}</span>
  </div>
  <div className="flex flex-col justify-center items-center gap-1">
    <span className="text-[11px] font-tajawal font-medium text-slate-400 tracking-wide uppercase">بدون مسافات</span>
    <span className="text-2xl font-bold font-mono tracking-tight text-slate-600">{charCountNoSpaces}</span>
  </div>
</div>

      {/* المحرر الرئيسي للبرنامج */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* صندوق النص الأصلي */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden" dir="rtl">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-cairo">
              <FileText className="w-3.5 h-3.5 text-slate-400" /> أدخل النص الأصلي هنا
            </span>
            {inputText && (
              <Button 
                variant="ghost" 
                onClick={() => setInputText("")} 
                className="text-xs h-7 px-2 text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-md cursor-pointer transition-colors"
              >
                مسح الكل
              </Button>
            )}
          </div>
          
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="اكتب أو الصق النص العربي المراد معالجته هنا..."
            className="w-full min-h-[320px] flex-grow p-4 outline-none border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent resize-none text-slate-800 text-lg leading-relaxed font-cairo placeholder:text-slate-400"
            dir="rtl"
          />
        </div>

        {/* صندوق النص المعالج */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden" dir="rtl">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700 font-cairo">النص المعالج الجاهز</span>
            {outputText && (
              <Button
                onClick={handleCopy}
                size="sm"
                variant={copied ? "outline" : "default"}
                className={`h-7 px-3 gap-1.5 text-xs font-medium rounded-md cursor-pointer transition-all ${
                  copied 
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800" 
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-xs"
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "تم النسخ!" : "نسخ النص"}</span>
              </Button>
            )}
          </div>

          {/* خيارات الخطوط والأحجام المتقدمة */}
          {activeTab === "preview" && (
            <div className="bg-slate-100/50 border-b border-slate-200 px-3 py-2 flex flex-wrap gap-3 items-center text-xs" dir="rtl">
              <div className="flex items-center gap-1.5 text-slate-500">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>خيارات الخط:</span>
              </div>
              
              <Select value={selectedFont} onValueChange={setSelectedFont} dir="rtl">
                <SelectTrigger className="w-[185px] h-8 bg-white border-slate-200 text-xs shadow-2xs font-tajawal cursor-pointer flex items-center justify-between px-3 gap-2">
                  <SelectValue>{currentFontLabel}</SelectValue>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 opacity-70 shrink-0" />
                </SelectTrigger>
                <SelectContent className="font-sans bg-white z-[100] min-w-[185px] rounded-lg border border-slate-200 shadow-md p-1" dir="rtl">
                  {ARABIC_FONTS.map((font) => {
                    const isSelected = selectedFont === font.value;
                    return (
                      <SelectItem 
                        key={font.value} 
                        value={font.value} 
                        className={`text-xs cursor-pointer font-tajawal py-1.5 px-7 rounded-md outline-none relative select-none flex items-center justify-between ${
                          isSelected ? "bg-slate-50 font-bold text-blue-600" : "text-slate-700 hover:bg-slate-50/80"
                        }`}
                      >
                        <span>{font.name}</span>
                        {isSelected && (
                          <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
                          </span>
                        )}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>

              <Select value={fontSize} onValueChange={setFontSize} dir="rtl">
                <SelectTrigger className="w-[120px] h-8 bg-white border-slate-200 text-xs shadow-2xs font-tajawal cursor-pointer flex items-center justify-between px-3 gap-2">
                  <SelectValue>{currentSizeLabel}</SelectValue>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 opacity-70 shrink-0" />
                </SelectTrigger>
                <SelectContent className="font-sans bg-white z-[100] min-w-[120px] rounded-lg border border-slate-200 shadow-md p-1" dir="rtl">
                  {FONT_SIZES.map((size) => {
                    const isSelected = fontSize === size.value;
                    return (
                      <SelectItem 
                        key={size.value} 
                        value={size.value} 
                        className={`text-xs cursor-pointer font-tajawal py-1.5 px-7 rounded-md outline-none relative select-none flex items-center justify-between ${
                          isSelected ? "bg-slate-50 font-bold text-blue-600" : "text-slate-700 hover:bg-slate-50/80"
                        }`}
                      >
                        <span>{size.name}</span>
                        {isSelected && (
                          <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
                          </span>
                        )}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* مساحة عرض النتائج النهائية */}
          <div
            className={`w-full h-full min-h-[320px] md:min-h-0 p-4 text-slate-800 whitespace-pre-wrap leading-relaxed overflow-y-auto bg-slate-50/30 ${
              activeTab === "preview" ? selectedFont : "font-cairo"
            } ${fontSize}`}
            dir={activeTab === "reverse" ? "ltr" : "rtl"}
          >
            {outputText ? (
              outputText
            ) : (
              <div className="flex items-center gap-1.5 text-slate-400 text-sm select-none font-tajawal" dir="rtl">
                <ChevronLeft className="w-4 h-4 text-slate-300" />
                <span>بانتظار إضافة نصوص في الخانة المقابلة...</span>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}