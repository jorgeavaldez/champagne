import { Row, Col } from "react-bootstrap";

import Sidebar from '../SideNav';
import AdminHeader from '../AdminHeader';
import AdminPageContainer from "../AdminPageContainer";

import styles from './ComputerAdminLayout.module.css';

export default function ComputerAdminLayout({ title, children }) {
    return (
        <Row>
            <Col lg={2} className={styles.sidebarContainer}><Sidebar /></Col>
            <Col lg={10} className={`mt-lg-0 mt-3 ${styles.pageContainer}`}>
                <AdminHeader />
                <AdminPageContainer title={title}>
                    {children}
                </AdminPageContainer>
            </Col>
        </Row>
    )
}
