import { promises as fs } from "fs";
import path from "path";

export default async function getSlugs(contentType, key, locales) {
  try {
    let paths = [];
    for (let locale of locales) {
      const postsDir = path.join(
        process.cwd(),
        `/content/${contentType}/${locale}/`
      );
      const localeFilenames = await fs.readdir(postsDir);
      const localePaths = localeFilenames.map(async (filename) => {
        filename = filename.replace(".md", "");
        return {
          params: { [key]: filename },
          locale,
        };
      });
      paths = [...paths, ...localePaths];
    }

    return await Promise.all(paths);
  } catch (err) {
    return err;
  }
}
