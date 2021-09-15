import { useEffect, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";

const campaign = {
    name: "Twitter",
    reward: "Near Tokens",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "created",
}

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
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                    <Col lg={12}>
                        <AdminPageSectionContainer title="Top Fans">
                            <Row className="w-100">
                            </Row>
                        </AdminPageSectionContainer>
                    </Col>

                </Row>
            </AdminLayout>
        </Layout>
    );
}

export default Reports;
