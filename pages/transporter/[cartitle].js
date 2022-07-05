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
  const [getCars, SetGetCars] = useState(props.vehicles);
  /* carItem hook for the ONE car that it is displayed */
  const [carItem, SetCarItem] = useState(props.vehicle);
  /* for the "TestBericht" part  */
  const [getTestReview, SetTestReview] = useState(props.getTestReview);
  /* for the "Testbericht" part  */
  const [getCarsReview, SetCarsReview] = useState(props.carsreview);
  /* for all reviews "Testbericht" part  */
  const [getAllReviews, SetGetAllReviews] = useState(props.carsreviews);
  /* the content for the future related blogs  */
  const [getBlogContext, SetGetBlogContext] = useState(props.relatedBlog);
  /* to make the Page change after clicking next/link */
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  const [getBlogs, SetGetBlogs] = useState(props.blogs);
  useEffect(() => {
    setValueFromUseEffect(props.params.cartitle);
    SetGetCars(props.vehicles);
    SetCarItem(props.vehicle);
    SetGetBlogContext(props.relatedBlog);
    SetTestReview(props.getTestReview);
    SetCarsReview(props.carsreview);
    SetGetBlogs(props.blogs);
    SetGetAllReviews(props.carsreviews);
  }, [props]);
  return (
    <>
      <div className=" print:hidden">
        <Head page={props.vehicle} />
        {/* image and rating section */}
        <div className="2xl:px-40">
          <BasicInfo
            carItem={carItem}
            getTestReview={getTestReview}
            getCarsReview={getCarsReview}
            getAllReviews={getAllReviews}
          />
          {/* technical details section */}
          <TechnicalDetails carItem={carItem} />
          {/* description and articles section */}
        </div>

        <Articles
          carItem={carItem}
          getBlogContext={getBlogContext}
          getTestReview={getTestReview}
          getCarsReview={getCarsReview}
          getAllReviews={getAllReviews}
        />
        {/* slider  */}
        <TopSlider getCars={getCars} getBlogContext={getBlogContext} />
        {/*sticky popup  */}
        <PrintPopUp carItem={carItem} />
      </div>
      <div className="hidden print:block">
        <PrintPreview
          carItem={carItem}
          getTestReview={getTestReview}
          getCarsReview={getCarsReview}
        />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let vehicle = await getContentBySlug(
    "vehicles",
    context.params.cartitle,
    context.locale
  );
  let vehicles = await getContent("vehicles", context.locale);

  /*  get the first 4 from this category for the slider */
  vehicles = Object.entries(vehicles).map(([key, value]) => {
    return value;
  });
  vehicles = vehicles
    .filter((item, index) => item.category === vehicle.category)
    .filter((item, index) => item.name !== context.params.cartitle);
  let brands = await getContent("brands", context.locale);

  /* get related reviews*/
  let carsreviews = await getContent("carsreview", context.locale);
  let carsreview = carsreviews?.find(
    (item) => vehicle?.relatedReviews == item.slug
  )
    ? carsreviews.find((item) => vehicle?.relatedReviews == item.slug)
    : null;

  /* catching errors in case there is no carsreview yet */
  let getTestReview = null;

  if (carsreview !== undefined && carsreview !== null) {
    /* serializing the array with mdx */
    getTestReview = await Promise.all(
      carsreview?.content.map((item, index) => {
        return serialize(item.content);
      })
    );
  } else {
    getTestReview = null;
  }

  /* get all blogs for the footer*/
  let blogs = await getContent("blogs", context.locale);
  /* get related blog */
  let relatedBlog = blogs.find(
    (item) =>
      item.slug == vehicle.relatedBlogs ||
      item.slug.includes(vehicle.relatedBlogs)
  )
    ? blogs.find(
        (item) =>
          item.slug == vehicle.relatedBlogs ||
          item.slug.includes(vehicle.relatedBlogs)
      )
    : null;

  if (!vehicle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicle,
      vehicles,
      relatedBlog,
      getTestReview,
      carsreview,
      carsreviews,
      params: context.params,
      blogs,
      brands,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("vehicles", "cartitle", context.locales);

  return { paths, fallback: false };
}
