import { Row, Col } from "react-bootstrap";

import MobileTopNav from '../MobileNav/MobileTopNav';
import MobileBottomNav from '../MobileNav/MobileBottomNav';
import AdminPageContainer from "../AdminPageContainer";

export default function MobileLayout({ title, children }) {
    return (
        <Row>
            <MobileTopNav />
            <Col sm={12} className="mb-5 pb-3">
                <AdminPageContainer title={title}>
                    {children}
                </AdminPageContainer>
            </Col>
            <MobileBottomNav />
        </Row>
    )
}