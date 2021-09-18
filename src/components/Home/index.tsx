import { Container } from "react-bootstrap";

import Home from './Home';

import styles from './Home.module.css';

export default function HomePage() {
    return (
        <Container fluid className={styles.mainContainer}>
            <Home />
        </Container>
    )
}
