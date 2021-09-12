import { Container, Row, Col } from "react-bootstrap";

import styles from "./AdminPageContainer.module.css";

export default function AdminPageContainer({ title, children }) {
    return (
        <Container fluid>

            <Row className={`w-100 ${styles.box}`}>
                <Col className="d-flex justify-content-start">
                    <h3 className={styles.title}>{title}</h3>
                </Col>
            </Row>

            <Row className={`w-100 ${styles.body}`}>
                <Col className="d-flex flex-column justify-content-center">
                    {children}
                </Col>
            </Row>
            
        </Container>
    )
}
