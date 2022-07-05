import { useState, useEffect } from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Head from "/components/core/Head.js";

import Link from "next/link";

const options = { month: "long", day: "numeric" };
export default function Blog2(props) {
  const [prefix, setPrefix] = useState();

  return (
    <>
      <Head page={props.page} />

      <div className="grid mx-2 mt-16 place-content-center lg:mt-0 md:mx-4 2xl:mx-0">
        <h1 className="pt-8 pb-2 font-bold text-green-dark">test</h1>
        <div className="pt-2 max-w-screen-2xl md:pt-4">
          <div className="grid justify-center grid-cols-1 xl:grid-cols-[auto,_250px] gap-5">
            <div>
              {prefix &&
                props.posts
                  .sort(
                    (a, b) =>
                      new Date(b.attributes.publishedAt) -
                      new Date(a.attributes.publishedAt)
                  )
                  ?.map(
                    (post, index) =>
                      post.attributes.category && (
                        <Link
                          href={`/${prefix}/${post.attributes.category}/${post.attributes.slug}`}
                          key={index}
                        >
                          <a
                            className="relative flex flex-col my-10 overflow-hidden transition delay-100 bg-white shadow-xl sm:flex-row hover:scale-105 hover:z-10"
                            key={index}
                          >
                            {post.attributes.previewImage.data && (
                              <Image
                                src={
                                  post.attributes.previewImage.data?.attributes
                                    .url
                                }
                                alt={
                                  post.attributes.previewImage.data?.attributes
                                    .alternativeText
                                }
                                width={350}
                                height={250}
                                objectFit="cover"
                                priority={index < 4 ? true : false}
                              />
                            )}
                            <div className="flex flex-col flex-1 p-4 justify-evenly">
                              <div>
                                <p>
                                  {new Date(
                                    post.attributes.publishedAt
                                  ).toLocaleDateString(
                                    props.page.locale,
                                    options
                                  )}
                                </p>
                                <p className="pb-2 text-xl font-bold text-green-dark">
                                  title
                                </p>
                              </div>
                              <div className="hidden md:line-clamp-4 md:block">
                                <MDXRemote {...post.attributes.preview} />
                              </div>
                            </div>
                          </a>
                        </Link>
                      )
                  )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
