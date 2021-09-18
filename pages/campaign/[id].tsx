import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap';

import AdminLayout from '../../src/components/AdminLayout';
import AdminPageSectionContainer from "../../src/components/AdminPageSectionContainer";
import PostCard from '../../src/components/PostCard';
import FansTable from '../../src/components/Tables/FansTable';
import StatsContainer from '../../src/components/StatsContainer';
import WeeklyCalendar from '../../src/components/Calendar/WeeklyCalendar';

import styles from '../../styles/pages/admin.module.css';

const campaign = {
    name: "Twitter",
    reward: "Near Tokens",
    startDate: "09/01/21",
    endDate: "09/06/21",
    status: "created",
}

const posts = [
    {
        campaign: "NFT Campaign",
        caption: "Start Campaign",
        status: "past",
        date: "09/11/21"
    },
    {
        campaign: "NFT Campaign",
        caption: "Reminder about Campaign",
        status: "created",
        date: "09/15/21"
    },
    {
        campaign: "NFT Campaign",
        caption: "End Campaign",
        status: "created",
        date: "09/17/21"
    },
]

const statsData = [
    {
        label: "Total Number of Leads",
        data: "7"
    },
    {
        label: "Top Post",
        data: "Start NFT Campaign"
    },
    {
        label: "Number of Interactions",
        data: "145"
    },
]

const events = [{
    id: 1,
    start: '2021-09-12T18:00:00',
    title: 'Start Campaign'
}, {
    id: 2,
    start: '2021-09-15T18:00:00',
    title: 'Reminder Post about Campaign'
}, {
    id: 3,
    start: '2021-09-17T18:00:00',
    title: 'End Campaign Yeah'
}];

function CampaignViewPage() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <AdminLayout title={`Campaign Details ${id}`}>
            <Row className='w-100'>

                <Col lg={12}>
                    <AdminPageSectionContainer title="Post Calender">
                        <Col lg={12} className="w-100 weeklyCalendar">
                            {events ? <WeeklyCalendar events={events} />: <h6 className={styles.noData}>We could not find any events.</h6>}
                        </Col>
                    </AdminPageSectionContainer>
                </Col>

                <Col lg={12}>
                    <AdminPageSectionContainer title="Running Total">
                        <Row className="w-100">
                            {statsData ? <StatsContainer data={statsData} /> : <h6 className={styles.noData}>We could not find any data.</h6>}
                        </Row>
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
                    <AdminPageSectionContainer title="Top Posts">
                        <Row className={styles.cardContainer}>
                            {posts ? posts.map(post => <PostCard post={post} />) : <h6 className={styles.noData}>We could not find any posts.</h6>}
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

export default CampaignViewPage;
