import usePrice from "../../hooks/usePrice";
import ButtonAnfragen from "../repeated/ButtonAnfragen";
import ButtonCompare from "../repeated/ButtonCompare";
// import usePrice from "/hooks/usePrice";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  const price = usePrice(props.carItem?.price);
  return (
    <div className="sticky flex items-center justify-end flex-1 h-24 mt-8 lg:z-10 lg:bottom-0 md:h-32 bg-grey-lighter print:hidden">
      <div className="flex items-center justify-between w-full lg:w-3/4">
        <div className="flex flex-col items-start w-1/2 ml-2 twoButtons md:flex-row md:ml-8 ">
          <div className="drucken">
            <button
              onClick={() => window.print()}
              className={
                "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded flex justify-center items-center h-8 sm:h-10 w-32 md:w-44 mb-1 md:mb-0 transition"
              }
            >
              Drucken
            </button>
          </div>

          <div className="pl-0 md:pl-4">
            <ButtonCompare carItem={carItem} />
          </div>
        </div>
        <div
          id="PRICE-ANFRAGEN-BUTTONS-SECTION"
          className="flex flex-col items-center justify-between lg:mr-20 md:pb-8 "
        >
          <div className="pt-1 pb-2 md:pb-0 md:pt-0 md:mr-6 ">
            <p className="text-xl font-black text-green-700 md:text-2xl ">
              ab {price}
            </p>
          </div>
          <div className="pb-1 mr-2 md:mr-6">
            <ButtonAnfragen carItem={carItem.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPopUp;
