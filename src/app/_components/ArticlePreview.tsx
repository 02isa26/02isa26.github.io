import ArrowLink from "@/app/_components/ArrowLink";
import DateFormatter from "@/app/_components/DateFormatter";
import { DisplayTags } from "@/app/_components/DisplayTags";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  tags: string[];
};

export function ArticlePreview({ title, date, excerpt, slug, category, tags }: Props) {
  return (
    <div className="mx-4 flex flex-row flex-wrap py-8 md:mx-6 md:flex-nowrap lg:mx-0">
      <div className="mb-0 flex flex-col md:mb-0 md:w-40 lg:w-72">
        <span className="font-title text-lg font-semibold text-white">{category}</span>
        <span className="mt-0.5 font-sub text-base text-gray-400 md:mt-1">
          <DateFormatter dateString={date} />
        </span>
        {tags.length > 0 && <DisplayTags tags={tags} />}
      </div>
      <div className="md:grow">
        <h2 className="mb-2 font-title text-3xl font-bold text-white">
          <Link href={`/blog/articles/${slug}`}>{title}</Link>
        </h2>
        <p className="font-body text-base leading-relaxed text-gray-400">{excerpt}</p>
        <ArrowLink heading="記事を読む" link={`/blog/articles/${slug}`} />
      </div>
    </div>
  );
}
