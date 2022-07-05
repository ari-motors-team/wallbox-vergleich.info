import StartsRating from "../repeated/StarsRating";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
import Link from "next/link";

import { useRouter } from "next/router";
import CarCardProps from "./CarCardProps";
import TestVerdictVertical from "../repeated/TestVerdictVertical";

function CarCardDetailsDesktop({ carItem, rev, reviewDate, getAllReviews }) {
  const router = useRouter();
  /*   let reviewDate = getCarsReview.publishedAt;
   */
  return (
    <div className="flex flex-col justify-center w-full h-52 xl:h-64">
      <Link href={`/transporter/${carItem?.name}`}>
        <a className="relative">
          <h3
            className={
              router.query.cartitle
                ? "hidden"
                : "pl-8 relative text-blue-extra text-2xl font-bold hidden 2xl:block"
            }
          >
            {carItem?.title}
          </h3>
        </a>
      </Link>
      <div className="grid w-full grid-cols-2 px-2 2xl:grid-cols-2 3xl:grid-cols-3">
        <div className="flex flex-col justify-between h-48 py-4 ">
          <CarCardProps
            details={
              carItem?.rangeLithium.value
                ? carItem?.rangeLithium
                : carItem?.range230V
            }
            image={image}
          />
          <CarCardProps details={carItem?.loadingWeight} image={image2} />
        </div>
        <div className="flex flex-col justify-between h-48 py-4 ">
          <CarCardProps
            details={
              carItem?.chargingTimeLithium.value
                ? carItem?.chargingTimeLithium
                : carItem?.chargingTime230V
            }
            image={image4}
          />
          <CarCardProps details={carItem?.maxSpeed} image={image3} />
        </div>

        <div className="relative items-center justify-center flex-1 hidden 3xl:flex">
          <div className="relative bottom-1 flex flex-col items-center w-36 h-40 scale-75 2xl:scale-[83%] justify-evenly">
            {/* <StartsRating stars={carItem?.rating.value} /> */}
            <TestVerdictVertical
              carItem={carItem}
              getAllReviews={getAllReviews}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarCardDetailsDesktop;
