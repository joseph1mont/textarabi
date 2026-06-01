// app/ar/(legal-ar)/contact/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Send, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export default function ContactFormAR() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 font-tajawal" dir="rtl">
      
      {/* Back to Application Link */}
      <div className="mb-8">
        <Link 
          href="/ar" 
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[4px]" />
          <span>العودة إلى التطبيق الرئيسي</span>
        </Link>
      </div>

      {/* Master Two-Column Grid Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Context Details */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">الاتصال بالدعم الفني</h1>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              هل لديك اقتراح لتحسين ميزات تحرير النصوص أو تود الإبلاغ عن مشكلة في محاذاة وتنسيق المظهر؟ نحن هنا دائماً لمساعدة وتطوير منظومة الويب العربية وتصحيح واجهاتها.
            </p>
          </div>

          <hr className="border-slate-200 my-4" />

          {/* Feature Card 1 */}
          <div className="border border-slate-200/80 bg-white rounded-xl shadow-xs p-4 flex items-start gap-4">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm md:text-base mb-0.5">خصوصية بيانات آمنة تماماً</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                تشتغل جميع برمجيات المعالجة بالكامل محلياً داخل بيئة تشغيل جهازك. تُستخدم بيانات الاتصال فقط لحل استفسارك ولا يتم استخدامها خارجياً على الإطلاق.
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="border border-slate-200/80 bg-white rounded-xl shadow-xs p-4 flex items-start gap-4">
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0 mt-0.5">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm md:text-base mb-0.5">سرعة استجابة المحرك</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                تقوم فرق التطوير بمراجعة التذاكر دورياً وبشكل متكرر. تتلقى الاستفسارات التقنية تحديثات وإجابات في غضون ٢٤ إلى ٤٨ ساعة عمل كحد أقصى.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form Container using precise classes */}
        <div className="lg:col-span-7">
          <div className="border border-slate-200 rounded-2xl bg-white p-6 md:p-8 shadow-2xs">
            {isSuccess ? (
              <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-2">تم إرسال رسالتك بنجاح!</h2>
                <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
                  شكراً لتقديمك مدخلات هندسية تساهم في صقل حزمة الأدوات الخاصة بنا. تم تسجيل مسار المشكلة وسيتواصل معك فريق الدعم قريباً جداً.
                </p>
                <Button 
                  variant="outline" 
                  className="border-slate-200 hover:bg-slate-50 font-bold px-5 cursor-pointer rounded-xl text-slate-700"
                  onClick={() => setIsSuccess(false)}
                >
                  إرسال استفسار آخر
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Dual Form Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-bold text-sm">الاسم الكامل</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="مثال: محمد أحمد"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="h-11 border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-bold text-sm">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="h-11 border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Subject Line */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-700 font-bold text-sm">عنوان الموضوع</Label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    placeholder="مثال: طلب ميزة لمحرك تحليل علامات التشكيل العربية"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="h-11 border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm"
                  />
                </div>

                {/* Message Content */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-bold text-sm">محتوى الرسالة</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="يرجى وصف أفكار التحسين أو مشاركة سجلات أخطاء البرامج بوضوح..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="border-slate-200 focus-visible:ring-blue-500 bg-slate-50/30 rounded-lg text-sm resize-none min-h-[140px] leading-relaxed"
                  />
                </div>

                {/* Submit Trigger Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 rounded-xl transition-all duration-150 gap-2 cursor-pointer shadow-xs disabled:opacity-75 text-sm"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 scale-x-[-1]" />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </Button>

              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}