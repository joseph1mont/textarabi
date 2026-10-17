export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  targetKeyword: string;
  targetTool: string;
  lang: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  content: string;
}
