import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import Head from "next/head";
import { StoreProvider } from "/components/store";
import { TrackingHeadScript } from "@phntms/react-gtm";
import "/styles/globals.css";
import App from "next/app";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <TrackingHeadScript id="G-XN4BS8SB6C" disable={false} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="theme-color" content="#317EFB" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/images/fav/ETV Favicon16x16@4x.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/fav/ETV Favicon32x32@4x.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/images/fav/ETV Favicon64x64@4x.png"
          rel="icon"
          type="image/png"
          sizes="64x64"
        />
        <link
          href="/images/fav/ETV Favicon128x128@4x.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"></link>
      </Head>

      <ErrorBoundary>
        <StoreProvider>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
      </ErrorBoundary>
    </>
  );
}
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   console.log(appProps);
//   return { ...appProps };
// };
