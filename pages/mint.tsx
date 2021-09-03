import Navbar from "../src/components/Navbar";
import { useNear } from "../src/near/hooks";

function MintPage({ contractInitialized, contractError }) {
  const { accountId } = useNear();

  return (
    <main>
      <Navbar title="dashboard" />

      <h1>welcome { accountId }</h1>

      <article>
        <p>
          If you got this far, that means you've logged in to your Near account
          and we've verified that you have access to some sort of profile with
          the platform.
        </p>
      </article>
    </main>
  );
}

export default MintPage;
