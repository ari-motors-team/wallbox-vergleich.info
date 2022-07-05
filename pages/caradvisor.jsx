import Head from "../components/core/Head";

import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Funnel from "../components/Caradvisor/Funnel";
import Image from "next/image";
import data from "../data/stepsData";
import { useStore } from "../components/store";
export default function caradvisor(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getBrands, SetGetBrands] = useState(props.brands);
  const { state, dispatch } = useStore();

  // console.log("state?.categorys", state?.categorys);
  // console.log("state?.rangeLithiums", state?.rangeLithiums);
  return (
    <div className=" bg-blue-extralight">
      <Head page={props.page} />

      <Funnel getCars={getCars} getBrands={getBrands} />
      <div className="relative flex justify-between 2xl:h-36">
        {/* human image */}
        <div className="absolute bottom-0 right-0 hidden w-44 xl:w-64 2xl:w-96 2xl:right-6 2xl:block">
          <Image
            src="/images/beraterNew.png"
            width={450}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
      <div className="items-center justify-around hidden h-12 bg-green-lighter lg:flex">
        <div className="">
          <p className="w-full text-lg text-white 2xl:text-xl">
            ✔️ über 10 Jahre Erfahrung mit KFZ
          </p>
        </div>
        <div className="">
          <p className="w-full text-lg text-white 2xl:text-xl">
            ✔️ 500+ verkaufte Transporter seit 2019
          </p>
        </div>
        <div className="">
          <p className="w-full text-lg text-white 2xl:text-xl">
            ✔️ unverbindliches Angebot in 24 Stunden
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 px-4 py-8 bg-white xl:px-40 md:flex-row justify-evenly">
        {data.map((item) => (
          <div className="w-full px-4 py-4 mb-4 shadow-dropdown" key={item.id}>
            <div className="block ">
              <Image
                src={item.image}
                width={300}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3 className="pt-2 sm:h-fit xl:text-2xl">{item.title}</h3>
            <p className="pt-2 text-lg xl:pt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/caradvisor");
  let brands = await getContent("brands", context.locale);

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicles,
      posts,
      page,
      brands,
    },
  };
}
