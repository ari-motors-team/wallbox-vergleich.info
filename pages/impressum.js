import getContent from "/utils/getContent";
import Head from "../components/core/Head";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
export default function impressum(props) {
  const [getContent, SetGetContent] = useState(props.context);
  return (
    <div className="flex flex-col justify-between mx-6 py-6 text-center text-sm leading-8 bg-grey-lightest lg:mx-36 lg:pl-16 lg:text-2xl lg:h-screen lg:text-left 2xl:mx-72">
      <Head page={props.page} />
      <MDXRemote {...getContent.impressum} />
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);

  const page = pages.find((page) => page.path === "/impressum");
  const impressum = await serialize(
    page.content.find((content) => content.name === "Impressum").markdown
  );
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      context: { impressum },
      brands,
      blogs,
    },
  };
}
