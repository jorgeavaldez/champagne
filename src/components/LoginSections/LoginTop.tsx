import { Container, Row, Col } from 'react-bootstrap';

import GetStarted from "../Home/GetStarted";
import LoginSection from '../HomeSection/LoginSection';

import styles from './LoginSections.module.css';

export default function LoginTop() {

    return (
        <Container fluid className={styles.loginContainer}>
            <Row className={styles.topRow}>
                <Col lg={6} sm={12}>
                    <LoginSection />
                </Col>
                <Col lg={6} sm={12} className={styles.getStarted}>
                    <GetStarted />
                </Col>
            </Row>
        </Container>
    );
}