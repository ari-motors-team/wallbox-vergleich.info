import { createContext, useReducer, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    /* filter */
    case "price":
      return { ...state, prices: action.data };
    case "rangeLithium":
      return { ...state, rangeLithiums: action.data };
    case "loadingWeight":
      return { ...state, loadingWeights: action.data };
    case "maxSpeed":
      return { ...state, maxSpeeds: action.data };
    case "chargingTimeLithium":
      return { ...state, chargingTimeLithiums: action.data };
    case "category":
      return { ...state, categorys: action.data };
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
  rangeLithiums: [],
  loadingWeights: [],
  maxSpeeds: [],
  chargingTimeLithiums: [],
  categorys: [],
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
