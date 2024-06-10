import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
};

export function PostPreview({
    title,
    date,
    excerpt,
    slug,
}: Props) {
    return (
        <div>
            <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CATEGORY</span>
            <h2 className="sm:text-3xl text-2xl font-title font-bold text-white mt-4 mb-4">
                <Link href={`/articles/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h2>
            <p className="leading-relaxed mb-8 font-body">{excerpt}</p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                <a className="font-title text-lg text-indigo-400 inline-flex items-center hover:underline" href={`/articles/${slug}`}>記事を読む
                    <svg className="w-4 h-4 ms-2 rtl:rotate-180 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
                <span className="text-gray-500 font-title mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-gray-800">
                    <DateFormatter dateString={date} />
                </span>
            </div>
        </div>
    );
}