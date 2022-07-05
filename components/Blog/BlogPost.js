import Image from "next/image";
import styles from "./BlogPost.module.css";
import { MDXRemote } from "next-mdx-remote";
import SideBar from "../Blog/SideBar";
import Teasers from "./Teasers";
export default function BlogPost(props) {
  return (
    <div className="flex flex-col flex-1 pb-4 lg:pb-8 lg:px-48">
      <div>
        <div className="relative w-full">
          {props.getBlogContext?.src && (
            <Image
              src={props.getBlogContext?.src}
              alt={props.getBlogContext?.title}
              width={195}
              height={50}
              layout="responsive"
              objectFit="cover"
              className="rounded-b-sm "
            />
          )}
        </div>
        <div className="px-1 text-blue-dark lg:px-0">
          {props.getBlogContext.publishedAt}
        </div>
        <h2 className="px-2 py-8 font-bold lg:text-3xl text-blue-dark lg:pl-0">
          {props.getBlogContext?.title}
        </h2>
        <div className="relative grid list-disc 2xl:grid-cols-[auto,_320px] lg:px-0 px-2">
          <div className={`${styles.blogmarkdown} lg:pr-8 `}>
            <MDXRemote {...props.getBlogContext.source} />
            <div className="mt-8 text-blue-darker">
              <span className="inline-block py-2">
                Das könnte Sie auch interessieren:
              </span>
              <div className="">
                <Teasers teasers={props.suggestions} />
              </div>
            </div>
          </div>

          <div className="relative hidden bottom-28 2xl:block">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
