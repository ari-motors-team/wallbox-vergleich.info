import Image from "next/image";
import { useStore } from "../../store";
import { MdKeyboardArrowDown } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";

import FilterCheckboxMobile from "./FilterCheckboxMobile";

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

function FilterItemMobile({ item }) {
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
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className="font-bold text-blue-darker">{item.title}</h4>
            </div>
          </div>
          <div className="flex flex-row">
            <span
              className={
                state[item.category].length > 0
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
            ? "flex flex-col ml-4 mt-2 mb-2"
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
              {item.options.map((checkbox, index) => (
                <div
                  onClick={() => {
                    dispatch({
                      type: checkbox.categoryName,
                      data:
                        checkbox.categoryName == "price"
                          ? [{ min: checkbox.value, max: checkbox.max }]
                          : [{ min: checkbox.value, max: 100000 }],
                    });
                  }}
                  key={index}
                  className="flex flex-row py-2 mt-1 "
                >
                  <FilterCheckboxMobile
                    checkbox={checkbox}
                    name={checkbox.categoryName}
                    value={checkbox.value}
                    id={checkbox.id}
                    category={item.category}
                    key={checkbox.value}
                  ></FilterCheckboxMobile>
                  <label
                    forhtml="categories"
                    className="inline-flex items-center pl-5 text-lg tracking-wide cursor-pointer text-blue-extra"
                  >
                    {checkbox.name}
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

export default FilterItemMobile;
