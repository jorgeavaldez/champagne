import { Row, Col } from "react-bootstrap";

import Layout from "../Layout";
import Sidebar from '../SideNav';
import AdminHeader from '../AdminHeader';
import AdminPageContainer from "../AdminPageContainer";

import styles from './ComputerAdminLayout.module.css';

export default function ComputerAdminLayout({ title, children }) {
    return (
        <Layout>
            <Row>
                <Col lg={2} id="sidebar-container"><Sidebar /></Col>
                <Col lg={10} id="page-container">
                    <AdminHeader />
                    <AdminPageContainer title={title}>
                        {children}
                    </AdminPageContainer>
                </Col>
            </Row>
        </Layout>
    )
}
