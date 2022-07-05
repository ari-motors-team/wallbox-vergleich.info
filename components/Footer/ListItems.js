import Link from "next/link";

const ListItems = (props) => {
  // let itemsList = [
  //   ...new Set(props.itemsList.map((blog) => blog.title.split(/[\s-]+/)[0])),
  // ];
  // console.log(itemsList);

  return (
    <ul className="flex flex-col pb-4 text-[#b1a7a7] items-center md:items-start  ">
      {props.itemsList
        ?.map((blog, index) => (
          <li
            className="flex items-center justify-between h-[43px]"
            key={index}
          >
            <Link
              href={
                // blog.category === "rechtlichesundkontakt"
                `/${blog.slug}`
                //   : blog === "neuigkeiten"
                //   ? `/magazin/${blog}`
                //   : `www.${blog}`
                //  : `/magazin/reviews/${blog.slug}`
              }
            >
              <a className="text-sm text-center sm:text-left xl:text-lg ">
                {blog.title ? blog.title : blog}
              </a>
            </Link>
          </li>
        ))
        .splice(0, 5)}
    </ul>
  );
};
export default ListItems;
