import React from "react";
import CompareTool from "../components/repeated/CompareTool";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import { useState, useEffect } from "react";

const testPage = (props) => {
  const [getContent, SetGetContent] = useState(props.page);
  useEffect(() => {
    SetGetContent(props.page);
  }, [props]);
  return (
    <div>
      <CompareTool getContent={getContent} />
    </div>
  );
};

export default testPage;

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);
  const page = pages.find((page) => page.path === "/");
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
