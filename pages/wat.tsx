import { useNear } from "../src/near/hooks";

function WatPage() {
  const { signedIn, login } = useNear();

  const onLoginClick = () => {
    login();
  };

  return (
    <main>
      <header>
        <h1>near is a fast and friendly blockchain network</h1>

        {!signedIn && (
          <>
            <p>Click below to get started!</p>

            <button onClick={onLoginClick}>connect</button>
          </>
        )}

        {signedIn && <p>Looks like you're already signed in!</p>}
      </header>
    </main>
  );
}

export default WatPage;
