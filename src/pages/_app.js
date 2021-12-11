// import components
import Head from "next/head";
// import styling
import "../styles/globals.css";

// main component
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export component
export default MyApp;
