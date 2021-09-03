import { useEffect } from "react";
import { useRouter } from "next/router";
import { useNear } from "../src/near/hooks";

function LoginPage() {
  const router = useRouter();

  const {
    signedIn,
    login,
  } = useNear();

  useEffect(() => {
    if (signedIn) {
      router.replace('/dashboard');
    }
  }, [signedIn, router]);

  const onLoginClick = () => {
    login();
  };

  const onWatClick = () => {
    login();
  };

  return (
    <main>
      <header>
        <h2>let's get started</h2>
        <p>first you'll need to log in to your near wallet</p>
      </header>

      <button onClick={onLoginClick}>connect</button>
      <button onClick={onWatClick}>what's a near?</button>
    </main>
  );
}

export default LoginPage;
