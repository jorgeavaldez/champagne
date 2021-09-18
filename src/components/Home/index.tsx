import { Container } from "react-bootstrap";

import Home from './Home';
import Platform from './Platform';

import styles from './Home.module.css';

export default function HomePage() {
    return (
        <Container fluid className={styles.mainContainer}>
            <Home />
            <Platform />
        </Container>
    )
}
