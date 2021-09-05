import "../styles/global.css";
import NearProvider from "../src/near/provider";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <NearProvider>
      <Navbar />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Footer />
    </NearProvider>
  );
}
