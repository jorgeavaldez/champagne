import { Container, Row, Col } from "react-bootstrap";

import styles from "./AdminPageSectionContainer.module.css";

export default function AdminPageSectionContainer({ title, children }) {
    return (
        <Container fluid>

            <Row className={`${styles.box}`}>
                <Col className="d-flex justify-content-start">
                    <h5 className={styles.title}>{title}</h5>
                </Col>
            </Row>

            <Row className={`${styles.body}`}>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    {children}
                </Col>
            </Row>
            
        </Container>
    )
}
