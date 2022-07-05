import { useStore } from "../../components/store";
import Head from "../../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";

import Image from "next/image";
import Link from "next/link";
import FahrzeugeResultList from "../../components/FahrzeugeResultLIst/FahrzeugeResultList";
export default function fahrzeuge(props) {
  const { state, dispatch } = useStore();
  const [sortedCars, SetSortedCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  const [getCarsReview, SetCarsReview] = useState(props.carsreviews);
  const [getMarkdownContext, SetGetMarkdownContext] = useState(props.context);
  const [getBrands, SetGetBrands] = useState(props.brands);

  /* ᴄᴀʀs ranking ғɪʟᴛᴇʀ */
  useEffect(() => {
    // if (!props.page || !dispatch) return;

    // dispatch({
    //   type: "compareContent",
    //   data: props.page.content,
    // });

    SetSortedCars(
      props.vehicles.sort((a, b) => a.rating.value - b.rating.value)
    );

    SetCarsReview(props.carsreviews);
    SetGetContent(props.page);
    SetGetMarkdownContext(props.context);
    SetGetBrands(props.brands);
  }, [props, dispatch]);

  return (
    <div className="px-4 2xl:px-64">
      <Head page={props.page} />
      <div className="leading-loose">
        <h1 className="flex justify-center pt-8 pb-4 text-2xl text-black xs:text-center lg:text-4xl xl:text-5xl xl:pt-12">
          Elektro-Transporter – {sortedCars.length} {getContent.title}
        </h1>

        <div className="w-3/5 mx-auto my-4 ">
          <Image
            src="/images/test2.svg"
            alt={getContent.title}
            width={150}
            height={30}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="">
          <div className="py-4 text-xl ">
            {getContent.description}
            <Link href="/caradvisor">
              <a className="relative font-bold text-blue-dark">
                Probieren Sie es aus!
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          <FahrzeugeResultList
            sortedCars={sortedCars}
            getCarsReview={getCarsReview}
            getContent={getContent}
            getMarkdownContext={getMarkdownContext}
            getBrands={getBrands}
          />
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);
  let brands = await getContent("brands", context.locale);

  const page = pages.find(
    (page) =>
      page.path ===
      "/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich"
  );

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      vehicles,
      posts,
      blogs,
      brands,
      carsreviews,
    },
  };
}
