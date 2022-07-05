import React from "react";
import Link from "next/link";
import getContent from "/utils/getContent";

const thankYou = (props) => {
  return (
    <div className="h-[47vh] flex items-center justify-center px-8">
      <h2>
        Vielen Dank für Ihre Nachricht. Wir melden uns umgehend bei Ihnen.
        <br />
        <br />
        Hier können Sie gleich alle
        <Link href={"/comparePage"}>
          <a className="py-4 text-blue-600">
            <span className="pl-2">Elektrotransporter sofort vergleichen.</span>
          </a>
        </Link>
      </h2>
      {props.children}
    </div>
  );
};
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  //let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/thank-you");
  let brands = await getContent("brands", context.locale);
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,

      brands,
    },
  };
}
export default thankYou;
