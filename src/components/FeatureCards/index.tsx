import { Card, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faFireAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

import styles from "./FeatureCards.module.css";

export default function FeatureCards() {

    return (
        <Row className={styles.cardContainer}>
            <Card className={styles.card}>
                <Card.Body>
                    <Row className="d-flex flex-column align-items-center mx-1">
                        <Row className={styles.titleRow}>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <h5 className={styles.title}>Find your target audience</h5>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faUsers} className={styles.icon} />
                            </Col>
                        </Row>
                        <p className={styles.subtitle}>Distinish real followers from bots</p>
                        <p className={styles.subtitle}>Collect new leads</p>
                    </Row>
                </Card.Body>
            </Card >
            <Card className={styles.card}>
                <Card.Body>
                    <Row className="d-flex flex-column align-items-center mx-1">
                        <Row className={styles.titleRow}>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <h5 className={styles.title}>Define your aesthetic</h5>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faPaintBrush} className={styles.icon} />
                            </Col>
                        </Row>
                        <p className={styles.subtitle}>Find out which posts are driving traffic</p>
                        <p className={styles.subtitle}>Campaign/Post Insights</p>
                    </Row>
                </Card.Body>
            </Card >
            <Card className={styles.card}>
                <Card.Body>
                    <Row className="d-flex flex-column align-items-center m-1">
                        <Row className={styles.titleRow}>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <h5 className={styles.title}>Dominate social algorithms</h5>
                            </Col>
                            <Col lg={12} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faFireAlt} className={styles.icon} />
                            </Col>
                        </Row>
                        <p className={styles.subtitle}>Improve experience for your following</p>
                        <p className={styles.subtitle}>Attract new audiences</p>
                    </Row>
                </Card.Body>
            </Card >
        </Row>
    )
}
