import { useState, useEffect } from "react";
import Basics from "./Basics";
import WallboxDimentions from "./WallboxDimentions";
import Details from "./Details";

const TechnicalDetails = ({ wallboxItem }) => {
  const [basics, SetBasics] = useState([]);
  const [wallboxDimentions, SetWallboxDimentions] = useState([]);
  const [details, SetDetails] = useState([]);

  /* to get the new data in case they are updated */
  /* get two subsets of the car properties to map them */
  useEffect(() => {
    const basics = [
      wallboxItem.connection,
      wallboxItem.operatingTemperatur,
      wallboxItem.subsidies,

      wallboxItem.connection230VAvailability,
      wallboxItem.weatherResistance,
    ];
    SetBasics(basics);
    const details = [
      wallboxItem.power,
      wallboxItem.guarantee,
      wallboxItem.tension,

      wallboxItem.electricityCounter,
      wallboxItem.climateNeutral,
      wallboxItem.consumption,
    ];

    SetDetails(details);
    const wallboxDimentions = [
      wallboxItem.wallboxeSizesHeight,
      wallboxItem.wallboxeSizesLength,
      wallboxItem.wallboxeSizesWidth,
      wallboxItem.sizesTotal,
      wallboxItem.weight,
      wallboxItem.colour,
    ];

    SetWallboxDimentions(wallboxDimentions);
  }, [wallboxItem]);

  return (
    <div className="flex flex-col items-start justify-center w-full pt-8 pb-16 lg:pt-12 lg:px-4 ">
      <h3 className="pl-4 text-3xl font-bold text-blue-extra lg:text-4xl print:h-0 print:hidden">
        Technische Daten
      </h3>
      <div className="flex flex-col w-full lg:flex-row print:flex-row ">
        <Basics basics={basics} wallboxItem={wallboxItem} />
        <WallboxDimentions
          wallboxDimentions={wallboxDimentions}
          wallboxItem={wallboxItem}
        />

        <Details details={details} wallboxItem={wallboxItem} />
      </div>
      {/* <div className="flex flex-col w-full m-auto lg:w-1/2 ">
      </div> */}
    </div>
  );
};
export default TechnicalDetails;
