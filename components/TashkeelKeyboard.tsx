"use client";

import React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TashkeelKeyboardProps {
  onInsert: (char: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  onCopy: () => void;
  disabledCopy: boolean;
  isRtl: boolean;
  copied: boolean;
}

export default function TashkeelKeyboard({
  onInsert,
  onBackspace,
  onClear,
  onCopy,
  disabledCopy,
  isRtl,
  copied,
}: TashkeelKeyboardProps) {
  const keyboardRow1 = ["ج", "ح", "خ", "ه", "ع", "غ", "ف", "ق", "ث", "ص", "ض"];
  const keyboardRow2 = ["ك", "م", "ن", "ت", "ا", "ل", "ب", "ي", "س", "ش"];
  const keyboardRow3 = ["د", "ذ", "ر", "ز", "و", "ة", "ى", "ئ", "ء", "ؤ", "لا"];

  const tashkeelKeys = [
    { label: "َ (فتحة)", value: "\u064e" },
    { label: "ُ (ضمة)", value: "\u064f" },
    { label: "ِ (كسرة)", value: "\u0650" },
    { label: "ّ (شدة)", value: "\u0651" },
    { label: "ً (تنغيم فتح)", value: "\u064b" },
    { label: "ٌ (تنغيم ضم)", value: "\u064c" },
    { label: "ٍ (تنغيم كسر)", value: "\u064d" },
    { label: "ْ (سكون)", value: "\u0652" },
  ];

  return (
    <div className="w-full h-full bg-slate-50/50 p-3 flex flex-col justify-between gap-2 overflow-y-auto" dir="rtl">
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-1">
        {tashkeelKeys.map((key) => (
          <button
            key={key.label}
            onClick={() => onInsert(key.value)}
            className="bg-blue-50 border border-blue-100 hover:bg-blue-100 text-blue-700 font-extrabold py-2.5 rounded-lg text-sm transition-all active:scale-95 cursor-pointer shadow-3xs"
          >
            {key.label.split(" ")[0]}
          </button>
        ))}
      </div>

      {[keyboardRow1, keyboardRow2, keyboardRow3].map((row, rIndex) => (
        <div key={rIndex} className="flex justify-center gap-1 w-full">
          {row.map((char) => (
            <button
              key={char}
              onClick={() => onInsert(char)}
              className="flex-1 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold py-3 rounded-lg text-[15px] sm:text-base shadow-3xs transition-all active:scale-95 cursor-pointer min-w-[24px]"
            >
              {char}
            </button>
          ))}
        </div>
      ))}

      <div className="flex gap-1.5 w-full pt-1">
        <button onClick={onClear} className="bg-rose-50 border border-rose-100 hover:bg-rose-100 text-rose-600 font-bold px-3 py-3 rounded-lg text-xs transition-all active:scale-95 cursor-pointer">
          {isRtl ? "مسح" : "Clear"}
        </button>
        <button onClick={() => onInsert(" ")} className="flex-grow bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 py-3 rounded-lg shadow-3xs text-sm font-medium cursor-pointer">
          {isRtl ? "مسافة" : "Space"}
        </button>
        <button onClick={onBackspace} className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-3 py-3 rounded-lg text-xs transition-all active:scale-95 cursor-pointer">
          {isRtl ? "حذف" : "Back"}
        </button>
      </div>

      <Button
        onClick={onCopy}
        disabled={disabledCopy}
        className={`w-full mt-2 h-10 gap-2 font-tajawal text-xs rounded-lg transition-all cursor-pointer ${
          copied ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-800 hover:bg-slate-900 text-white"
        }`}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        <span>
          {isRtl ? "نسخ النص الحالي بالكامل" : "Copy Full Text"}
        </span>
      </Button>
    </div>
  );
}