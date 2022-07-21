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
      state?.brands.length ||
      state?.electricityCounters.length ||
      state?.chargeStatusPreviews.length ||
      state?.IPprotections.length ||
      state?.powers.length ||
      state?.connections.length
    ) {
      props.setShowAll(true);
    }
    if (
      !state?.prices.length &&
      !state?.brands.length &&
      !state?.electricityCounters.length &&
      !state?.chargeStatusPreviews.length &&
      !state?.IPprotections.length &&
      !state?.powers.length &&
      !state?.connections.length
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
        value: state?.powers.length
          ? state?.powers.map((el) => `${el.min}  `).join("")
          : null,
        image: image,
      },
      {
        id: 3,
        value: state?.chargeStatusPreviews.length
          ? state?.chargeStatusPreviews.map((el) => `${el.min}  `).join("")
          : null,
        image: image2,
      },
      {
        id: 4,
        value:
          state?.electricityCounters.length ||
          state?.electricityCounters.length == undefined
            ? state?.electricityCounters.map((el) => `${el.min} `).join("")
            : null,
        image: image3,
      },
      {
        id: 5,
        value:
          state?.IPprotections.length ||
          state?.IPprotections.length == undefined
            ? state?.IPprotections.map((el) => `${el.min}  `).join("")
            : null,
        image: image5,
      },
      {
        id: 6,
        value:
          state?.connections.length || state?.connections.length == undefined
            ? state?.connections.map((el) => `mit ${el.min} `).join("")
            : null,
        image: image5,
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
    state?.brands,
    state?.powers,
    state?.chargeStatusPreviews,
    state?.electricityCounters,
    state?.IPprotections,
    state?.connections,
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
              if (item.id === 2) dispatch({ type: "power", data: [] });
              if (item.id === 3)
                dispatch({ type: "chargeStatusPreview", data: [] });
              if (item.id === 4)
                dispatch({ type: "electricityCounter", data: [] });
              if (item.id === 5) dispatch({ type: "IPprotection", data: [] });
              if (item.id === 6) dispatch({ type: "connection", data: [] });
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
          state?.electricityCounters.length ||
          state?.prices.length ||
          state?.chargeStatusPreviews.length ||
          state?.powers.length ||
          state?.IPprotections.length ||
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
              type: "power",
              data: [],
            });
            dispatch({
              type: "chargeStatusPreview",
              data: [],
            });
            dispatch({
              type: "price",
              data: [],
            });
            dispatch({
              type: "electricityCounter",
              data: [],
            });
            dispatch({
              type: "IPprotection",
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
