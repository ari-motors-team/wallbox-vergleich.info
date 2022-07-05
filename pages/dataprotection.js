import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
export default function dataprotection(props) {
  const [getContent, SetGetContent] = useState(props.context);
  return (
    <>
      <Head page={props.page} />

      <div className="flex flex-col justify-between px-4 py-6 mx-2 text-sm leading-8 text-center bg-grey-lightest lg:mx-36 lg:pl-16 lg:text-2xl lg:text-left 2xl:mx-72 lineBreakClass">
        <MDXRemote {...getContent.datenschutzerklarung} />
      </div>
      <div className="flex flex-col justify-between px-4 py-6 mx-2 text-sm leading-8 text-center bg-grey-lightest lg:mx-36 lg:pl-16 lg:text-2xl lg:text-left 2xl:mx-72 lineBreakClass">
        <MDXRemote {...getContent.alles} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);

  const page = pages.find((page) => page.path === "/dataprotection");
  const datenschutzerklarung = await serialize(
    page.content.find((content) => content.name === "Datenschutzerklärung")
      .markdown
  );

  const alles = await serialize(
    page.content.find((content) => content.name === "alles").markdown
  );
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      context: { datenschutzerklarung, alles },
      blogs,
      brands,
    },
  };
}
