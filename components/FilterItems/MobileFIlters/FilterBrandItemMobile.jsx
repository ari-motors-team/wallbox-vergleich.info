import Image from "next/image";
import { useStore } from "../../store";
import { MdKeyboardArrowDown } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";
import image from "../../../public/images/ETV-IconsVergleichen.png";

import FilterCheckboxMobile from "./FilterCheckboxMobile";
import FilterBrandCheckboxMobile from "./FilterBrandCheckboxMobile";

const variants = {
  enter: {
    height: 0,
    opacity: 0,
  },
  center: {
    height: "100%",
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

function FilterBrandItemMobile({ item }) {
  const { state, dispatch } = useStore();
  /* to render the four ranges */
  return (
    <div className="bg-white border-b">
      <div
        className="bg-white cursor-pointer "
        onClick={() => {
          dispatch({
            type: "truncate",
            data: state?.truncates !== item.title ? item.title : "",
          });
        }}
      >
        <div className="flex flex-row justify-between flex-1 py-4 bg-white border-b">
          <div className="flex flex-row ">
            <div className="w-6 h-6 ml-4 ">
              <Image
                src={image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className="font-bold text-blue-darker">Hersteller</h4>
            </div>
          </div>
          <div className="flex flex-row">
            <span
              className={
                state.brands.length > 0
                  ? "flex text-green-700 text-xl h-6 "
                  : "hidden"
              }
            >
              ✓
            </span>
            <div
              className={
                state?.truncates == item.title
                  ? "flex items-center w-6 mr-6 my-auto transition transform rotate-180 origin-center	"
                  : "flex items-center w-6 mr-6 my-auto transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          state?.truncates == item.title
            ? "relative flex flex-col ml-4 mt-2 mb-2"
            : "hidden"
        }
      >
        {/* RENDERING THE FOUR RANGES */}
        <AnimatePresence initial={false}>
          {state?.truncates == item.title && (
            <motion.div
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "Inertia", duration: 0.1 }}
            >
              <p
                className="absolute right-0 w-24 pr-4 text-sm cursor-pointer "
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
                  className="flex flex-row py-2 mt-1 "
                >
                  <FilterBrandCheckboxMobile
                    checkbox={checkbox}
                  ></FilterBrandCheckboxMobile>
                  <label
                    forhtml={checkbox.title}
                    className="inline-flex items-center pl-5 text-lg tracking-wide cursor-pointer text-blue-extra"
                  >
                    {checkbox.title}
                  </label>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FilterBrandItemMobile;
