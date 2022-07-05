import Image from "next/image";
import { useState } from "react";
import { useStore } from "../../components/store";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import CarBrandsLogos from "../repeated/CarBrandsLogos";
import OptionItem from "./OptionItem";
import styles from "../HeroSection/HeroSection.module.css";
import CompareTool from "../repeated/CompareTool";

//import filtersData from "../filtersData.json";
//
const HeroSection = ({ getContent, getMarkdownContext, getBrands }) => {
  const { state, dispatch } = useStore();
  // console.log(getContent, "from HeroSection");
  const details = [
    {
      category: "Price",
      options: [
        {
          id: "1",
          name: "1-10000 €",
          value: "0-10000 ",
        },
        {
          id: "2",
          name: "10001-20000 €",
          value: "10001-20000",
        },
        {
          id: "3",
          name: "20001-40000 €",
          value: "20001",
        },
        {
          id: "4",
          name: "40001-80000 €",
          value: "40001-80000",
        },
      ],
    },

    {
      category: "Reichweite",
      options: [
        {
          id: "1",
          name: "ab 50 km ",
          value: "50",
        },
        {
          id: "2",
          name: "ab 100km",
          value: "100",
        },
        {
          id: "3",
          name: "ab 150km",
          value: "150",
        },
        {
          id: "4",
          name: "ab 200km",
          value: "200",
        },
      ],
    },

    {
      category: "Nutzlast",
      options: [
        {
          id: "1",
          name: "ab 100kg",
          value: "100",
        },
        {
          id: "2",
          name: "ab 250kg",
          value: "250",
        },
        {
          id: "3",
          name: "ab 450kg",
          value: "450",
        },
        {
          id: "4",
          name: "ab 500kg",
          value: "500",
        },
      ],
    },
  ];
  const [choosePrice, setChoosePrice] = useState(details[0].options[0].value);
  const [chooseRange, setChooseRange] = useState(details[1].options[0].value);
  const [chooseWeight, setChooseWeight] = useState(details[2].options[0].value);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute hidden w-full lg:block h-[400px] forz border-black-darkest ">
        <div className="w-full text-right opacity-20 ">
          <Image
            src="/images/main.jpeg"
            width={1000}
            height={400}
            alt="Kleintransporter"
            objectFit="contain"
            className=""
          />
        </div>
      </div>
      <div className="m-4 mt-0 hero-section-container lg:w-3/4 lg:m-auto">
        <div className="relative flex justify-center flex-1 main-heading-container lg:text-xl lg:h-[350px]">
          {/* IMAGE */}
          <div className="relative items-center hidden pl-4 pr-8 w-fit sm:flex">
            <Image
              alt="medal"
              className=""
              src="/images/siegel2.png"
              width={250}
              height={250}
              objectFit="contain"
            />
          </div>
          {/* TITLE AND DESC */}
          <div className="px-2 py-2 pb-2 mb-10 main-heading-text lg:flex lg:flex-col lg:justify-evenly sm:py-10 md:pb-0 xs:px-2 sm:px-0">
            <h1 className="pt-4 pb-4 text-2xl text-center sm:text-left sm:text-3xl xl:text-4xl">
              {getContent.title}
            </h1>
            <div
              className={`${styles.mainHeading} "pb-4 text-xl text-grey-darker sm:text-2xl lg:text-3xl "`}
            >
              <MDXRemote {...getMarkdownContext.header} />
            </div>

            <p className="hidden pt-4 text-sm font-bold text-left text-blue-extra xl:text-2xl sm:block">
              <span className="inline-block text-xl xl:text-2xl xl:pb-10">
                <span className="mr-2 text-[#6C6BB3] text-xl ">✔</span>
                unabhängig
              </span>
              <span className="pl-8 text-xl xl:text-2xl">
                <span className="mr-2 text-[#6C6BB3] text-xl">✔</span> schnell
              </span>
              <span className="pl-8 text-xl xl:text-2xl">
                <span className="mr-2 text-[#6C6BB3] text-xl">✔</span> immer
                aktuell
              </span>
            </p>
          </div>
        </div>
        {/* COMPARE TOOL */}
        <>
          <CompareTool getContent={getContent} />
        </>
        {/* <div className="relative pt-5 pb-4 border rounded-md lg:flex lg:justify-between lg:items-center bg-yellow-light lg:h-28 border-blue-dark ">
          <div className="mx-2 comaprison-input-container lg:items-center lg:flex lg:flex-row lg:justify-evenly lg:flex-1 ">
            <div className="h-14 lg:w-68  w-full pt-2 shadow-angelos1 text-base rounded-sm bg-white lg:w-[14vw]">
              <label className="flex flex-row justify-between px-2 text-left ">
                {getContent.content[1].markdown.split(", ")[0]}
                <div className="relative top-6">▼</div>
              </label>
              <div className="m-1 ">
                <select
                  className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark "
                  id="rangeLithium"
                  onChange={(e) => {
                    setChooseRange(e.target.value);
                  }}
                >
                  <OptionItem details={details[1].options} />
                </select>
              </div>
            </div>
            <div className="h-14 lg:w-68 w-full my-4 pt-2 shadow-angelos1 text-base rounded-sm bg-white lg:w-[14vw]	tracking-wide">
              <label className="flex flex-row justify-between px-2 text-left">
                {getContent.content[1].markdown.split(", ")[1]}
                <div className="relative top-6">▼</div>
              </label>
              <div className="m-1 ">
                <select
                  className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark "
                  id="price"
                  onChange={(e) => {
                    setChoosePrice(e.target.value);
                  }}
                >
                  <OptionItem details={details[0].options} />
                </select>
              </div>
            </div>

            <div className="h-14 lg:w-[14vw] w-full my-4 pt-2 shadow-angelos1 text-base rounded-sm bg-white ">
              <label className="flex flex-row justify-between px-2 text-left">
                {getContent.content[1].markdown.split(", ")[2]}
                <div className="relative top-6">▼</div>
              </label>

              <div className="m-1 ">
                <select
                  className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark"
                  id="rangeLithium"
                  onChange={(e) => {
                    setChooseWeight(e.target.value);
                  }}
                >
                  <OptionItem details={details[2].options} />
                </select>
              </div>
            </div>

            <div className="flex lg:justify-around justify-between items-start lg:items-center flex-wrap w-full lg:w-[14vw]">
              <Link href="/comparePage">
                <button
                  className="w-full px-2 text-sm font-bold text-white transition rounded-lg bg-blue-dark hover:bg-blue-light h-14"
                  onClick={() => {
                    dispatch({
                      type: "price",
                      data: [
                        {
                          min: Number(choosePrice.split("-")[0]),
                          max: Number(choosePrice.split("-")[1]),
                        },
                      ],
                    });
                    dispatch({
                      type: "rangeLithium",
                      data: [
                        {
                          min: Number(chooseRange),
                          max: 100000,
                        },
                      ],
                    });
                    dispatch({
                      type: "loadingWeight",
                      data: [
                        {
                          min: Number(chooseWeight),
                          max: 100000,
                        },
                      ],
                    });
                  }}
                >
                  <a className="py-10 text-base xl:text-lg">
                    Jetzt vergleichen
                  </a>
                </button>
              </Link>
            </div>
          </div>
        </div> */}

        <CarBrandsLogos getBrands={getBrands} />
      </div>
    </div>
  );
};
export default HeroSection;
