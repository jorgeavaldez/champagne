import { useEffect } from 'react';
import { useNear } from 'src/near/hooks';
import Layout from "src/components/Layout";
import AdminLayout from "src/components/AdminLayout";

export default function Linkdrop() {

  return (
    <AdminLayout title="Connect to linkdrop contract">
      <Layout>
        <h1>foo</h1>
      </Layout>
    </AdminLayout>
  );
}
