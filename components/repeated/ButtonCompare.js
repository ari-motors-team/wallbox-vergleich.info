import { useState, useEffect } from "react";
import { useStore } from "../store";
function ButtonCompare(props) {
  /* HOOKS */
  const { state, dispatch } = useStore();
  const [disabled, setDisabled] = useState(false);

  /* control to disable/enable  the button */
  useEffect(() => {
    /* to keep disabled the button */
    state?.autoForComparisons.find((item) => item.title === props.carItem.title)
      ? setDisabled(true)
      : setDisabled(false);

    /* for max 3 cars restriction message */
    if (state?.autoForComparisons?.length < 3) {
      dispatch({ type: "maximalThree", data: "" });
    }
    /* for enabling all buttons*/
    if (!state?.autoForComparisons?.length) {
      setDisabled(false);
    }
    /* for enabling one individual button*/
    if (state?.disabledButtons === props.carItem.title) {
      setDisabled(false);
    }
  }, [
    state?.disabledButtons,
    state?.autoForComparisons,
    props.carItem,
    state?.activeSortValues,
  ]);
  /* VERGLEICHEN BUTTON INPUT */

  const buttonInput = (
    <>
      <span className="items-center justify-center hidden w-4 h-4 px-2 my-auto mr-2 font-bold bg-white rounded-full text-blue-dark md:flex">
        &nbsp;+&nbsp;
      </span>
      <span className="my-auto">Vergleichen</span>
    </>
  );

  return (
    <>
      <button
        disabled={disabled}
        onClick={() => {
          if (state?.autoForComparisons?.length < 3) {
            dispatch({
              type: "disabledButton",
              data: true,
            });

            dispatch({
              type: "autoForComparison",
              data: [
                ...state.autoForComparisons,
                {
                  pic: props.carItem.src,
                  title: props.carItem.title,
                  price: props.carItem.price,
                  auto: props.carItem,
                },
              ],
            });

            setDisabled(true);
          } else {
            dispatch({ type: "maximalThree", data: props.carItem.title });
          }
        }}
        className={
          disabled
            ? "bg-blue-dark  disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded px-2 flex justify-center items-center h-8 sm:h-10 w-32 sm:w-32 md:w-44 transition"
            : "bg-blue-dark  disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded px-2 flex justify-center items-center h-8 sm:h-10 w-32 sm:w-32 md:w-44 transition"
        }
      >
        {disabled ? "Zum Vergleich" : buttonInput}
      </button>
      <p className="text-xs">
        {state?.maximalThrees === props.carItem?.title
          ? "Maximal 3 Fahrzeuge"
          : null}
      </p>
    </>
  );
}
export default ButtonCompare;
