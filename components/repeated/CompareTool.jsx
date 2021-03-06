import React from "react";
import { useState, useEffect } from "react";
import { useStore } from "../../components/store";
import Link from "next/link";
import { useRouter } from "next/router";

import OptionItem from "../HeroSection/OptionItem";

const details = [
  {
    category: "Price",
    options: [
      {
        id: "1",
        title: "1-500 €",
        value: "0-500 ",
      },
      {
        id: "2",
        title: "501-1000 €",
        value: "501-1000",
      },
      {
        id: "3",
        title: "1001-1500 €",
        value: "1001-1500",
      },
      {
        id: "4",
        title: "1501-2000 €",
        value: "1501-2000",
      },
    ],
  },

  {
    category: "Ladeleistung (kW)",
    options: [
      {
        id: "1",
        title: "11 KW ",
        value: "11",
      },
      {
        id: "2",
        title: "22 KW",
        value: "22",
      },
      {
        id: "3",
        title: "11 & 22 KW",
        value: "11 & 22",
      },
    ],
  },
];
const CompareTool = ({ getBrands }) => {
  const router = useRouter();
  const { state, dispatch } = useStore();
  const [choosePrice, setChoosePrice] = useState(details[0].options[0].value);
  const [choosePower, setChoosePower] = useState(details[1].options[0].value);
  const [chooseBrand, setChooseBrand] = useState(getBrands[0]);
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
              Ladeleistung
              <div className="relative top-5">▼</div>
            </label>
            <div className="m-1 ">
              <select
                className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark "
                id="rangeLithium"
                onChange={(e) => {
                  setChoosePower(e.target.value);
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
              Hersteller
              <div className="relative top-5">▼</div>
            </label>

            <div className="m-1 ">
              <select
                className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark"
                id="rangeLithium"
                onChange={(e) => {
                  setChooseBrand(e.target.value);
                }}
              >
                <OptionItem details={getBrands} />
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
                    type: "power",
                    data: [
                      {
                        min: choosePower,
                        max: 100000,
                      },
                    ],
                  });
                  dispatch({
                    type: "brand",
                    data: [chooseBrand.title],
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
