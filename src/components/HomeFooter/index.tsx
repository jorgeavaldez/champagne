import { Navbar, Nav } from "react-bootstrap";
import styles from './HomeFooter.module.css';

export default function HomeFooter() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark" className={`px-4 ${styles.footer}`}>
                <Nav className="me-auto">
                    <Nav.Link className={styles.footerLink} href="/terms">TERMS AND CONDITIONS</Nav.Link>
                    <Nav.Link className={styles.footerLink} href="/privacy">PRIVACY POLICY</Nav.Link>
                </Nav>
                <Navbar.Brand href="#home" className={styles.logo}>//CHAMPANGE</Navbar.Brand>
            </Navbar>
        </footer>
    )
}
