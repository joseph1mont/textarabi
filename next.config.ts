import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // اتركها true كما تحتاجها لـ Hostinger
  images: {
    unoptimized: true,
  },
  // قمنا بإضافة الـ rewrites هنا لمعالجة الشرطة المائلة على سيرفر Vercel الحي
  async rewrites() {
    return [
      {
        source: "/api/tashkeel/",
        destination: "/api/tashkeel",
      },
    ];
  },
};

export default nextConfig;
