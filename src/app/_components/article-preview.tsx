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
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
                <Link href={`/articles/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h2>
            <p className="leading-relaxed mb-8">{excerpt}</p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                <a className="text-indigo-400 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-gray-800">
                    <DateFormatter dateString={date} />
                </span>
            </div>
        </div>
    );
}