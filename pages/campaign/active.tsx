import { useMemo } from "react";

import { Row, Col } from 'react-bootstrap';

import AdminLayout from '../../src/components/AdminLayout';
import CampaignCard from "../../src/components/CampaignCard";
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";

import styles from '../../styles/pages/admin.module.css';

const campaigns = [
    {
        name: "Twitter",
        reward: "Near Tokens",
        startDate: "09/01/21",
        endDate: "09/06/21",
        status: "active",
    },
    {
        name: "Instagram",
        reward: "NFT Campaign",
        startDate: "09/01/21",
        endDate: "09/06/21",
        status: "active",
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
        status: "active",
    },
]

function ActiveCampaigns() {

    const activeCampaigns = useMemo(() => campaigns.filter((c) => c.status === 'active'), []);

    return (
        <AdminLayout title="Active Campaigns">
            <Row>
                <Col lg={12} className="mt-lg-3">
                    <Row className={`d-flex justify-content-center justify-content-lg-between ${styles.cardContainer}`}>
                        {activeCampaigns.length > 0 ? activeCampaigns.map(campaign => <CampaignCard campaign={campaign} />) 
                        : <h6 className={styles.noDataBlack}>There are no active campaigns.</h6>}
                    </Row>
                </Col>
            </Row>
        </AdminLayout>
    );
}

export default ActiveCampaigns;
