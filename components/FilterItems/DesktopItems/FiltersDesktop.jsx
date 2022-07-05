import { useStore } from "../../store";
import { motion, AnimatePresence } from "framer-motion";
import { filtersData, priceFilterData } from "../../../data/filtersData";
import FilterItemDesktop from "./FilterItemDesktop";
import PriceInputs from "../PriceInputs";
import FilterBrandItemDesktop from "./FilterBrandItemDesktop";

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

function FiltersDesktop({ getBrands }) {
  const { state, dispatch } = useStore();
  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="shadow-sm xl:ml-2 2xl:ml-40"
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "tween", duration: 0.1 }}
      >
        <div className="">
          {priceFilterData.map((item, index) => (
            <div className="relative bg-white" key={index}>
              <FilterItemDesktop item={item} />
              {state?.truncates == item.title && (
                <div className="relative flex flex-col ml-8 ">
                  <PriceInputs />
                </div>
              )}
            </div>
          ))}
        </div>
        {filtersData.map((item, index) => (
          <div className="bg-white" key={index}>
            <FilterItemDesktop item={item} />
          </div>
        ))}
        <div className="bg-white">
          <FilterBrandItemDesktop item={getBrands} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default FiltersDesktop;
