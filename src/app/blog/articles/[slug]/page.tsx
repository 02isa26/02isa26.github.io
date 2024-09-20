import { ArticleBody } from "@/app/_components/ArticleBody";
import { ArticleHeader } from "@/app/_components/ArticleHeader";
import { getAllArticles, getArticleBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Article({ params }: Params) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");

  return (
    <main>
      <section className="overflow-hidden bg-gray-900 font-body text-gray-200">
        <div className="container mx-auto my-10 max-w-screen-lg rounded-xl bg-gray-800 px-5 py-20 sm:px-12">
          <article>
            <ArticleHeader title={article.title} date={article.date} />
            <ArticleBody content={content} />
          </article>
        </div>
      </section>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const title = `${article.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
