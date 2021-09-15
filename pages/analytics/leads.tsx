import { Row, Col } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";
import LeadsTable from '../../src/components/Tables/LeadsTable';
import StatsContainer from '../../src/components/StatsContainer';

const statsData = [
    {
        label: "Total # of leads",
        data: "7"
    },
    {
        label: "Number of Leads from Top Campaign",
        data: "5"
    },
    {
        label: "Top Campaign",
        data: "NFT Camapign"
    },
    {
        label: "Top Post",
        data: "Start NFT Campaign"
    },
    {
        label: "Number of Leads from Top Post",
        data: "3"
    },
]

function Leads() {
    return (
        <Layout>
            <AdminLayout title="Leads">

                <Row className='w-100'>

                    {/* TODO: If we can get metric data add this back in */}

                    {/* <Col lg={12}>
                        <AdminPageSectionContainer title="Top Metrics">
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col> */}

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Running Total">
                            <Col lg={12} className="w-100">
                                <StatsContainer data={statsData}/>
                            </Col>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="All Leads">
                            <Row className="w-100">
                                <LeadsTable />
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>
                </Row>

            </AdminLayout>
        </Layout>
    );
}

export default Leads;