import TopSliderCard from "../Sliders/TopSliderCard";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// import Script from "next/script";
import { useState, useRef, useEffect } from "react";
const sellingRanking = {
  "ari-458-pritsche": 13,
  /* "Piaggo Porter": 12, */
  "alke-atx-340-e-pritsche": 11,
  "evum-a-car-pritsche": 10,
  "Addax MT": 9,
  "Citroen eJumpy": 8,
  "Aixam Pro e-Truck": 7,
  "opel-vivaro-e-cargo": 6,
  "ari-458-koffer": 5,
  "vw-abt-e-caddy": 4,
  "efa-s-e35": 3,
  "garia-utility-park-ec-pritsche": 2,
  /* "Renault Kangoo Z.E": 1, */
};

const TopSlider = ({ getBlogContext, getCars }) => {
  const container = useRef();

  const [sliderData, setSliderData] = useState(
    getBlogContext ? [getBlogContext].concat(getCars) : getCars
  );

  useEffect(() => {
    setSliderData(getBlogContext ? [getBlogContext].concat(getCars) : getCars);
  }, [getCars]);

  return (
    <div className="relative pb-8">
      <div className="flex justify-center overflow-hidden ">
        <div
          onClick={(e) => {
            container.current.scrollLeft -= 293;
          }}
          className={
            getCars.length >= 4
              ? " hidden xl:flex items-center hover:scale-110 bg-white transition relative"
              : "hidden"
          }
        >
          <div className="absolute top-64 right-10">
            <FaArrowCircleLeft size={40} color="#243280" />
          </div>
        </div>

        <div className="relative print:hidden flex flex-col w-full xl:w-[1220px] ">
          <h2 className="relative px-6 pb-4 text-3xl font-black tracking-wide text-left no-select text-black-dark">
            Jetzt vergleichen!
          </h2>
          <div className="absolute w-10 p-1 bg-white rounded-full left-[310px] 2xl:hidden">
            <Image
              src="/images/swipe.gif"
              width={100}
              height={100}
              alt="swipe"
              layout="responsive"
              objectFit="contain"
            ></Image>
          </div>

          <div
            className="grid grid-flow-col gap-4 auto-cols-[minmax(293px,_1fr)] overflow-x-scroll scrollbar-hide pt-2 snap-x "
            ref={container}
          >
            <TopSliderCard
              getCars={sliderData
                ?.sort((a, b) =>
                  a.slug === b.slug ? 0 : a.slug < b.slug ? -1 : 1
                )
                .sort(
                  (a, b) =>
                    1 - (sellingRanking[a.name] ? sellingRanking[a.name] : 0)
                )}
            />
          </div>
        </div>

        <div
          onClick={() => (container.current.scrollLeft += 293)}
          className={
            getCars.length >= 4
              ? "xl:flex items-center hidden pr-1 hover:scale-110 transition relative"
              : "hidden"
          }
        >
          <div className="absolute top-64 left-10">
            <FaArrowCircleRight size={40} color="#243280" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopSlider;
