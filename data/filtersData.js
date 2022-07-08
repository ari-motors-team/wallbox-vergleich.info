import image from "../public/images/reichweite.png";
import image2 from "../public/images/zuladung.png";
import image3 from "../public/images/hoechstgeschwindigkeit.png";
import image4 from "../public/images/preis.png";
import image5 from "../public/images/aufbautype.png";
import image6 from "../public/images/ladezeit@2x.png";

const filtersData = [
  {
    id: 1,

    src: "/images/logo-ari-motors-rgb-flat.png",
    title: "Wetterschutz",
    options: [
      {
        title: "IP54",
        value: "IP54",
        id: 1,
        categoryName: "weatherResistance",
      },
      {
        title: "IK10",
        value: "IK10",
        id: 2,
        categoryName: "weatherResistance",
      },
      {
        title: "IP55",
        value: "IP55",
        id: 3,
        categoryName: "weatherResistance",
      },
      {
        title: "IP67",
        value: "IP67",
        id: 4,
        categoryName: "weatherResistance",
      },
    ],
  },
  {
    id: 1,

    src: "/images/logo-ari-motors-rgb-flat.png",
    title: "Energiezähler",
    options: [
      {
        title: "Ja",
        value: "Ja",
        id: 1,
        categoryName: "weatherResistance",
      },
      {
        title: "Nein",
        value: "Nein",
        id: 2,
        categoryName: "weatherResistance",
      },
      {
        title: "Über App",
        value: "Über App",
        id: 3,
        categoryName: "weatherResistance",
      },
      {
        title: "MID",
        value: "MID",
        id: 4,
        categoryName: "weatherResistance",
      },
    ],
  },
  {
    id: 1,

    src: "/images/logo-ari-motors-rgb-flat.png",
    title: "Ladestatusanzeige",
    options: [
      {
        title: "Ja",
        value: "Ja",
        id: 1,
        categoryName: "weatherResistance",
      },
      {
        title: "Nein",
        value: "Nein",
        id: 2,
        categoryName: "weatherResistance",
      },
      {
        title: "Über App",
        value: "Über App",
        id: 3,
        categoryName: "weatherResistance",
      },
      {
        title: "MID",
        value: "MID",
        id: 4,
        categoryName: "weatherResistance",
      },
    ],
  },
  {
    id: 1,

    src: "/images/logo-ari-motors-rgb-flat.png",
    title: "Ladeleistung",
    options: [
      {
        title: "Ja",
        value: "Ja",
        id: 1,
        categoryName: "weatherResistance",
      },
      {
        title: "Nein",
        value: "Nein",
        id: 2,
        categoryName: "weatherResistance",
      },
      {
        title: "Über App",
        value: "Über App",
        id: 3,
        categoryName: "weatherResistance",
      },
      {
        title: "MID",
        value: "MID",
        id: 4,
        categoryName: "weatherResistance",
      },
    ],
  },
  {
    id: 1,

    src: "/images/logo-ari-motors-rgb-flat.png",
    title: "Internetanbindung",
    options: [
      {
        title: "Lan",
        value: "Ja",
        id: 1,
        categoryName: "weatherResistance",
      },
      {
        title: "Nein",
        value: "Nein",
        id: 2,
        categoryName: "weatherResistance",
      },
      {
        title: "Über App",
        value: "Über App",
        id: 3,
        categoryName: "weatherResistance",
      },
      {
        title: "MID",
        value: "MID",
        id: 4,
        categoryName: "weatherResistance",
      },
    ],
  },
  {
    id: 1,

    src: "/images/logo-ari-motors-rgb-flat.png",
    title: "Kabelanschluss",
    options: [
      {
        title: "Lan",
        value: "Ja",
        id: 1,
        categoryName: "weatherResistance",
      },
      {
        title: "Nein",
        value: "Nein",
        id: 2,
        categoryName: "weatherResistance",
      },
      {
        title: "Über App",
        value: "Über App",
        id: 3,
        categoryName: "weatherResistance",
      },
      {
        title: "MID",
        value: "MID",
        id: 4,
        categoryName: "weatherResistance",
      },
    ],
  },
  //     {
  //       id: 3,
  //       name: `ab 7.5 m`,
  //       value: 7.5,
  //       max: 1000,
  //       categoryName: "rangeLithium",
  //     },
  //     {
  //       id: 4,
  //       name: `ab 10 m`,
  //       value: 10,
  //       max: 1000,
  //       categoryName: "rangeLithium",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Wetterschutz",
  //   category: "weatherResistance",
  //   image: image5,
  //   options: [
  //     {
  //       name: "Pritsche",
  //       value: "Pritsche",
  //       id: 1,
  //       categoryName: "weatherResistance",
  //     },
  //     {
  //       name: "Kipper",
  //       value: "Kipper",
  //       id: 2,
  //       categoryName: "weatherResistance",
  //     },
  //     {
  //       name: "Koffer",
  //       value: "Koffer",
  //       id: 3,
  //       categoryName: "weatherResistance",
  //     },
  //     {
  //       name: "Kasten",
  //       value: "Kasten",
  //       id: 4,
  //       categoryName: "weatherResistance",
  //     },
  //   ],
  // },
];
const priceFilterData = [
  {
    id: 1,
    category: "prices",
    title: "Preis",
    image: image4,
    options: [
      {
        value: 1,
        max: 10000,
        name: "0-10.000€",
        id: 1,
        categoryName: "price",
      },
      {
        id: 2,
        name: "10.001-20.000€",
        value: 10001,
        max: 20000,
        categoryName: "price",
      },
      {
        id: 3,
        name: "20.001-40.000€",
        value: 20001,
        max: 40000,
        categoryName: "price",
      },
      {
        id: 4,
        name: "40.001-80.000€",
        value: 40001,
        max: 80000,
        categoryName: "price",
      },
    ],
  },
];

export { filtersData, priceFilterData };
