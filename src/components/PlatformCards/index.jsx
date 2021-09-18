import { Card, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import styles from "./PlatformCards.module.css";

export default function PlatformCards() {

    return (
        <>
            <Card className={styles.card}>
                <Card.Body>
                    <Row className="d-flex flex-column align-items-center mx-1">
                        <Row className={styles.titleRow}>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faClock} className={styles.icon} />
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <h5 className={styles.title}>Set Campaigns your followers can be apart of</h5>
                            </Col>
                        </Row>
                        <p className={styles.subtitle}>Create and Scedule Social Media Campaigns</p>
                        <p className={styles.subtitle}>Easily Run Contests and Giveaways</p>
                        <p className={styles.subtitle}>Schedule Posts</p>
                        <p className={styles.subtitle}>Track Progress throughout campaign</p>
                    </Row>
                </Card.Body>
            </Card >
        </>
    )
}
