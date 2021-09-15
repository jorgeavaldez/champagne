import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import Sidebar from '../SideNav';
import MobileNav from '../MobileNav';
import AdminHeader from '../AdminHeader';
import AdminPageContainer from "../AdminPageContainer";

export default function Layout({ title, children }) {

    const isSmallerThanIpad = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Container fluid>
            <Row> 
                {isSmallerThanIpad ? <MobileNav/> : <Col lg={2} id="sidebar-wrapper"><Sidebar/> </Col>}
                <Col lg={10} md={12} id="page-content-wrapper" className="mt-lg-0 mt-3">
                    {!isSmallerThanIpad && <AdminHeader />}
                    <AdminPageContainer title={title}>
                        {children}
                    </AdminPageContainer>
                </Col>
            </Row>
        </Container>
    )
}
