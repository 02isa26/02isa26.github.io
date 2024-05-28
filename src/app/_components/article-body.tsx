import markdownStyles from "./markdown-styles.module.css";

type Props = {
    content: string;
};

export function PostBody({ content }: Props) {
    return (
        <div className="max-w-5xl md:text-left font-body">
            <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
