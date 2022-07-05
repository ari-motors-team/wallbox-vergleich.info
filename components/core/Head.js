import Head from "next/head";

export default function MainHead(props) {
  // const router = useRouter();

  return (
    <Head>
      <title>{props.page?.title}</title>

      <meta property="og:title" content={props.page?.title} />

      <meta name="description" content={props.page?.description} />
      <meta property="og:description" content={props.page?.description} />
      {props.page?.src && (
        <meta property="og:image" content={props.page?.src} />
      )}
      {props.page?.description && (
        <>
          <meta name="description" content={props.page?.description} />
          {/* <meta property="og:description" content={props.page?.description} />
          <meta name="twitter:description" content={props.page?.description} />
          <meta name="twitter:card" content={props.page?.description} /> */}
        </>
      )}
    </Head>
  );
}
