import Head from "../components/core/Head";
import Link from "next/link";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";
import getContent from "/utils/getContent";
import ActiveCompareImages from "../components/ActiveCompare/ActiveCompareImages";
import ActiveCompareEntries from "../components/ActiveCompare/ActiveCompareEntries";
import ActiveCompareSizes from "../components/ActiveCompare/ActiveCompareSizes";
import ActiveCompareDetails from "../components/ActiveCompare/ActiveCompareDetails";

const allKeys = [
  "range230V",
  "rangeLithium",
  "maxSpeed",
  "chargingTime230V",
  "chargingTimeLithium",
  "chargingTimeFast",
  "power",
  "loadingWeight",
  "curbweight",
];
const carSizes = [
  "loadingVolumeHeight",
  "loadingVolumeLength",
  "loadingVolumeWidth",
  "wheelbase",
  "carSizesHeight",
  "carSizesLength",
  "carSizesWidth",
  "loadingVolumeTotal",
  "loadingArea",
];

const carDetails = [
  "loadingHeight",
  "batteryCapacityBlei",
  "batteryCapacityLithium",
  "batteryGuarantee",
  "batteryIncluded",
  "consumption",
  "availability",
  "guarantee",
  "seats",
  "subsidies",
];

export default function activeCompare(props) {
  const { state, dispatch } = useStore();

  let comparedCars = state?.autoForComparisons?.map((el) => el.auto);

  return (
    <div className="main-wrapper 2xl:px-40">
      <Head page={props.page} />
      <div className="px-4 pt-8 pb-6">
        <h1 className="text-2xl font-bold text-blue-extra lg:text-4xl">
          Ihre Auswahl im Detailvergleich
        </h1>
      </div>
      {/* BACK BUTTON */}
      <div
        className={comparedCars.length > 1 ? "pl-4 block lg:hidden" : "hidden"}
      >
        <button className="h-10 mb-8 text-sm rounded-md w-52 text-blue-darker bg-grey-lighter">
          <Link href="/comparePage">
            <a className="visited:text-blue-darker">
              « zurück zur Ergebnisliste
            </a>
          </Link>
        </button>
      </div>
      {/* KEYS AND ITEMS FOR COMPARE */}
      <div className="grid grid-flow-col pb-20 overflow-x-scroll scrollbar-hide">
        <div className="w-full">
          <div className="relative grid grid-flow-col overflow-x-scroll scrollbar-hide">
            <ActiveCompareImages comparedCars={comparedCars} />
          </div>

          <div className="grid grid-flow-col auto-cols-[minmax(160px,_1fr)]">
            <ActiveCompareEntries
              /*   stars={comparedCars} */
              keys={allKeys}
              comparedCars={comparedCars}
            />
          </div>
          <div className="grid grid-flow-col auto-cols-[minmax(160px,_1fr)]">
            <ActiveCompareSizes keys={carSizes} comparedCars={comparedCars} />
          </div>
          <div className="grid grid-flow-col auto-cols-[minmax(160px,_1fr)]">
            <ActiveCompareDetails
              keys={carDetails}
              comparedCars={comparedCars}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  /* get all vehicles */
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/activecompare");
  let brands = await getContent("brands", context.locale);
  /* get all blogs */
  let blogs = await getContent("blogs", context.locale);
  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicles,
      brands,
      blogs,
      page,
    },
  };
}
