import { Provider } from 'next-auth/client';
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css'
import "../styles/global.css";

import NearProvider from "../src/near/provider";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider session={pageProps.session}>
        <NearProvider>
            <Component {...pageProps} />
        </NearProvider>
      </Provider>
    </>
  );
}
