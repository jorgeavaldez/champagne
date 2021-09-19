import { Container } from "react-bootstrap";
import Header from '../HomeHeader';
import Footer from '../HomeFooter';

import styles from './LoginLayout.module.css';

function LoginLayout({ children }) {
    return (
        <Container fluid className={styles.layout}>
            <Header />
            <div className={styles.headerBackground}/>
            {children}
            <Footer />
        </Container>
    )
}

export default LoginLayout;