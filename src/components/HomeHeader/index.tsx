import { Navbar, Nav, Button, Container } from "react-bootstrap";
import styles from './HomeHeader.module.css';

export default function HomeHeader() {
    return (
        <Navbar fixed="top" className='px-4 w-100'>
            <Navbar.Brand href="#home" className={styles.logo}>//CHAMPANGE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="mx-3">
                    <Nav.Link className={styles.navLink} href="#platform">Platform</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#features">Features</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#technology">Technology</Nav.Link>
                    <Nav.Link className={styles.navLink} href="/SignIn">Sign In</Nav.Link>
                </Nav>
                <Button href="/SignUp">Sign Up</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}
