import { Row, Col } from "react-bootstrap";
import styles from './AdminHeader.module.css';

export default function AdminHeader() {
    return (
        <Row className="w-100">
            <Col className="d-flex justify-content-end mt-2 mb-2">
                <h3 className={styles.logo}>//Champange</h3>
            </Col>
        </Row>
    )
}
