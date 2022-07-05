// import Image from "next/image";
// import Link from "next/link";
// import styles from "./ReviewBlog.module.css";
// import { MDXRemote } from "next-mdx-remote";
// export default function ReviewPost({ getCarsReview, getMdxContent }) {
//   return (
//     <div className="flex items-center flex-col p-8">
//       <div>
//         <button className="text-sm bg-white w-52 h-10 rounded-md text-blue-darker left-8">
//           <Link href="/magazin/reviews">
//             <a className="visited:text-blue-darker">
//               « zurück zur Ergebnisliste
//             </a>
//           </Link>
//         </button>
//         <h2 className="m-auto py-8 text-blue-dark font-bold text-4xl ">
//           {getCarsReview?.title} Testbericht-von-Elektrotransporter-Vergleich
//           <Link href={`/transporter/${getCarsReview?.relatedCars}`}>
//             <span className="lg:px-8 text-blue-dark font-bold text-xs text-left cursor-pointer">
//               Details anzeigen
//             </span>
//           </Link>
//         </h2>

//         <div className={styles.markdown}>
//           {/* <MDXRemote {...getBlogContext.source} /> */}
//         </div>
//       </div>
//       {getCarsReview?.content.map((article, index) => (
//         <div
//           key={index}
//           className="flex flex-col lg:my-4 items-center justify-center lg:py-12"
//         >
//           <div className="w-full md:w-1/2 lg:px-12 ">
//             {article?.image && (
//               <Image
//                 src={article?.image}
//                 alt={getCarsReview?.title}
//                 width={195}
//                 height={140}
//                 layout="responsive"
//                 objectFit="cover"
//                 className="rounded-lg float-right"
//               />
//             )}
//           </div>
//           {article?.title && (
//             <div
//               // className=" w-full lg:w-1/2 flex flex-col"
//               className={styles.review}
//             >
//               <div className="leading-7">
//                 <MDXRemote {...getMdxContent[index]} />
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
