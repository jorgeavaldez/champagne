import { Container } from "react-bootstrap";
import Header from '../HomeHeader';
import Footer from '../HomeFooter';

import styles from './HomeLayout.module.css';

function HomeLayout({ children }) {
    return (
        <Container fluid className={styles.layout}>
            <Header />
            <div className={styles.headerBackground}/>
            <div className={styles.background}/>
            {children}
            <div className={styles.footerBackground} />
            <Footer />
        </Container>

    )
}

export default HomeLayout;