import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../store";

function CarCardForPopUpMobile(props) {
  const { state, dispatch } = useStore();

  return (
    <div className="grid grid-cols-3  ">
      <div className="relative w-16 sm:w-28 mx-2 mt-1  ">
        <Image
          className=" rounded-sm brightness-[0.75]"
          src={props.selectedCar.pic}
          alt="picture"
          objectFit="cover"
          width={380}
          height={250}
          layout="responsive"
        />
        <p className="text-sm text-white text-center line-clamp-2">
          {props.selectedCar.title}
        </p>
        <div
          className="absolute top-0 right-0 cursor-pointer"
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
    </div>
  );
}

export default CarCardForPopUpMobile;
