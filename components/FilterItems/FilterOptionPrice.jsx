import { useState, useEffect } from "react";
import { useStore } from "../store";

function FilterOptionPrice() {
  const filterOptionPriceData = [
    {
      id: "1",
      value: "0-10000€",
      name: "preis",
    },
    {
      id: "2",
      value: "10001-20000€",
      name: "preis",
    },
    {
      id: "3",
      value: "20001€",
      name: "preis",
    },
    {
      id: "4",
      value: "40001-80000€",
      name: "preis",
    },
  ];
  const [isChecked, setIsChecked] = useState("");
  const { state, dispatch } = useStore();
  /* to check the right checkbox from the homepage states */

  useEffect(() => {
    let minPrice = state?.prices.map((el) => el.min).join(" ");
    let maxPrice = state?.prices.map((el) => el.max).join(" ");
    if (minPrice >= 0 && maxPrice <= 10000) setIsChecked("1");
    if (minPrice > 10000 && maxPrice <= 20000) setIsChecked("2");
    if (minPrice > 20000 && maxPrice <= 40000) setIsChecked("3");
    if (minPrice > 40000 && maxPrice <= 80000) setIsChecked("4");
  }, [state?.prices]);

  return filterOptionPriceData?.map((item) => {
    return (
      <div className="mt-1 flex flex-row py-2 " key={item.id}>
        <input
          className=" appearance-none w-6 h-6 text-xl border tracking-wide border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
          type="checkbox"
          id={item.id}
          value={item.value}
          name={item.name}
          onChange={() => {
            setIsChecked(item.id);
            isChecked;
            if (item.id === "1") {
              dispatch({ type: "price", data: [{ min: 0, max: 10000 }] });
            }
            if (item.id === "2") {
              dispatch({ type: "price", data: [{ min: 10001, max: 20000 }] });
            }
            if (item.id === "3") {
              dispatch({ type: "price", data: [{ min: 20001, max: 40000 }] });
            }
            if (item.id === "4") {
              dispatch({ type: "price", data: [{ min: 40001, max: 80000 }] });
            }
          }}
          checked={isChecked == item.id && state?.prices.length ? true : false}
        ></input>

        <label
          forhtml="preis"
          className="inline-flex items-center cursor-pointer pl-5 tracking-wide text-lg text-blue-extra"
        >
          {item.value}
        </label>
      </div>
    );
  });
}

export default FilterOptionPrice;
