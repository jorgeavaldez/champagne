import { Row, Col } from "react-bootstrap";

import MobileTopNav from '../MobileNav/MobileTopNav';
import MobileBottomNav from '../MobileNav/MobileBottomNav';
import AdminPageContainer from "../AdminPageContainer";

export default function MobileLayout({ title, children }) {
    return (
        <Row>
            <MobileTopNav />
            <Col sm={12} className="m-0 p-0 pb-4">
                <AdminPageContainer title={title}>
                    {children}
                </AdminPageContainer>
            </Col>
            <MobileBottomNav />
        </Row>
    )
}