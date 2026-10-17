// file path: next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Required for static hosting (Hostinger) directory routing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
