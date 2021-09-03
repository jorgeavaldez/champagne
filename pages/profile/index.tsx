import styles from "../../styles/pages/profile/index.module.css";
import Layout from "../../src/components/Layout";
import { useNear } from "../../src/near/hooks";

function ProfilePage({ contractInitialized, contractError }) {
  const { accountId } = useNear();

  return (
    <Layout>
      <main>
        <div className={styles.profile}>
          <img src="https://pbs.twimg.com/profile_images/1379638174956290049/1m5Z_U7E_400x400.jpg" />

          <div className={styles.profile_text}>
            <h1>welcome {accountId}</h1>
          </div>
        </div>

        <article>
          <p>
            If you got this far, that means you've logged in to your Near
            account and we've verified that you have access to some sort of
            profile with the platform.
          </p>
        </article>
      </main>
    </Layout>
  );
}

export default ProfilePage;
