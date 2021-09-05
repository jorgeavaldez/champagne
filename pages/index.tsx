import Link from "next/link";
import { useNear } from "../src/near/hooks";

export default function HomePage() {
  const { signedIn, accountId, networkId } = useNear();

  return (
    <main>
      <header>
        <h1>champagne</h1>
        <p>
          create campaigns to reward twitter interactions with a near droplink
        </p>
      </header>

      {signedIn && (
        <h2>
          You are signed in as {accountId} on network {networkId}
        </h2>
      )}

      {signedIn && (
        <div>
          <Link href="/campaign/create">create a campaign</Link>
        </div>
      )}

      {!signedIn && (
        <>
          <h2>come find your next source of inspiration</h2>
          <p style={{ textAlign: "center", marginTop: "2.5em" }}>
            <Link href="/login">sign in</Link>
          </p>
        </>
      )}
    </main>
  );
}