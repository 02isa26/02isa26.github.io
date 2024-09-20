import { ArticlePreview } from "@/app/_components/ArticlePreview";
import type { Article } from "@/interfaces/article";

type Props = {
  articles: Article[];
};

export function GetArticles({ articles }: Props) {
  return (
    <div className="container mx-auto mt-4 flex flex-col flex-wrap divide-y-2 divide-gray-800 lg:mt-20">
      {articles.map((article, index) => (
        <div className={`${index % 2 !== 0 ? "" : ""}`} key={article.slug}>
          <ArticlePreview
            title={article.title}
            date={article.date}
            slug={article.slug}
            excerpt={article.excerpt}
            category={article.category}
            tags={article.tags}
          />
        </div>
      ))}
    </div>
  );
}
