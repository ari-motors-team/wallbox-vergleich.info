const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["elektrotransporter-vergleich.de"],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    // locales: ["de", "en"],
    locales: ["de"],
    defaultLocale: "de",
    domains: [
      {
        domain: "elektrotransporter-vergleich.de",

        defaultLocale: "de",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path((?!ie11_fallback.html$).*)",
        has: [
          {
            type: "header",
            key: "user-agent",
            value: "(.*Trident.*)",
          },
        ],
        permanent: false,
        destination: "/ie11_fallback.html",
      },
      {
        source: "/magazin/foerderungen-fuer-elektrotransporter",
        destination: "/magazin/subsidies/foerderungen-fuer-elektrotransporter",
        permanent: true,
      },
      //                       hersteller
      {
        source: "/ari-motors-elektrotransporter",
        destination: "/fahrzeuge/ari-motors",
        permanent: true,
      },
      {
        source: "/maxus-elektrotransporter",
        destination: "/fahrzeuge/maxus",
        permanent: true,
      },
      {
        source: "/mercedes-benz-elektrotransporter",
        destination: "/fahrzeuge/mercedes-benz",
        permanent: true,
      },
      {
        source: "/renault-elektrotransporter",
        destination: "/fahrzeuge/renault",
        permanent: true,
      },
      {
        source: "/volkswagen-elektrotransporter",
        destination: "/fahrzeuge/volkswagen",
        permanent: true,
      },

      {
        source: "/transporter/tropos-able-xr",
        destination: "/transporter/tropos-able-xt1",
        permanent: true,
      },

      {
        source: "/transporter/tropos-able",
        destination: "/transporter/tropos-able-xr-xt2",
        permanent: true,
      },
      {
        source: "/transporter/renault-master-z-e",
        destination: "/transporter/renault-master-e-tech",
        permanent: true,
      },
      {
        source: "/transporter/garia-utility",
        destination: "/transporter/garia-utility-pritsche",
        permanent: true,
      },
      {
        source: "/transporter/alke-divaco-atx-340e",
        destination: "/transporter/alke-atx-340-e-pritsche",
        permanent: true,
      },
      {
        source: "/transporter/aixam-pro-etruck",
        destination: "/transporter/aixam-pro-etruck-pritsche",
        permanent: true,
      },
      {
        source: "/transporter/stama-maestro",
        destination: "/transporter/stama-maestro-pritsche",
        permanent: true,
      },
      {
        source: "/transporter/addax-mt",
        destination: "/transporter/addax-mt-pritsche",
        permanent: true,
      },
      //                           testberichte
      {
        source: "/fahrzeuge/streetscooter",
        destination: "/transporter/streetscooter",
        permanent: true,
      },
      {
        source: "/fahrzeuge/streetscooter",
        destination: "/transporter/streetscooter",
        permanent: true,
      },
      {
        source: "/fahrzeuge/ari-458",
        destination: "/transporter/ari-458-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/mercedes-benz-e-vito",
        destination: "/transporter/mercedes-benz-e-vito",
        permanent: true,
      },
      {
        source: "/fahrzeuge/mercedes-benz-e-vito",
        destination: "/transporter/mercedes-benz-e-vito",
        permanent: true,
      },
      {
        source: "/fahrzeuge/aixam-pro-e-truck",
        destination: "/transporter/aixam-pro-etruck-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/alke-divaco-atx-340e",
        destination: "/transporter/alke-atx-340-e-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/efa-s-e35",
        destination: "/transporter/efa-s-e35",
        permanent: true,
      },

      {
        source: "/fahrzeuge/evo-transporter",
        destination: "/transporter/evo-elektro-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/mercedes-benz-esprinter",
        destination: "/transporter/mercedes-benz-esprinter",
        permanent: true,
      },

      {
        source: "/fahrzeuge/renault-master-z-e",
        destination: "/transporter/renault-master-e-tech",
        permanent: true,
      },
      {
        source: "/fahrzeuge/stama-maestro",
        destination: "/transporter/stama-maestro-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/tropos-able",
        destination: "/transporter/tropos-able-xt1",
        permanent: true,
      },
      {
        source: "/fahrzeuge/evum-a-car",
        destination: "/transporter/evum-a-car-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/garia-utility",
        destination: "/transporter/garia-utility-park-ec-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/ari-458-koffer",
        destination: "/transporter/ari-458-koffer",
        permanent: true,
      },
      {
        source: "/fahrzeuge/ari-458-kipper",
        destination: "/transporter/ari-458-kipper",
        permanent: true,
      },
      {
        source: "/fahrzeuge/tropos-able-xr",
        destination: "/transporter/tropos-able-xr-xt1",
        permanent: true,
      },
      {
        source: "/fahrzeuge/vw-abt-e-caddy",
        destination: "/transporter/vw-abt-e-caddy",
        permanent: true,
      },
      {
        source: "/fahrzeuge/saic-maxus-ev-80",
        destination: "/transporter/maxus-ev-80",
        permanent: true,
      },
      {
        source: "/fahrzeuge/citroen-ejumpy",
        destination: "/transporter/citroen-e-jumpy",

        permanent: true,
      },
      {
        source: "/fahrzeuge/vw-abt-e-transporter-6-1",
        destination: "/transporter/vw-abt-e-transporter-6-1",
        permanent: true,
      },
      {
        source: "/fahrzeuge/addax-mt",
        destination: "/transporter/addax-mt-pritsche",
        permanent: true,
      },
      {
        source: "/fahrzeuge/peugeot-e-expert",
        destination: "/transporter/peugeot-e-expert",
        permanent: true,
      },
      {
        source: "/fahrzeuge/opel-vivaro-e-cargo",
        destination: "/transporter/opel-vivaro-e-cargo",
        permanent: true,
      },
      {
        source: "/fahrzeuge/maxus-edeliver-3",
        destination: "/transporter/maxus-edeliver-3",
        permanent: true,
      },
      {
        source: "/fahrzeuge/vw-e-crafter",
        destination: "/transporter/vw-e-crafter",
        permanent: true,
      },
      {
        source: "/fahrzeuge/man-etge",
        destination: "/transporter/opel-vivaro-e-cargo",
        permanent: true,
      },
      {
        source: "/fahrzeuge/toyota-proace-electric",
        destination: "/transporter/toyota-proace-electric",
        permanent: true,
      },
    ];
  },
});

//https://elektrotransporter-vergleich.de/fahrzeuge/renault-kangoo-z-e/
//https://elektrotransporter-vergleich.de/fahrzeuge/ari-458/
//https://elektrotransporter-vergleich.de/fahrzeuge/mercedes-benz-e-vito/
//https://elektrotransporter-vergleich.de/fahrzeuge/nissan-e-nv200/
//https://elektrotransporter-vergleich.de/fahrzeuge/aixam-pro-e-truck/
//https://elektrotransporter-vergleich.de/fahrzeuge/alke-divaco-atx-340e/
//https://elektrotransporter-vergleich.de/fahrzeuge/efa-s-e35/
//https://elektrotransporter-vergleich.de/fahrzeuge/evo-transporter/

//https://elektrotransporter-vergleich.de/fahrzeuge/mercedes-benz-esprinter/

//https://elektrotransporter-vergleich.de/fahrzeuge/renault-master-z-e/
//https://elektrotransporter-vergleich.de/fahrzeuge/stama-maestro/

//https://elektrotransporter-vergleich.de/fahrzeuge/tropos-able/

//https://elektrotransporter-vergleich.de/fahrzeuge/evum-a-car/
//https://elektrotransporter-vergleich.de/fahrzeuge/garia-utility/

//https://elektrotransporter-vergleich.de/fahrzeuge/ari-458-koffer/
//https://elektrotransporter-vergleich.de/fahrzeuge/ari-458-kipper/
//https://elektrotransporter-vergleich.de/fahrzeuge/tropos-able-xr/
//https://elektrotransporter-vergleich.de/fahrzeuge/vw-abt-e-caddy/
//https://elektrotransporter-vergleich.de/fahrzeuge/saic-maxus-ev-80/
//https://elektrotransporter-vergleich.de/fahrzeuge/citroen-ejumpy/
//https://elektrotransporter-vergleich.de/fahrzeuge/vw-abt-e-transporter-6-1/
//https://elektrotransporter-vergleich.de/fahrzeuge/addax-mt/
//https://elektrotransporter-vergleich.de/fahrzeuge/peugeot-e-expert/
//https://elektrotransporter-vergleich.de/fahrzeuge/opel-vivaro-e-cargo/
//https://elektrotransporter-vergleich.de/fahrzeuge/nm-e-cargo-van/
//https://elektrotransporter-vergleich.de/fahrzeuge/maxus-edeliver-3/
//https://elektrotransporter-vergleich.de/fahrzeuge/vw-e-crafter/
//https://elektrotransporter-vergleich.de/fahrzeuge/man-etge/
//https://elektrotransporter-vergleich.de/fahrzeuge/toyota-proace-electric/

// for magazin
//https://elektrotransporter-vergleich.de/magazin/foerderungen-fuer-elektrotransporter
//               zu https://elektrotransporter-vergleich.de/magazin/subsidies/foerderungen-fuer-elektrotransporter
// different slugs for transporter
//https://elektrotransporter-vergleich.de/transporter/garia-utility/
//             zu https://elektrotransporter-vergleich.de/transporter/garia-utility-pritsche/

//https://elektrotransporter-vergleich.de/transporter/alke-divaco-atx-340e/
//             zu https://elektrotransporter-vergleich.de/transporter/alke-atx-340-e-pritsche/

//https://elektrotransporter-vergleich.de/transporter/aixam-pro-e-truck/
//             zu https://elektrotransporter-vergleich.de/transporter/aixam-pro-etruck-pritsche/

//https://elektrotransporter-vergleich.de/transporter/tropos-able-xr/
//             zu https://elektrotransporter-vergleich.de/transporter/tropos-able-xr-xt1/

//https://elektrotransporter-vergleich.de/transporter/tropos-able/
//             zu https://elektrotransporter-vergleich.de/transporter/tropos-able-xr-xt2/

//https://elektrotransporter-vergleich.de/transporter/renault-master-z-e/
//             zu   https://elektrotransporter-vergleich.de/transporter/renault-master-e-tech

//https://elektrotransporter-vergleich.de/transporter/stama-maestro/
//             zu   https://elektrotransporter-vergleich.de//transporter/stama-maestro-pritsche

//https://elektrotransporter-vergleich.de/transporter/addax-mt/
//             zu   https://elektrotransporter-vergleich.de/transporter/addax-mt-pritsche

//
//alle zu transporter/:name
