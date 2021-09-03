import Link from "next/link";
import { useRouter } from "next/router";
import { useNear } from "../src/near/hooks";
import Layout from "../src/components/Layout";

import styles from "../styles/pages/index.module.css";

function HomePage() {
  const router = useRouter();

  const { signedIn } = useNear();

  const onLoginClick = () => {
    router.push("/login");
  };

  return (
    <Layout>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>stemmy</h1>
          <p>
            A marketplace for creators to buy and sell the tools of the trade.
          </p>
        </header>

        <ul>
          <li>
            <h3>purchase samplepacks/presets/templates... anything!</h3>
            <p>
              Your creative assets are packaged as NFTs. Buy, flip, or remix
              them to make something new!
            </p>
          </li>

          <li>
            <h3>sell your original assets</h3>
            <p>
              We wrap them up in an NFT that ensures only the buyer can download
              and use it. Collect royalties any time your unique assets change
              hands!
            </p>
          </li>

          <li>
            <h3>powerful tools to empower you!</h3>
            <p>
              Create a collective and spread the wealth. Customize your store to
              look however you like. Custom royalty fees and powerful settings
              to market your tools for content creation.
            </p>
          </li>
        </ul>

        {!signedIn && (
          <>
            <h2>come find your next source of inspiration</h2>
            <p style={{ textAlign: "center", marginTop: "2.5em" }}>
              <button onClick={onLoginClick}>sign in</button>
            </p>
          </>
        )}

        <div className={styles.explore}>
          <Link href="/explore/features">
            <a>weekly features</a>
          </Link>

          <Link href="/explore/new">
            <a>new drops</a>
          </Link>

          <Link href="/explore/creators">
            <a>explore creators</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default HomePage;
