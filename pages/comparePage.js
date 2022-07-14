import Head from "../components/core/Head";
import ActiveFilterBlock from "../components/FilterItems/ActiveFilterBlock";
import ResultList from "../components/ResultList/ResultList";
import { useStore } from "../components/store";
import StickyPopUpForComparison from "../components/ResultList/StickyPopUpForComparison";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import FiltersMobile from "../components/FilterItems/MobileFIlters/FiltersMobile";
import FiltersDesktop from "../components/FilterItems/DesktopItems/FiltersDesktop";
export default function comparePage(props) {
  const [sortedWallboxes, setSortedWallboxes] = useState([]);
  const [getBrands, setGetBrands] = useState([]);
  /* .find(
    (item) => vehicle?.relatedReviews == item.slug
  ) */

  const [getCarsReviews, setGetCarsReviews] = useState([]);
  const { state, dispatch } = useStore();
  useEffect(() => {
    setSortedWallboxes(props.wallboxes);
    setGetBrands(props.brands);
    setGetCarsReviews(props.wallboxreviews);
    /* PRICE SORTING */
    const getCarslowestPrice = props.wallboxes
      ?.sort((a, b) => parseFloat(a.price) * 1 - parseFloat(b.price) * 1)
      .map((item) => item);

    const getCarshighestPrice = props.wallboxes
      ?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      .map((item) => item);

    // alphabetical sorting
    const getCarsAlphabetical = props.wallboxes
      ?.sort(function (a, b) {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
      })
      .map((item) => item);
    /* initial value */
    setSortedWallboxes(getCarsAlphabetical);
    if (state?.activeSortValues[0]?.sortType === "alphabetical") {
      setSortedWallboxes(getCarsAlphabetical);
    }
    /* ɢᴇᴛ ʀᴇsᴜʟᴛs from sorting */
    if (state?.activeSortValues[0]?.sortType === "lowest") {
      setSortedWallboxes(getCarslowestPrice);
    }
    if (state?.activeSortValues[0]?.sortType === "highest") {
      setSortedWallboxes(getCarshighestPrice);
    }
  }, [props.wallboxes, state?.activeSortValues]);
  return (
    <div className="relative">
      <Head page={props.page} />
      <div> </div>
      <div className="grid grid-cols-1 sm:grid-cols-[35%_minmax(65%,_1fr)] lg:grid-cols-[30%_minmax(70%,_1fr)] relative ">
        <div className="hidden mt-24 md:block">
          <FiltersDesktop getBrands={getBrands} />
        </div>
        <div className="flex md:hidden ">
          <FiltersMobile getBrands={getBrands} />
        </div>
        <div className="heading+sorting+content mt-10 md:mt-20 ">
          <div className="">
            <ActiveFilterBlock />
          </div>
          <div className="mb-10 xl:pr-2 2xl:pr-40">
            <ResultList
              sortedWallboxes={sortedWallboxes}
              getCarsReviews={getCarsReviews}
            />
          </div>
        </div>
        <div className="col-span-full ">
          <StickyPopUpForComparison />
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let wallboxes = await getContent("wallboxes", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);
  let brands = await getContent("brands", context.locale);
  const page = pages.find((page) => page.path === "/comparePage");

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brands,
      wallboxes,
      page,
      blogs,
      carsreviews,
    },
  };
}
