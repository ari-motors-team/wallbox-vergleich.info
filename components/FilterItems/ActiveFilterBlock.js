import { useState, useEffect } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../store";
import SortDesktop from "../SortItems/SortDesktop";
import ActiveFilterEntry from "./ActiveFilterEntry";

function ActiveFilterBlock({ getContent }) {
  const { state, dispatch } = useStore();
  const [clicked, setClicked] = useState(true);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="relative w-full">
      {/* ACTIVE FILTERS */}
      <div
        className={
          showAll ? "flex flex-grow justify-between flex-1 " : "hidden"
        }
      >
        <ActiveFilterEntry showAll={showAll} setShowAll={setShowAll} />
      </div>

      {/* HEADING + SORTING */}
      <div className="flex justify-between 2xl:pr-40">
        <div
          className={showAll ? "w-full" : "relative flex items-center w-full"}
        >
          <h1
            className={
              showAll
                ? "pl-4 mt-0 pb-2 md:mt-4 text-xl sm:text-2xl lg:text-3xl text-blue-extra"
                : "pl-4 mt-6 pb-4 sm:pb-2 text-xl sm:text-2xl lg:text-3xl text-blue-extra py-4 sm:py-0"
            }
          >
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
          {/*   <p> Hersteller: {state?.brands} </p> */}
        </div>
      </div>
      {/* Sorting */}
      <div
        className="relative right-0 hidden cursor-pointer md:block "
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <div className="relative">
          <div className="flex items-center justify-end 2xl:pr-40">
            <h4 className="sort-heading">
              {` Sortieren nach:
               ${state?.activeSortValues[0]?.sortCategory}`}
            </h4>
            {/* SORT DESKTOP */}
            <div
              className={
                clicked
                  ? "flex items-center justify-center h-4 transition transform rotate-0 origin-center	"
                  : "flex items-center justify-center h-4 transition transform rotate-180 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={28} />
            </div>{" "}
          </div>
          <div
            className={
              clicked
                ? "hidden"
                : "flex absolute top-4 right-0 2xl:right-40 shadow-lg"
            }
          >
            <SortDesktop />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveFilterBlock;
