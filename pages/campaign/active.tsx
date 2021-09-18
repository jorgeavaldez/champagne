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
        <Layout>
            <AdminLayout title="Active Campaigns">


                <Row className="w-100 mt-3">

                    {activeCampaigns &&
                        <Row className={styles.cardContainer}>
                            {activeCampaigns.map(campaign => <CampaignCard campaign={campaign} />)}
                        </Row>
                    }

                </Row>

            </AdminLayout>
        </Layout>
    );
}

export default ActiveCampaigns;
