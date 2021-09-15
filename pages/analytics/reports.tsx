import { Row, Col } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";
import PostCard from '../../src/components/PostCard';
import FansTable from '../../src/components/Tables/FansTable';

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

function Reports() {
    return (
        <Layout>
            <AdminLayout title="Reports">
                <Row className='w-100'>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Running Total">
                            <Col lg={12} className="w-100">
                            </Col>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Key Metrics">
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Top Campaigns">
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Top Posts">
                            <Col className="w-100 d-flex flex-row">
                                {posts.map(post => <PostCard post={post} />)}
                            </Col>
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
        </Layout>
    );
}

export default Reports;
