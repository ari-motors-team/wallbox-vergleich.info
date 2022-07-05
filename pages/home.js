import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import BlogArticles from "../components/Homepage/BlogArticles";
import HeroSectionB from "../components/HeroSection/HeroSectionB";
import TopSlider from "../components/Sliders/TopSlider";
import Funnel from "../components/Caradvisor/Funnel";
import NewsLetter from "../components/Homepage/NewsLetter";
import { useState, useEffect } from "react";
import CompareTool from "../components/repeated/CompareTool";

export default function Home(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  const [getMarkdownContext, SetGetMarkdownContext] = useState(props.context);
  const [getBrands, SetGetBrands] = useState(props.brands);
  useEffect(() => {
    SetGetBrands(props.brands);
    SetGetCars(props.vehicles);
    SetGetContent(props.page);
    SetGetMarkdownContext(props.context);
  }, [props]);
  return (
    <>
      <Head page={props.page} />
      <div className="mt-8 lg:mt-0">
        <CompareTool />
      </div>
      <HeroSectionB
        getContent={props.page}
        getMarkdownContext={props.context}
        getBrands={props.brands}
      />
      <div className="mb-10">
        <TopSlider getCars={props.vehicles} getContent={props.page} />
      </div>
      <BlogArticles getMarkdownContext={props.context} />
      <NewsLetter getMarkdownContext={props.context} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);
  const page = pages.find((page) => page.path === "/home");
  /* mdxs for the homepage articles */
  const header = await serialize(
    page.content.find((content) => content.name === "header").markdown
  );
  const eAutoAdvisor = await serialize(
    page.content.find((content) => content.name === "eAutoAdvisor").markdown
  );
  const substities = await serialize(
    page.content.find((content) => content.name === "substities").markdown
  );
  const newsletter = await serialize(
    page.content.find((content) => content.name === "newsletter").markdown
  );

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      context: { header, eAutoAdvisor, substities, newsletter },
      page,
      vehicles,
      blogs,
      brands,
    },
  };
}
