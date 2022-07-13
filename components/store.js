import { createContext, useReducer, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    /* filter */
    case "price":
      return { ...state, prices: action.data };
    case "weatherResistance":
      return { ...state, weatherResistances: action.data };
    case "electricityCounter":
      return { ...state, electricityCounters: action.data };
    case "chargeStatusPreview":
      return { ...state, chargeStatusPreviews: action.data };
    case "power":
      return { ...state, powers: action.data };

    case "connection":
      return { ...state, connections: action.data };

    case "brand":
      return { ...state, brands: action.data };

    /*  */

    case "truncate":
      return { ...state, truncates: action.data };
    /* sorting state */
    case "activeSortValue":
      return { ...state, activeSortValues: action.data };
    /*  states for comparison popup */
    case "removeAllCarsForComparison":
      return { ...state, removeAllCarsForComparisons: action.data };
    case "autoForComparison":
      return { ...state, autoForComparisons: action.data };

    case "disabledButton":
      return { ...state, disabledButtons: action.data };

    case "maximalThree":
      return { ...state, maximalThrees: action.data };
    /*  states for navbar */
    case "mobileNavActive":
      return { ...state, mobileNavActives: action.data };

    default:
      return;
  }
};

const initialState = {
  mobileNavActive: false,
  prices: [],

  electricityCounters: [],
  chargeStatusPreviews: [],
  weatherResistances: [],
  powers: [],
  connections: [],

  brands: [],
  truncates: "",
  /*  states for comparison popup */
  autoForComparisons: [],
  removeAllCarsForComparisons: false,
  disabledButtons: "",
  maximalThrees: "",
  /* sorting state */
  activeSortValues: [{ sortCategory: "Alphabet", sortType: "alphabetical" }],
};

const StoreContext = createContext(initialState);
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);

  return store;
}
