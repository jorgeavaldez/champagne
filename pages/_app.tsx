import { Provider } from 'next-auth/client';
import Head from "next/head";

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import "../styles/global.css";

import NearProvider from "../src/near/provider";

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
