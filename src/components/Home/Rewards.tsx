import { Container, Row, Col } from "react-bootstrap";
import RewardCards from "../RewardCards";

import styles from './Home.module.css';

export default function Rewards() {
    return (
        <Container fluid id="rewards" className={styles.purpleContainer}>
            <Row>
                <Col lg={12}>
                    <RewardCards />
                </Col>
            </Row>
        </Container>
    )
}
