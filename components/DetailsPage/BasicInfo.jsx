import Link from "next/link";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";

import Image from "next/image";
import StarsRating from "../repeated/StarsRating";
import TestVerdictVertical from "../repeated/TestVerdictVertical";
import TestVerdict from "../repeated/TestVerdict";
const BasicInfo = ({
  carItem,
  getBlogContext,
  getTestReview,
  getCarsReview,
  getAllReviews,
}) => {
  return (
    <div className="flex flex-col w-full p-4 lg:flex-row lg:pt-12">
      <div className="flex flex-col justify-start w-full lg:w-1/2 print:w-1/2">
        <div className="pb-4 lg:w-64 lg:pb-8">
          <button className="w-48 h-10 text-sm bg-white border rounded-md print:hidden text-blue-darker">
            <Link href="/comparePage">
              <a className="visited:text-blue-darker">
                « zurück zur Ergebnisliste
              </a>
            </Link>
          </button>
        </div>
        <div className="w-full">
          <Image
            src={carItem?.src}
            alt={carItem?.title}
            width={195}
            height={140}
            layout="responsive"
            objectFit="cover"
            className="rounded-md lg:rounded-none lg:rounded-l-md"
          />
        </div>
      </div>
      <div className="flex flex-col pt-4 lg:pt-16 lg:w-1/2">
        {/* DESKTOP VERSION FOR DETAILS TABLE*/}
        <div className="flex-col justify-start hidden px-8 pb-2 lg:flex ">
          <h2 className="hidden p-2 text-3xl font-black 2xl:text-4xl lg:block text-blue-extra">
            {carItem.title}
          </h2>

          <CarCardDetailsDesktop
            carItem={carItem}
            getAllReviews={getAllReviews}
          />
        </div>

        {/* MOBILE VERSION DETAILS TABLE */}
        <div className="flex flex-col w-full my-4 lg:hidden">
          <div className="flex justify-center">
            <h2 className="w-full pb-2 text-2xl font-bold tracking-wide text-center xs:text-3xl md:text-left text-blue-extra ">
              {carItem.title}
            </h2>
            <div className="hidden scale-90 sm:block">
              <TestVerdictVertical
                carItem={carItem}
                getAllReviews={getAllReviews}
              />
            </div>
          </div>

          <div className="flex justify-center sm:hidden print:hidden lg:hidden">
            <TestVerdict carItem={carItem} getAllReviews={getAllReviews} />
          </div>

          <div>
            <CarCardDetailsMobile carItem={carItem} />
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col w-full lg:px-10">
          <h3 className="w-full pb-1 mt-4 text-2xl font-bold text-blue-extra">
            Über das Fahrzeug:
          </h3>
          <p className="h-auto overflow-hidden font-black leading-7 text-ellipsis">
            {carItem?.description}
          </p>
          {/* <span className="text-sm text-blue-dark">Alle Daten anzeigen</span> */}
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
