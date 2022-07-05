import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import image5 from "../../public/images/ladezeit@2x.png";
import image6 from "../../public/images/aufbautype.png";
import image7 from "../../public/images/ETV-IconsVergleichen.png";

import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../store";
import { useState, useEffect } from "react";
function ActiveFilterEntry(props) {
  const { state, dispatch } = useStore();
  const [filterData, setFilterData] = useState([]);
  const [herstellerData, setHerstellerData] = useState([]);

  useEffect(() => {
    if (
      state?.prices.length ||
      state?.rangeLithiums.length ||
      state?.loadingWeights.length ||
      state?.maxSpeeds.length ||
      state?.chargingTimeLithiums.length ||
      state?.categorys.length ||
      state?.brands.length
    ) {
      props.setShowAll(true);
    }
    if (
      !state?.prices.length &&
      !state?.rangeLithiums.length &&
      !state?.loadingWeights.length &&
      !state?.maxSpeeds.length &&
      !state?.chargingTimeLithiums.length &&
      !state?.categorys.length &&
      !state?.brands.length
    ) {
      props.setShowAll(false);
    }

    setFilterData([
      {
        id: 1,
        value: state?.prices.length
          ? state?.prices
              .map(
                (el) =>
                  (el.min > 999
                    ? el.min.toString().slice(0, -3) +
                      "." +
                      el.min.toString().slice(-3)
                    : el.min) +
                  "-" +
                  el.max.toString().slice(0, -3) +
                  "." +
                  el.max.toString().slice(-3)
              )
              .join("") + "€"
          : null,

        image: image4,
      },
      {
        id: 2,
        value: state?.rangeLithiums.length
          ? state?.rangeLithiums
              .map(
                (el) =>
                  `${
                    el?.max < 99999 ? el.min + "-" + el.max : "ab " + el.min
                  }  km`
              )
              .join("")
          : null,
        image: image,
      },
      {
        id: 3,
        value: state?.loadingWeights.length
          ? state?.loadingWeights
              .map(
                (el) =>
                  `${
                    el?.max < 99999 ? el.min + "-" + el.max : "ab " + el.min
                  }  kg`
              )
              .join("")
          : null,
        image: image2,
      },
      {
        id: 4,
        value:
          state?.maxSpeeds.length || state?.maxSpeeds.length == undefined
            ? state?.maxSpeeds
                .map(
                  (el) =>
                    `${
                      el?.max < 99999 ? el.min + "-" + el.max : "ab " + el.min
                    } km/h`
                )
                .join("")
            : null,
        image: image3,
      },
      {
        id: 5,
        value:
          state?.chargingTimeLithiums.length ||
          state?.chargingTimeLithiums.length == undefined
            ? state?.chargingTimeLithiums
                .map((el) => `${el.min} Stunden `)
                .join("")
            : null,
        image: image5,
      },
      {
        id: 6,
        value:
          state?.categorys.length || state?.categorys == undefined
            ? state?.categorys.map((el) => "Typ " + el.min).join("")
            : null,
        image: image6,
      },
    ]);
    setHerstellerData(
      state?.brands.length
        ? state?.brands.map((el) => {
            return {
              id: 1,
              value: el,
              image: image7,
            };
          })
        : null
    );
  }, [
    state?.prices,
    state?.rangeLithiums,
    state?.loadingWeights,
    state?.maxSpeeds,
    state?.chargingTimeLithiums,
    state?.categorys,
    state?.brands,
  ]);
  return (
    <div
      className={
        props.showAll
          ? "grid gap-2 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:filter-grid px-2 items-start mt-7 relative"
          : "hidden"
      }
    >
      {filterData?.map((item, index) => (
        <div
          className={
            item.value !== null
              ? "flex-1 h-10 py-2  bg-grey-lighter flex justify-between items-center "
              : "hidden"
          }
          key={index}
        >
          <div className="w-6 ml-2 ">
            <Image
              src={item.image}
              alt="picture"
              objectFit="cover"
              width={24}
              height={28}
              layout="responsive"
            />
          </div>
          <div className="text-base">{item.value}</div>

          <div
            onClick={() => {
              if (item.id === 1) dispatch({ type: "price", data: [] });
              if (item.id === 2) dispatch({ type: "rangeLithium", data: [] });
              if (item.id === 3) dispatch({ type: "loadingWeight", data: [] });
              if (item.id === 4) dispatch({ type: "maxSpeed", data: [] });
              if (item.id === 5)
                dispatch({ type: "chargingTimeLithium", data: [] });
              if (item.id === 6) dispatch({ type: "category", data: [] });
            }}
            className={"w-3.5 my-auto mr-4 cursor-pointer"}
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
      ))}
      {herstellerData?.map((item, index) => (
        <div
          className={
            item.value !== null
              ? "flex-1 h-10 py-2  bg-grey-lighter flex justify-between items-center "
              : "hidden"
          }
          key={index}
        >
          <div className="w-6 ml-2 ">
            <Image
              src={item.image}
              alt="picture"
              objectFit="cover"
              width={24}
              height={28}
              layout="responsive"
            />
          </div>
          <div className="text-base">{item.value}</div>

          <div
            onClick={() => {
              // props.setShowAll(!props.showAll);
              dispatch({
                type: "brand",
                data: state?.brands.filter((el) => el !== item.value),
              });
            }}
            className={"w-3.5 my-auto mr-4 cursor-pointer"}
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
      ))}

      {/* REMOVE ALL FILTERS */}
      <div
        className={
          state?.rangeLithiums.length ||
          state?.prices.length ||
          state?.loadingWeights.length ||
          state?.maxSpeeds.length ||
          state?.chargingTimeLithiums.length ||
          state?.categorys.length ||
          state?.brands.length
            ? "flex justify-end items-start lg:items-end md:justify-start pr-2 h-10"
            : "hidden"
        }
      >
        <div
          className="text-sm cursor-pointer"
          onClick={() => {
            props.setShowAll(!props.showAll);
            dispatch({
              type: "rangeLithium",
              data: [],
            });
            dispatch({
              type: "loadingWeight",
              data: [],
            });
            dispatch({
              type: "price",
              data: [],
            });
            dispatch({
              type: "maxSpeed",
              data: [],
            });
            dispatch({
              type: "chargingTimeLithium",
              data: [],
            });
            dispatch({
              type: "category",
              data: [],
            });
            dispatch({
              type: "brands",
              data: [],
            });
          }}
        >
          alle Filter löschen
        </div>
      </div>
    </div>
  );
}

export default ActiveFilterEntry;
