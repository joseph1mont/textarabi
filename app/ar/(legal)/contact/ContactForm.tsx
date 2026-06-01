"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "الدعم الفني للأدوات",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // محاكاة إرسال البيانات عبر الشبكة لجعل البناء الثابت مستقراً ومستقلاً
      // يمكنك ربط هذا المسار لاحقاً بخدمات مخصصة مثل Web3Forms أو Formspree
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({
        success: true,
        message: "تم إرسال رسالتك بنجاح! سيقوم الفريق البرمجي بمراجعة طلبك والرد عليك في أقرب وقت.",
      });
      setFormState({ name: "", email: "", subject: "الدعم الفني للأدوات", message: "" });
    } catch {
      setStatus({
        success: false,
        message: "حدث خطأ غير متوقع أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
      {status && (
        <div
          className={`p-4 rounded-xl text-xs font-bold border ${
            status.success
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-rose-50 border-rose-200 text-rose-800"
          }`}
        >
          {status.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-black text-slate-700 tracking-tight mb-1.5 font-tajawal">
          الاسم الكامل / المعرف البرمجي
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium font-tajawal"
          placeholder="مثال: أحمد المطور"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-black text-slate-700 tracking-tight mb-1.5 font-tajawal">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium font-sans"
            placeholder="name@domain.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-xs font-black text-slate-700 tracking-tight mb-1.5 font-tajawal">
            تصنيف رسالتك
          </label>
          <select
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold font-tajawal"
          >
            <option value="الدعم الفني للأدوات">الدعم الفني للموقع والأدوات</option>
            <option value="الإبلاغ عن خطأ برمجي">الإبلاغ عن خطأ في معالجة النصوص</option>
            <option value="امتثال أدسنس والشراكات">استفسار تجاري أو امتثال أدسنس</option>
            <option value="اقتراح تطويري">اقتراح إضافة محرك أو ميزة جديدة</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-black text-slate-700 tracking-tight mb-1.5 font-tajawal">
          تفاصيل الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium font-tajawal resize-y"
          placeholder="اكتب هنا تفاصيل استفسارك التقني أو المشكلة التي تواجهك..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs tracking-wide px-6 py-3 rounded-xl shadow-xs transition-all cursor-pointer disabled:cursor-not-allowed font-tajawal"
      >
        {isSubmitting ? "جاري الإرسال الآن..." : "إرسال الرسالة بشكل آمن"}
      </button>
    </form>
  );
}