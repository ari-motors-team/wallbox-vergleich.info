import image from "../public/images/reichweite.png";
import image2 from "../public/images/zuladung.png";
import image3 from "../public/images/hoechstgeschwindigkeit.png";
import image4 from "../public/images/preis.png";
import image5 from "../public/images/aufbautype.png";
import image6 from "../public/images/ladezeit@2x.png";

const filtersData = [
  {
    id: 1,
    category: "rangeLithiums",
    title: "Reichweite",
    image: image,
    options: [
      {
        value: 50,
        max: 1000,
        name: `ab 50 km`,
        id: 1,
        categoryName: "rangeLithium",
      },
      {
        id: 2,
        name: `ab 100 km`,
        value: 100,
        max: 1000,
        categoryName: "rangeLithium",
      },
      {
        id: 3,
        name: `ab 150 km`,
        value: 150,
        max: 1000,
        categoryName: "rangeLithium",
      },
      {
        id: 4,
        name: `ab 200 km`,
        value: 200,
        max: 1000,
        categoryName: "rangeLithium",
      },
    ],
  },
  {
    id: 2,
    category: "loadingWeights",
    title: "Zuladung",

    image: image2,
    options: [
      {
        id: 1,
        name: `ab 100 kg`,
        value: 100,
        max: 100000,
        categoryName: "loadingWeight",
      },
      {
        id: 2,
        name: `ab 250 kg`,
        value: 250,
        max: 100000,
        categoryName: "loadingWeight",
      },
      {
        id: 3,
        name: `ab 450 kg`,
        value: 450,
        max: 100000,
        categoryName: "loadingWeight",
      },
      {
        id: 4,
        name: `ab 500 kg`,
        value: 500,
        max: 100000,
        categoryName: "loadingWeight",
      },
    ],
  },
  {
    id: 3,
    title: "Höchstgeschwindigkeit",
    category: "maxSpeeds",
    image: image3,
    options: [
      {
        id: 1,
        name: `ab 50 km/h`,
        value: 50,
        categoryName: "maxSpeed",
      },
      {
        id: 2,
        name: `ab 80 km/h`,
        value: 80,
        categoryName: "maxSpeed",
      },
      {
        id: 3,
        name: `ab 120 km/h`,
        value: 120,
        categoryName: "maxSpeed",
      },
      {
        id: 4,
        name: `ab 180 km/h`,
        value: 180,
        categoryName: "maxSpeed",
      },
    ],
  },
  {
    id: 5,
    title: "Ladezeit",
    category: "chargingTimeLithiums",
    image: image6,
    options: [
      {
        name: `ab 5 Stunden`,
        value: 5,
        id: 1,
        categoryName: "chargingTimeLithium",
      },
      {
        name: `ab 10 Stunden`,
        value: 10,
        id: 2,
        categoryName: "chargingTimeLithium",
      },
      {
        name: `ab 15 Stunden`,
        value: 15,
        id: 3,
        categoryName: "chargingTimeLithium",
      },
      {
        name: `ab 20 Stunden`,
        value: 20,
        id: 4,
        categoryName: "chargingTimeLithium",
      },
    ],
  },
  {
    id: 4,
    title: "Aufbautyp",
    category: "categorys",
    image: image5,
    options: [
      {
        name: "Pritsche",
        value: "Pritsche",
        id: 1,
        categoryName: "category",
      },
      {
        name: "Kipper",
        value: "Kipper",
        id: 2,
        categoryName: "category",
      },
      {
        name: "Koffer",
        value: "Koffer",
        id: 3,
        categoryName: "category",
      },
      {
        name: "Kasten",
        value: "Kasten",
        id: 4,
        categoryName: "category",
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
