import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useNear } from "../src/near/hooks";

import { Row, Col, Button } from 'react-bootstrap';

import Layout from '../src/components/Layout';
import AdminLayout from '../src/components/AdminLayout';
import AdminPageSectionContainer from "../src/components/AdminPageSectionContainer";
import CampaignCard from "../src/components/CampaignCard";
import SchedulePostModal from '../src/components/SchedulePostModal';

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

  const [schedulePostOpen, setSchedulePostOpen] = useState(false);

  const onOpenSchedulePost = () => {
    setSchedulePostOpen(true);
  };

  const onCloseSchedulePost = () => {
    setSchedulePostOpen(false);
  }

  const campaign = {
    name: "Twitter", 
    reward: "Near Tokens",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "created", 
  }

  return (
    <Layout>
      {schedulePostOpen && <SchedulePostModal open={schedulePostOpen} close={onCloseSchedulePost} />}
      <AdminLayout title="Logged In">

        {/* TODO: delete this probabaly */}
        <AdminPageSectionContainer title="Logged In">
          <Row className="w-100">
            <Col className="d-flex justify-content-center align-items-center">
              <Button onClick={onLoginClick}>Connect</Button>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <Button onClick={onOpenSchedulePost}>Schedule Post</Button>
            </Col>
          </Row>
        </AdminPageSectionContainer>


        <AdminPageSectionContainer title="My Campaigns">
          <Row className="w-100">
              <CampaignCard campaign={campaign}/>
           </Row>
        </AdminPageSectionContainer>

      </AdminLayout>
    </Layout>
  );
}

export default LoginPage;
