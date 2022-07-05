import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSortDown } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useStore } from "../store";
import { motion, AnimatePresence } from "framer-motion";

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

function Sort({ getContent }) {
  const { state, dispatch } = useStore();
  const [SortArray, setSortArray] = useState([]);
  const [truncate, setTruncate] = useState(false);
  const [isChecked, setIsChecked] = useState("");

  const sortBy2 = [
    {
      sortCategory: "Alphabet",
      sortType: "alphabetical",
    },
    {
      sortCategory: "Niedrigster Preis",
      sortType: "lowest",
    },
    {
      sortCategory: "Höchster Preis",
      sortType: "highest",
    },
    {
      sortCategory: "Beste Ladenzeit",
      sortType: "chargingTimeLithium",
    },
    {
      sortCategory: "Höchste Zuladung",
      sortType: "highestWeight",
    },
    {
      sortCategory: "Höchste Reichweite",
      sortType: "highestRange",
    },
  ];
  useEffect(() => {
    //Alphabet price as in initial state
    dispatch({
      type: "activeSortValue",
      data: [
        {
          sortType: sortBy2[1].sortType,
          sortCategory: sortBy2[1].sortCategory,
        },
      ],
    });
    setSortArray(sortBy2);
  }, [getContent]);

  return (
    <div className="block md:hidden ">
      <div
        className="cursor-pointer "
        onClick={() => {
          setTruncate(!truncate);
        }}
      >
        <div className="flex justify-between py-1 border-b-2">
          <div className="flex ">
            <div className="my-auto ml-5">
              <BsSortDown size={20} fill="#1F1E80" />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className="py-3 text-base font-bold text-blue-dark">
                {/* {getContent?.content[2].name} ↬{" "} */}
                {state?.activeSortValues[0]?.sortCategory}
              </h4>
            </div>
          </div>

          <div
            className={
              truncate
                ? "flex items-center w-6 mr-6 my-auto transition transform rotate-180 origin-center	"
                : "flex items-center w-6 mr-6 my-auto transition transform rotate-0 origin-center	 "
            }
          >
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {truncate && (
          <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.1 }}
            className={truncate ? "flex flex-col ml-4 mt-2" : "hidden"}
          >
            {SortArray.map((rank) => {
              return (
                <div
                  onClick={() => {
                    setIsChecked(rank?.sortType);
                    dispatch({
                      type: "activeSortValue",
                      data: [
                        {
                          sortType: rank.sortType,
                          sortCategory: rank.sortCategory,
                        },
                      ],
                    });
                  }}
                  key={rank.sortCategory}
                  className="flex flex-row py-2 mt-1 mr-4"
                >
                  <input
                    className="appearance-none w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
                    onChange={() => {
                      return null;
                    }}
                    checked={isChecked == rank?.sortType ? true : false}
                    type="checkbox"
                    id={rank?.sortCategory}
                    name={rank?.sortCategory}
                  ></input>
                  <label
                    forhtml={rank?.sortCategory}
                    className="inline-flex items-center pl-5 text-lg tracking-wide cursor-pointer text-blue-extra"
                  >
                    {rank?.sortCategory}
                  </label>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sort;
