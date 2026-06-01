"use client";

import React from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FontOptionsRibbonProps {
  selectedFont: string;
  setSelectedFont: (font: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  currentFontLabel: string;
  currentSizeLabel: string;
  isRtl: boolean;
  fonts: { name: string; value: string }[];
  sizes: { name: string; value: string }[];
}

export default function FontOptionsRibbon({
  selectedFont,
  setSelectedFont,
  fontSize,
  setFontSize,
  currentFontLabel,
  currentSizeLabel,
  isRtl,
  fonts,
  sizes,
}: FontOptionsRibbonProps) {
  return (
    <div className="bg-slate-100/50 border-b border-slate-200 px-3 py-2 flex flex-wrap gap-3 items-center text-xs">
      <div className="flex items-center gap-1.5 text-slate-500">
        <SlidersHorizontal className="w-3.5 h-3.5" />
        <span>{isRtl ? "خيارات الخط:" : "Font Options:"}</span>
      </div>

      <Select value={selectedFont} onValueChange={setSelectedFont}>
        <SelectTrigger className="w-[185px] h-8 bg-white border-slate-200 text-xs shadow-2xs font-tajawal flex items-center justify-between px-3 gap-2">
          <SelectValue>{currentFontLabel}</SelectValue>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 opacity-70 shrink-0" />
        </SelectTrigger>
        <SelectContent className="font-sans bg-white z-[100] min-w-[185px] rounded-lg border border-slate-200 shadow-md p-1">
          {fonts.map((font) => (
            <SelectItem key={font.value} value={font.value} className="text-xs cursor-pointer font-tajawal py-1.5 px-7">
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={fontSize} onValueChange={setFontSize}>
        <SelectTrigger className="w-[120px] h-8 bg-white border-slate-200 text-xs shadow-2xs font-tajawal flex items-center justify-between px-3 gap-2">
          <SelectValue>{currentSizeLabel}</SelectValue>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 opacity-70 shrink-0" />
        </SelectTrigger>
        <SelectContent className="font-sans bg-white z-[100] min-w-[120px] rounded-lg border border-slate-200 shadow-md p-1">
          {sizes.map((size) => (
            <SelectItem key={size.value} value={size.value} className="text-xs cursor-pointer font-tajawal py-1.5 px-7">
              {size.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}