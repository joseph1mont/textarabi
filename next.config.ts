// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // إلزامي لتوليد ملفات ثابتة تناسب الاستضافة المشتركة
  trailingSlash: true,   // تحسن روابط السيو وتضمن عمل الصفحات الفرعية دون مشاكل 404 على Hostinger
  images: {
    unoptimized: true,   // إلزامي لأن ميزة تحجيم الصور الافتراضية تحتاج لسيرفر Node.js حقيقي
  },
};

export default nextConfig;