import Link from "next/link";
import { useRouter } from "next/router";
function CarCardDetailsMobile({ carItem }) {
  const router = useRouter();

  // const { cartitle } = router.query;

  //declaring the right range and charging time according to the battery
  let range = carItem.rangeLithium;
  carItem.rangeLithium.value == 0 ? (range = carItem.range230V) : null;
  return (
    <div className="flex flex-col justify-between flex-1 lg:hidden">
      <div className="flex flex-col justify-between px-2 pt-4 print:hidden">
        <div className="flex flex-col justify-between flex-1 mb-0 text-sm xl:mb-2">
          <div className="flex flex-row flex-1 py-1 ">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="w-[65%] font-bold leading-7 text-grey-dark ">
                {carItem?.loadingWeight.key}:
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark ">
                {carItem?.loadingWeight.value}
                {carItem?.loadingWeight.baseUnit}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1 py-1">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="font-bold leading-7 text-grey-dark w-[65%]">
                {carItem?.maxSpeed.key}
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark">
                {carItem?.maxSpeed.value}
                {carItem?.maxSpeed.baseUnit}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 text-sm xm:w-1/2 ">
          <div className="flex flex-row flex-1 py-1">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="w-[65%] font-bold leading-7 text-grey-dark">
                {carItem?.rangeLithium.value
                  ? carItem?.rangeLithium.key
                  : carItem?.range230V.key}
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark ">
                {range.maxValue
                  ? `${range.value}-${range.maxValue}`
                  : range.value}
                {carItem?.rangeLithium.baseUnit}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1 py-1 ">
            <div className="flex flex-row justify-between flex-1 border-b">
              <div className="w-[65%] font-bold leading-7 text-grey-dark">
                {carItem?.chargingTimeLithium.key
                  ? carItem?.chargingTimeLithium.key
                  : carItem?.chargingTime230V.key}
                :
              </div>
              <div className="flex items-end w-[35%] pl-2 font-bold leading-7 text-blue-dark">
                {carItem?.chargingTimeLithium.value
                  ? carItem?.chargingTimeLithium.value
                  : carItem?.chargingTime230V.value}
                {carItem?.chargingTimeLithium.baseUnit}
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
        <Link href={`/transporter/${carItem?.name}`}>
          <a className="px-4 py-2 m-4 border-2 rounded border-blue-darker text-blue-darker visited:text-blue-dark w-fit">
            Zur Produktseite
          </a>
        </Link>
      </div>
    </div>
  );
}
export default CarCardDetailsMobile;
