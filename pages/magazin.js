import Head from "../components/core/Head";
import getContent from "/utils/getContent";

import { useState, useEffect } from "react";
import Blog from "../components/Blog/Blog";

import BlogHeader from "../components/Blog/BlogHeader";
import LinkTile from "../components/Blog/LinkTile";

export default function magazin(props) {
  const [getBlogs, SetGetBlogs] = useState([]);
  useEffect(() => {
    SetGetBlogs(props.blogs);
  }, [props]);
  return (
    <div>
      <Head page={props.page} />

      <div className="hidden lg:block">
        <BlogHeader getBlogs={props.blogs} />
      </div>
      <h1 className="px-4 pt-8 pb-8 text-4xl font-bold text-center text-blue-dark">
        Magazin
      </h1>
      <div className=" lg:hidden">
        <LinkTile getBlogs={getBlogs} />
      </div>

      <div>
        <Blog getBlogs={getBlogs} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);

  let blogs = await getContent("blogs", context.locale);
  const page = pages.find((page) => page.path === "/magazin");
  let brands = await getContent("brands", context.locale);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      brands,
      blogs,
    },
  };
}
