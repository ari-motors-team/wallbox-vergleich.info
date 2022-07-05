import Link from "next/link";
import Image from "next/image";
import { useStore } from "../store";
import { useRouter } from "next/router";

import Router from "next/router";
export default function FunnelBoxTest({ currentFilter, redirecter }) {
  const { state, dispatch } = useStore();
  const router = useRouter();

  return !redirecter ? (
    <div
      className={
        router.pathname == "/home"
          ? "grid grid-cols-2 sm:grid-cols-4 bg-white gap-4 w-full scale-[85%]"
          : "flex flex-wrap w-[90%] md:w-full justify-center pb-10 lg:pb-12"
      }
    >
      {currentFilter.options.map((item, index) => {
        return (
          <div
            onClick={() => {
              item.categoryName === "category"
                ? Router.push("/caradvisor")
                : null;
              dispatch({
                type: item.categoryName,

                data: [{ min: item.value, max: item.max }],
              });
            }}
            key={index}
            className="flex flex-col items-center justify-center transition bg-white cursor-pointer w-28 h-28 shadow-dropdown sm:w-40 lg:w-44 lg:h-4w-44 xl:w-56 sm:h-40 xl:h-56 sm:mb-8 hover:scale-110 2xl:w-72 2xl:h-72"
          >
            <div className="w-full p-4">
              <Image
                src={item.image}
                alt="picture"
                objectFit="contain"
                width={48}
                height={28}
                layout="responsive"
              />
            </div>
            <p className="py-4 text-sm font-bold text-black lg:text-lg xl:text-xl">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  ) : null;
}
