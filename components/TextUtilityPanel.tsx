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
  Languages,
  Wand2,
} from "lucide-react";

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
  return text
    .split("\n")
    .map((line) => {
      return line
        .split(" ")
        .map((word) => {
          const cleanWord = word.replace(/[\u064B-\u0652\u0653\u0670]/g, "");
          const segments = Array.from(segmenter.segment(cleanWord)).map(
            (s) => s.segment,
          );
          return segments.reverse().join("");
        })
        .reverse()
        .join(" ");
    })
    .join("\n");
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

export default function TextUtilityPanel({
  initialMode = "strip",
  lang = "ar",
}: TextUtilityPanelProps) {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<string>(initialMode);
  const [selectedFont, setSelectedFont] = useState("font-cairo");
  const [fontSize, setFontSize] = useState("text-xl");
  const [copied, setCopied] = useState(false);
  const [translationTarget, setTranslationTarget] = useState<"en" | "ar">("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const [loadingTashkeel, setLoadingTashkeel] = useState(false);
  const [translatedOutput, setTranslatedOutput] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isRtl = lang === "ar";

  const handleAutoTashkeel = async () => {
    if (!inputText.trim()) return;
    setLoadingTashkeel(true);
    try {
      const response = await fetch(
        "https://textarabi.vercel.app/api/tashkeel",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: inputText }),
        },
      );
      const data = await response.json();
      if (data.result) {
        setInputText(data.result);
      }
    } catch (err) {
      console.error("Tashkeel API Error:", err);
    } finally {
      setLoadingTashkeel(false);
    }
  };

  const currentFontLabel =
    ARABIC_FONTS.find((f) => f.value === selectedFont)?.name ||
    "اختر الخط العربي";
  const currentSizeLabel =
    FONT_SIZES.find((s) => s.value === fontSize)?.name || "حجم الخط";

  const charCountWithSpaces = inputText.length;
  const charCountNoSpaces = inputText.replace(/\s/g, "").length;
  const wordCount =
    inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;

  const [prevInitialMode, setPrevInitialMode] = useState(initialMode);
  if (initialMode !== prevInitialMode) {
    setPrevInitialMode(initialMode);
    setActiveTab(initialMode);
  }

  useEffect(() => {
    if (activeTab !== "translate" || !inputText.trim()) return;
    const controller = new AbortController();
    const delayDebounceFn = setTimeout(async () => {
      setIsTranslating(true);
      try {
        const sourceLang = translationTarget === "en" ? "ar" : "en";
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${translationTarget}&dt=t&q=${encodeURIComponent(inputText)}`;
        const res = await fetch(url, {
          method: "GET",
          signal: controller.signal,
        });
        if (res.ok) {
          const data = await res.json();
          setTranslatedOutput(data[0].map((x: any) => x[0]).join(""));
        }
      } catch (error: any) {
        if (error.name !== "AbortError") setTranslatedOutput("Error");
      } finally {
        setIsTranslating(false);
      }
    }, 600);
    return () => {
      clearTimeout(delayDebounceFn);
      controller.abort();
    };
  }, [inputText, activeTab, translationTarget]);

  const insertCharacter = (char: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setInputText((prev) => prev + char);
      return;
    }
    const start = textarea.selectionStart;
    const newText =
      textarea.value.substring(0, start) +
      char +
      textarea.value.substring(textarea.selectionEnd);
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
    const newText =
      textarea.value.substring(0, start - 1) +
      textarea.value.substring(textarea.selectionEnd);
    setInputText(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start - 1, start - 1);
    }, 0);
  };

  let outputText = "";
  if (inputText.trim() || activeTab === "keyboard") {
    if (activeTab === "strip")
      outputText = inputText.replace(/[\u064B-\u0652\u0653\u0670]/g, "");
    else if (activeTab === "reverse") outputText = reshapeArabicText(inputText);
    else if (activeTab === "translate") outputText = translatedOutput;
    else outputText = inputText;
  }

  const handleCopy = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="w-full max-w-5xl mx-auto px-4 py-2 mb-8"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full mb-4"
      >
        <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full bg-slate-100 p-1 rounded-xl gap-1">
          <TabsTrigger value="translate">
            {isRtl ? "الترجمة" : "Translate"}
          </TabsTrigger>
          <TabsTrigger value="keyboard">
            {isRtl ? "الكيبورد" : "Keyboard"}
          </TabsTrigger>
          <TabsTrigger value="reverse">
            {isRtl ? "مصحح الفوتوشوب" : "Fixer"}
          </TabsTrigger>
          <TabsTrigger value="strip">
            {isRtl ? "إزالة التشكيل" : "Strip"}
          </TabsTrigger>
          <TabsTrigger value="preview">
            {isRtl ? "استعراض" : "Preview"}
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
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold flex items-center gap-1.5">
              {isRtl ? "النص الأصلي" : "Original Text"}
            </span>
            <div className="flex gap-2">
              {activeTab === "strip" && (
                <Button
                  onClick={handleAutoTashkeel}
                  disabled={loadingTashkeel || !inputText}
                  className="h-7 px-3 text-xs bg-indigo-600"
                >
                  {loadingTashkeel ? (
                    <RefreshCw className="w-3 h-3 animate-spin" />
                  ) : (
                    <Wand2 className="w-3 h-3 ml-1" />
                  )}
                  {isRtl ? "تشكيل تلقائي" : "Auto Tashkeel"}
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={() => setInputText("")}
                className="text-xs h-7 text-rose-600"
              >
                {isRtl ? "مسح" : "Clear"}
              </Button>
            </div>
          </div>
          <Textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[320px] p-4 outline-none border-0"
          />
        </div>

        {/* Right Column: Output */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
          {/*  */}
          {/* استمر في عرض المخرجات هنا... */}
          <div className="p-4 font-cairo text-lg">{outputText}</div>
        </div>
      </div>
    </div>
  );
}
