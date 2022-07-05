import FirstArticle from "./FiirstArticle";
import SecondArticle from "./SecondArticle";
import Router from "next/router";
import { useRouter } from "next/router";

const BlogArticles = ({ getMarkdownContext, getContent }) => {
  const router = useRouter();

  return router.pathname !== "/home" ? (
    <div className=" lg:flex lg:flex-col h-fit">
      <div className="">
        <FirstArticle getMarkdownContext={getMarkdownContext} />
      </div>
      <div className="mt-8 2xl:px-56">
        <SecondArticle getMarkdownContext={getMarkdownContext} />
      </div>
    </div>
  ) : (
    <div className=" lg:flex lg:flex-col h-fit">
      <div className=" 2xl:px-56">
        <SecondArticle getMarkdownContext={getMarkdownContext} />
      </div>
      <div className="mt-8">
        <FirstArticle getMarkdownContext={getMarkdownContext} />
      </div>
    </div>
  );
};
export default BlogArticles;
