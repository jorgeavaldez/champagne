import { useEffect } from "react";
import { useRouter } from "next/router";
import { useNear } from "../src/near/hooks";

import { Row, Col, Button } from 'react-bootstrap';

import Layout from '../src/components/Layout';
import AdminLayout from '../src/components/AdminLayout';
import AdminPageContainer from "../src/components/AdminPageSectionContainer";

function LoginPage() {
  const router = useRouter();

  const {
    signedIn,
    login,
  } = useNear();

  useEffect(() => {
    if (signedIn) {
      router.replace('/');
    }
  }, [signedIn, router]);

  const onLoginClick = () => {
    login();
  };

  const onWatClick = () => {
    router.push('/wat');
  };

  return (
    <Layout>
      <AdminLayout>
        <AdminPageContainer title="Logged In">
          <Row className="w-100">
            <Col className="d-flex justify-content-center align-items-center">
              <Button onClick={onLoginClick}>Connect</Button>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <Button onClick={onWatClick}>What is near?</Button>
            </Col>
          </Row>
        </AdminPageContainer>
      </AdminLayout>
    </Layout>
  );
}

export default LoginPage;
