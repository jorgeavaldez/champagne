import { useState, useMemo } from 'react';

import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faChartPie, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';

import styles from './MobileNav.module.css';

export default function Topbar() {

    const [menuItem, setMenuItem] = useState(null);

    const NavList = useMemo(() => {
        if (menuItem == 'campaign') {
            return (
                <Nav className="justify-content-center align-items-center mb-2">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/campaign/active">Active Campaigns</Nav.Link>
                    <Nav.Link href="/campaign/create">New Campaign</Nav.Link>
                    <Nav.Link href="/campaign/calender">Campaign Calender</Nav.Link>
                    <Nav.Link href="/campaign/list">View All Campaigns</Nav.Link>
                </Nav>
            )
        }
        if (menuItem == 'analytics') {
            return (
                <Nav className="justify-content-center align-items-center mb-2">
                    <Nav.Link href="/analytics/reports">Reports</Nav.Link>
                    <Nav.Link href="/analytics/leads">Leads</Nav.Link>
                </Nav>
            )
        }
        if (menuItem == 'social') {
            return (
                <Nav className="justify-content-center align-items-center mb-2">
                    <Nav.Link href="">Instagram</Nav.Link>
                    <Nav.Link href="">Twitter</Nav.Link>
                </Nav>
            )

        } else {
            return null;
        }
    }, [menuItem]);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom" onMouseLeave={() => { setMenuItem(null) }}>

            {/* Show Nav menu list above nav based on which menu item is clicked  */}
            <Row className={`w-100 m-0 p-0 ${styles.nav}`}>{NavList}</Row>

            <Row className="w-100 m-0 p-0">
            <Col>
                    <Button className="btn btn-dark w-100" href="/dashboard"><FontAwesomeIcon icon={faHome} /></Button>
                </Col>
                <Col>
                    <Button className="btn btn-dark w-100" onClick={() => { setMenuItem('campaign') }}><FontAwesomeIcon icon={faBullhorn} /></Button>
                </Col>
                <Col>
                    <Button className="btn btn-dark w-100" onClick={() => { setMenuItem('analytics') }}><FontAwesomeIcon icon={faChartPie} /></Button>
                </Col>
                <Col>
                    {/* TODO: add login and logout capablities when clicked */}
                    <Button className="btn btn-dark w-100" onClick={() => { setMenuItem('social') }}><FontAwesomeIcon icon={faUsers} /></Button>
                </Col>
            </Row>

        </Navbar>
    );
}
