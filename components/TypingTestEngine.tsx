"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, RotateCcw, Sparkles } from "lucide-react";

interface TypingTestEngineProps {
  lang?: "ar" | "en";
}

const SAMPLE_TEXTS = {
  ar: [
    "الوصول إلى الحواسيب الشبكية يساعد على نقل البيانات بسرعة وأمان بين المستخدمين في جميع أنحاء العالم",
    "تعتبر الطباعة السريعة باللمس مهارة أساسية للمطورين وصناع المحتوى لزيادة الإنتاجية وتقليل الجهد البصري",
    "تعتمد الأدوات الحديثة على معالجة البيانات داخل متصفح المستخدم للوفاء بمعايير الأمان والخصوصية الفائقة",
  ],
  en: [
    "Fast touch typing is an essential skill for software developers and content creators to boost productivity and maintain flow state.",
    "Modern web applications process data client side to ensure high performance zero latency and total user privacy.",
    "Building clean responsive user interfaces requires thoughtful typography proper contrast and seamless interaction feedback.",
  ],
};

export default function TypingTestEngine({
  lang = "ar",
}: TypingTestEngineProps) {
  const isRtl = lang === "ar";
  const [selectedLang, setSelectedLang] = useState<"ar" | "en">(lang);
  const [textIndex, setTextIndex] = useState(0);

  const textBank = SAMPLE_TEXTS[selectedLang];
  const currentText = textBank[textIndex % textBank.length];
  const words = currentText.split(" ");

  const [userInput, setUserInput] = useState("");
  const [userWords, setUserWords] = useState<string[]>([]);
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const finalizeTest = useCallback(
    (finalUserWords: string[]) => {
      const correctWords = finalUserWords.filter(
        (w, i) => w === words[i],
      ).length;
      const calculatedWpm = Math.round((correctWords / 60) * 60);
      const calculatedAcc =
        finalUserWords.length > 0
          ? Math.round((correctWords / finalUserWords.length) * 100)
          : 100;

      setWpm(calculatedWpm);
      setAccuracy(calculatedAcc);
      setIsActive(false);
      setIsFinished(true);
    },
    [words],
  );

  const resetTest = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setUserInput("");
    setUserWords([]);
    setCurrentWordIdx(0);
    setTimeLeft(60);
    setIsActive(false);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  // Clean Timer Effect utilizing functional state updates
  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            // We use setTimeout to defer state updates safely outside the interval tick
            setTimeout(() => {
              setUserWords((latestWords) => {
                finalizeTest(latestWords);
                return latestWords;
              });
            }, 0);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, finalizeTest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (!isActive && !isFinished) {
      setIsActive(true);
    }

    if (val.endsWith(" ")) {
      const trimmedVal = val.trim();
      if (!trimmedVal) return;

      const updatedUserWords = [...userWords, trimmedVal];
      setUserWords(updatedUserWords);
      setCurrentWordIdx((prev) => prev + 1);
      setUserInput("");

      const correctWords = updatedUserWords.filter(
        (w, i) => w === words[i],
      ).length;
      const elapsedTime = 60 - timeLeft || 1;
      setWpm(Math.round((correctWords / elapsedTime) * 60));
      setAccuracy(Math.round((correctWords / updatedUserWords.length) * 100));

      if (updatedUserWords.length >= words.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        finalizeTest(updatedUserWords);
      }
    } else {
      setUserInput(val);
    }
  };

  const handleLanguageChange = (newLang: "ar" | "en") => {
    setSelectedLang(newLang);
    setTextIndex(0);
    resetTest();
  };

  const handleNewText = () => {
    setTextIndex((prev) => prev + 1);
    resetTest();
  };

  return (
    <div
      className="w-full bg-white rounded-xl border border-slate-200 shadow-xs p-6"
      dir={selectedLang === "ar" ? "rtl" : "ltr"}
    >
      {/* 1. HUD Bar: Controls & Stats */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-tajawal">
              {selectedLang === "ar" ? "الوقت المتبقي" : "Time Left"}
            </span>
            <span className="text-2xl font-extrabold text-blue-600 font-mono">
              {timeLeft}s
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-tajawal">
              {selectedLang === "ar" ? "السرعة (WPM)" : "Speed (WPM)"}
            </span>
            <span className="text-2xl font-extrabold text-slate-800 font-mono">
              {wpm}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-tajawal">
              {selectedLang === "ar" ? "الدقة" : "Accuracy"}
            </span>
            <span className="text-2xl font-extrabold text-emerald-600 font-mono">
              {accuracy}%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => handleLanguageChange("ar")}
              className={`px-3 py-1 text-xs font-medium font-tajawal rounded-md transition-all ${
                selectedLang === "ar"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-3 py-1 text-xs font-medium font-tajawal rounded-md transition-all ${
                selectedLang === "en"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500"
              }`}
            >
              English
            </button>
          </div>

          <Button
            onClick={handleNewText}
            variant="outline"
            size="sm"
            className="h-8 gap-1 text-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{selectedLang === "ar" ? "نص جديد" : "New Text"}</span>
          </Button>

          <Button
            onClick={resetTest}
            variant="ghost"
            size="sm"
            className="h-8 px-2 text-slate-500 hover:text-slate-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* 2. Target Words Canvas */}
      <div className="text-xl lg:text-2xl leading-relaxed font-cairo select-none min-h-[140px] p-5 bg-slate-50/60 rounded-xl mb-6 border border-slate-200/80 flex flex-wrap gap-x-2 gap-y-3 items-center">
        {words.map((word, idx) => {
          let wordStyle = "text-slate-400 font-normal";

          if (idx < currentWordIdx) {
            const isCorrect = userWords[idx] === word;
            wordStyle = isCorrect
              ? "text-emerald-600 font-semibold"
              : "text-rose-600 line-through bg-rose-50 px-1 rounded";
          } else if (idx === currentWordIdx) {
            wordStyle =
              "text-slate-900 bg-blue-100/80 underline decoration-blue-500 decoration-2 px-1.5 py-0.5 rounded shadow-2xs";
          }

          return (
            <span
              key={idx}
              className={`transition-all duration-150 ${wordStyle}`}
            >
              {word}
            </span>
          );
        })}
      </div>

      {/* 3. Typing Input Field */}
      {!isFinished ? (
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder={
            selectedLang === "ar"
              ? "ابدأ الكتابة هنا لبدء الاختبار تلقائياً..."
              : "Start typing here to trigger the timer automatically..."
          }
          className="w-full p-4 border border-slate-300 rounded-xl text-lg font-cairo text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/80 shadow-2xs"
          dir={selectedLang === "ar" ? "rtl" : "ltr"}
          disabled={isFinished}
          autoFocus
        />
      ) : (
        /* Results Modal Badge */
        <div className="p-6 bg-emerald-50/80 border border-emerald-200 rounded-xl text-center">
          <Sparkles className="w-8 h-8 text-emerald-600 mx-auto mb-2 animate-bounce" />
          <h4 className="text-lg font-bold text-slate-900 font-cairo mb-1">
            {selectedLang === "ar"
              ? "اكتمل الاختبار بنجاح!"
              : "Test Completed!"}
          </h4>
          <p className="text-sm text-slate-600 font-tajawal mb-4">
            {selectedLang === "ar"
              ? `حققت سرعة ${wpm} كلمة/دقيقة بدقة ${accuracy}%.`
              : `You achieved ${wpm} WPM with ${accuracy}% accuracy.`}
          </p>
          <Button
            onClick={resetTest}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-tajawal text-xs px-6 shadow-sm"
          >
            {selectedLang === "ar" ? "إعادة المحاولة" : "Try Again"}
          </Button>
        </div>
      )}
    </div>
  );
}
