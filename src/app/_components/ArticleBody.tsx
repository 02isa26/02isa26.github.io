import styles from "@/app/_styles/markdown-styles.module.css";

type Props = {
  content: string;
};

export function ArticleBody({ content }: Props) {
  return (
    <div className="max-w-5xl font-body md:text-left">
      <div className={styles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
