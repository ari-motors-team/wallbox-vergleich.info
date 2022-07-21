import CarCard from "./CarCard.js";
import { useStore } from "../store";
import { useState, useEffect } from "react";

import ButtonForAlleTransporter from "../../components/Sliders/ButtonForAlleTransporter";
const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const [shownWallboxes, setShownWallboxes] = useState([]);

  /* useEffect to apply the filters */
  useEffect(() => {
    if (
      !state?.prices ||
      !state?.electricityCounters ||
      !state?.chargeStatusPreviews ||
      !state?.IPprotections ||
      !state?.powers ||
      !state?.connections ||
      !state?.brands ||
      props.sortedWallboxes.length === 0
    )
      return;

    let filteredWallboxes = props.sortedWallboxes?.filter((wallbox) => {
      if (
        state?.prices?.length > 0 &&
        state?.prices?.every(
          (entry) => entry.min > wallbox.price || entry.max < wallbox.price
        )
      )
        return false;

      if (
        state?.electricityCounters?.length > 0 &&
        !state?.electricityCounters?.some(
          (entry) => entry.min == wallbox.electricityCounter.value
        )
      )
        return false;
      if (
        state?.chargeStatusPreviews?.length > 0 &&
        !state?.chargeStatusPreviews?.some(
          (entry) => entry.min == wallbox.chargeStatusPreview.value
        )
      )
        return false;
      if (
        state?.IPprotections?.length > 0 &&
        !state?.IPprotections?.some(
          (entry) => entry.min == wallbox.IPprotection.value
        )
      )
        return false;
      if (
        state?.powers?.length > 0 &&
        !state?.powers?.some((entry) => entry.min.match(wallbox.power.value))
      )
        return false;
      if (
        state?.connections?.length > 0 &&
        !state?.connections?.some((entry) =>
          entry.min.match(wallbox.connection.baseUnit)
        )
      )
        return false;
      /* FOR THE POTENTIAL CABLE METER COUNTER */
      // if (
      //   state?.connections?.length > 0 &&
      //   !state?.connections?.some(
      //     (entry) =>
      //       entry.min <
      //       wallbox.connection.value.reduce((max, x) =>
      //         Number(max) < Number(x) ? Number(x) : Number(max)
      //       )
      //   )
      // )
      //   return false;
      if (
        state?.brands?.length > 0 &&
        !state?.brands?.some((entry) => entry.match(wallbox.manufacturer))
      )
        return false;
      return true;
    });

    setShownWallboxes(filteredWallboxes);
    //  setShownWallboxes(props.sortedWallboxes);
  }, [
    state?.prices,
    state?.brands,
    state?.electricityCounters,
    state?.chargeStatusPreviews,
    state?.IPprotections,
    state?.powers,
    state?.connections,
    props.sortedWallboxes,
  ]);
  /* ɢᴇᴛ pop up for not meeting criteria */
  const showMoreMessage = (
    <div className="mx-auto">
      <p className="px-4 pt-4 text-center md:text-xl text-black-darkest">
        Ist ihr gesuchter Transporter nicht dabei?
      </p>

      <ButtonForAlleTransporter />
    </div>
  );

  const getdisplayedWallboxes = shownWallboxes?.map((wallboxItem, index) => {
    return (
      <div className="w-full container-product md:pl-4" key={index}>
        {/* <div className="product-icon"></div> */}
        <CarCard
          wallboxItem={wallboxItem}
          getAllReviews={props.getCarsReviews}
        />
      </div>
    );
  });

  return (
    <div className="flex flex-col flex-1 lg:w-full lg:bg-white">
      {shownWallboxes?.length === 0 ? showMoreMessage : getdisplayedWallboxes}
    </div>
  );
};
export default ResultList;
