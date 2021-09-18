import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "./CampaignDetails.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faCalendarWeek, faTrophy, faFire } from '@fortawesome/free-solid-svg-icons';

import SchedulePostModal from "../SchedulePostModal";
import EditCampaignModal from "../EditCampaignModal";

export default function AdminPageSectionContainer({ campaign }) {

    const [schedulePostOpen, setSchedulePostOpen] = useState(false);

    const onOpenSchedulePost = () => {
        setSchedulePostOpen(true);
    };

    const onCloseSchedulePost = () => {
        setSchedulePostOpen(false);
    }

    const [editCampaignOpen, setEditCampaignOpen] = useState(false);

    const onEditCampaign = () => {
        setEditCampaignOpen(true);
    };

    const onCloseEditCampaign = () => {
        setEditCampaignOpen(false);
    }


    return (
        <Container fluid>
            {schedulePostOpen && <SchedulePostModal open={schedulePostOpen} close={onCloseSchedulePost} />}
            {editCampaignOpen && <EditCampaignModal open={editCampaignOpen} close={onCloseEditCampaign} />}
            <Row className={styles.body}>
                <Row className="d-flex align-items-center align-items-lg-start">
                    <Col lg={3} md={6} sm={12} className="d-flex flex-column">
                        <div className="my-1 d-flex flex-column justify-content-center align-items-center">
                            <FontAwesomeIcon className={styles.icon} icon={faFire} />
                            <h4 className={styles.title}>Details</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h6 className={styles.detail}>{campaign.name}</h6>
                            <h6 className={styles.detail}>{campaign.platform}</h6>
                            <h6 className={styles.detail}>{campaign.status}</h6>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex flex-column">
                        <div className="my-1 d-flex flex-column justify-content-center align-items-center">
                            <FontAwesomeIcon className={styles.icon} icon={faCalendarWeek} />
                            <h4 className={styles.title}>Dates</h4>
                        </div>
                        <h6 className={`text-center ${styles.detail}`}>{campaign.startDate}-{campaign.endDate}</h6>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex flex-column">
                        <div className="my-1 d-flex flex-column justify-content-center align-items-center">
                            <FontAwesomeIcon className={styles.icon} icon={faGem} />
                            <h4 className={styles.title}>Rewards</h4>
                        </div>
                        <h6 className={`text-center ${styles.detail}`}> {campaign.reward} {campaign.rewardType}</h6>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="d-flex flex-column">
                        <div className="my-1 d-flex flex-column justify-content-center align-items-center">
                            <FontAwesomeIcon className={styles.icon} icon={faTrophy} />
                            <h4 className={styles.title}>Winner</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h6 className={styles.detail}>{campaign.typeOfGiveaway}</h6>
                            <h6 className={styles.detail}>{campaign.winnerMetrics}</h6>
                            <h6 className={styles.detail}>{campaign.numberOfWinners} Winners</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="d-flex justify-content-end mt-4">
                        <Button className={styles.navButton} onClick={onEditCampaign}>Edit Campaign</Button>
                        <Button className={styles.navButton} onClick={onOpenSchedulePost}>Schedule Post</Button>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}
