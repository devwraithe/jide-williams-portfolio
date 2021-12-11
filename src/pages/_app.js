// import components
import Head from "next/head";
// import styling
import "../styles/globals.css";

// main component
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export component
export default MyApp;
