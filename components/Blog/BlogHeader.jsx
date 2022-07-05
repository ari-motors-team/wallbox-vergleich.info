import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkTile from "./LinkTile";
import { useRouter } from "next/router";

const options = { year: "numeric", month: "long", day: "numeric" };

export default function BlogHeader({ getBlogs }) {
  const router = useRouter();
  const [posts, setPosts] = useState(getBlogs);
  const [categories, setCategories] = useState([]);
  // console.log("BlogHeader.jsx: posts: ", posts);
  return (
    <>
      {getBlogs && (
        <div className="hidden w-full grid-cols-4 mx-auto border-t-8 border-b-8 border-t-blue-light lg:grid max-w-screen-2xl border-b-blue-light">
          {posts.slice(0, 4).map((post, index) => (
            <Link href={`/magazin/${post.category}/${post.slug}`} key={index}>
              <a className="relative w-full h-full duration-100 first:row-span-2 first:col-span-2">
                {post.src && (
                  <Image
                    width={400}
                    height={200}
                    src={post.src}
                    alt={post.slug}
                    objectFit="cover"
                    layout="responsive"
                    priority
                  />
                )}

                <div className="absolute bottom-0 left-0 right-0 grid justify-between w-full px-2 pt-1 font-bold text-white bg-blue-dark bg-opacity-80 h-18 ">
                  {post.title}
                  <p className="pb-1 text-white">
                    {categories[index]}
                    {new Date(post.publishedAt).toLocaleDateString(options)}
                  </p>
                </div>
              </a>
            </Link>
          ))}
          <LinkTile category={posts} getBlogs={getBlogs} />
        </div>
      )}
    </>
  );
}
