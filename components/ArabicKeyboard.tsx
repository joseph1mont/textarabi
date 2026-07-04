"use client";

import React, { useState } from "react";
import { Copy, Trash2, Wand2 } from "lucide-react";

export default function AcademicTashkeelKeyboard() {
  const [inputText, setInputText] = useState("");

  const harakat = [
    {
      char: "َ",
      pos: "فوق",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      char: "ُ",
      pos: "فوق",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      char: "ِ",
      pos: "تحت",
      color: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      char: "ّ",
      pos: "فوق",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      char: "ْ",
      pos: "فوق",
      color: "bg-orange-50 border-orange-200 text-orange-600",
    },
    {
      char: "ً",
      pos: "فوق",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      char: "ٌ",
      pos: "فوق",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
    {
      char: "ٍ",
      pos: "تحت",
      color: "bg-purple-50 border-purple-200 text-purple-600",
    },
  ];

  return (
    <div
      className="w-full max-w-3xl mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-xl"
      dir="rtl"
    >
      <h2 className="text-3xl font-black mb-6 text-slate-800 flex items-center gap-2">
        <Wand2 className="text-indigo-600" /> لوحة التشكيل الأكاديمية
      </h2>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full h-48 p-6 text-5xl font-bold text-slate-900 bg-slate-50 rounded-2xl border-4 border-slate-200 focus:border-indigo-400 outline-none mb-6"
        placeholder="اكتب هنا..."
      />

      {/* لوحة الحركات بتصميم كبير وواضح */}
      <div className="grid grid-cols-4 gap-4">
        {harakat.map((h) => (
          <button
            key={h.char}
            onClick={() => setInputText((p) => p + h.char)}
            className={`flex flex-col items-center justify-center p-6 border-2 rounded-2xl transition-all hover:scale-105 active:scale-95 ${h.color}`}
          >
            <span className="text-6xl font-black mb-2">{h.char}</span>
            <span className="text-xs font-bold opacity-70">
              على {h.pos} الحرف
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => setInputText("")}
        className="mt-6 flex items-center text-red-500 font-bold"
      >
        <Trash2 size={18} className="ml-2" /> مسح النص
      </button>
    </div>
  );
}
