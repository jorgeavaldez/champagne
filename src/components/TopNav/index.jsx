import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";


export default function Topbar() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="h-100">

                {/* TODO: add login user name and link to wallet */}
                <Navbar.Brand>
                    <Button variant="dark" className="w-100">
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

                    <Button variant="dark" className="w-100">
                        logout
                    </Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
