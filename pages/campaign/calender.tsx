import { Row, Col } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import MonthlyCalendar from '../../src/components/Calendar/MonthlyCalendar';
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";

const events = [{
    id: 1,
    start: '2021-09-12',
    end: '2021-09-14',
    title: 'NFT Campaign'
}, {
    id: 2,
    start: '2021-09-15',
    end: '2021-09-16',
    title: 'Near Campaign'
}, {
    id: 3,
    start: '2021-09-17',
    end: '2021-09-18',
    title: 'Near Campaign'
}];


function CampaignCalendar() {

    return (
        <Layout>
            <AdminLayout title="Calender">
                <Row className='w-100'>
                    <Col lg={12}>
                        <AdminPageSectionContainer title="">
                            <Col lg={12} className="w-100">
                                <MonthlyCalendar events={events} />
                            </Col>
                        </AdminPageSectionContainer>
                    </Col>
                </Row>

            </AdminLayout>
        </Layout>
    );
}

export default CampaignCalendar;