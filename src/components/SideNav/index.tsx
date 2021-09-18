import Link from "next/link";
import { useRouter } from "next/router";
import { useNear } from "../../near/hooks";

import styles from "./SideNav.module.css";

import { Container, Navbar, Nav, NavDropdown, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function Sidebar() {
    const router = useRouter();
    const { logout } = useNear();

    const onLogoutClick = () => {
        logout(() => {
            router.reload();
        });
    };

    const goToNearWallet = () => {
        //TODO: go to near wallet
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.sidebar}>
            <Container className="flex-column h-100">

                {/* TODO: add login user name and link to wallet */}
                <Navbar.Brand>
                    <Button className={`w-100 ${styles.light}`} variant="dark" onClick={goToNearWallet}>
                        charfield.near
                    </Button>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="flex-column" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard" className={styles.bold}>
                            <FontAwesomeIcon icon={faHome} className={styles.icon} />
                            Dashboard
                        </Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <NavDropdown title="Campaigns" id="basic-nav-dropdown" className={styles.bold}>
                            <NavDropdown.Item className={styles.light} href="/campaign/active">Active Campaigns</NavDropdown.Item>
                            <NavDropdown.Item className={styles.light} href="/campaign/create">New Campaign</NavDropdown.Item>
                            <NavDropdown.Item className={styles.light} href="/campaign/calender">Campaign Calender</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.light} href="/campaign/list">View All Campaigns</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="me-auto">
                        <NavDropdown title="Analytics" id="basic-nav-dropdown" className={styles.bold}>
                            <NavDropdown.Item className={styles.light} href="/analytics/reports">Reports</NavDropdown.Item>
                            <NavDropdown.Item className={styles.light} href="/analytics/leads">Leads</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="me-auto">
                        <NavDropdown title="Social Accounts" id="basic-nav-dropdown" className={styles.bold}>
                            {/* TODO: add login and logout capablities when clicked */}
                            <NavDropdown.Item className={styles.light} href="">Instagram</NavDropdown.Item>
                            <NavDropdown.Item className={styles.light} href="">Twitter</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Button variant="dark" className={`w-100 ${styles.light}`} onClick={onLogoutClick}>
                    logout
                </Button>

            </Container>
        </Navbar>
    );
}
