import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { useNear } from "src/near/hooks";

export const WALLET_ACCOUNT_ENDPOINT = "/api/auth/wallet";
export const fetcher = (url) => fetch(url).then((r) => r.json());

export function useLogin() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { account } = useWalletAccount();
  const { login, signedIn, near, wallet, accountId, networkId } = useNear();
  const [loginAttempts, setLoginAttempts] = useState(0);

  useEffect(() => {
    const { query } = router;
    const shouldAttemptLogin =
      query["account_id"] &&
      query["public_key"] &&
      signedIn &&
      loginAttempts < 1;

    console.log(
      query["account_id"],
      query["public_key"],
      signedIn,
      loginAttempts
    );

    async function doTheThing() {
      if (shouldAttemptLogin) {
        const signedMessage = await near.connection.signer.signMessage(
          wallet.getAccountId(),
          accountId,
          networkId
        );

        mutate(WALLET_ACCOUNT_ENDPOINT, { ...account, accountId }, false);

        fetch(WALLET_ACCOUNT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accountId,
            signedMessage: JSON.stringify( signedMessage ),
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            setLoginAttempts(loginAttempts + 1);
            mutate(WALLET_ACCOUNT_ENDPOINT);
          })
          .catch((err) => {
            setLoginAttempts(loginAttempts + 1);
          });
      }
    }

    doTheThing();
  }, [router, signedIn, mutate, account, accountId, networkId, loginAttempts]);

  return { login, account };
}

export function useLogout() {
  const { mutate } = useSWRConfig();
  const { account } = useWalletAccount();
  const { logout, signedIn } = useNear();

  useEffect(() => {
    const shouldLogOut = !signedIn && account && account.accountId;

    console.log(signedIn, account);
    if (shouldLogOut) {
      mutate(WALLET_ACCOUNT_ENDPOINT, {}, false);

      fetch(`${WALLET_ACCOUNT_ENDPOINT}/logout`).then(() => {
        mutate(WALLET_ACCOUNT_ENDPOINT);
      });
    }
  }, [signedIn, mutate, account]);

  return logout;
}

export function useWalletAccount() {
  const { data, mutate } = useSWR(WALLET_ACCOUNT_ENDPOINT, fetcher, {
    shouldRetryOnError: false,
  });

  const loading = !data;
  const account = data?.wallet;

  return { account, mutate, loading };
}
