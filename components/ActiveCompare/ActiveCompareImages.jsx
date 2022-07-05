import Link from "next/link";
import Image from "next/image";
import image from "../../public/images/345-front-1-.jpg";

export default function ActiveCompareImages({ comparedCars }) {
  return (
    <>
      {/* PLACEHOLDER */}
      <div className="relative h-full bg-grey-lighter lg:pl-8 min-w-[160px] ">
        <button className="absolute hidden h-10 text-sm bg-white rounded-md w-52 text-blue-darker lg:block top-4 left-8">
          <Link href="/comparePage">
            <a className="visited:text-blue-darker">
              « zurück zur Ergebnisliste
            </a>
          </Link>
        </button>

        <div className="relative invisible cursor-pointer">
          <a className="w-full">
            <Image
              className="rounded-md md:rounded-lg "
              src={image}
              alt="picture"
              objectFit="contain"
              width={380}
              height={250}
            ></Image>

            <div className="lg:absolute lg:top-0 left-4">
              <h3 className="text-sm font-black text-blue-extra lg:text-white md:pt-2 lg:text-lg line-clamp-3">
                random name
              </h3>
            </div>
          </a>
        </div>
      </div>
      {comparedCars.length ? (
        comparedCars.map((item, index) => (
          <div
            className="relative h-full bg-grey-lighter p-4 sm:pl-10 md:pl-4 min-w-[160px]"
            key={index}
          >
            <div className="relative cursor-pointer">
              <Link href={`/transporter/${item.name}`}>
                <a>
                  <Image
                    className="rounded-md md:rounded-lg brightness-[0.7] "
                    src={item.src}
                    alt="picture"
                    objectFit="cover"
                    width={380}
                    height={250}
                  ></Image>

                  <div className="lg:absolute lg:top-0 left-4">
                    <h3 className="text-sm font-bold text-blue-extra lg:text-white md:pt-2 lg:text-xl line-clamp-3">
                      {item.title}
                    </h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="absolute px-4 text-lg top-24">
          Sie haben keine Autos zum Vergleich ausgewählt.
          <Link href="/comparePage">
            <a className="visited:text-blue-darker">
              <span className="pl-2 font-bold text-blue-dark">
                Zurück zur Ergebnisliste
              </span>
            </a>
          </Link>
        </p>
      )}
    </>
  );
}
