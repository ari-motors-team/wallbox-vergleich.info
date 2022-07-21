import image from "../public/images/reichweite.png";
import image2 from "../public/images/zuladung.png";
import image3 from "../public/images/hoechstgeschwindigkeit.png";
import image4 from "../public/images/preis.png";
import image5 from "../public/images/aufbautype.png";
import image6 from "../public/images/ladezeit@2x.png";

const filtersData = [
  {
    id: 1,

    image: image5,
    title: "Wetterschutz",
    category: "IPprotections",
    options: [
      {
        title: "IP54",
        value: "IP54",
        id: 1,
        categoryName: "IPprotection",
      },
      {
        title: "IK10",
        value: "IK10",
        id: 2,
        categoryName: "IPprotection",
      },
      {
        title: "IP55",
        value: "IP55",
        id: 3,
        categoryName: "IPprotection",
      },
      {
        title: "IP67",
        value: "IP67",
        id: 4,
        categoryName: "IPprotection",
      },
    ],
  },
  {
    id: 2,
    image: image5,
    title: "Stromzähler",
    category: "electricityCounters",
    options: [
      {
        title: "Nein",
        value: "Nein",
        id: 1,
        categoryName: "electricityCounter",
      },
      {
        title: "Über App",
        value: "Über App",
        id: 2,
        categoryName: "electricityCounter",
      },
      {
        title: "MID",
        value: "MID",
        id: 3,
        categoryName: "electricityCounter",
      },
    ],
  },
  {
    id: 3,
    category: "chargeStatusPreviews",

    image: image5,
    title: "Ladestatusanzeige",
    options: [
      {
        title: "über app und LED",
        value: "über app und LED",
        id: 1,
        categoryName: "chargeStatusPreview",
      },
      {
        title: "Über App",
        value: "Über App",
        id: 2,
        categoryName: "chargeStatusPreview",
      },
      {
        title: "LED",
        value: "LED",
        id: 3,
        categoryName: "chargeStatusPreview",
      },
    ],
  },
  {
    id: 4,
    category: "powers",

    image: image5,
    title: "Ladeleistung",
    options: [
      {
        title: "11 KW",
        value: "11",
        id: 1,
        categoryName: "power",
      },
      {
        title: "22 KW",
        value: "22",
        id: 2,
        categoryName: "power",
      },
      {
        title: "23 KW",
        value: "23",
        id: 3,
        categoryName: "power",
      },
      {
        title: "11 & 22 KW",
        value: "11 & 22",
        id: 4,
        categoryName: "power",
      },
      {
        title: "22 & 23 KW",
        value: "22 & 23",
        id: 5,
        categoryName: "power",
      },
    ],
  },
  {
    id: 5,
    category: "connections",

    image: image5,
    title: "Kabelanschluss",
    options: [
      {
        title: "Stecker",
        value: "Stecker",
        id: 1,
        categoryName: "connection",
      },
      {
        title: "Kabel",
        value: "Kabel",
        id: 2,
        categoryName: "connection",
      },
      {
        title: "Stecker und Kabel",
        value: "Stecker und Kabel",
        id: 3,
        categoryName: "connection",
      },
    ],
  },
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
        max: 500,
        title: "0-500€",
        id: 1,
        categoryName: "price",
      },
      {
        id: 2,
        title: "501-1000€",
        value: 501,
        max: 1000,
        categoryName: "price",
      },
      {
        id: 3,
        title: "1001-1500€",
        value: 1001,
        max: 1500,
        categoryName: "price",
      },

      {
        id: 4,
        title: "1501-2000€",
        value: 1501,
        max: 2000,
        categoryName: "price",
      },
    ],
  },
];

export { filtersData, priceFilterData };
