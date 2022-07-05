import Image from "next/image";
import Link from "next/link";
import { BsMegaphone, BsTruck } from "react-icons/bs";
import { ImCoinEuro } from "react-icons/im";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
// import FAQIcon from "../../icons/FAQIcon.js";
// import FundingIcon from "../../icons/FundingIcon.js";
// import ReferencesIcon from "../../icons/ReferencesIcon.js";
// import NewsIcon from "../../icons/NewsIcon.js";

export default function LinkTile({ category, getBlogs }) {
  // remove dublications from the categories list
  //const categories = [...new Set(getBlogs.map((post) => post.getBlogs))];

  return (
    <div className="min-h-[250px] bg-gradient-to-t from-blue-dark to-blue-light text-white flex flex-col items-start justify-evenly object-contain">
      <Link href="/magazin/frequentlyaskedquestions">
        <div className="flex flex-row items-center w-full pl-8 font-bold duration-100 cursor-pointer hover:translate-x-2">
          {/* <ReferencesIcon className="w-6 h-6" /> */}
          <MdOutlineChatBubbleOutline size={25} />
          <a className="mx-6">Häufig gestellte Fragen</a>
        </div>
      </Link>{" "}
      <Link href="/magazin/manufacturer">
        <div className="flex flex-row items-center w-full pl-8 font-bold duration-150 cursor-pointer hover:translate-x-2">
          {/* <NewsIcon className="w-6 h-6 text-white fill-current" /> */}
          <BsTruck size={25} />

          <a className="mx-6">Hersteller</a>
        </div>
      </Link>
      <Link href="/magazin/news">
        <div className="flex flex-row items-center w-full pl-8 font-bold duration-100 cursor-pointer hover:translate-x-2">
          {/* <FundingIcon className="w-6 h-6" /> */}
          <BsMegaphone size={25} />
          <a className="mx-6">Neuigkeiten</a>
        </div>
      </Link>
      <Link href="/magazin/subsidies">
        <div className="flex items-center w-full pl-8 font-bold duration-100 cursor-pointer hover:translate-x-2">
          {/* <FAQIcon className="w-6 h-6" /> */}
          <ImCoinEuro size={25} />
          <a className="mx-6">Förderung</a>
        </div>
      </Link>
    </div>
  );
}
// {
//   categories.map((category, index) => (
//     <div
//       className="flex flex-row items-center w-full pl-8 font-bold duration-100 hover:translate-x-2"
//       key={index}
//     >
//       {/* <ReferencesIcon className="w-6 h-6" /> */}
//       <Link href={`/magazin/${category}`}>
//         <a className="mx-6">{category}</a>
//       </Link>
//     </div>
//   ));
// }
