import Head from "../../../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Blog from "../../../components/Blog/Blog";
import BlogHeader from "../../../components/Blog/BlogHeader";
import LinkTile from "../../../components/Blog/LinkTile";

export default function news(props) {
  const [getBlogs, SetGetBlogs] = useState(
    props.blogs.filter((item) => item.category === "news")
  );

  useEffect(() => {
    SetGetBlogs(props.blogs.filter((item) => item.category === "news"));
  }, [props]);
  return (
    <>
      <Head page={props.page} />
      <div className="hidden lg:block">
        <BlogHeader getBlogs={getBlogs} />
      </div>
      <div className="lg:hidden">
        <LinkTile getBlogs={getBlogs} />
      </div>
      <Blog getBlogs={getBlogs} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/magazin");
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      posts,
      vehicles,
      blogs,

      brands,
    },
  };
}
