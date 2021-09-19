import { Container, Row, Col } from "react-bootstrap";
import styles from './Home.module.css';

import FeatureCards from '../FeatureCards';

export default function Features() {
    return (
        <Container fluid id="Platform">
            <Row className={styles.purpleRow}>
                <Col lg={6} sm={12} className={styles.textContainer}>
                    <Row>
                        <h1>Features</h1>
                    </Row>
                    <Row>
                        <h6>Our Analytics Tool will help you</h6>
                    </Row>
                </Col>
                <Col lg={12}>
                    <FeatureCards />
                </Col>
            </Row>
        </Container>
    )
}
