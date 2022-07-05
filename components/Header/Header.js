import Nav from "../Header/Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useStore } from "../store";
import { useRouter } from "next/router";
import Logo_SVG from "../repeated/Logo_SVG.js";

const Header = () => {
  const { state, dispatch } = useStore();
  const router = useRouter();
  return (
    <div className="relative shadow-card print:hidden ">
      <div className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-20 bg-blue-darker sm:h-24 2xl:px-40">
        <Link href={`/`} passHref>
          <div
            className="flex flex-row pl-2 cursor-pointer sm:mt-1 sm:pl-4"
            onClick={() => {
              dispatch({
                type: "mobileNavActive",
                data: false,
              });
              dispatch({
                type: "rangeLithium",
                data: [],
              });
              dispatch({
                type: "loadingWeight",
                data: [],
              });
              dispatch({
                type: "price",
                data: [],
              });
              dispatch({
                type: "maxSpeed",
                data: [],
              });
              dispatch({
                type: "category",
                data: [],
              });
              dispatch({
                type: "chargingTimeLithium",
                data: [],
              });
            }}
          >
            <div className="w-[50px] sm:w-[80px] ml-2 sm:ml-0 sm:mt-1">
              <Logo_SVG />
            </div>
            <div className="flex flex-col ">
              <div className="relative flex items-center tracking-wide ">
                <p className="relative pl-2 font-semibold text-white text-xxs sm:text-sm lg:text-lg sm:top-1 lg:top-0">
                  ELEKTROTRANSPORTER
                </p>
              </div>
              <div className="relative flex items-center tracking-wide">
                <p className="relative pl-2 font-semibold text-white text-xxs sm:text-sm sm:top-2 lg:-top-1 lg:text-lg">
                  VERGLEICH
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="hidden lg:block w-[50%]">
          <Nav />
        </div>

        <div className="absolute right-0 w-full top-20 lg:hidden sm:w-96 ">
          <MobileNav />
        </div>

        {/* BUTTON */}

        <div
          className={
            router.pathname !== "/caradvisor" ? "pr-18 lg:pr-6" : "hidden"
          }
        >
          <Link href="/caradvisor" passHref>
            <a>
              <div
                className="items-center hidden text-sm font-bold transition rounded cursor-pointer bg-yellow-light hover:bg-orange-lighter text-grey-darker md:flex justify-evenly h-9 w-28 xs:w-36 "
                onClick={() => {
                  dispatch({
                    type: "rangeLithium",
                    data: [],
                  });
                  dispatch({
                    type: "loadingWeight",
                    data: [],
                  });
                  dispatch({
                    type: "price",
                    data: [],
                  });
                  dispatch({
                    type: "maxSpeed",
                    data: [],
                  });
                  dispatch({
                    type: "category",
                    data: [],
                  });
                  dispatch({
                    type: "chargingTimeLithium",
                    data: [],
                  });
                }}
              >
                <div className="w-6 pl-2 xs:w-8 ">
                  <Image
                    src="/images/iconStyle2x.png"
                    width={18}
                    height={18}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <span className="pr-3 text-xs xs:text-base ">Kaufberater</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch({
            type: "mobileNavActive",
            data: !state?.mobileNavActives,
          });
        }}
        className={
          router.pathname == "/caradvisor"
            ? "hidden"
            : "ham-menu-container absolute right-4 sm:top-9 top-7 lg:hidden z-40 "
        }
      >
        <div className={!state?.mobileNavActives ? "menu" : "hidden"}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <span className={!state?.mobileNavActives ? "hidden" : "block pr-0.5"}>
          <AiOutlineClose size={26} fill=" #fff" />
        </span>
      </div>
    </div>
  );
};
export default Header;
