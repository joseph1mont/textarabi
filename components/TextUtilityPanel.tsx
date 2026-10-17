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
  FileText,
  Check,
  Copy,
  Keyboard,
  Languages,
  Sparkles,
  Camera,
  Upload,
  Maximize2,
  Spline,
} from "lucide-react";
import { createWorker } from "tesseract.js";

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
  } catch {
    return text.split("").reverse().join("");
  }
}

function formatJsonArabic(text: string, isRtl: boolean): string {
  if (!text.trim()) return "";
  try {
    const parsed = JSON.parse(text);
    return JSON.stringify(parsed, null, 2);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return isRtl
      ? `خطأ في تنسيق بيانات JSON: ${errorMsg}`
      : `Invalid JSON format error: ${errorMsg}`;
  }
}

/**
 * Enhanced Rule-Based Arabic Keshida (Tatweel) Generator
 * Fixes joining errors by filtering out non-connecting characters,
 * preserving Tashkeel diacritics, and limiting Tatweel placement per word.
 */
function applyKeshida(
  text: string,
  mode: "balanced" | "full" = "balanced",
): string {
  if (!text) return "";

  // Arabic Tashkeel (harakat) character range
  const tashkeel = "[\u064B-\u0652\u0653\u0670]?";

  // Dual-joiner letters that can connect forward to the next letter
  const connectingLetters = "[بتثجحخسشصضطظعغفقكلمنهيئ]";

  // Valid target letters that can follow a connecting letter
  const followLetters = "[ابتثجحخدذرزسشصضطظعغفقكلمنهوىيأإآؤئ]";

  const regex = new RegExp(
    `(${connectingLetters}${tashkeel})(?=${followLetters})`,
    "g",
  );

  if (mode === "balanced") {
    return text
      .split("\n")
      .map((line) =>
        line
          .split(" ")
          .map((word) => {
            // Skip short words (<= 3 characters) to avoid visual clutter
            const cleanWord = word.replace(/[\u064B-\u0652\u0653\u0670]/g, "");
            if (cleanWord.length <= 3) return word;

            let count = 0;
            return word.replace(regex, (match) => {
              // Restrict to max 1 Tatweel insertion per word for typography balance
              if (count < 1) {
                count++;
                return match + "\u0640";
              }
              return match;
            });
          })
          .join(" "),
      )
      .join("\n");
  }

  // Full mode: Places Tatweel across all valid dual-joiner connections
  return text.replace(regex, "$1\u0640");
}

function generateSvgVector(text: string): string {
  if (!text.trim()) return "";
  const escapedText = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" width="100%" height="100%">
  <style>
    .vector-text {
      font-family: 'Cairo', 'Amiri', sans-serif;
      font-size: 48px;
      font-weight: bold;
      fill: #1e293b;
      text-anchor: middle;
      dominant-baseline: middle;
    }
  </style>
  <text x="50%" y="50%" class="vector-text" direction="rtl">${escapedText}</text>
</svg>`;
}

export type TextUtilityMode =
  | "strip"
  | "reverse"
  | "preview"
  | "keyboard"
  | "translate"
  | "json"
  | "scan"
  | "keshida"
  | "vector";

export type TextArabiTool =
  | "arabic-text-normalizer"
  | "ocr-scanner"
  | "arabic-keshida-generator"
  | "arabic-text-to-vector";

interface TextUtilityPanelProps {
  initialMode?: TextUtilityMode;
  lang?: "ar" | "en";
  allowedTool?: TextArabiTool;
}

export default function TextUtilityPanel({
  initialMode = "strip",
  lang = "ar",
  allowedTool,
}: TextUtilityPanelProps) {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<TextUtilityMode>(initialMode);
  const [selectedFont, setSelectedFont] = useState("font-cairo");
  const [fontSize, setFontSize] = useState("text-xl");
  const [copied, setCopied] = useState(false);
  const [translationTarget, setTranslationTarget] = useState<"en" | "ar">("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedOutput, setTranslatedOutput] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgressText, setScanProgressText] = useState("");
  const [scanPreviewImage, setScanPreviewImage] = useState<string | null>(null);

  const [tashkeelSubMode, setTashkeelSubMode] = useState<"strip" | "auto">(
    "strip",
  );
  const [keshidaMode, setKeshidaMode] = useState<"balanced" | "full">(
    "balanced",
  );
  const [loadingTashkeel, setLoadingTashkeel] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const [prevInitialMode, setPrevInitialMode] = useState(initialMode);
  if (initialMode !== prevInitialMode) {
    setPrevInitialMode(initialMode);
    setActiveTab(initialMode);
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setScanPreviewImage(imageUrl);
    setIsScanning(true);
    setScanProgressText(
      isRtl ? "جاري تهيئة محرك التعرف الضوئي..." : "Initializing OCR Engine...",
    );

    try {
      const worker = await createWorker(["ara", "eng"]);
      setScanProgressText(
        isRtl
          ? "جاري قراءة وتحليل النص من الصورة..."
          : "Scanning text from image...",
      );
      const ret = await worker.recognize(file);

      const extractedText = ret.data.text.trim();
      await worker.terminate();

      if (extractedText) {
        setInputText((prev) =>
          prev ? `${prev}\n\n${extractedText}` : extractedText,
        );
      } else {
        alert(
          isRtl
            ? "لم يتم العثور على نص واضح في الصورة المرفقة."
            : "No clear text found in the image.",
        );
      }
    } catch (error) {
      console.error("Tesseract OCR Error:", error);
      alert(
        isRtl
          ? "فشل تحليل الصورة واستخراج النصوص."
          : "Failed to process image OCR extraction.",
      );
    } finally {
      setIsScanning(false);
      setScanProgressText("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (activeTab !== "translate" || !inputText.trim()) return;

    const controller = new AbortController();
    const delayDebounceFn = setTimeout(async () => {
      setIsTranslating(true);
      try {
        const sourceLang = translationTarget === "en" ? "ar" : "en";
        const targetLang = translationTarget;

        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(inputText)}`;

        const res = await fetch(url, {
          method: "GET",
          signal: controller.signal,
        });

        if (res.ok) {
          const data = (await res.json()) as unknown[][][] | undefined;
          if (data && data[0]) {
            const translatedText = data[0]
              .map((x) =>
                Array.isArray(x) && typeof x[0] === "string" ? x[0] : "",
              )
              .filter(Boolean)
              .join("");
            setTranslatedOutput(translatedText);
          } else {
            setTranslatedOutput(
              isRtl
                ? "خطأ في معالجة البيانات"
                : "Data parsing error response...",
            );
          }
        } else {
          setTranslatedOutput(
            isRtl
              ? "خطأ في الاتصال بخادم الترجمة"
              : "Translation error response...",
          );
        }
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== "AbortError") {
          setTranslatedOutput(
            isRtl
              ? "فشلت الترجمة، يرجى التحقق من الاتصال"
              : "Translation execution timed out...",
          );
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

  interface TashkeelResponse {
    result?: string;
    error?: string;
  }

  const handleAutoTashkeel = async () => {
    if (!inputText.trim()) return;
    setLoadingTashkeel(true);
    try {
      const response = await fetch(
        "https://textarabi.vercel.app/api/tashkeel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
          body: JSON.stringify({ text: inputText }),
        },
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = (await response.json()) as TashkeelResponse;
      if (data && data.result) {
        setInputText(data.result);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error("Tashkeel API Error:", errorMessage);
      alert(
        isRtl
          ? "فشل الاتصال بخادم التشكيل، يرجى التحقق من الشبكة."
          : "Failed to connect to Tashkeel server.",
      );
    } finally {
      setLoadingTashkeel(false);
    }
  };

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

    const newText =
      start === end
        ? text.substring(0, start - 1) + text.substring(end)
        : text.substring(0, start) + text.substring(end);

    const newCursorPos = start === end ? start - 1 : start;

    setInputText(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleClear = () => {
    setInputText("");
    setTranslatedOutput("");
    setScanPreviewImage(null);
  };

  let outputText = "";
  if (inputText.trim() || activeTab === "keyboard") {
    if (activeTab === "strip") {
      outputText =
        tashkeelSubMode === "strip"
          ? inputText.replace(/[\u064B-\u0652\u0653\u0670]/g, "")
          : inputText;
    } else if (activeTab === "reverse") {
      outputText = reshapeArabicText(inputText);
    } else if (activeTab === "translate") {
      outputText = translatedOutput;
    } else if (activeTab === "json") {
      outputText = formatJsonArabic(inputText, isRtl);
    } else if (activeTab === "keshida") {
      outputText = applyKeshida(inputText, keshidaMode);
    } else if (activeTab === "vector") {
      outputText = generateSvgVector(inputText);
    } else if (activeTab === "scan") {
      outputText = inputText;
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

  const showTranslate =
    !allowedTool || allowedTool === "arabic-text-normalizer";
  const showKeyboard = !allowedTool || allowedTool === "arabic-text-normalizer";
  const showReverse = !allowedTool || allowedTool === "arabic-text-normalizer";
  const showStrip = !allowedTool || allowedTool === "arabic-text-normalizer";
  const showScan = !allowedTool || allowedTool === "ocr-scanner";
  const showKeshida =
    !allowedTool || allowedTool === "arabic-keshida-generator";
  const showVector = !allowedTool || allowedTool === "arabic-text-to-vector";

  const activeTabsCount = [
    showTranslate,
    showKeyboard,
    showReverse,
    showStrip,
    showKeshida,
    showVector,
    showScan,
  ].filter(Boolean).length;

  return (
    <div
      className="w-full max-w-5xl mx-auto px-4 py-2 mb-8"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {(!allowedTool || activeTabsCount > 1) && (
        <Tabs
          value={activeTab}
          onValueChange={(val) => {
            setActiveTab(val as TextUtilityMode);
            if (val !== "translate") setTranslatedOutput("");
          }}
          className="w-full mb-4"
        >
          <TabsList
            className={`grid grid-cols-2 lg:grid-cols-${Math.min(
              activeTabsCount,
              8,
            )} w-full bg-slate-100 p-1 rounded-xl gap-1 h-auto overflow-hidden`}
          >
            {showTranslate && (
              <TabsTrigger
                value="translate"
                className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Languages className="w-4 h-4 shrink-0" />
                <span>{isRtl ? "الترجمة الفورية" : "Instant Translate"}</span>
              </TabsTrigger>
            )}

            {showKeyboard && (
              <TabsTrigger
                value="keyboard"
                className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Keyboard className="w-4 h-4 shrink-0" />
                <span>{isRtl ? "كيبورد عربي" : "Arabic Keyboard"}</span>
              </TabsTrigger>
            )}

            {showReverse && (
              <TabsTrigger
                value="reverse"
                className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <RefreshCw className="w-4 h-4 shrink-0" />
                <span>{isRtl ? "مصحح الفوتوشوب" : "Photoshop Fixer"}</span>
              </TabsTrigger>
            )}

            {showStrip && (
              <TabsTrigger
                value="strip"
                className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Trash2 className="w-4 h-4 shrink-0" />
                <span>{isRtl ? "تشكيل / إزالة" : "Tashkeel / Strip"}</span>
              </TabsTrigger>
            )}

            {showKeshida && (
              <TabsTrigger
                value="keshida"
                className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Maximize2 className="w-4 h-4 shrink-0" />
                <span>{isRtl ? "الكشيدة والتطويل" : "Keshida / Tatweel"}</span>
              </TabsTrigger>
            )}

            {showVector && (
              <TabsTrigger
                value="vector"
                className="flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-medium font-tajawal rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Spline className="w-4 h-4 shrink-0" />
                <span>{isRtl ? "تحويل النص لمتجه" : "Text to Vector"}</span>
              </TabsTrigger>
            )}

            {showScan && (
              <TabsTrigger
                value="scan"
                className="relative flex items-center justify-start sm:justify-center gap-2 px-3 py-3 text-sm font-semibold font-tajawal rounded-lg transition-all bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 border border-blue-300/60 shadow-2xs hover:bg-blue-500/20 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-transparent overflow-hidden group"
              >
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
                <Camera className="w-4 h-4 shrink-0 text-blue-600 group-data-[state=active]:text-white animate-pulse" />
                <span>{isRtl ? "مسح ضوئي OCR" : "OCR Scanner"}</span>
              </TabsTrigger>
            )}
          </TabsList>
        </Tabs>
      )}

      {(!allowedTool || allowedTool === "arabic-text-normalizer") && (
        <StatsBar
          wordCount={wordCount}
          charCountWithSpaces={charCountWithSpaces}
          charCountNoSpaces={charCountNoSpaces}
          isRtl={isRtl}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full">
        {/* Left Column Input */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden w-full min-w-0">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-cairo">
              <FileText className="w-3.5 h-3.5 text-slate-400" />{" "}
              {isRtl ? "أدخل النص الأصلي هنا" : "Input Original Text Here"}
            </span>

            {inputText && (
              <Button
                variant="ghost"
                onClick={handleClear}
                className="text-xs h-7 px-2 text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-md"
              >
                {isRtl ? "مسح الكل" : "Clear All"}
              </Button>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />

          {activeTab === "scan" ? (
            <div className="p-6 flex flex-col items-center justify-center border-2 border-dashed border-blue-200 bg-blue-50/30 m-4 rounded-xl flex-grow text-center transition-all hover:bg-blue-50/50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3 shadow-inner">
                {isScanning ? (
                  <RefreshCw className="w-6 h-6 animate-spin" />
                ) : (
                  <Upload className="w-6 h-6" />
                )}
              </div>
              <h3 className="text-sm font-bold text-slate-800 font-cairo mb-1">
                {isRtl
                  ? "رفع صورة لاستخراج النص (OCR)"
                  : "Upload Image for OCR Extraction"}
              </h3>
              <p className="text-xs text-slate-500 font-tajawal mb-4 max-w-xs">
                {isRtl
                  ? "استخرج النصوص الإنجليزية والعربية بدقة من الصور المرفقة عبر محرك التعرّف الفوري."
                  : "Extract English and Arabic text from your images instantly."}
              </p>
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={isScanning}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-tajawal gap-2 h-9 px-4 shadow-sm"
              >
                <Camera className="w-4 h-4" />
                <span>
                  {isScanning
                    ? scanProgressText ||
                      (isRtl ? "جاري معالجة الصورة..." : "Processing image...")
                    : isRtl
                      ? "اختر صورة (JPG, PNG)"
                      : "Browse Image"}
                </span>
              </Button>

              {scanPreviewImage && (
                <div className="mt-4 relative w-24 h-24 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={scanPreviewImage}
                    alt="Scan Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ) : (
            <Textarea
              ref={textareaRef}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                if (!e.target.value.trim()) setTranslatedOutput("");
              }}
              placeholder={
                isRtl
                  ? "اكتب أو الصق النص هنا..."
                  : "Type or paste text here..."
              }
              className="notranslate w-full min-h-[320px] flex-grow p-4 outline-none border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent resize-none text-slate-800 text-lg leading-relaxed font-cairo"
              dir={
                activeTab === "translate" && translationTarget === "ar"
                  ? "ltr"
                  : "rtl"
              }
            />
          )}
        </div>

        {/* Right Column Output */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden w-full min-w-0">
          <div className="bg-slate-50/80 border-b border-slate-200 px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold text-slate-700 font-cairo">
              {activeTab === "keyboard"
                ? isRtl
                  ? "لوحة الحروف والتشكيل الذكية"
                  : "Smart Arabic Keyboard"
                : activeTab === "keshida"
                  ? isRtl
                    ? "النص الممتد بالتطويل"
                    : "Stretched Keshida Text"
                  : activeTab === "vector"
                    ? isRtl
                      ? "كود مسار SVG المتجه"
                      : "SVG Vector Path Code"
                    : activeTab === "scan"
                      ? isRtl
                        ? "النص المستخرج من الصورة"
                        : "Extracted OCR Text"
                      : isRtl
                        ? "النص المعالج الجاهز"
                        : "Processed Ready Output"}
            </span>
            {outputText && activeTab !== "keyboard" && (
              <Button
                onClick={handleCopy}
                size="sm"
                variant={copied ? "outline" : "default"}
                className={`h-7 px-3 gap-1.5 text-xs font-medium rounded-md transition-all ${
                  copied
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>
                  {copied
                    ? isRtl
                      ? "تم النسخ!"
                      : "Copied!"
                    : isRtl
                      ? "نسخ النص"
                      : "Copy Text"}
                </span>
              </Button>
            )}
          </div>

          {activeTab === "strip" && (
            <div className="bg-slate-100/50 border-b border-slate-200 px-3 py-2 flex items-center justify-between gap-2">
              <div className="flex bg-slate-200/70 p-0.5 rounded-lg border border-slate-300/40">
                <button
                  onClick={() => setTashkeelSubMode("strip")}
                  className={`px-3 py-1 text-xs font-medium font-tajawal rounded-md transition-all ${
                    tashkeelSubMode === "strip"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {isRtl ? "إزالة الحركات" : "Strip Diacritics"}
                </button>
                <button
                  onClick={() => setTashkeelSubMode("auto")}
                  className={`px-3 py-1 text-xs font-medium font-tajawal rounded-md transition-all flex items-center gap-1 ${
                    tashkeelSubMode === "auto"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  {isRtl ? "التشكيل التلقائي" : "Auto Tashkeel"}
                </button>
              </div>

              {tashkeelSubMode === "auto" && inputText.trim() && (
                <Button
                  onClick={handleAutoTashkeel}
                  disabled={loadingTashkeel}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-tajawal text-[11px] h-7 px-2.5 rounded-md flex items-center gap-1.5 transition-all shadow-3xs"
                >
                  <RefreshCw
                    className={`w-3 h-3 ${loadingTashkeel ? "animate-spin" : ""}`}
                  />
                  <span>
                    {loadingTashkeel
                      ? isRtl
                        ? "جاري المعالجة..."
                        : "Processing..."
                      : isRtl
                        ? "شكل النص الآن"
                        : "Tashkeel Now"}
                  </span>
                </Button>
              )}
            </div>
          )}

          {activeTab === "keshida" && (
            <div className="bg-slate-100/50 border-b border-slate-200 px-3 py-2 flex items-center justify-between gap-2">
              <div className="flex bg-slate-200/70 p-0.5 rounded-lg border border-slate-300/40">
                <button
                  onClick={() => setKeshidaMode("balanced")}
                  className={`px-3 py-1 text-xs font-medium font-tajawal rounded-md transition-all ${
                    keshidaMode === "balanced"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {isRtl ? "تطويل متوازن" : "Balanced Keshida"}
                </button>
                <button
                  onClick={() => setKeshidaMode("full")}
                  className={`px-3 py-1 text-xs font-medium font-tajawal rounded-md transition-all ${
                    keshidaMode === "full"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {isRtl ? "تطويل كامل" : "Full Extension"}
                </button>
              </div>
            </div>
          )}

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
              <span className="text-slate-500 font-tajawal">
                {isRtl ? "اتجاه الترجمة:" : "Translation Direction:"}
              </span>
              <Select
                value={translationTarget}
                onValueChange={(val: "en" | "ar") => setTranslationTarget(val)}
              >
                <SelectTrigger className="w-[180px] h-8 bg-white border-slate-200 text-xs font-tajawal px-3 flex justify-between items-center">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en" className="text-xs font-tajawal">
                    {isRtl ? "العربية إلى الإنجليزية" : "Arabic to English"}
                  </SelectItem>
                  <SelectItem value="ar" className="text-xs font-tajawal">
                    {isRtl ? "الإنجليزية إلى العربية" : "English to Arabic"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="p-4 flex-grow flex flex-col justify-between">
            {activeTab === "keyboard" ? (
              <TashkeelKeyboard
                onInsert={insertCharacter}
                onBackspace={handleBackspace}
                onClear={handleClear}
                onCopy={handleCopy}
                disabledCopy={!inputText}
                copied={copied}
                isRtl={isRtl}
              />
            ) : (
              <Textarea
                readOnly
                value={outputText}
                placeholder={
                  isRtl
                    ? "ستظهر النتيجة المعالجة هنا تلقائياً..."
                    : "Processed output will appear here automatically..."
                }
                className="notranslate w-full min-h-[320px] flex-grow p-0 outline-none border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent resize-none text-slate-800 text-lg leading-relaxed font-cairo"
                dir={
                  activeTab === "translate" && translationTarget === "en"
                    ? "ltr"
                    : activeTab === "vector"
                      ? "ltr"
                      : "rtl"
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
