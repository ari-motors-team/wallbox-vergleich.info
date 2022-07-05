import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const [brands, setBrands] = useState(props.brands);
  const { state, dispatch } = useStore();
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setBrands(props.brands);
    setValueFromUseEffect(props.brands);
    setBlogs(props.blogs);
  }, [props, valueFromUseEffect]);

  return (
    <div
      className={
        state?.mobileNavActives
          ? "overflow-hidden max-h-screen relative"
          : "relative"
      }
    >
      <Header />

      <main>{props.children}</main>
      <Footer blogs={blogs} brands={brands} />
    </div>
  );
}
export async function getStaticProps(context) {
  let blogs = await getContent("blogs", context.locale);

  let vehicles = await getContent("vehicles", context.locale);
  let brands = await getContent("brands", context.locale);
  // let page = await getContent("pages", context.locale);
  return {
    props: {
      brands,
      blogs,

      params: context.params,
      vehicles,
    },
  };
}
