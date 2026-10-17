// file path: components/BlogSidebar.tsx
import Link from "next/link";
import { articles } from "@/data/articles";
import { Article } from "@/data/types";

interface BlogSidebarProps {
  currentSlug?: string;
  lang: "en" | "ar";
}

// Top GSC performing article slugs (clean base slugs)
const TOP_GSC_SLUGS: Record<"en" | "ar", string[]> = {
  ar: [
    "fix-photoshop-arabic-text",
    "fix-disconnected-letters",
    "fix-reversed-arabic-text-online-instant-copy-paste",
    "tashkeel-keypad-guide",
  ],
  en: [
    "fix-reversed-arabic-text-online-instant-copy-paste",
    "fix-photoshop-arabic-text",
    "fix-arabic-text-photoshop-figma-python",
    "fix-disconnected-letters",
  ],
};

// Helper function to normalize slugs
function normalizeSlug(slug: string = ""): string {
  return slug
    .replace(/^(\/)?(ar\/|en\/)?(blog\/)?/, "")
    .replace(/\/$/, "")
    .trim();
}

export default function BlogSidebar({ currentSlug, lang }: BlogSidebarProps) {
  const targetSlugs = TOP_GSC_SLUGS[lang];
  const cleanCurrentSlug = normalizeSlug(currentSlug);

  const popularPosts = targetSlugs
    .map((target) =>
      articles.find((art) => {
        const cleanArtSlug = normalizeSlug(art.slug);
        const matchesLang = art.lang === lang;
        return cleanArtSlug === target && matchesLang;
      }),
    )
    .filter(
      (art): art is Article =>
        Boolean(art) && normalizeSlug(art?.slug) !== cleanCurrentSlug,
    )
    .slice(0, 4);

  const title = lang === "ar" ? "المقالات الأكثر طلباً" : "Most Popular Posts";

  if (popularPosts.length === 0) {
    return null;
  }

  return (
    <aside className="space-y-8">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
          {title}
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => {
            const cleanPostSlug = normalizeSlug(post.slug);
            const href =
              lang === "ar"
                ? `/ar/blog/${cleanPostSlug}`
                : `/blog/${cleanPostSlug}`;

            // Double assertion via 'unknown' fixes ts(2352)
            const rawRecord = post as unknown as Record<string, string>;
            const displayDate = post.publishedAt || rawRecord.date || "";

            return (
              <article key={post.slug} className="group">
                <Link
                  href={href}
                  className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                {displayDate ? (
                  <p className="text-xs text-slate-400 mt-1">{displayDate}</p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
