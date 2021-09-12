import { Container, Row, Col } from "react-bootstrap";

import Sidebar from '../SideNav';
import AdminHeader from '../AdminHeader';
import AdminPageContainer from "../AdminPageContainer";

import styles from "./AdminLayout.module.css";

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} id="sidebar-wrapper">
                    <Sidebar />
                </Col>
                <Col lg={10} id="page-content-wrapper">
                    <AdminHeader/>
                    <AdminPageContainer title="Welcome Back">
                        {children}
                    </AdminPageContainer>
                </Col>
            </Row>
        </Container>
    )
}
