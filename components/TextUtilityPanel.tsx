"use client";

import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RefreshCw, FileText, Wand2 } from "lucide-react";

import StatsBar from "./StatsBar";
import TashkeelKeyboard from "./TashkeelKeyboard";

// ملاحظة: قمت بإزالة الاستيرادات غير المستخدمة (مثل Select, Trash2, Type, إلخ)
// التي كانت تسبب التحذيرات.

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
  const [loadingTashkeel, setLoadingTashkeel] = useState(false);
  const [copied, setCopied] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isRtl = lang === "ar";

  // دالة التشكيل التلقائي (تستخدم الرابط النسبي الآن لضمان عدم حدوث مشاكل CORS)
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

  const charCountWithSpaces = inputText.length;
  const charCountNoSpaces = inputText.replace(/\s/g, "").length;
  const wordCount =
    inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;

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
        <TabsList className="grid grid-cols-4 w-full bg-slate-100 p-1 rounded-xl">
          <TabsTrigger value="strip">إزالة التشكيل</TabsTrigger>
          <TabsTrigger value="keyboard">الكيبورد</TabsTrigger>
          <TabsTrigger value="reverse">المصحح</TabsTrigger>
          <TabsTrigger value="preview">استعراض</TabsTrigger>
        </TabsList>
      </Tabs>

      <StatsBar
        wordCount={wordCount}
        charCountWithSpaces={charCountWithSpaces}
        charCountNoSpaces={charCountNoSpaces}
        isRtl={isRtl}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Column: Input */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b px-4 py-3 flex justify-between items-center h-[48px]">
            <span className="text-xs font-bold flex items-center gap-1.5 text-slate-700">
              <FileText className="w-3.5 h-3.5" /> النص الأصلي
            </span>
            <div className="flex gap-2">
              {activeTab === "strip" && (
                <Button
                  onClick={handleAutoTashkeel}
                  disabled={loadingTashkeel || !inputText}
                  className="h-7 px-3 text-xs bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {loadingTashkeel ? (
                    <RefreshCw className="w-3 h-3 animate-spin" />
                  ) : (
                    <Wand2 className="w-3 h-3 ml-1" />
                  )}
                  تشكيل تلقائي
                </Button>
              )}
              <Button
                variant="ghost"
                onClick={() => setInputText("")}
                className="text-xs h-7"
              >
                مسح
              </Button>
            </div>
          </div>
          <Textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[320px] p-4 border-0 focus-visible:ring-0"
          />
        </div>

        {/* Right Column: Output */}
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 p-4 min-h-[320px]">
          <h3 className="text-xs font-bold text-slate-700 mb-2">
            النص المعالج
          </h3>
          <div className="text-lg leading-relaxed text-slate-800">
            {activeTab === "strip"
              ? inputText.replace(/[\u064B-\u0652\u0653\u0670]/g, "")
              : inputText}
          </div>
        </div>
      </div>
    </div>
  );
}
