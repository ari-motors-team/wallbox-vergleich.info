import { useStore } from "../store";

import Link from "next/link";
import CarCardforPopUp from "./CarCardforPopUp";
import CarCardForPopUpMobile from "./CarCardForPopUpMobile";

const StickyPopUpForComparison = () => {
  const { state, dispatch } = useStore();
  /* GET CAR-CARDS-LIST */
  const getCarCardForPopup = state?.autoForComparisons?.map(
    (selectedCar, index) => {
      // console.log(state?.autoForComparisons);
      return (
        <>
          <div
            className="hidden md:flex md:flex-row  w-44 lg:w-52 h-28 mx-2 "
            key={index}
          >
            <CarCardforPopUp selectedCar={selectedCar} />
          </div>
          <div className="flex  md:hidden ">
            <CarCardForPopUpMobile selectedCar={selectedCar} />
          </div>
        </>
      );
    }
  );

  return (
    /* please keep the styles on this className */
    <div
      className={
        state?.autoForComparisons?.length > 0
          ? "flex flex-col md:flex-row h-32 bottom-0 fixed z-20 md:justify-center md:items-center md:h-40 w-[100vw] bg-grey-moredark "
          : "hidden"
      }
    >
      <h3 className="hidden xl:flex text-3xl xl:pr-20 xl:pl-4 text-white font-bold">
        Ihr Vergleich
      </h3>
      {/* conditions and mapping */}

      <div className="flex w-full h-2/3 md:w-auto justify-around ">
        {state?.autoForComparisons?.length ? getCarCardForPopup : null}
      </div>
      <div className="hidden md:flex flex-col-reverse justify-between  ml-4 xl:pl-4 relative  h-full">
        <div className="mb-12 lg:mb-8 ">
          <Link
            href={state?.autoForComparisons.length > 1 ? "/activeCompare" : "#"}
          >
            <a className="pr-4 ">
              <button
                className={
                  state?.autoForComparisons.length > 1
                    ? "bg-grey-light text-blue-darker w-32 lg:w-36 h-8 "
                    : "bg-grey-light text-grey w-32 lg:w-36 h-8"
                }
              >
                Vergleich
              </button>
            </a>
          </Link>
        </div>
        <div className="absolute top-5 right-0 pr-4">
          <span
            className="text-white text-sm  cursor-pointer "
            onClick={() => {
              return (
                dispatch({
                  type: "autoForComparison",
                  data: [],
                }),
                dispatch({
                  type: "disabledButton",
                  data: "",
                })
              );
            }}
          >
            alle löschen
          </span>
        </div>
      </div>

      {/* Mobile view */}
      <div className=" md:hidden flex flex-row w-full h-1/3 items-center justify-around">
        <Link
          href={state?.autoForComparisons.length > 1 ? "/activeCompare" : "#"}
        >
          <a className="flex lg:hidden">
            <button
              className={
                state?.autoForComparisons.length > 1
                  ? "bg-grey-light w-24 h-8 text-blue-darker font-bold"
                  : "bg-grey-light w-24 h-8 text-grey "
              }
            >
              Vergleich
            </button>
          </a>
        </Link>
        <div className="">
          <span
            className="text-white text-sm  cursor-pointer lg:hidden"
            onClick={() => {
              return (
                dispatch({
                  type: "removeAllCarsForComparison",
                  data: true,
                }),
                dispatch({
                  type: "autoForComparison",
                  data: [],
                })
              );
            }}
          >
            alle löschen
          </span>
        </div>
      </div>
    </div>
  );
};
export default StickyPopUpForComparison;
