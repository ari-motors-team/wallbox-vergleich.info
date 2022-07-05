import Link from "next/link";
import Image from "next/image";
import { useStore } from "../store";
import { useRouter } from "next/router";

import Router from "next/router";
export default function FunnelBox({ currentFilter, redirecter }) {
  const { state, dispatch } = useStore();
  const router = useRouter();

  return !redirecter ? (
    <div
      className={
        router.pathname == "/home"
          ? "flex flex-wrap w-[90%] md:w-full justify-center lg:pb-12"
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
            className="flex flex-col items-center justify-center w-32 h-32 m-2 transition bg-white cursor-pointer shadow-dropdown sm:w-40 lg:w-56 lg:h-56 xl:w-64 sm:h-40 xl:h-64 sm:mb-8 hover:scale-110"
          >
            <div className="w-24 h-24 pt-4 sm:w-36 lg:w-44 lg:h-44 xl:w-60 sm:h-36 xl:h-60">
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
  ) : (
    <div></div>
  );
}
