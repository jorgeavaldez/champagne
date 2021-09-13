import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import Sidebar from '../SideNav';
import TopNav from '../TopNav';
import AdminHeader from '../AdminHeader';
import AdminPageContainer from "../AdminPageContainer";

export default function Layout({ children }) {

    const isSmallerThanIpad = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Container fluid>
            <Row> 
                {isSmallerThanIpad ? <TopNav/> : <Col lg={2} id="sidebar-wrapper"><Sidebar/> </Col>}
                <Col lg={10} md={12} id="page-content-wrapper" className="mt-lg-0 mt-3">
                    {!isSmallerThanIpad && <AdminHeader />}
                    <AdminPageContainer title="Welcome Back">
                        {children}
                    </AdminPageContainer>
                </Col>
            </Row>
        </Container>
    )
}
