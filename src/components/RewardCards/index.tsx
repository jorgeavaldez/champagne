import { Card, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import styles from "./RewardCards.module.css";

export default function RewardCards() {

    return (
        <Row className={styles.cardContainer}>

            <Card className={`${styles.card} ${styles.white}`}>
                <Card.Title className={styles.cardTitle}>
                    <h1>Near Tokens</h1>
                </Card.Title>
                <Card.Body className={styles.cardBody}>
                    <Row className={styles.detailRow}>
                        <Col lg={2} className={styles.detailCol}>
                            <h4 className={styles.bold}>1</h4>
                        </Col>
                        <Col className={styles.detailCol}>
                            <p>Send Near tokens to reward your top fans</p>
                        </Col>
                    </Row>
                    <Row className={styles.detailRow}>
                        <Col lg={2} className={styles.detailCol}>
                            <h4 className={styles.bold}>2</h4>
                        </Col>
                        <Col className={styles.detailCol}>
                            <p>Define how much near to send followers when creating campaign</p>
                        </Col>
                    </Row>
                    <Row className={styles.detailRow}>
                        <Col lg={2} className={styles.detailCol}>
                            <h4 className={styles.bold}>3</h4>
                        </Col>
                        <Col className={styles.detailCol}>
                            <p>Set the rules to reward your top followers</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >

            <Card className={`${styles.card} ${styles.purple}`}>
                <Card.Body>
                    <Row className={styles.titleRow}>
                        <Col lg={12} className="d-flex justify-content-center align-items-center">
                            <h1 className={styles.title}>Rewards</h1>
                        </Col>
                        <Col lg={12} className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
                        </Col>
                        <Col lg={12} className="d-flex justify-content-center align-items-center">
                            <h6 className={styles.subtitle}>Provide Interactive Experiences with your followers with  Contests and Giveaways using Smart Contracts</h6>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >

            <Card className={`${styles.card} ${styles.white}`}>
                <Card.Title className={styles.cardTitle}>
                    <h1>NFTs</h1>
                </Card.Title>
                <Card.Body className={styles.cardBody}>
                    <Row className={styles.detailRow}>
                        <Col lg={2} className={styles.detailCol}>
                            <h4 className={styles.bold}>1</h4>
                        </Col>
                        <Col className={styles.detailCol}>
                            <p>Montize your digital assests</p>
                        </Col>
                    </Row>
                    <Row className={styles.detailRow}>
                        <Col lg={2} className={styles.detailCol}>
                            <h4 className={styles.bold}>2</h4>
                        </Col>
                        <Col className={styles.detailCol}>
                            <p>Create campaigns to inform your following about your NFT drops</p>
                        </Col>
                    </Row>
                    <Row className={styles.detailRow}>
                        <Col lg={2} className={styles.detailCol}>
                            <h4 className={styles.bold}>3</h4>
                        </Col>
                        <Col className={styles.detailCol}>
                            <p>Reward your followers with exclusive NFTs for engaging in campagins</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >

        </Row >
    )
}
