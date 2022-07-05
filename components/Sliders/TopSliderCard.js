import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import StarsRating from "../repeated/StarsRating";

const TopSliderCard = (props) => {
  return props?.getCars
    ? props?.getCars?.map((sliderItem, index) => (
        <div
          className="relative pb-4 border rounded-sm shadow-dropdown hover:scale-[101%] snap-center lg:snap-start h-[470px] ease-in-out duration-100 transition"
          key={index}
        >
          <div className="">
            <div className="w-full">
              <Link
                href={
                  sliderItem?.name
                    ? `/transporter/${sliderItem.name}`
                    : `/magazin/${sliderItem.category}/${sliderItem.slug}`
                }
                passHref
              >
                <a>
                  {sliderItem.src && (
                    <Image
                      className="rounded-sm "
                      src={sliderItem.src}
                      alt={sliderItem.name}
                      objectFit="cover"
                      width={380}
                      height={270}
                    />
                  )}
                </a>
              </Link>
              <Link
                href={
                  sliderItem?.name
                    ? `/transporter/${sliderItem.name}`
                    : `/magazin/${sliderItem.category}/${sliderItem.slug}`
                }
              >
                <a>
                  <h3 className="mt-8 mb-4 text-xl font-black tracking-wide text-center text-black-dark line-clamp-1">
                    {sliderItem?.title}
                  </h3>
                </a>
              </Link>
              <div className="slider__item-text">
                <p
                  className={
                    !sliderItem?.rating
                      ? "px-2 text-sm text-center font-Inter text-blue-light line-clamp-5"
                      : "px-2 text-sm text-center font-Inter text-blue-light line-clamp-2"
                  }
                >
                  {sliderItem?.description}
                </p>
              </div>
              {sliderItem?.rating && (
                <div className="flex justify-center pt-8">
                  <StarsRating stars={sliderItem?.rating.value} />
                </div>
              )}

              <div className="absolute flex items-center justify-center w-full mt-8 text-center bottom-6 ">
                <Link
                  href={
                    sliderItem?.name
                      ? `/transporter/${sliderItem.name}`
                      : `/magazin/${sliderItem.category}/${sliderItem.slug}`
                  }
                >
                  <a className="pr-4 text-xs text-center visited:text-blue-darker text-blue-darker">
                    {sliderItem?.name ? "Jetzt vergleichen" : "Mehr erfahren"}
                  </a>
                </Link>

                <div className="">
                  <HiOutlineArrowRight color="blue" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    : null;
};
export default TopSliderCard;
