import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const CarInfoCard = ({ carItem, getCarsReview, objectFit }) => {
  const router = useRouter();
  return (
    <div className="px-4 2xl:px-0">
      {/* TITLE */}
      <div className="">
        <Link href={`/transporter/${carItem.name}`}>
          <a>
            <h3 className="flex pt-8 pb-4 text-2xl font-semibold leading-7 title sm:text-3xl text-black-darkest ">
              {carItem.title.split("-").join(" ")}
            </h3>
          </a>
        </Link>
      </div>
      {/* IMAGE + TEXT + LINK */}
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <p className="pb-4 pl-0 text-xl lg:pl-8 ">
          {carItem.description}

          <Link href={`/transporter/${carItem.name}`}>
            <a className="pl-2 font-semibold text-blue-dark">
              Lesen Sie hier den gesamten Beitrag zum Fahrzeug!
            </a>
          </Link>
        </p>
        <div className="flex items-center justify-center pb-4 ">
          <Link href={`/transporter/${carItem.name}`} passHref>
            <a className="relative w-full border rounded-md lg:w-96 border-blue-lighter">
              {carItem?.src && (
                <Image
                  className={
                    router.pathname ==
                    "/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich"
                      ? "rounded-md "
                      : "rounded-l-md "
                  }
                  src={carItem.src}
                  alt={carItem.title}
                  width={240}
                  height={159}
                  objectFit="cover"
                  layout="responsive"
                />
              )}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarInfoCard;
