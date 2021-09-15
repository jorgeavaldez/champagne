import { Row, Col } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";


function Leads() {
    return (
        <Layout>
            <AdminLayout title="Leads">

                <Row className='w-100'>
                    <Col lg={12}>
                        <AdminPageSectionContainer title="Top Metrics">
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="All Leads">
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>
                </Row>

            </AdminLayout>
        </Layout>
    );
}

export default Leads;