import { useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import styles from './HomeHeader.module.css';

export default function HomeHeader() {

    return (
        <Navbar id="nav" expand="lg" className={`px-4 ${styles.nav}`}>
            <Navbar.Brand href="#home" className={styles.logo}>//CHAMPANGE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center justify-content-lg-end">
                <Nav className="mx-3">
                    <Nav.Link className={styles.navLink} href="#platform">Platform</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#rewards">Rewards</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#features">Features</Nav.Link>
                    <Nav.Link className={styles.navLink} href="/login">Sign In</Nav.Link>
                    <Button href="/SignUp" className={styles.navLink}>Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
