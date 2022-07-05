import Link from "next/link";
import Image from "next/image";
import Logo_SVG from "../repeated/Logo_SVG.js";

const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full pl-4 sm:justify-start print:hidden">
      <div className="relative ">
        <Link href={"/"}>
          <a className="relative block w-12 2xl:w-16">
            <Logo_SVG />
          </a>
        </Link>
      </div>
      <div className="w-fit print:hidden">
        <Link href={"/"}>
          {/* <a aria-label="home">
            <p className="pb-1 pl-1 text-xs font-bold tracking-wider text-white cursor-pointer sm:text-xxs">
              ELEKTROTRANSPORTER
              <br />
              VERGLEICH
            </p>
          </a> */}
          <div className="flex flex-col">
            <div className="flex items-center tracking-wide">
              <p className="pl-2 text-xs font-semibold text-white md:text-xs 2xl:text-sm">
                ELEKTROTRANSPORTER
              </p>
            </div>
            <div className="relative flex items-center tracking-wide">
              <p className="relative pl-2 text-xs font-semibold text-white bottom-1 md:text-xs 2xl:text-sm">
                VERGLEICH
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
