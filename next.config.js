const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["wallbox-vergleich.info"],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    // locales: ["de", "en"],
    locales: ["de"],
    defaultLocale: "de",
    domains: [
      {
        domain: "wallbox-vergleich.info",

        defaultLocale: "de",
      },
    ],
  },
});
