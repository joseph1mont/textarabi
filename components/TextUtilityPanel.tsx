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
  const [translatedOutput, setTranslatedOutput] = useState("");
  const [loadingTashkeel, setLoadingTashkeel] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isRtl = lang === "ar";

  const currentFontLabel =
    ARABIC_FONTS.find((f) => f.value === selectedFont)?.name ||
    "اختر الخط العربي";
  const currentSizeLabel =
    FONT_SIZES.find((s) => s.value === fontSize)?.name || "حجم الخط";

  const charCountWithSpaces = inputText.length;
  const charCountNoSpaces = inputText.replace(/\s/g, "").length;
  const wordCount =
    inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;

  // دالة التشكيل التلقائي
  const handleAutoTashkeel = async () => {
    if (!inputText.trim()) return;
    setLoadingTashkeel(true);
    try {
      const response = await fetch("/api/tashkeel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });
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
        if (error.name !== "AbortError") console.error(error);
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
    const end = textarea.selectionEnd;
    const newText =
      textarea.value.substring(0, start) + char + textarea.value.substring(end);
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
    const newText =
      start === end
        ? textarea.value.substring(0, start - 1) + textarea.value.substring(end)
        : textarea.value.substring(0, start) + textarea.value.substring(end);
    setInputText(newText);
    const newCursorPos = start === end ? start - 1 : start;
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
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
        onValueChange={(val) => {
          setActiveTab(val);
          if (val !== "translate") setTranslatedOutput("");
        }}
        className="w-full mb-4"
      >
        <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full bg-slate-100 p-1 rounded-xl gap-1 h-auto">
          <TabsTrigger value="translate">الترجمة</TabsTrigger>
          <TabsTrigger value="keyboard">كيبورد عربي</TabsTrigger>
          <TabsTrigger value="reverse">مصحح الفوتوشوب</TabsTrigger>
          <TabsTrigger value="strip">إزالة التشكيل</TabsTrigger>
          <TabsTrigger value="preview">استعراض الخطوط</TabsTrigger>
        </TabsList>
      </Tabs>

      <StatsBar
        wordCount={wordCount}
        charCountWithSpaces={charCountWithSpaces}
        charCountNoSpaces={charCountNoSpaces}
        isRtl={isRtl}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" /> النص الأصلي
            </span>
            <div className="flex gap-2">
              {activeTab === "strip" && (
                <Button
                  onClick={handleAutoTashkeel}
                  disabled={loadingTashkeel}
                  className="h-7 text-xs bg-indigo-600 hover:bg-indigo-700"
                >
                  {loadingTashkeel ? (
                    <RefreshCw className="animate-spin w-3 h-3" />
                  ) : (
                    <Wand2 className="w-3 h-3 ml-1" />
                  )}{" "}
                  تشكيل
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={() => setInputText("")}
                className="text-xs h-7 text-rose-600"
              >
                مسح
              </Button>
            </div>
          </div>
          <Textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full min-h-[320px] p-4 outline-none border-0 focus-visible:ring-0"
          />
        </div>

        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700">
              النص المعالج
            </span>
            {outputText && activeTab !== "keyboard" && (
              <Button
                onClick={handleCopy}
                size="sm"
                variant="ghost"
                className="h-7 text-xs gap-1"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}{" "}
                {copied ? "تم!" : "نسخ"}
              </Button>
            )}
          </div>
          {activeTab === "keyboard" ? (
            <TashkeelKeyboard
              onInsert={insertCharacter}
              onBackspace={handleBackspace}
              onClear={() => setInputText("")}
              onCopy={handleCopy}
              isRtl={isRtl}
              copied={copied}
            />
          ) : (
            <div
              className={`w-full h-full min-h-[320px] p-4 whitespace-pre-wrap ${activeTab === "preview" ? selectedFont : "font-cairo"} ${fontSize}`}
            >
              {outputText || (
                <span className="text-slate-400">بانتظار النص...</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
