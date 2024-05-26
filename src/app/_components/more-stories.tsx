import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
    posts: Post[];
};

export function MoreStories({ posts }: Props) {
    return (
        <div className="flex flex-wrap -m-12">
            {posts.map((post, index) => (
                <div className={`p-12 md:w-1/2 ${index % 2 !== 0 ? 'justify-end' : ''}`} key={post.slug}>
                    <PostPreview
                        title={post.title}
                        date={post.date}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                </div>
                ))}
            </div>
    );
}