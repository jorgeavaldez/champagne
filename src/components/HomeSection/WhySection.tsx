import { Row, Col } from "react-bootstrap";

import styles from './HomeSection.module.css';

export default function WhySection() {
    return (
        <div className={styles.leftContainer}>
        <Row className={`${styles.sectionContainer} ${styles.leftSectionContainer}`}>
                <Col lg={3} sm={12}>
                    <h1 className={styles.title}>Why</h1>
                </Col>
                <Col className={styles.textContainer} lg={9} sm={12}>
                    <h6>Stay on the cutting edge of digital marketing strategies by using experimental and interactive virtuial experiences to interact with your fanbase.</h6>
                </Col>
            </Row>
        </div>
    )
}
