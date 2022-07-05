import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../store";
import filterImage from "../../../public/images/filter-icon.png";
import { filtersData, priceFilterData } from "../../../data/filtersData";
import FilterItemMobile from "./FilterItemMobile";
import Sort from "../../SortItems/Sort";

import FilterBrandItemMobile from "./FilterBrandItemMobile";
import PriceInputs from "../PriceInputs";

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

function FiltersMobile({ getBrands }) {
  /* UseStates */
  const [userInputMinPrice, SetUserInputMinPrice] = useState(0);
  const [userInputMaxPrice, SetUserInputMaxPrice] = useState(99000);
  const { state, dispatch } = useStore();
  const [clicked, setClicked] = useState(false);

  /* handling the min and max input  */
  const changeHandleMin = (e) => {
    SetUserInputMinPrice(e.target.value);
  };
  const changeHandleMax = (e) => {
    SetUserInputMaxPrice(e.target.value);
  };
  return (
    <div className="absolute z-20 w-full bg-white shadow-lg">
      <div className="flex flex-col bg-white ">
        <div className="w-full shadow-dropdown ">
          <div
            className={
              clicked
                ? "h-14 shadow-md flex justify-between align-middle border-b "
                : "h-14 shadow-md flex justify-between align-middle "
            }
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <div className="flex flex-1">
              <div className="w-3.5 my-auto ml-6">
                <Image
                  src={filterImage}
                  alt="filter icon"
                  objectFit="cover"
                  width={8}
                  height={8}
                  layout="responsive"
                />
              </div>
              <span className="my-auto ml-4 text-sm font-black text-blue-darker">
                {/* Alle Filter anzeigen */}
                Alle Filter anzeigen
              </span>
            </div>

            <div
              className={
                clicked
                  ? "flex items-center w-8 mr-5 my-auto transition transform rotate-180 origin-center	"
                  : "flex items-center w-8 mr-5 my-auto transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={28} />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {clicked && (
          <motion.div
            className={clicked ? "block " : "hidden"}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.1 }}
          >
            {priceFilterData.map((item) => (
              <div className="relative " key={item.id}>
                <Sort />
                <FilterItemMobile item={item} />
                <AnimatePresence initial={false}>
                  {state?.truncates == item.title && (
                    <motion.div
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", duration: 0.1 }}
                      className="relative flex flex-col"
                    >
                      <PriceInputs />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {filtersData.map((item) => (
              <div key={item.id}>
                <FilterItemMobile item={item} />
              </div>
            ))}
            <div className="bg-white">
              <FilterBrandItemMobile item={getBrands} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FiltersMobile;
