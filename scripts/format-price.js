"use strict";

module.exports = (price, locale, rates) => {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: locale === "cs" ? "CZK" : "EUR",
    minimumFractionDigits: locale === "cs" ? 0 : 2,
    maximumFractionDigits: locale === "cs" ? 0 : 2,
  }).format(locale === "cs" ? price * rates.CZK : price || 0);
  return formattedPrice;
};
