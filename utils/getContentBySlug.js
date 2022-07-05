import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

import matter from "gray-matter";

export default async function getContentBySlug(name, slug, locale) {
  try {
    const dir = path.join(process.cwd(), `/content/${name}/${locale}/`);
    const source = await fs.readFile(path.join(dir, `${slug}.md`));
    let mdxSource = null;
    const { content, data } = matter(source);
    if (content) {
      mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        scope: data,
      });
    }
    const markdown = {
      source: mdxSource,
      ...data,
    };

    return markdown;
  } catch (err) {
    return err;
  }
}
