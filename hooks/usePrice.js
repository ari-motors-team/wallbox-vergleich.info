import { useState, useEffect } from "react";
import { useStore } from "/components/store";

export default function usePrice(price, digits) {
  const [formattedPrice, setFormattedPrice] = useState(0);
  const { state, dispatch } = useStore();

  // format price
  useEffect(() => {
    if (
      !price
      //  || !state?.locale
    )
      return;
    let currency = "EUR";
    let formattedPrice = price;

    // if (state?.currencyRates && state.locale === "cs") {
    //   currency = "CZK";
    //   formattedPrice = formattedPrice * state.currencyRates?.CZK;
    // }

    formattedPrice = new Intl.NumberFormat(
      // state.locale || "de",
      "de-DE",
      {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }
    ).format(formattedPrice);

    setFormattedPrice(formattedPrice);
  }, [state, price]);

  return formattedPrice;
}
