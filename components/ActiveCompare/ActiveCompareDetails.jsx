import { useState, useEffect } from "react";

import ButtonAnfragen from "../repeated/ButtonAnfragen";

export default function ActiveCompareDetails({ keys, comparedWallboxes }) {
  const [entries, setEntries] = useState([]);

  let testResultArr = comparedWallboxes.map((test) => test.rating);

  useEffect(() => {
    if (!keys?.length > 0 || !comparedWallboxes?.length > 0) return;
    let entries = [];

    const entryKeys = [];
    for (const key of keys) {
      entryKeys.push(
        comparedWallboxes[0][key].key ? comparedWallboxes[0][key].key : keys[0]
      );
    }
    entries.push(entryKeys);

    for (const car of comparedWallboxes) {
      const carValues = [];

      for (const key of keys) {
        const entryValues = [];

        const entry = car[key];

        carValues.push(`${entry.value} ${entry.baseUnit}`);
      }
      entries.push(carValues);
    }
    /* Main keys push to position 8 for calculating the total weight */
    // console.log(entries, "entries test");
    setEntries(entries);
    // console.log(entries);
  }, [keys, comparedWallboxes]);

  return (
    <>
      {entries.map((entry, index) => (
        <div key={index} className="relative h-full min-w-[160px] ">
          <h3
            className={
              index == 0
                ? "h-16 font-bold text-blue-extra pl-4 lg:pl-8 pt-5 text-2xl"
                : "h-16 invisible"
            }
          >
            Details
          </h3>
          {/* ADDS THE CLASS TYPE AS FIRST LINE */}

          {entry.map((value, index) => (
            <div
              key={index}
              className={`${
                index % 2 == 1
                  ? "bg-white flex items-center h-12 "
                  : "bg-grey-lighter flex items-center h-12"
              }`}
            >
              <p className="pl-4 text-sm text-blue-extra lg:text-lg lg:pl-8">
                {value.includes("undefined") || value.includes("keine Angabe")
                  ? "-"
                  : value}
              </p>
            </div>
          ))}
          <div
            className={
              index !== 0
                ? "pl-3 xl:pl-8 bg-grey-border h-20 flex items-center justify-start pr-1"
                : ""
            }
          >
            {index !== 0 ? (
              <ButtonAnfragen carItem={comparedWallboxes[index - 1].title} />
            ) : (
              // carItem={carItem}
              <div className="h-20 bg-grey-border"></div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
