import React from "react";
import { useState, useEffect } from "react";
import { useStore } from "../../components/store";
import Link from "next/link";
import { useRouter } from "next/router";

import OptionItem from "../HeroSection/OptionItem";
import styles from "../HeroSection/HeroSection.module.css";

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
const CompareTool = () => {
  const router = useRouter();
  const { state, dispatch } = useStore();

  const [choosePrice, setChoosePrice] = useState(details[0].options[0].value);
  const [chooseRange, setChooseRange] = useState(details[1].options[0].value);
  const [chooseWeight, setChooseWeight] = useState(details[2].options[0].value);
  // console.log(state?.prices);
  return (
    <div>
      <div
        className={
          router.pathname == "/"
            ? "relative pt-5 pb-4 border rounded-md lg:flex lg:justify-between lg:items-center bg-yellow-light lg:h-28 border-blue-dark"
            : "relative pt-5 pb-4 border rounded-md lg:rounded-none lg:flex lg:justify-between lg:items-center bg-yellow-light lg:h-20 border-blue-dark mx-4 lg:mx-0"
        }
      >
        {/* comaprison-input-container */}
        <div className="mx-2 comaprison-input-container lg:items-center lg:flex lg:flex-row lg:justify-evenly lg:flex-1 ">
          {/* PRICE AND RANGE */}

          <div className="h-14 lg:w-68  w-full pt-2 shadow-angelos1 text-base rounded-sm bg-white lg:w-[14vw]">
            <label className="flex flex-row justify-between px-2 text-left ">
              Reichweite
              <div className="relative top-5">▼</div>
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
              Preis
              <div className="relative top-5">▼</div>
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

          {/* Weight and button */}

          {/* weight */}
          <div className="h-14 lg:w-[14vw] w-full my-4 pt-2 shadow-angelos1 text-base rounded-sm bg-white ">
            <label className="flex flex-row justify-between px-2 text-left">
              Nutzlast
              <div className="relative top-5">▼</div>
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
          {/* BUTTON */}
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
                <a className="py-10 text-base xl:text-lg">Jetzt vergleichen</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareTool;
