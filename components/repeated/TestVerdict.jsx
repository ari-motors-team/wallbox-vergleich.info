import Image from "next/image";
import React from "react";
import StarsRating from "./StarsRating";

const TestVerdict = ({ reviewDate, getAllReviews, carItem }) => {
  let rev = getAllReviews
    .map((item, index) => {
      let res;
      carItem?.relatedReviews == item.slug ? (res = index) : null;
      return res;
    })
    .find((value) => value != undefined);
  /* date */
  reviewDate =
    getAllReviews.find((item) => item.slug == carItem?.relatedReviews)
      .publishedAt || 22;

  reviewDate = reviewDate.slice(-2);
  return (
    <div className="flex flex-col w-[230px] xs:w-[270px] py-4">
      <div className="text + stars + icon flex justify-between relative">
        <div className="text + stars">
          <p className="text-xl font-extrabold xs:text-2xl text-blue-darker">
            TESTURTEIL
          </p>
          <div className="xs:pl-3 xs:scale-[120%]">
            <StarsRating stars={carItem.rating.value} />
          </div>
        </div>
        <div className="absolute right-0 xs:right-4 w-[115px] -top-6">
          <Image
            src="/images/etv-logo-final.png"
            alt="test"
            width={170}
            height={170}
            objectFit="contain"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col pt-2">
        <p className="relative xs:text-xs text-xxs">
          ELEKTROTRANSPORTER-VERGLEICH.DE
          <span className="absolute -top-3 text-3xl text-[#3FA535]">✓</span>
        </p>
        <p className="text-sm text-grey-nav">{`Testbericht ${
          rev + 101
        } von ${reviewDate}`}</p>
      </div>
    </div>
  );
};

export default TestVerdict;
