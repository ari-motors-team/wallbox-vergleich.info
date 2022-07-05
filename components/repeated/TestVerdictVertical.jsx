import Image from "next/image";
import { FcCheckmark } from "react-icons/fc";
import StarsRating from "./StarsRating";
const TestVerdictVertical = ({ reviewDate, getAllReviews, carItem }) => {
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
    <div className="relative w-[150px] xs:min-w-[150px] h-full bg-white border-2 rounded-sm mx-auto xs:mx-0">
      <div className="relative text + stars + icon ">
        <div className="text + stars flex flex-col ">
          <div className="flex justify-center">
            <p className="text-[19px] font-extrabold pt-1 text-blue-darker">
              TESTURTEIL
            </p>
          </div>
          <div className="flex justify-center scale-95">
            <StarsRating stars={carItem.rating.value} />
          </div>
        </div>
        <div className="relative flex justify-center right-3 bottom-3 w-28 ">
          <Image
            src="/images/etv-logo-final.png"
            alt="test"
            width={120}
            height={120}
            objectFit="contain"
          />

          <div className="absolute bottom-10 left-[95px] sm:left-[100px] scale-75 sm:scale-100">
            <FcCheckmark size={50} />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center w-full px-8 bottom-1">
        <p className=" xs:text-[10px] text-xxs">
          ELEKTROTRANSPORTER-VERGLEICH.DE
          <span className="pl-3">{`${rev + 101}/${reviewDate}`}</span>
        </p>
      </div>
    </div>
  );
};

export default TestVerdictVertical;
