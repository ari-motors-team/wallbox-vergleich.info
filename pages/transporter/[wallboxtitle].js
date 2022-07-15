import Head from "../../components/core/Head";
import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import TopSlider from "../../components/Sliders/TopSlider";
import Articles from "../../components/DetailsPage/Articles";
import PrintPopUp from "../../components/DetailsPage/PrintPopUp.js";
import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";
import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";
import BasicInfo from "../../components/DetailsPage/BasicInfo";
import PrintPreview from "../../components/core/PrintPreview";

export default function Details(props) {
  /* getCars hook for the slider */
  const [getWallboxes, SetGetWallboxes] = useState(props.wallboxes);
  /* carItem hook for the ONE car that it is displayed */
  const [wallboxItem, SetWallboxItem] = useState(props.wallbox);
  /* for the "TestBericht" part  */
  const [getTestReview, SetTestReview] = useState(props.getTestReview);
  /* for the "Testbericht" part  */
  const [getWallboxesReview, SetWallboxesReview] = useState(
    props.wallboxesreview
  );
  /* for all reviews "Testbericht" part  */
  const [getAllReviews, SetGetAllReviews] = useState(props.wallboxesreviews);
  /* the content for the future related blogs  */
  const [getBlogContext, SetGetBlogContext] = useState(props.relatedBlog);
  /* to make the Page change after clicking next/link */
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  const [getBlogs, SetGetBlogs] = useState(props.blogs);
  useEffect(() => {
    setValueFromUseEffect(props.params.wallboxtitle);
    SetGetWallboxes(props.wallboxes);
    SetWallboxItem(props.wallbox);
    SetGetBlogContext(props.relatedBlog);
    SetTestReview(props.getTestReview);
    SetWallboxesReview(props.carsreview);
    SetGetBlogs(props.blogs);
    SetGetAllReviews(props.carsreviews);
  }, [props]);
  console.log(wallboxItem);
  return (
    <>
      <div className=" print:hidden">
        <Head page={props.vehicle} />
        {/* image and rating section */}
        <div className="2xl:px-40">
          <BasicInfo
            wallboxItem={wallboxItem}
            getTestReview={getTestReview}
            getWallboxesReview={getWallboxesReview}
            getAllReviews={getAllReviews}
          />
          {/* technical details section */}
          <TechnicalDetails wallboxItem={wallboxItem} />
          {/* description and articles section */}
        </div>
        {/*  <Articles
          wallboxItem={wallboxItem}
          getBlogContext={getBlogContext}
          getTestReview={getTestReview}
          getWallboxesReview={getWallboxesReview}
          getAllReviews={getAllReviews}
        />{" "}
        */}
        {/* slider  */}
        {/* <TopSlider
          getWallboxes={getWallboxes}
          getBlogContext={getBlogContext}
        />{" "}
        */}
        {/*sticky popup  */}
        {/*   <PrintPopUp wallboxItem={wallboxItem} />
         */}
      </div>
      <div className="hidden print:block">
        {/*   <PrintPreview
          wallboxItem={wallboxItem}
          getTestReview={getTestReview}
          getWallboxesReview={getWallboxesReview}
        />{" "}
        */}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let wallbox = await getContentBySlug(
    "wallboxes",
    context.params.wallboxtitle,
    context.locale
  );
  let wallboxes = await getContent("wallboxes", context.locale);

  // /*  get the first 4 from this category for the slider */
  wallboxes = Object.entries(wallboxes).map(([key, value]) => {
    return value;
  });
  wallboxes = wallboxes
    .filter((item, index) => item.manufacturer === wallbox.manufacturer)
    .filter((item, index) => item.name !== context.params.wallboxtitle);
  let brands = await getContent("brands", context.locale);

  /* get related reviews*/
  let wallboxesreviews = await getContent("wallboxesreview", context.locale);
  let wallboxesreview = wallboxesreviews?.find(
    (item) => wallbox?.relatedReviews == item.slug
  )
    ? wallboxesreviews.find((item) => wallbox?.relatedReviews == item.slug)
    : null;

  /* catching errors in case there is no wallboxesreview yet */
  let getTestReview = null;

  if (wallboxesreview !== undefined || wallboxesreview !== null) {
    /* serializing the array with mdx */
    // getTestReview = await Promise.all(
    //   wallboxesreview?.content.map((item, index) => {
    //     return serialize(item.content);
    //   })

    // );
    null;
  } else {
    getTestReview = null;
  }

  /* get all blogs for the footer*/
  let blogs = await getContent("blogs", context.locale);
  /* get related blog */
  let relatedBlog = blogs.find(
    (item) =>
      item.slug == wallbox.relatedBlogs ||
      item.slug.includes(wallbox.relatedBlogs)
  )
    ? blogs.find(
        (item) =>
          item.slug == wallbox.relatedBlogs ||
          item.slug.includes(wallbox.relatedBlogs)
      )
    : null;

  if (!wallbox) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      wallbox,
      wallboxes,
      relatedBlog,
      getTestReview,
      wallboxesreview,
      wallboxesreviews,
      params: context.params,
      blogs,
      brands,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("wallboxes", "wallboxtitle", context.locales);

  return { paths, fallback: false };
}
