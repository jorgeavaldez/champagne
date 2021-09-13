import { useEffect } from "react";
import { useRouter } from "next/router";
import { useNear } from "../src/near/hooks";

import { Row, Col, Button } from 'react-bootstrap';

import Layout from '../src/components/Layout';
import AdminLayout from '../src/components/AdminLayout';
import AdminPageContainer from "../src/components/AdminPageSectionContainer";
import CampaignCard from "../src/components/CampaignCard";

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

  const campaign = {
    name: "Instagram", 
    reward: "Near Tokens",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "active"
  }

  return (
    <Layout>
      <AdminLayout>

        {/* TODO: delete this probabaly */}
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


        <AdminPageContainer title="My Campaigns">
          <Row className="w-100">
              <CampaignCard campaign={campaign}/>
           </Row>
        </AdminPageContainer>

      </AdminLayout>
    </Layout>
  );
}

export default LoginPage;
