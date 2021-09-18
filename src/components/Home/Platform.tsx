import { Container, Row, Col } from "react-bootstrap";
import styles from './Home.module.css';

import PlatformCards from '../PlatformCards';

export default function Platform() {
    return (
        <Container fluid id="Platform">
            <Row>
                <Col lg={6} sm={12} className={styles.textContainer}>
                    <Row>
                        <h1>Platform</h1>
                    </Row>
                    <Row>
                        <h6>Our tool helps Artists, Creators, and Influencers define real-time marketing strategies.</h6>
                    </Row>
                </Col>
                <Col lg={12}>
                <Row>
                    <PlatformCards />
                </Row>
                </Col>
            </Row>
        </Container>
    )
}
