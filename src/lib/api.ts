import type { Article } from "@/interfaces/article";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const articlesDirectory = join(process.cwd(), "_articles");

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const tags = Array.isArray(data.tags) ? data.tags : [];

  return { ...data, slug: realSlug, content, tags } as Article;
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
  return articles;
}
