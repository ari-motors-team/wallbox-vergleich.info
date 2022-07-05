import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
export default function termsofservice(props) {
  const [getContent, SetGetContent] = useState(props.context);

  useEffect(() => {
    SetGetContent(props.context);
  }, [props]);
  return (
    <div className="flex flex-col flex-wrap justify-between px-4 py-6 mx-2 text-sm leading-8 text-center bg-grey-lightest lg:mx-36 lg:pl-16 lg:text-2xl lg:text-left 2xl:mx-72">
      <Head page={props.page} />
      <MDXRemote {...getContent.termsofservice} />
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);

  const page = pages.find((page) => page.path === "/termsofservice");
  const termsofservice = await serialize(
    page.content.find(
      (content) => content.name === "allgemeine Geschäftsbedingungen"
    ).markdown
  );

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      context: { termsofservice },
      blogs,
      brands,
    },
  };
}
