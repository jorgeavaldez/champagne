import { useEffect, useState } from "react";
import { useNear } from "src/near/hooks";
import { useRouter } from "next/router";

import {
  getAccountName,
  determineLinkdropAccountStatus,
} from "src/near/helpers";
import Layout from "src/components/Layout";
import AdminLayout from "src/components/AdminLayout";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);


  if (res.ok || res.status === 204) {
    return {
      create: res.status === 204,
      ok: res.status === 200,
    };
  }

  const error = new Error("Wat");
  throw error;
};

// call /api/linkdrop
//  if 204, create
//  if 200, move on, restore locally, we are aware of the account

// TODO: check if the linkdrop keypair exists locally
export default function CheckLinkdropAccount() {
  const router = useRouter();
  const { data, error } = useSWR("/api/linkdrop/", fetcher);
  const { accountId, contract, near } = useNear();
  const [linkdropAccountExists, setLinkdropAccountExists] = useState(null);

  const onCreateAccountClick = () => {
    router.replace("/wallet/linkdrop/create");
  };

  const onRestoreAccountClick = () => {
    router.replace("/wallet/linkdrop/restore");
  };

  const onLoginAccountClick = () => {
    router.replace("/wallet/linkdrop/login");
  };

  useEffect(() => {
    if (accountId) {
      determineLinkdropAccountStatus(near, accountId).then((v) =>
        setLinkdropAccountExists(v)
      );
    }
  }, [accountId]);

  return (
    <AdminLayout title="Connect to linkdrop contract">
      <Layout>
        {!data && error && <h1>An error occurred, please try again later</h1>}

        {data && data.create && linkdropAccountExists === false && (
          <div>
            <h1>You do not have a linkdrop account!</h1>
            <button onClick={onCreateAccountClick}>create account</button>
          </div>
        )}

        {data && data.create && linkdropAccountExists === true && (
          <div>
            <h1>
              It seems you already have a linkdrop account associated with this
              wallet. Click below to restore!
            </h1>
            <button onClick={onRestoreAccountClick}>restore account</button>
          </div>
        )}

        {data && data.ok === true && linkdropAccountExists === true && (
          <div>
            <h1>
              We found a linkdrop account associated with your wallet! Click
              below to continue!
            </h1>
            <button onClick={onLoginAccountClick}>
              login with linkdrop wallet
            </button>
          </div>
        )}
      </Layout>
    </AdminLayout>
  );
}
