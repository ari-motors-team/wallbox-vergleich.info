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
      wallboxItem.subsidies,
      wallboxItem.availability,
      wallboxItem.smartHomeCompatible,
      wallboxItem.languagesApp,
      wallboxItem.scheduledChargingTimer,
      wallboxItem.guarantee,
      wallboxItem.pVCompatible,
    ];
    SetBasics(basics);
    const details = [
      wallboxItem.connection230VAvailability,
      wallboxItem.connection,

      wallboxItem.connectionsNumber,
      wallboxItem.power,
      wallboxItem.consumption,
      wallboxItem.tension,
      wallboxItem.operatingTemperatur,

      wallboxItem.electricityCounter,
    ];

    SetDetails(details);
    const wallboxDimentions = [
      wallboxItem.wallboxeSizesHeight,
      wallboxItem.wallboxeSizesLength,
      wallboxItem.wallboxeSizesWidth,
      wallboxItem.weight,
      wallboxItem.colour,
      wallboxItem.protectionSensorType,
      wallboxItem.IPprotection,
      wallboxItem.IKprotection,
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
