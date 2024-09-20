import rehypeSectionize from "@hbsnow/rehype-sectionize";
import rehypeShiki from "@shikijs/rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // markdown -> mdast
    .use(remarkRehype) // mdast -> hast
    .use(rehypeSectionize, {
      properties: { className: null },
      enableRootSection: false,
      rankPropertyName: "heading-rank",
    })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeShiki, { theme: "solarized-dark" })
    .use(rehypeStringify) // hast -> html
    .process(markdown);
  return result.toString();
}
