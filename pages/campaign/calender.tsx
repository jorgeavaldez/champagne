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

function Calender() {
    return (
        <Layout>
            <AdminLayout title="Calender">

                <Row className='w-100'>
                    <Col lg={12}>
                        
                    </Col>
                </Row>

            </AdminLayout>
        </Layout>
    );
}

export default Calender;