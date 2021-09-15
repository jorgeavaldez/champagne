import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useNear } from "../src/near/hooks";

import { Row, Col } from 'react-bootstrap';

import Layout from '../src/components/Layout';
import AdminLayout from '../src/components/AdminLayout';
import AdminPageSectionContainer from "../src/components/AdminPageSectionContainer";
import CampaignCard from "../src/components/CampaignCard";
import SchedulePostModal from '../src/components/SchedulePostModal';

function LoginPage() {
  const router = useRouter();

  const {
    signedIn
  } = useNear();

  useEffect(() => {
    if (!signedIn) {
      router.replace('/');
    }
  }, [signedIn, router]);

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
      <AdminLayout title="Welcome Back">
        <Row className='w-100'>

          <Col lg={12}>
            {/* TODO: delete this probabaly */}
            <AdminPageSectionContainer title="While you were away">
              <Row className="w-100">

              </Row>
            </AdminPageSectionContainer>
          </Col>

          <Col lg={12}>
            <AdminPageSectionContainer title="Active Campaigns">
              <Row className="w-100">
                <CampaignCard campaign={campaign} />
              </Row>
            </AdminPageSectionContainer>
          </Col>

        </Row>
      </AdminLayout>
    </Layout>
  );
}

export default LoginPage;
