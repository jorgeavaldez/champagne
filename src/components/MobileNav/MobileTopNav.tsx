import { Navbar, Row, Col, Button } from "react-bootstrap";
import styles from './MobileNav.module.css';

export default function Topbar() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Row className="w-100 m-0 p-0">
                <Col className="d-flex justify-content-end">
                    {/* TODO: add login user name and link to wallet */}
                    <Navbar.Brand>
                        <Button variant="dark" className={`w-100 ${styles.light}`}>
                            charfield.near
                        </Button>
                    </Navbar.Brand>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button variant="dark" className={`w-100 ${styles.light}`}>
                        logout
                    </Button>
                </Col>
            </Row>
        </Navbar>
    );
}
