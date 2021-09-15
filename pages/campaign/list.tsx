import { useMemo } from "react";

import { Row, Col } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import CampaignCard from "../../src/components/CampaignCard";

import styles from '../../styles/pages/admin.module.css';

const campaigns = [
  {
    name: "Twitter",
    reward: "Near Tokens",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "created",
  },
  {
    name: "Instagram",
    reward: "NFT Campaign",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "created",
  },
  {
    name: "Twitter",
    reward: "Near Tokens",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "active",
  },
  {
    name: "Twitter",
    reward: "Near Tokens",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "past",
  },
]

function ListCampaigns() {
  //Sort data by status
  const createdCampaigns = useMemo(() => campaigns.filter((c) => c.status === 'created'), []);
  const activeCampaigns = useMemo(() => campaigns.filter((c) => c.status === 'active'), []);
  const pastCampaigns = useMemo(() => campaigns.filter((c) => c.status === 'past'), []);

  return (
    <Layout>
      <AdminLayout title="All Campaigns">


        <Row className="w-100 mt-3">

          {createdCampaigns &&
            <Col className="d-flex flex-column justify-content-start align-items-center">
              <h5 className={styles.title}>CREATED</h5>
              {createdCampaigns.map(campaign => <CampaignCard campaign={campaign} />)}
            </Col>
          }

          {activeCampaigns &&
            <Col className="d-flex flex-column justify-content-start align-items-center">
              <h5 className={styles.title}>ACTIVE</h5>
              {activeCampaigns.map(campaign => <CampaignCard campaign={campaign} />)}
            </Col>
          }

          {pastCampaigns &&
            <Col className="d-flex flex-column justify-content-start align-items-center">
              <h5 className={styles.title}>PAST</h5>
              {pastCampaigns.map(campaign => <CampaignCard campaign={campaign} />)}
            </Col>
          }

        </Row>

      </AdminLayout>
    </Layout>
  );
}

export default ListCampaigns;
