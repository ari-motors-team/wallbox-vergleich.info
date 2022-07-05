import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import usePrice from "../../hooks/usePrice";
import { useStore } from "../store";
function CarCardforPopUp(props) {
  const { state, dispatch } = useStore();
  const price = usePrice(props.selectedCar?.price);

  return (
    <div className="w-[80%] md:w-full relative ">
      <div className="relative w-16 md:w-full">
        <Image
          className=" md:rounded-md brightness-50"
          src={props.selectedCar.pic}
          alt="picture"
          objectFit="fill"
          width={228.97}
          height={125}
          layout="responsive"
        />
        <div className="absolute items-center justify-center hidden md:flex top-1 left-1">
          <h4 className="text-base font-black text-white  lg:text-lg">
            {props.selectedCar.title}
          </h4>
        </div>
      </div>
      {/* <div className="flex w-full md:hidden">
        <p className="pt-2 text-center text-white">
          Das kann nen langen Namen haben X153
        </p>
      </div> */}

      <div className="absolute hidden md:flex md:bottom-6 lg:bottom-1 right-2 ">
        <p className="text-lg font-black text-white">{`ab ${price}`}</p>
      </div>
      <div
        className="absolute cursor-pointer top-1 right-1"
        onClick={() => {
          dispatch({
            type: "disabledButton",
            data: props.selectedCar.title,
          });
          dispatch({
            type: "autoForComparison",
            data: state.autoForComparisons.filter(
              (el) => el !== props.selectedCar
            ),
          });
        }}
      >
        <AiOutlineClose size={20} color="white" />
      </div>
    </div>
  );
}
export default CarCardforPopUp;
