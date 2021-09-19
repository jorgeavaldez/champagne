import { Container, Row, Col } from 'react-bootstrap';

import styles from './LoginSections.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

export default function LoginSteps() {

    return (
        <Container fluid className={`${styles.loginContainer} ${styles.rowContainer}`}>
            <Row className={styles.stepRow}>
                <Col lg={2} sm={12}>
                    <h2 className={styles.step}>STEP 1</h2>
                </Col>
                <Col lg={10} sm={12} className={styles.body}>
                    <h2>Create a Near Wallet</h2>
                    <p>We recommend following this <a className={styles.link} href="https://near.org/blog/getting-started-with-the-near-wallet/">guide</a></p>
                </Col>
            </Row>
            <Row className={styles.stepRow}>
                <Col lg={2} sm={12}>
                    <h2 className={styles.step}>STEP 2</h2>
                </Col>
                <Col lg={10} sm={12} className={styles.body}>
                    <h2>Create your Champange Account.</h2>
                    <p>After you sign in your wallet, <a className={styles.link} href="/">create</a> a Champange Account</p>
                    <p>If you already have a Champange Account, <a className={styles.link} href="/">log in</a> with your Champange seed phrase</p>
                </Col>
            </Row>
            <Row className={styles.stepRow}>
                <Col lg={2} sm={12}>
                    <h2 className={styles.step}>STEP 3</h2>
                </Col>
                <Col lg={10} sm={12} className={`${styles.body} ${styles.celebrateRow}`}>
                    <FontAwesomeIcon className={styles.icon} icon={faGlassCheers} />
                    <h2>Celebrate</h2>
                </Col>
            </Row>
        </Container>
    );
}