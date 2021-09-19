import { useEffect, useMemo, useState } from "react";
import { generateMnemonic } from "bip39-light";
import { parseSeedPhrase } from "near-seed-phrase";
import { parseNearAmount } from "near-api-js/lib/utils/format";
import BN from "bn.js";
import { useRouter } from "next/router";

import { useNear, useLinkdropUser } from "src/near/hooks";
import Layout from "src/components/Layout";
import AdminLayout from "src/components/AdminLayout";
import useSWR from "swr";
import {
  getAccountName,
  determineLinkdropAccountStatus,
} from "src/near/helpers";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    return {
      restore: res.status === 204,
      ok: res.status === 200,
      body: await res.json(),
    };
  }

  const error = new Error("Wat");
  throw error;
};

const STORAGE_KEY = "mnemonic";

export default function CreateLinkdropAccount() {
  const router = useRouter();
  const { data, error } = useSWR("/api/linkdrop", fetcher);

  const { accountId, contract, near } = useNear();
  const { setKeys, keysSet } = useLinkdropUser();

  const mnemonic = useMemo(() => {
    const m = global.window?.localStorage?.getItem(STORAGE_KEY);

    if (m) {
      return m;
    } else {
      return generateMnemonic();
    }
  }, []);

  const keys = useMemo(() => {
    return parseSeedPhrase(mnemonic);
  }, [mnemonic]);

  const [afterCreateError, setAfterCreateError] = useState(null);

  const createNearAccount = () => {
    window?.localStorage?.setItem(STORAGE_KEY, mnemonic);
    contract.create_user_account(
      {
        name: getAccountName(accountId),
        public_key: keys.publicKey,
      },
      new BN("100000000000000"),
      parseNearAmount("5")
    );
  };

  const createAccountInBackend = async () =>
    fetch("/api/linkdrop", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        publicKey: keys.publicKey,
      }),
    }).then((res) => res.json());

  useEffect(() => {
    const { errorCode, transactionHashes } = router.query;

    if (transactionHashes && !keysSet) {
      console.log(keys);
      setKeys(keys);
      createAccountInBackend().then(() => {
        router.push("/campaigns");
      });
      return;
    }

    if (errorCode) {
      setAfterCreateError(true);
      return;
    }

    if (!errorCode && !transactionHashes) {
    }
  }, [router, keys, keysSet]);

  return (
    <AdminLayout title="Create linkdrop account">
      <Layout>
        {afterCreateError && (
          <h1>An error occurred, could not create linkdrop account</h1>
        )}

        {!afterCreateError && Object.keys(router.query).length < 1 && (
          <div>
            <h1>Please store this somewhere safe! Don't lose it!</h1>
            <p>{mnemonic}</p>
            <button onClick={createNearAccount}>create account</button>
          </div>
        )}

        {data && !data.ok && !error && (
          <div>
            <h1>Creating your account please wait...</h1>
          </div>
        )}
      </Layout>
    </AdminLayout>
  );
}
