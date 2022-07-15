import Link from "next/link";
import { useRouter } from "next/router";
function CarCardDetailsMobile({ wallboxItem }) {
  const router = useRouter();

  // const { cartitle } = router.query;

  return (
    <div className="flex flex-col justify-between flex-1 lg:hidden">
      <div className="flex flex-col justify-between px-2 pt-4 print:hidden">
        <div className="flex flex-col justify-between flex-1 mb-0 text-sm xl:mb-2">
          <div className="flex flex-row flex-1 py-1 ">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="w-[65%] font-bold leading-7 text-grey-dark ">
                {wallboxItem?.connection.key}:
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark ">
                {wallboxItem?.connection.value}
                {wallboxItem?.connection.baseUnit}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1 py-1">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="font-bold leading-7 text-grey-dark w-[65%]">
                {wallboxItem?.operatingTemperatur.key}
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark">
                {wallboxItem?.operatingTemperatur.value}
                {wallboxItem?.operatingTemperatur.baseUnit}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 text-sm xm:w-1/2 ">
          <div className="flex flex-row flex-1 py-1">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="w-[65%] font-bold leading-7 text-grey-dark">
                {wallboxItem?.power.value}
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark ">
                {wallboxItem.maxValue
                  ? `${wallboxItem.value}-${wallboxItem.maxValue}`
                  : wallboxItem.value}
                {wallboxItem?.power.baseUnit}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1 py-1 ">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="w-[65%] font-bold leading-7 text-grey-dark">
                {wallboxItem?.guarantee.key}:
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark">
                {wallboxItem?.guarantee.value}
                {wallboxItem?.guarantee.baseUnit}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          router.query.cartitle ? "hidden" : "flex flex-wrap justify-end"
        }
      >
        <Link href={`/transporter/${wallboxItem?.name}`}>
          <a className="px-4 py-2 m-4 border-2 rounded border-blue-darker text-blue-darker visited:text-blue-dark w-fit">
            Zur Produktseite
          </a>
        </Link>
      </div>
    </div>
  );
}
export default CarCardDetailsMobile;
