import type { Metadata } from "next";
import { Cairo, Tajawal, Amiri } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script"; // استيراد مكون السكربت الخاص بـ Next.js
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "محرر ومصحح الخطوط العربية الاحترافي",
  description: "أداة ذكية متكاملة لمعاينة وتعديل الخطوط العربية، إزالة التشكيل والحركات، وتصحيح نصوص برامج التصميم المعكوسة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`${cairo.variable} ${tajawal.variable} ${amiri.variable}`}
    >
      <head>
        {/* Google Analytics (gtag.js) باستخدام الاستراتيجية المثالية للأداء */}
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
      
      <body className="bg-slate-50 min-h-screen flex flex-col font-cairo text-slate-800">
        
        {/* شريط التنقل العلوي الموحد للموقع بالكامل */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-4">
          <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
            
            {/* الشعار المطور - بحجم أكبر، خلفية بيضاء، وأيقونة ملونة كاملة */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 flex items-center justify-center bg-white border border-slate-200/80 rounded-xl shadow-xs group-hover:border-blue-500/50 group-hover:shadow-sm transition-all overflow-hidden shrink-0">
                <Image 
                  src="/icon.svg" 
                  alt="شعار منصة تيكست عربي" 
                  width={28} 
                  height={28} 
                  priority
                  className="w-7 h-7 object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-xl font-black text-slate-900 font-tajawal tracking-tight">تيكست عربي</span>
            </Link>

            {/* القائمة السريعة للزوار ومراجعي أدسينس وعناكب السيو */}
            <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">الرئيسية</Link>
              
              {/* زر المدونة الرئيسي - يوجه لصفحة تضم الـ 20 مقالاً كاملة */}
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                المدونة الشاملة
              </Link>
              
              <Link href="/contact" className="hover:text-blue-600 transition-colors">اتصل بنا</Link>
            </nav>
          </div>
        </header>

        {/* الحاوية الديناميكية لمحتوى الصفحات */}
        <main className="w-full flex-grow py-12 md:py-16">
          {children}
        </main>

        {/* الفوتر القانوني والتقني الموحد */}
        <footer className="w-full bg-white border-t border-slate-200 py-8 text-center">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500">
            <div className="font-medium">
              &copy; {new Date().getFullYear()} منصة تيكست عربي. جميع الحقوق محفوظة برمجياً.
            </div>
            
            {/* روابط التنقل المجمعة للمراجعة المالية والسيو المتقدم */}
            <div className="flex flex-wrap items-center justify-center gap-6 font-tajawal font-medium">
              <Link href="/fix-arabic-photoshop" className="hover:text-blue-600 transition-colors">مصحح فوتوشوب</Link>
              <Link href="/word-character-counter-guide" className="hover:text-blue-600 transition-colors">دليل عداد الكلمات</Link>
              <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">سياسة الخصوصية</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">شروط الاستخدام</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">اتصل بنا</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}