import Head from "../../components/core/Head";
import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import TopSlider from "../../components/Sliders/TopSlider";
import getSlugs from "/utils/getSlugs";
import BlogPost from "../../components/Blog/BlogPost";

export default function Blogs(props) {
  /* getBlogContext hook for the ONE car that it is displayed */
  const [relatedVehicles, SetRelatedVehicles] = useState(props.vehicles);
  const [getBlogContext, SetGetBlogContext] = useState(props.blog);
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setValueFromUseEffect(props.params.blogtitle);
    SetRelatedVehicles(props.vehicles);
    SetGetBlogContext(props.blog);
  }, [props]);

  return (
    <>
      <Head page={props.blog} />

      <BlogPost getBlogContext={getBlogContext} />

      {/* slider  */}
      {/* <TopSlider getCars={relatedVehicles} /> */}
    </>
  );
}

export async function getStaticProps(context) {
  let blog = await getContentBySlug(
    "blogs",
    context.params.blogtitle,
    context.locale
  );

  let vehicles = await getContent("vehicles", context.locale);

  /*  get the cars from this category for the slider */
  vehicles = Object.entries(vehicles).map(([key, value]) => {
    return value;
  });

  vehicles = vehicles.filter(
    (item, index) =>
      item.category ===
      vehicles.find((item) => item.name === blog.slug)?.category
  );

  /* get all blogs*/
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);
  let brands = await getContent("brands", context.locale);

  return {
    props: {
      vehicles,
      blog,
      blogs,
      params: context.params,
      carsreviews,
      brands,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("blogs", "blogtitle", context.locales);

  return { paths, fallback: false };
}
