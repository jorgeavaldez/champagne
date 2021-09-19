import { useEffect, useState } from 'react';
import { generateMnemonic } from "bip39-light";
import { useNear } from 'src/near/hooks';
import Layout from "src/components/Layout";
import AdminLayout from "src/components/AdminLayout";
import useSWR from 'swr';

const fetcher = async url => {
  const res = await fetch(url);

  if (res.status === 404 || res.ok) {
    return {
      callContract: res.status === 404,
      restore: res.status === 204,
      ok: res.status === 200,
      body: await res.json(),
    };
  }

  const error = new Error('Wat');
  throw error;
}


// call /api/linkdrop
//  if 404, call champagne.testnet create_user_account
//  if 204, ask to restore
//  if 200, move on, restore locally, we are aware of the account

// TODO: check if the linkdrop keypair exists locally
export default function RestoreLinkdropAccount() {
  const { data, error, mutate } = useSWR("/api/linkdrop", fetcher);
  const mnemonic = generateMnemonic();
  const [createResponse, setCreateResponse] = useState(null);

  const createAccount = () => {
    fetch("/api/linkdrop", {
      method: "POST",
      body: JSON.stringify({
        mnemonic,
      }),
    }).then(res => res.json())
    .then(res => setCreateResponse(res));
  };

  return (
    <AdminLayout title="Connect to linkdrop contract">
      <Layout>
        {error && <h1>An error occurred, please try again later</h1>}

        {data && data.callContract && (
          <div>
            <h1>
              You do not have a linkdrop account! We've generated a mnemonic for
              you!
            </h1>
            <p>Please store this somewhere safe! Don't lose it!</p>
            <p>{mnemonic}</p>
            <button>create account</button>
          </div>
        )}

        {data && data.restore && (
          <div>
            <h1>
              It seems you already have a linkdrop account associated with this wallet. Click below to restore!
            </h1>
            <button>restore account</button>
          </div>
        )}

        {data && data.ok && (
          <div>
            <h1>
              We found a linkdrop account associated with your wallet! Click below to continue!
            </h1>
            <button>login with linkdrop wallet</button>
          </div>
        )}
      </Layout>
    </AdminLayout>
  );
}
