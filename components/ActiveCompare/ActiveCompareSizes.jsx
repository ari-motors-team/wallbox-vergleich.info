import { useState, useEffect } from "react";

export default function ActiveCompareSizes({ keys, comparedWallboxes }) {
  const [columns, setColumns] = useState([]);
  // console.log(comparedWallboxes);
  let testResultArr = comparedWallboxes.map((test) => test.rating);

  useEffect(() => {
    if (!keys?.length > 0 || !comparedWallboxes?.length > 0) return;
    let columns = [];

    const entryKeys = [];

    for (const key of keys) {
      entryKeys.push(
        comparedWallboxes[0][key].key ? comparedWallboxes[0][key].key : keys[0]
      );
    }
    columns.push(entryKeys);

    for (const car of comparedWallboxes) {
      const carValues = [];

      for (const key of keys) {
        const entryValues = [];

        const entry = car[key];

        carValues.push(`${entry.value} ${entry.baseUnit}`);
      }
      columns.push(carValues);
    }
    /* Main keys push to position 8 for calculating the total weight */

    setColumns(columns, "entries");
  }, [keys, comparedWallboxes]);

  return (
    <>
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="relative h-full min-w-[160px]  ">
          {/* ADDS THE CLASS TYPE AS FIRST LINE */}

          {col.map((value, index) => (
            <>
              {index == 0 && (
                <div className="col-span-full row-span-full" key={index}>
                  {colIndex == 0 ? (
                    <>
                      <p className="h-16 font-bold text-blue-extra pl-4 lg:pl-8 pt-5 text-2xl ">
                        Maße
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="bg-white h-16 font-bold text-blue-extra pl-4 lg:pl-8 pt-4 text-2xl "></p>
                      <p className="bg-grey-lighter h-14 font-bold text-blue-extra pl-4 lg:pl-8 pt-4 text-2xl "></p>
                    </>
                  )}
                </div>
              )}
              <div
                className={`${
                  index == 1 ||
                  index == 3 ||
                  index == 4 ||
                  index == 6 ||
                  index == 8
                    ? "bg-grey-lighter flex items-center h-12"
                    : "bg-white flex items-center h-12 "
                }`}
              >
                <p className="text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8">
                  {value || "-"}
                </p>
              </div>
            </>
          ))}
        </div>
      ))}
    </>
  );
}
