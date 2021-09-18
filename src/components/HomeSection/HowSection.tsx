import { Row, Col } from "react-bootstrap";

import styles from './HomeSection.module.css';

export default function HowSection() {
    return (
        <div className={styles.rightContainer}>
            <Row className={`${styles.sectionContainer} ${styles.rightSectionContainer}`}>
                <Col lg={3} sm={12}>
                    <h1 className={styles.title}>How</h1>
                </Col>
                <Col className={styles.textContainer} lg={9} sm={12}>
                    <h6>Craft Digital Media Strategies that reward your followers</h6>
                </Col>
            </Row>
        </div>
    )
}
