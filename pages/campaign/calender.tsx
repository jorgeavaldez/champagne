import { Row, Col } from 'react-bootstrap';

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';
import Calendar from '../../src/components/Calendar';

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2019-05-02T18:00:00+00:00',
    to: '2019-05-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2019-05-01T13:00:00+00:00',
    to: '2019-05-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2019-05-05T13:00:00+00:00',
    to: '2019-05-05T20:00:00+00:00',
    title: 'This is also another event'
}];

function CampaignCalendar() {

    return (
        <Layout>
            <AdminLayout title="Calender">
                <Row className='w-100'>
                    <Col lg={12}>
                        <Calendar/>
                    </Col>
                </Row>

            </AdminLayout>
        </Layout>
    );
}

export default CampaignCalendar;