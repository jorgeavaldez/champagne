import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../SideNav';

import styles from "./AdminLayout.module.css";

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} id="sidebar-wrapper">
                    <Sidebar />
                </Col>
                <Col lg={10} id="page-content-wrapper">
                    {children}
                </Col>
            </Row>
        </Container>
    )
}
