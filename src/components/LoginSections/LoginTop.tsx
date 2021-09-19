import { Container, Row, Col } from 'react-bootstrap';

import GetStarted from "../Home/GetStarted";
import LoginSection from '../HomeSection/LoginSection';

import styles from './LoginSections.module.css';

export default function LoginTop() {

    return (
        <Container fluid className={styles.loginContainer}>
            <Row className={styles.topRow}>
                <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
                    <LoginSection />
                </Col>
                <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}} className={styles.getStarted}>
                    <GetStarted />
                </Col>
            </Row>
        </Container>
    );
}