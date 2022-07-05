import { useState } from "react";
import { useStore } from "../store";
function PriceInputs() {
  /* UseStates */
  const { state, dispatch } = useStore();
  const [userInputMinPrice, SetUserInputMinPrice] = useState(0);
  const [userInputMaxPrice, SetUserInputMaxPrice] = useState(99000);
  /* handling the min and max input  */

  const changeHandleMin = (e) => {
    SetUserInputMinPrice(e.target.value);
  };
  const changeHandleMax = (e) => {
    SetUserInputMaxPrice(e.target.value);
  };
  return (
    <>
      {/* MIN MAX PRICE INPUT */}
      <div className="wrapper py-4 flex flex-row justify-start border-b pl-4">
        <div className="flex py-2 w-28 h-9 bg-transparent border rounded-lg border-blue-dark">
          <input
            type="number"
            id="min"
            min="0"
            onChange={changeHandleMin}
            name="min"
            placeholder="min €"
            className="px-4 w-full"
          />
        </div>
        <div className="flex py-2  mx-2 w-28 h-9 bg-transparent border rounded-lg border-blue-dark">
          <input
            type="number"
            id="max"
            onChange={changeHandleMax}
            name="max"
            placeholder="max €"
            className="px-4 w-full"
          />
        </div>
        <span
          className="pl-2  my-auto cursor-pointer"
          onClick={() => {
            dispatch({
              type: "price",
              data: [
                {
                  min: Number(userInputMinPrice),
                  max: Number(userInputMaxPrice),
                },
              ],
            });
          }}
        >
          Los
        </span>
      </div>
    </>
  );
}

export default PriceInputs;
