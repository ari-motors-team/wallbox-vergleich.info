import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "../Blog/SideBar";

export default function Blog({ getBlogs }) {
  const router = useRouter();

  return (
    <>
      {/* <Head page={page} /> */}
      <div className="grid justify-center grid-cols-1 2xl:grid-cols-[auto,_320px] gap-5 2xl:mx-48 cursor-pointer  ">
        <div className="w-full ">
          {getBlogs
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .map((post, index) => (
              <Link
                href={`/magazin/${post.category}/${post.slug}`}
                passHref
                key={index}
              >
                <div className="relative flex flex-col items-center my-10 overflow-hidden transition delay-100 border-t shadow-xl border-t-blue-extralight sm:flex-row hover:scale-105 hover:z-10">
                  <div className="w-[350px] h-[250px]">
                    {post.src && (
                      <a className="relative w-full">
                        <Image
                          src={post.src}
                          alt={post.slug}
                          width={300}
                          height={214}
                          objectFit="cover"
                          layout="responsive"
                          priority={index < 4 ? true : false}
                        />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 w-full px-4 py-4 justify-evenly">
                    <p className="flex-grow ">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="flex-grow py-2 text-xl font-bold text-blue-dark">
                      {post.title}
                    </p>
                    <p className="hidden md:line-clamp-4 md:block">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {/* <div className="hidden border-4 3xl:block"> */}
        <Sidebar />
        {/* </div> */}
      </div>

      {/* <div className="grid w-full max-w-screen-xl px-6 py-6 mx-auto md:px-0">
        <div className="grid gap-4 justify-items-center grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] ">
          {getBlogs
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            ?.map(
              (post, index) =>
                post.category && (
                  <a
                    className="flex flex-col max-w-md overflow-hidden transition transform rounded-md min-w-md shadow-card hover:scale-105 "
                    //   href={`/${prefix}/${post.slug}`}
                    href={
                      router.pathname == "/magazin/reviews"
                        ? `/magazin/reviews/${post.slug}`
                        : `/magazin/${post.slug}`
                    }
                    // href={`/magazin/${post.slug}`}
                    key={index}
                  >
                    {post.src && (
                      <div className="w-full">
                        <Image
                          src={post.src}
                          alt={post.title}
                          width={300}
                          height={200}
                          objectFit="cover"
                          layout="responsive"
                          priority={index < 4 ? true : false}
                        />
                      </div>
                    )}
                    {/* textContent */}
      {/* <div className="flex flex-col flex-1 px-4 pt-4 justify-evenly ">
                      <div>
                        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                        <h2 className="pb-2 text-xl font-bold text-blue-dark ">
                          {post.title}
                        </h2>
                      </div>
                    </div>

                    <div className="block px-4 pb-8 text-left line-clamp-6">
                      {post?.contentHeading?.content
                        ? post.contentHeading.content
                        : post.description}
                    </div>
                  </a> */}
      {/* )
            )}
        </div>
      </div> */}
    </>
  );
}
