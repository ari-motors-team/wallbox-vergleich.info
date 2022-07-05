import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Image from "next/image";
import Form from "../components/repeated/Form";
import Head from "../components/core/Head";
import { useRouter } from "next/router";
export default function kontakt(props) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center ">
      <Head page={props.page} />

      <div className="flex flex-col w-full mx-auto 2xl:px-48 lg:flex-row">
        {router.pathname == "/kontakt" ? (
          <div className="relative flex flex-col justify-center w-full pt-8 lg:pb-48">
            <div className="mb-2 text-center lg:mb-12">
              <p className="text-3xl font-bold ">Kontaktieren Sie uns!</p>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/frage.jpeg"
                width={500}
                height={400}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <p
              className={
                router.pathname == "/kontakt"
                  ? " text-base lg:text-xl w-full px-4 py-2 text-center sm:text-left "
                  : "hidden"
              }
            >
              Haben Sie Fragen oder Anregungen zu unserer Webseite oder möchten
              uns etwas mitteilen? Dann nutzen Sie unser Kontaktformular für Ihr
              Anliegen!
            </p>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        <div className="w-full">
          <div className="flex-grow ">
            <Form open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  //let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  const page = pages.find((page) => page.path === "/kontakt");
  let brands = await getContent("brands", context.locale);
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      blogs,
      brands,
    },
  };
}
