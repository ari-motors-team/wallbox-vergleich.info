import Image from "next/image";
import { useStore } from "../store";
import { useState, useEffect } from "react";
import weight250 from "../../public/images/weight250.png";
import weight100 from "../../public/images/weight100.jpg";
import weight450 from "../../public/images/weight450.png";
import weight500 from "../../public/images/weight500.png";
import range50 from "../../public/images/range50.png";
import range100 from "../../public/images/range100.png";
import range150 from "../../public/images/range150.png";
import range200 from "../../public/images/range200.png";
import price from "../../public/images/price.png";
import koffericon from "../../public/images/koffer.png";
import pritscheicon from "../../public/images/pritsche.png";
import kastenicon from "../../public/images/kasten.png";
import kippericon from "../../public/images/kipper.png";
import ButtonForAlleTransporter from "../Sliders/ButtonForAlleTransporter";
import Router from "next/router";
import { useRouter } from "next/router";
import CarBrandsLogos from "../repeated/CarBrandsLogos";
import FunnelBoxTest from "./FunnelBoxTest";

export default function FunnelTest({ getContent, getBrands }) {
  const router = useRouter();
  const filtersData = [
    {
      title: `Welchen Aufbautyp wählen Sie für Ihren Elektrotransporter? `,
      category: "categorys",
      options: [
        {
          name: "Pritsche",
          value: "Pritsche",
          categoryName: "category",
          image: pritscheicon,
        },
        {
          name: "Kipper",
          value: "Kipper",
          categoryName: "category",
          image: kippericon,
        },
        {
          name: "Koffer",
          value: "Koffer",
          categoryName: "category",
          image: koffericon,
        },
        {
          name: "Kasten",
          value: "Kasten",
          categoryName: "category",
          image: kastenicon,
        },
      ],
    },
    {
      category: "rangeLithiums",
      title: `Wie viel Reichweite benötigen Sie pro Tag?`,
      options: [
        {
          value: 50,
          max: 100000,
          name: `ab 50 km`,
          categoryName: "rangeLithium",
          image: range50,
        },
        {
          name: `ab 100 km`,
          value: 100,
          max: 100000,
          categoryName: "rangeLithium",
          image: range100,
        },
        {
          name: `ab 150 km`,
          value: 150,
          max: 100000,
          categoryName: "rangeLithium",
          image: range150,
        },
        {
          name: `ab 200 km`,
          value: 200,
          max: 100000,
          categoryName: "rangeLithium",
          image: range200,
        },
      ],
    },
    {
      category: "loadingWeights",
      title: `
Über wie viel Zuladung soll Ihr Elektrotransporter verfügen?`,

      options: [
        {
          name: `ab 100 kg`,
          value: 100,
          max: 100000,
          categoryName: "loadingWeight",
          image: weight100,
        },
        {
          name: `ab 250 kg`,
          value: 250,
          max: 100000,
          categoryName: "loadingWeight",
          image: weight250,
        },
        {
          name: `ab 450 kg`,
          value: 450,
          max: 100000,
          categoryName: "loadingWeight",
          image: weight450,
        },
        {
          name: `ab 500 kg`,
          value: 500,
          max: 100000,
          categoryName: "loadingWeight",
          image: weight500,
        },
      ],
    },
    {
      category: "prices",
      title: `Wie viel darf Ihr Elektrotransporter kosten?
`,

      options: [
        {
          value: 1,
          max: 10000,
          name: "0 - 10000€",
          categoryName: "price",
          image: price,
        },
        {
          name: "10001 - 20000€",
          value: 10001,
          max: 20000,
          categoryName: "price",
          image: price,
        },
        {
          name: "20001 - 40000€",
          value: 20001,
          max: 40000,
          categoryName: "price",
          image: price,
        },
        {
          name: "beliebiger Preis",
          value: 1,
          max: 100000,
          categoryName: "price",
          image: price,
        },
      ],
    },
  ];
  const { state, dispatch } = useStore();
  const [currentFilter, setCurrentFilter] = useState(filtersData[0]);
  const [redirecter, setRedirecter] = useState(false);
  useEffect(() => {
    if (!state) return;
    if (redirecter && router.pathname == "/caradvisor") {
      /*  here is the solution! */
      Router.push("/comparePage");
      setRedirecter(false);
    }
    state?.categorys.length > 0 ? setCurrentFilter(filtersData[1]) : null;
    state?.rangeLithiums.length > 0 ? setCurrentFilter(filtersData[2]) : null;
    state?.loadingWeights.length > 0 ? setCurrentFilter(filtersData[3]) : null;
    state?.prices.length > 0 ? setRedirecter(true) : null;
  }, [
    state?.prices,
    state?.loadingWeights,
    state?.rangeLithiums,
    state?.maxSpeeds,
    state?.chargingTimeLithiums,
    state?.categorys,

    redirecter,
  ]);

  return (
    <div
      className={
        router.pathname == "/home"
          ? "flex flex-col flex-1 bg-white sm:mt-4"
          : "flex flex-col flex-1"
      }
    >
      <div className="flex flex-col items-center justify-center flex-1 min-h-[400px]">
        {!redirecter ? (
          <h2 className="flex items-center mx-12 my-4 text-xl font-bold text-center sm:text-3xl text-black-dark h-28 sm:mx-4">
            {currentFilter.title}
          </h2>
        ) : (
          <div className="px-4 pt-8">
            <h3 className="text-xl text-center sm:text-3xl ">
              Wir suchen das passende Fahrzeug für Sie.
            </h3>
            <div className="w-[90%] lg:w-full lg:scale-125 m-auto ">
              <CarBrandsLogos getBrands={getBrands} />
            </div>
            <div className="flex justify-center ">
              <Image
                src="/images/loading.gif"
                width={100}
                height={100}
                className="loading"
                objectFit="contain"
              />
            </div>
          </div>
        )}
        <div className="">
          <FunnelBoxTest
            currentFilter={currentFilter}
            redirecter={redirecter}
          />
        </div>
      </div>
      <div className={!redirecter ? "hidden" : "visible"}>
        <ButtonForAlleTransporter />
      </div>
    </div>
  );
}
