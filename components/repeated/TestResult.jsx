import React from "react";

export default function TestResult({ testResultArr }) {
  // (testResultArr?.key);
  return (
    <>
      <div className="flex items-end w-full h-10 lg:hidden pl-4">
        <h2
          className={
            testResultArr?.value
              ? "text-sm font-bold text-[#F45625] "
              : "hidden"
          }
        >
          Testnote
          <span className="text-green-light pl-1">{testResultArr?.value}</span>
        </h2>
      </div>
      {/* desktop test */}
      <div
        className={
          testResultArr?.value
            ? "hidden lg:flex w-48 h-12 border border-blue-lighter"
            : "hidden"
        }
      >
        <div className="text-xs w-16 h-full bg-orange-dark text-white flex items-center justify-center">
          <span className="font-bold"> TEST</span>
        </div>
        <div className=" flex flex-col justify-center w-full">
          <div className="pt-10 ">
            <span className="text-xxs tracking-widest pl-2.5">ERGEBNIS</span>
          </div>
          <div className="flex flex-row pb-8 ">
            <div className="">
              <span className="relative bottom-1 pl-2.5 font-black text-m ">
                {testResultArr?.key}
              </span>
            </div>
            <div className="pb-2">
              <span className="relative bottom-1 text-xxs font-black pl-3 tracking-widest ">
                {testResultArr?.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
