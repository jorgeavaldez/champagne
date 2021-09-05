import { Provider } from 'next-auth/client';

import "../styles/global.css";
import NearProvider from "../src/near/provider";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <NearProvider>
        <Navbar />

        <Layout>
          <Component {...pageProps} />
        </Layout>

        <Footer />
      </NearProvider>
    </Provider>
  );
}
