import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import FilterBrandCheckbox from "../FilterBrandCheckbox";
import { useStore } from "../../store";
import { motion, AnimatePresence } from "framer-motion";
import image from "../../../public/images/ETV-IconsVergleichen.png";
import { useState, useEffect } from "react";
const variants = {
  enter: {
    y: -1000,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -1000,
    opacity: 0,
  },
};

// const filterTitles = [
//   "Preis",
//   "Reichweite",
//   "Zuladung",
//   "Hochgeschwindigkeit",
//   "Ladezeit",
//   "Aufbautyp",
// ];

function FilterBrandItemDesktop({ item }) {
  // const item = props.item;
  const { state, dispatch } = useStore();

  /* to render the four ranges */

  return (
    <>
      {/* truncate state */}
      <div
        className="relative z-10 flex items-center w-full bg-white cursor-pointer h-18"
        onClick={() => {
          dispatch({
            type: "truncate",
            data: state?.truncates !== "brands" ? "brands" : "",
          });
        }}
      >
        <div className="flex items-center justify-between flex-1 py-4 bg-white border-b ">
          <div className="flex items-center justify-center pl-8">
            <div className="w-8 h-full">
              <Image
                src={image}
                alt="hersteller logo"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto text-xs lg:text-base">
              <h4 className="font-bold text-blue-darker">Hersteller</h4>
            </div>
          </div>
          <div className="flex">
            {/* for the green ✔️ */}
            <span
              className={
                state.brands.length > 0
                  ? "flex text-green-700 text-xl h-6"
                  : "hidden"
              }
            >
              ✓
            </span>
            <div
              className={
                state?.truncates == item.title
                  ? "flex items-center w-6 mr-5 my-auto transition transform rotate-180 origin-center	"
                  : "flex items-center w-6 mr-5 my-auto transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={25} fill="#030F1C" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {state?.truncates == "brands" && (
          <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.1 }}
            className="flex flex-col ml-8 -z-50"
          >
            {/* RENDERING THE FOUR RANGES */}
            {/* MAKE SPREAd operation with state */}
            <p
              className="pr-4 ml-auto text-sm cursor-pointer "
              onClick={() => {
                dispatch({
                  type: "brand",
                  data: [],
                });
              }}
            >
              alle löschen
            </p>
            {item.map((checkbox, index) => (
              <div
                onClick={() => {
                  dispatch({
                    type: "brand",
                    /*   data: selectedBrands, */
                    data: state?.brands.includes(checkbox.slug)
                      ? [
                          ...state?.brands.filter(
                            (brand) => brand !== checkbox.slug
                          ),
                          checkbox.slug,
                        ]
                      : [...state?.brands, checkbox.slug],
                  });
                }}
                key={index}
                className="flex py-2 mt-4 cursor-pointer last-of-type:pb-4 last-of-type:shadow-sm"
              >
                <FilterBrandCheckbox checkbox={checkbox}></FilterBrandCheckbox>
                <label
                  forhtml={checkbox.title}
                  className="inline-flex items-center pl-5 text-lg text-blue-extra "
                >
                  {checkbox.title}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FilterBrandItemDesktop;
