import { Container, Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from './Home.module.css';

export default function Home() {
    return (
        <Container fluid>
            <Row className="justify-content-start align-items-center">
                <Col lg={1} sm={0}></Col>
                <Col className={styles.textContainer} lg={6} sm={12}>
                    <Row>
                        <h1>More than just a</h1>
                    </Row>
                    <Row className={styles.iconRow}>
                        <Col>
                            <h1>like</h1>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                        </Col>
                    </Row>
                    <Row className={styles.iconRow}>
                        <Col>
                            <h1>and</h1>
                        </Col>
                        <Col>
                            <Button className={styles.followButton}>Follow</Button>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <h6>Craft Digital Media Strategies that reward your followers</h6>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
