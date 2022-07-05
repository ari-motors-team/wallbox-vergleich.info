import CarCard from "./CarCard.js";
import { useStore } from "../store";
import { useState, useEffect } from "react";

import ButtonForAlleTransporter from "../../components/Sliders/ButtonForAlleTransporter";
const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const [shownCars, setShownCars] = useState([]);

  /* useEffect to apply the filters */
  useEffect(() => {
    if (
      !state?.prices ||
      !state?.loadingWeights ||
      !state?.rangeLithiums ||
      !state?.maxSpeeds ||
      !state?.chargingTimeLithiums ||
      !state?.categorys ||
      !state?.brands ||
      props.sortedCars?.length === 0
    )
      return;
    /*   if (state?.brands?.length > 0) {
      let filteredCarsUponBrand = props.sortedCars.filter((car) => {
        return state.brands.filter((brand) => brand.includes(car.brand));
      }); */

    /*  filteredCars = filteredCars.filter((car, index) => {

        return car.name.split(/[\s-]+/)[0] == state?.brands.split(/[\s-]+/)[0];
      }); */
    /* let sortedCars = vehicles.filter(
   (car) =>
     car.name.split(/[\s-]+/)[0] == context.params.brand.split(/[\s-]+/)[0]
 ); */
    let filteredCars = props.sortedCars?.filter((car) => {
      let rangeval = car.rangeLithium.value;
      let chargingTimeval = car.chargingTimeLithium.value;
      //declaring the right range and charging time according to the battery
      car.rangeLithium.value == 0 ? (rangeval = car.range230V.value) : null;
      car.chargingTimeLithium.value == 0
        ? (chargingTimeval = car.chargingTime230V.value)
        : null;
      if (
        state?.prices?.length > 0 &&
        state?.prices?.every(
          (entry) => entry.min > car.price || entry.max < car.price
        )
      )
        return false;

      if (
        state?.loadingWeights?.length > 0 &&
        state?.loadingWeights?.every(
          (entry) =>
            entry.min > car.loadingWeight.value ||
            entry.max < car.loadingWeight.value
        )
      )
        return false;
      if (
        state?.rangeLithiums?.length > 0 &&
        state?.rangeLithiums?.every(
          (entry) => entry.min > rangeval || entry.max < rangeval
        )
      )
        return false;
      if (
        state?.maxSpeeds?.length > 0 &&
        state?.maxSpeeds?.every(
          (entry) =>
            entry.min > car.maxSpeed.value || entry.max < car.maxSpeed.value
        )
      )
        return false;
      if (
        state?.chargingTimeLithiums?.length > 0 &&
        state?.chargingTimeLithiums?.every(
          (entry) => entry.min > chargingTimeval || entry.max < chargingTimeval
        )
      )
        return false;
      if (
        state?.categorys?.length > 0 &&
        !state?.categorys?.some((entry) => entry.min == car.category)
      )
        return false;
      if (
        state?.brands?.length > 0 &&
        !state?.brands?.some(
          (entry) => entry.split(/[\s-]+/)[0] == car.name.split(/[\s-]+/)[0]
        )
      )
        return false;
      return true;
    });

    setShownCars(filteredCars);
  }, [
    state?.prices,
    state?.loadingWeights,
    state?.rangeLithiums,
    state?.maxSpeeds,
    state?.chargingTimeLithiums,
    state?.categorys,
    state?.brands,
    props.sortedCars,
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
  /* ɢᴇᴛ the cars upon filters */

  const getdisplayedCars = shownCars?.map((carItem, index) => {
    return (
      <div className="w-full container-product md:pl-4" key={index}>
        {/* <div className="product-icon"></div> */}

        <CarCard
          carItem={carItem}
          getAllReviews={props.getCarsReviews}
          /* rev={props.getCarsReview
            .map((item, index) => {
              let res;
              carItem?.relatedReviews == item.slug ? (res = index) : null;
              return res;
            })
            .find((value) => value != undefined)}
          reviewDate={
            props.getCarsReview.find(
              (item) => item.slug == carItem?.relatedReviews
            ).publishedAt || 22
          } */
        />
      </div>
    );
  });

  return (
    <div className="flex flex-col flex-1 lg:w-full lg:bg-white">
      {shownCars?.length === 0 ? showMoreMessage : getdisplayedCars}
    </div>
  );
};
export default ResultList;
