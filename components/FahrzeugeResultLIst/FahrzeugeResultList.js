import { useStore } from "../store";
import { useState } from "react";

import ButtonForAlleTransporter from "../Sliders/ButtonForAlleTransporter";
import Link from "next/link";
import Image from "next/image";
import CarInfoCard from "./CarInfoCard";
import Funnel from "../Caradvisor/Funnel";
import CompareTool from "../repeated/CompareTool";
const FahrzeugeResultList = ({
  sortedCars,
  getCarsReview,
  getContent,
  getMarkdownContext,
  getBrands,
}) => {
  return (
    <div className="flex flex-col flex-1 mb-10 lg:w-full lg:bg-white">
      {sortedCars
        ?.map((carItem, index) => {
          return (
            <div className="flex flex-col mt-4 lg:flex-row" key={index}>
              <CarInfoCard
                carItem={carItem}
                getCarsReview={getCarsReview}
                objectFit={"cover"}
              />
            </div>
          );
        })
        .slice(0, 5)}
      <div className="mt-8 mb-6 lg:mt-24 lg:mb-16">
        <CompareTool />
      </div>
      {sortedCars
        ?.map((carItem, index) => {
          return (
            <div className="flex flex-col mt-4 lg:flex-row" key={index}>
              <CarInfoCard carItem={carItem} getCarsReview={getCarsReview} />
            </div>
          );
        })
        .slice(6, 11)}
      <Funnel getBrands={getBrands} />
      {sortedCars
        ?.map((carItem, index) => {
          return (
            <div className="flex flex-col mt-4 lg:flex-row" key={index}>
              <CarInfoCard carItem={carItem} getCarsReview={getCarsReview} />
            </div>
          );
        })
        .slice(12)}
    </div>
  );
};
export default FahrzeugeResultList;
