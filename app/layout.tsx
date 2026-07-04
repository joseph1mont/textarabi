import type { Metadata } from "next";
import { Cairo, Tajawal, Amiri, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Fonts initialization
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const isVercel = process.env.IS_VERCEL === "true";

  return {
    metadataBase: new URL("https://textarabi.com"),
    title: "Arabic Text Developer Utilities & Counter | TextArabi",
    description:
      "Advanced text processing tools, code cleaners, and SEO optimization utilities engineered for fast performance and programmatic monetization.",
    robots: isVercel
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        ar: "/ar/",
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${cairo.variable} ${tajawal.variable} ${amiri.variable} bg-slate-50 min-h-screen antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3KFLTY6T7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M3KFLTY6T7');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col text-slate-800 font-sans">
        <Navbar />
        {children}
        <Footer lang="en" />
      </body>
    </html>
  );
}
