"use client";

import React, { useState, useEffect } from "react";
import { 
  Copy, 
  Trash2, 
  Delete, 
  Check, 
  Sparkles,
  Keyboard
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InteractiveArabicKeyboard() {
  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("lg");

  // Premium High-Visibility Tashkil (Harakat) Configuration
  const harakatRow = [
    { char: "َ", name: "Fatḥah (فَتْحَة)" },
    { char: "ً", name: "Tanwīn Fatḥ (تَنْوِين)" },
    { char: "ُ", name: "Ḍammah (ضَمَّة)" },
    { char: "ٌ", name: "Tanwīn Ḍamm (تَنْوِين)" },
    { char: "ِ", name: "Kasrah (كَسْرَة)" },
    { char: "ٍ", name: "Tanwīn Kasr (تَنْوِين)" },
    { char: "ْ", name: "Sukūn (سُكُون)" },
    { char: "ّ", name: "Shaddah (شَدَّة)" }
  ];

  // Standard Balanced Layout Matrix
  const keyboardRows = [
    ["ج", "ح", "خ", "ه", "ع", "غ", "ف", "ق", "ث", "ص", "ض"],
    ["ط", "ك", "م", "ن", "ت", "ا", "ل", "ب", "ي", "س", "ش"],
    ["د", "و", "ز", "ر", "ذ", "إ", "أ", "آ", "ء", "ئ", "ؤ", "ة", "ى"]
  ];

  const keyMap: { [key: string]: string } = {
    'q': 'ض', 'w': 'ص', 'e': 'ث', 'r': 'ق', 't': 'ف', 'y': 'غ', 'u': 'ع', 'i': 'ه', 'o': 'خ', 'p': 'ح', '[': 'ج',
    'a': 'ش', 's': 'س', 'd': 'ي', 'f': 'ب', 'g': 'ل', 'h': 'ا', 'j': 'ت', 'k': 'ن', 'l': 'م', ';': 'ك', "'": 'ط',
    'z': 'ئ', 'x': 'ء', 'c': 'ؤ', 'v': 'ر', 'b': 'لا', 'n': 'ى', 'm': 'ة', ',': 'و', '.': 'ز', '/': 'ظ'
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      if (keyMap[e.key.toLowerCase()]) {
        e.preventDefault();
        const mappedChar = keyMap[e.key.toLowerCase()];
        setInputText((prev) => prev + mappedChar);
        setActiveKey(mappedChar);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        setInputText((prev) => prev.slice(0, -1));
        setActiveKey("backspace");
      } else if (e.key === " ") {
        e.preventDefault();
        setInputText((prev) => prev + " ");
        setActiveKey("space");
      }
    };

    const handleKeyUp = () => setActiveKey(null);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleActionCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const getFontSizeClass = () => {
    if (fontSize === "sm") return "text-xl md:text-2xl";
    if (fontSize === "md") return "text-2xl md:text-4xl";
    return "text-4xl md:text-6xl tracking-wide";
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-slate-200/80 bg-white rounded-3xl shadow-xl p-5 md:p-8" dir="rtl">
      
      {/* Premium Dynamic Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-600 text-white rounded-2xl shadow-md shadow-blue-500/10">
            <Keyboard className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base md:text-lg font-tajawal tracking-tight">لوحة مفاتيح التشكيل الذكية</h3>
            <p className="text-xs md:text-sm text-slate-500 font-medium">اكتب الحركات العربية بدقة متناهية وحجم خط فائق الوضوح</p>
          </div>
        </div>

        {/* Text Scaling Utilities — FIXED Shadcn Variants */}
        <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/40">
          <Button
            variant={fontSize === "sm" ? "default" : "ghost"}
            size="sm"
            className="text-xs font-bold font-tajawal px-3 h-8 rounded-xl cursor-pointer transition-all duration-200"
            onClick={() => setFontSize("sm")}
          >
            صغير
          </Button>
          <Button
            variant={fontSize === "md" ? "default" : "ghost"}
            size="sm"
            className="text-xs font-bold font-tajawal px-3 h-8 rounded-xl cursor-pointer transition-all duration-200"
            onClick={() => setFontSize("md")}
          >
            متوسط
          </Button>
          <Button
            variant={fontSize === "lg" ? "default" : "ghost"}
            size="sm"
            className="text-xs font-bold font-tajawal px-3 h-8 rounded-xl cursor-pointer transition-all duration-200"
            onClick={() => setFontSize("lg")}
          >
            كبير جداً
          </Button>
        </div>
      </div>

      {/* Main Sandbox Text Input Canvas Area */}
      <div className="relative border border-slate-200/90 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/5 bg-slate-50/40 rounded-2xl transition-all duration-200 mb-6 shadow-inner">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="انقر على أزرار الحروف أدناه، أو اكتب مباشرة من لوحة مفاتيح جهازك..."
          className={`w-full min-h-[200px] pt-6 pb-16 px-6 bg-transparent border-0 focus:ring-0 resize-none font-bold text-slate-900 placeholder:text-slate-400 leading-loose text-right font-mono ${getFontSizeClass()}`}
          dir="rtl"
        />
        
        {/* Workspace Quick-Action Floating Triggers */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2" dir="ltr">
          <Button
            type="button"
            variant="outline"
            onClick={() => setInputText("")}
            disabled={!inputText}
            className="border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 h-9 px-3.5 gap-1.5 font-bold text-xs text-slate-600 rounded-xl transition-colors cursor-pointer disabled:opacity-30"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="font-tajawal">مسح</span>
          </Button>

          <Button
            type="button"
            onClick={handleActionCopy}
            disabled={!inputText}
            className={`h-9 px-4 gap-1.5 font-bold text-xs rounded-xl transition-all duration-200 cursor-pointer ${
              copied 
                ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/10" 
                : "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="font-tajawal">تم النسخ!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="font-tajawal">نسخ النص</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Modern Virtual Hardware Dashboard Layout */}
      <div className="space-y-2 bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
        
        {/* Floating Isolated Accent Tashkil Toolbar */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 border-b border-slate-200/60 pb-3">
          {harakatRow.map((item) => (
            <button
              key={item.char}
              onClick={() => setInputText((prev) => prev + item.char)}
              title={item.name}
              className="h-12 bg-amber-500 hover:bg-amber-600 text-white font-black text-2xl rounded-xl transition-all transform active:scale-95 flex items-center justify-center shadow-xs shadow-amber-500/10 border-b-2 border-amber-700/30 cursor-pointer"
            >
              <span className="opacity-30 text-xs font-sans font-normal ml-0.5">◌</span>
              {item.char}
            </button>
          ))}
        </div>

        {/* Clean Balanced Base Keyboard Rows */}
        {keyboardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1.5">
            {row.map((char) => (
              <button
                key={char}
                onClick={() => setInputText((prev) => prev + char)}
                className={`flex-1 h-12 sm:h-14 bg-white hover:bg-slate-100 text-slate-800 font-extrabold text-base sm:text-lg rounded-xl border border-slate-200 shadow-xs border-b-2 border-slate-300/60 transition-all transform active:scale-95 flex items-center justify-center cursor-pointer ${
                  activeKey === char ? "ring-2 ring-blue-600 bg-blue-50/40 border-blue-400 border-b-blue-400" : ""
                }`}
              >
                {char}
              </button>
            ))}
          </div>
        ))}

        {/* Global Key Modifiers (Space & Backspace) */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => setInputText((prev) => prev + " ")}
            className={`flex-[5] h-12 sm:h-14 bg-white hover:bg-slate-100 font-bold text-sm text-slate-400 rounded-xl border border-slate-200 shadow-xs border-b-2 border-slate-300/60 transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
              activeKey === "space" ? "ring-2 ring-blue-600 bg-blue-50/40 border-blue-400 border-b-blue-400" : ""
            }`}
          >
            <span className="text-xs font-sans tracking-wide text-slate-300 uppercase">Space</span>
            <span className="font-tajawal text-slate-600 text-sm hidden sm:inline">| مسافة</span>
          </button>

          <button
            onClick={() => setInputText((prev) => prev.slice(0, -1))}
            className={`flex-[2] h-12 sm:h-14 bg-slate-200/80 hover:bg-slate-300/90 text-slate-700 font-bold text-sm rounded-xl border border-slate-300/40 shadow-xs border-b-2 border-slate-400/40 transition-all transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer ${
              activeKey === "backspace" ? "ring-2 ring-blue-600 bg-blue-100 border-blue-400" : ""
            }`}
          >
            <Delete className="w-4 h-4 transform scale-x-[-1] stroke-[2.5]" />
            <span className="font-tajawal text-sm hidden sm:inline">مسح حرف</span>
          </button>
        </div>

      </div>

    </div>
  );
}