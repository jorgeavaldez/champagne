import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useNear } from "../src/near/hooks";

import { Row, Col } from 'react-bootstrap';

import AdminLayout from '../src/components/AdminLayout';
import AdminPageSectionContainer from "../src/components/AdminPageSectionContainer";
import CampaignCard from "../src/components/CampaignCard";
import StatsContainer from "../src/components/StatsContainer";
import WeeklyCalendar from '../src/components/Calendar/WeeklyCalendar';

import styles from '../styles/pages/admin.module.css';

const statsData = [
  {
    label: "Total # of leads",
    data: "7"
  },
  {
    label: "Top Post",
    data: "Start NFT Campaign"
  },
  {
    label: "Top Campaign",
    data: "NFT Camapign"
  },
]

const campaign = {
  name: "Twitter",
  reward: "Near Tokens",
  startDate: "09/01/21",
  endDate: "09/06/21",
  status: "created",
}

const postEvents = [{
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

const campaignEvents = [{
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

function Dashboard() {
  const router = useRouter();

  // const {
  //   signedIn
  // } = useNear();

  // useEffect(() => {
  //   if (!signedIn) {
  //     router.replace('/');
  //   }
  // }, [signedIn, router]);

  return (
    <AdminLayout title="WELCOME BACK">
      <Row className='w-100'>

        <Col lg={12}>
          <AdminPageSectionContainer title="WHILE YOU WERE AWAY">
            <Row className="w-100">
              {statsData ? <StatsContainer data={statsData} /> : <h6 className={styles.noData}>There is no data to display.</h6>}
            </Row>
          </AdminPageSectionContainer>
        </Col>
        <Col lg={12}>
          <AdminPageSectionContainer title="ACTIVE CAMPAIGNS">

            <Row className={styles.cardContainer}>
              {campaign ? <CampaignCard campaign={campaign} /> : <h6 className={styles.noData}>There are no active campaigns.</h6>}
            </Row>
          </AdminPageSectionContainer>
        </Col>

        <Col lg={12}>
          <AdminPageSectionContainer title="CAMPAIGN CALENDAR">
            <Col lg={12} className="w-100 weeklyCalendar">
              {campaignEvents ? <WeeklyCalendar events={campaignEvents} /> : <h6 className={styles.noData}>There are no campaigns scheduled this week.</h6>}
            </Col>
          </AdminPageSectionContainer>
        </Col>

        <Col lg={12}>
          <AdminPageSectionContainer title="POST CALENDAR">
            <Col lg={12} className="w-100 weeklyCalendar">
              {postEvents ? <WeeklyCalendar events={postEvents} /> : <h6 className={styles.noData}>There are no posts scheduled this week.</h6>}
            </Col>
          </AdminPageSectionContainer>
        </Col>

      </Row>
    </AdminLayout>
  );
}

export default Dashboard;
