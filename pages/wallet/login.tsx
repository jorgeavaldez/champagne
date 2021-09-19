import { useEffect } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useLogin, useLogout } from "src/backend/hooks";
import Layout from "src/components/Layout";
import AdminLayout from "src/components/AdminLayout";
import { useRouter } from "next/router";

export default function WalletLogin() {
  const router = useRouter();
  const { login, account } = useLogin();
  const logout = useLogout();

  const onLogin = () => {
    login();
  };

  const onLogout = () => {
    logout();
  };

  if (account.accountId) {
    router.replace("/wallet/linkdrop/");
  }

  return (
    <Layout>
      <AdminLayout title="Near Wallet Login">
        <button onClick={onLogin}>Login</button>
        <button onClick={onLogout}>Logout</button>
        <h1>{ JSON.stringify( account, null, 2 ) }</h1>
      </AdminLayout>
    </Layout>
  );
}