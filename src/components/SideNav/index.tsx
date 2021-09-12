import Link from "next/link";
import { useRouter } from "next/router";
import { useNear } from "../../near/hooks";

import styles from "./SideNav.module.css";

import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";


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
                    <Button variant="dark" className="w-100" onClick={goToNearWallet}>
                        charfield.near
                    </Button>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="flex-column" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Campaigns" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Campaign/Active">Active Campaigns</NavDropdown.Item>
                            <NavDropdown.Item href="/Campaign/New">New Campaign</NavDropdown.Item>
                            <NavDropdown.Item href="/Campaign/Calender">Campaign Calender</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Campaign/All">View All Campaigns</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="me-auto">
                        <NavDropdown title="Analytics" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Analytics/Reports">Reports</NavDropdown.Item>
                            <NavDropdown.Item href="/Analytics/Leads">Leads</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> 
                    <Nav className="me-auto">
                        <NavDropdown title="Social Accounts" id="basic-nav-dropdown">
                            {/* TODO: add login and logout capablities when clicked */}
                            <NavDropdown.Item href="">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="">Twitter</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Button variant="dark" className="w-100" onClick={onLogoutClick}>
                    logout
                </Button>
                
            </Container>
        </Navbar>
    );
}
