import Image from "next/image";

function CarCardProps(props) {
  /*   let imagesForProp = [image, image2, image3, image4]; */

  return (
    <div className="flex items-center h-20 pl-2 xl:pl-4">
      <div className="rounded-full bg-[#E7EEF2] ">
        <div className="w-12 h-12 p-2 rounded-full">
          <Image
            src={props.image}
            alt={props.details?.key}
            width={150}
            height={150}
            objectFit="contain"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center flex-1 text-sm lg:pl-2 ">
        <div className="font-bold text-blue-dark ">{props.details?.key}</div>
        <div className="font-bold text-grey-dark ">
          {props.details?.value ? props.details?.value : "-"}
          {props.details?.maxValue &&
          props.details?.maxValue !== props.details?.value
            ? ` - ${props.details?.maxValue} `
            : " "}
          {props.details?.baseUnit}
        </div>
      </div>
    </div>
  );
}

export default CarCardProps;
