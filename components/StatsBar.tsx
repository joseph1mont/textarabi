"use client";

import React from "react";

interface StatsBarProps {
  wordCount: number;
  charCountWithSpaces: number;
  charCountNoSpaces: number;
  isRtl: boolean;
}

export default function StatsBar({
  wordCount,
  charCountWithSpaces,
  charCountNoSpaces,
  isRtl,
}: StatsBarProps) {
  return (
    <div className="w-full bg-white rounded-xl p-4 mb-5 grid grid-cols-3 gap-2 border border-slate-200 shadow-2xs text-center">
      <div className={`flex flex-col justify-center items-center gap-1 ${isRtl ? "border-l" : "border-r"} border-slate-100`}>
        <span className="text-[11px] font-tajawal font-medium text-slate-400 tracking-wide uppercase">
          {isRtl ? "الكلمات" : "Words"}
        </span>
        <span className="text-2xl font-bold font-mono tracking-tight text-slate-800">
          {wordCount}
        </span>
      </div>
      <div className={`flex flex-col justify-center items-center gap-1 ${isRtl ? "border-l" : "border-r"} border-slate-100`}>
        <span className="text-[11px] font-tajawal font-medium text-slate-400 tracking-wide uppercase">
          {isRtl ? "الحروف" : "Characters"}
        </span>
        <span className="text-2xl font-bold font-mono tracking-tight text-blue-600">
          {charCountWithSpaces}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-[11px] font-tajawal font-medium text-slate-400 tracking-wide uppercase">
          {isRtl ? "بدون مسافات" : "No Spaces"}
        </span>
        <span className="text-2xl font-bold font-mono tracking-tight text-slate-600">
          {charCountNoSpaces}
        </span>
      </div>
    </div>
  );
}