const WallboxDimentions = ({ wallboxDimentions }) => {
  return (
    <section className="w-full lg:w-1/3">
      <h3 className="pt-8 pb-4 pl-4 text-2xl font-bold leading-7 text-blue-extra print:text-base">
        Design und Anmessungen
      </h3>
      <div className="flex flex-col w-full text-blue-extra">
        {wallboxDimentions?.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 == 0 ? "flex flex-1 bg-grey-lighter" : "flex flex-1 "
            }
          >
            <p className="w-1/2 py-1 flex items-center pl-4 h-14 ">
              {item.key}:
            </p>
            <p className="flex items-center w-1/2 py-1 pl-4 lg:border-r-2 border-grey-light ">
              {item.value} {index === 0 || index === 5 ? " " : item.baseUnit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WallboxDimentions;
