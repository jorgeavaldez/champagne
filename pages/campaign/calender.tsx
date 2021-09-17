import { Row, Col } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import Calendar from '../../src/components/Calendar';

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
                        <Calendar events={events}/>
                    </Col>
                </Row>

            </AdminLayout>
        </Layout>
    );
}

export default CampaignCalendar;