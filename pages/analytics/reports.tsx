import { Row, Col } from 'react-bootstrap';

import AdminLayout from '../../src/components/AdminLayout';
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";
import PostCard from '../../src/components/PostCard';
import FansTable from '../../src/components/Tables/FansTable';
import CampaignCard from '../../src/components/CampaignCard';
import StatsContainer from '../../src/components/StatsContainer';

import styles from '../../styles/pages/admin.module.css';

const campaigns = [
    {
        name: "Twitter",
        reward: "Near Tokens",
        startDate: "09/01/21",
        endDate: "09/06/21",
        status: "past",
    },
    {
        name: "Instagram",
        reward: "NFT",
        startDate: "09/07/21",
        endDate: "09/11/21",
        status: "past",
    }
]

const posts = [
    {
        campaign: "NFT Campaign",
        caption: "Start Campaign",
        status: "Past",
        date: "09/11/21"
    },
    {
        campaign: "Instagram Campaign",
        caption: "Start Campaign",
        status: "Created",
        date: "09/15/21"
    },
    {
        campaign: "NFT Campaign",
        caption: "End Campaign",
        status: "Created",
        date: "09/17/21"
    },
]

const statsData = [
    {
        label: "Followers Gained",
        data: "25"
    },
    {
        label: "Total Number of Interactions",
        data: "1800"
    },
    {
        label: "Total Number of Camapigns",
        data: "3"
    },
    {
        label: "Number of Leads",
        data: "7"
    }
]

function Reports() {
    return (
            <AdminLayout title="Reports">
                <Row className='w-100'>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Running Total">
                                <StatsContainer data={statsData}/>
                        </AdminPageSectionContainer>
                    </Col>

                    {/* TODO: If we can get metric data add this back in */}

                    {/* <Col lg={12}>
                        <AdminPageSectionContainer title="Key Metrics">
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col> */}

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Top Campaigns">
                            <Row className={styles.cardContainer}>
                                {campaigns.map(campaign => <CampaignCard campaign={campaign} />)}
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Top Posts">
                            <Row className={styles.cardContainer}>
                                {posts.map(post => <PostCard post={post} />)}
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Top Fans">
                            <Row className="w-100">
                                <FansTable />
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                </Row>
            </AdminLayout>
    );
}

export default Reports;
