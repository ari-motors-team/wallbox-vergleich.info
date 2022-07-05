import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import image3 from "../../public/images/hoechstgeschwindigkeit.png";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/more-svgrepo-com.png";

import image6 from "../../public/images/ladezeit@2x.png";

import Image from "next/image";
import { useState } from "react";
import FilterItemMobile from "./FilterItemMobile";
import Sort from "../SortItems/Sort";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../store";
import FilterOptionPrice from "./FilterOptionPrice";
function TruncateFilter() {
  /* UseStates */
  const [userInputMinPrice, SetUserInputMinPrice] = useState(0);
  const [userInputMaxPrice, SetUserInputMaxPrice] = useState(99000);
  const [truncPrice, setTruncPrice] = useState(false);
  const [rotateIt, setRotateIt] = useState(false);
  const { state, dispatch } = useStore();
  /* filter list */
  const filtersData = [
    {
      id: 1,
      category: "rangeLithiums",
      title: "Reichweite",
      image: image,
      options: [
        {
          value: 150,
          name: "ab 150 km",
          id: 1,
          categoryName: "rangeLithium",
        },
        {
          id: 2,
          name: "ab 200 km",
          value: 200,
          categoryName: "rangeLithium",
        },
        {
          id: 3,
          name: "ab 250 km",
          value: 250,
          categoryName: "rangeLithium",
        },
        {
          id: 4,
          name: "ab 500 km",
          value: 500,
          categoryName: "rangeLithium",
        },
      ],
    },
    {
      id: 2,
      category: "loadingWeights",
      title: "Zuladung",

      image: image2,
      options: [
        {
          id: 1,
          name: "ab 500 kg",
          value: 500,
          categoryName: "loadingWeight",
        },
        {
          id: 2,
          name: "ab 1000 kg",
          value: 1000,
          categoryName: "loadingWeight",
        },
        {
          id: 3,
          name: "ab 1500 kg",
          value: 1500,
          categoryName: "loadingWeight",
        },
        {
          id: 4,
          name: "ab 2500 kg",
          value: 2500,
          categoryName: "loadingWeight",
        },
      ],
    },
    {
      id: 3,
      title: "V-Max",

      category: "maxSpeeds",
      image: image3,
      options: [
        {
          id: 1,
          name: "ab 10km/h",
          value: 10,
          categoryName: "maxSpeed",
        },
        {
          id: 2,
          name: "ab 200km/h",
          value: 200,
          categoryName: "maxSpeed",
        },
        {
          id: 3,
          name: "ab 400km/h",
          value: 400,
          categoryName: "maxSpeed",
        },
        {
          id: 4,
          name: "ab 600km/h",
          value: 600,
          categoryName: "maxSpeed",
        },
      ],
    },
    {
      id: 5,
      title: "Ladenzeit",
      category: "chargingTimeLithiums",
      image: image6,
      options: [
        {
          name: "ab 1 Stunde",
          value: 1,
          id: 1,
          categoryName: "chargingTimeLithium",
        },
        {
          name: "ab 10 Stunde",
          value: 10,
          id: 2,
          categoryName: "chargingTimeLithium",
        },
        {
          name: "ab 20 Stunde",
          value: 20,
          id: 3,
          categoryName: "chargingTimeLithium",
        },
        {
          name: "ab 40 Stunde",
          value: 40,
          id: 4,
          categoryName: "chargingTimeLithium",
        },
      ],
    },
    {
      id: 4,
      title: "Aufbautyp",
      category: "category",
      image: image5,
      options: [
        {
          name: "Pritsche",
          value: "Pritsche",
          id: 1,
          categoryName: "category",
        },
        {
          name: "Kipper",
          value: "Kipper",
          id: 2,
          categoryName: "category",
        },
        {
          name: "Koffer",
          value: "Koffer",
          id: 3,
          categoryName: "category",
        },
        {
          name: "Kasten",
          value: "Kasten",
          id: 4,
          categoryName: "category",
        },
      ],
    },
  ];

  const getFiltersData = filtersData.map((item, index) => {
    return (
      <div key={item.id} className="">
        <FilterItemMobile item={item} />
      </div>
    );
  });
  /* handling the min and max input  */
  const changeHandleMin = (e) => {
    SetUserInputMinPrice(e.target.value);
  };
  const changeHandleMax = (e) => {
    SetUserInputMaxPrice(e.target.value);
  };
  return (
    <div className="absolute z-10 bg-white w-full ">
      <div className="flex flex-col mt-2  ">
        <div>
          <Sort getContent={getContent} />
        </div>
        {/* Preis */}
        <div
          className="cursor-pointer w-full "
          onClick={() => {
            dispatch({
              type: "truncate",
              data: state?.truncates !== "price" ? "price" : "",
            });
          }}
        >
          <div className="flex py-1 justify-between border-b">
            <div className="flex">
              <div className="w-6 my-auto ml-4 ">
                <Image
                  src={image4}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <div className="my-auto pl-4">
                <h4 className="py-3 font-bold text-blue-dark">Preis</h4>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span
                className={
                  state?.prices.length > 0
                    ? "flex text-green-700 text-xl "
                    : "hidden"
                }
              >
                ✓
              </span>
              <div
                className={
                  state?.truncates == "price"
                    ? "flex items-center w-6 mr-6 my-auto transition transform rotate-180"
                    : "flex items-center w-6 mr-6 my-auto transition transform rotate-0"
                }
              >
                <MdKeyboardArrowDown size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          state?.truncates == "price" ? "flex flex-col ml-4 mt-2 " : "hidden"
        }
      >
        <div className="">
          <FilterOptionPrice />
        </div>

        {/* min max buttons */}
        <div className="wrapper py-4 flex flex-row justify-start">
          <div className="flex py-2 mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="number"
              id="min"
              onChange={changeHandleMin}
              name="min"
              placeholder="min €"
              className="pl-4 w-18"
            />
          </div>
          <div className="flex py-2  mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="number"
              id="max"
              onChange={changeHandleMax}
              name="max"
              placeholder="max €"
              className="pl-4 w-18"
            />
          </div>
          <span
            className="pl-2  my-auto cursor-pointer"
            onClick={() =>
              dispatch({
                type: "price",
                data: [
                  {
                    min: Number(userInputMinPrice),
                    max: Number(userInputMaxPrice),
                  },
                ],
              })
            }
          >
            Los
          </span>
        </div>
      </div>
      {getFiltersData}

      {/*  */}
    </div>
  );
}

export default TruncateFilter;
