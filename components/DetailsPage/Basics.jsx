const Basics = ({ basics, carItem }) => {
  return (
    <section className="w-full lg:w-1/3 ">
      <h3 className="pt-8 pb-4 pl-4 text-2xl font-bold leading-7 text-blue-extra print:text-base">
        Grundlagen
      </h3>
      <div className="flex flex-col w-full text-blue-extra">
        <div className="flex flex-row flex-1 bg-grey-lighter">
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-base ">
            Klasse:
          </p>
          <p className="flex items-center w-1/2 py-1 pl-4 lg:border-r-2 border-grey-light ">
            {carItem.typeClass}
          </p>
        </div>
        {basics?.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 !== 0 ? "flex flex-1 bg-grey-lighter " : "flex flex-1 "
            }
          >
            <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-base ">
              {item.key}
            </p>
            <p className="flex items-center w-1/2 py-1 pl-4 lg:border-r-2 border-grey-light h-14 text-base ">
              {item.value ? item.value : "-"} {item.value ? item.baseUnit : ""}
            </p>
          </div>
        ))}
        <div
          className={
            basics.length % 2 !== 0
              ? "flex flex-1 bg-grey-lighter justify-center "
              : "flex flex-1 "
          }
        >
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-base 	">
            Gesamtgewicht
          </p>
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-base lg:border-r-2 border-grey-light">
            {carItem.curbweight.value + carItem.loadingWeight.value}{" "}
            {carItem.curbweight.baseUnit}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Basics;
