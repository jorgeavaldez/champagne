import { signIn, signOut, useSession } from "next-auth/client";

export default function CampaignCreatePage() {
  const [session] = useSession();
  return (
    <main>
      <h1>create campaign</h1>

      {session && <p>Signed in as {session.user.name}</p>}
      {!session && (
        <p>
          not signed in
          <button
            onClick={() => {
              signIn();
            }}
          >
            sign in with twitter
          </button>
        </p>
      )}
    </main>
  );
}
