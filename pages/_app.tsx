import Head from "next/head";

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/bootstrap/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css';

import "../styles/global.css";

import NearProvider from "src/near/provider";
import LinkdropUserProvider from "src/near/user_provider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NearProvider>
        <LinkdropUserProvider>
          <Component {...pageProps} />
        </LinkdropUserProvider>
      </NearProvider>
    </>
  );
}
