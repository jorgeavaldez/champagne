import { Card, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faSeedling, faBookReader } from "@fortawesome/free-solid-svg-icons";

import styles from "./PlatformCards.module.css";

export default function PlatformCards() {

    return (
        <Row className={styles.cardContainer}>
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
            <Card className={styles.card}>
                <Card.Body>
                    <Row className="d-flex flex-column align-items-center mx-1">
                        <Row className={styles.titleRow}>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faBookReader} className={styles.icon} />
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <h5 className={styles.title}>Learn more about your followers</h5>
                            </Col>
                        </Row>
                        <p className={styles.subtitle}>Tap into your target audience</p>
                        <p className={styles.subtitle}>Connect with your top fans</p>
                        <p className={styles.subtitle}>Transparency with followers</p>
                        <p className={styles.subtitle}>Improve experience for your following</p>
                    </Row>
                </Card.Body>
            </Card >
            <Card className={styles.card}>
                <Card.Body>
                    <Row className="d-flex flex-column align-items-center m-1">
                        <Row className={styles.titleRow}>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faSeedling} className={styles.icon} />
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <h5 className={styles.title}>Expand your pressence</h5>
                            </Col>
                        </Row>
                        <p className={styles.subtitle}>Optimize Social Media Strategy</p>
                        <p className={styles.subtitle}>Build your Brand Awareness</p>
                        <p className={styles.subtitle}>Connect with new leads</p>
                    </Row>
                </Card.Body>
            </Card >
        </Row>
    )
}
