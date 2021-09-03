import "../styles/global.css";
import NearProvider from "../src/near/provider";
import Navbar from "../src/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <NearProvider>
      <Navbar />

      <Component {...pageProps} />
    </NearProvider>
  );
}
