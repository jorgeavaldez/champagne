import { Container, Row, Col } from 'react-bootstrap';

import LoginLayout from '../src/components/LoginLayout';
import Login from '../src/components/Login'

import styles from '../styles/pages/home.module.css';

export default function LoginPage() {

  return (
    <LoginLayout>
      <Container fluid className="p-0">
        <Row className={styles.homeContainer}>
            <Login/>
        </Row>
      </Container>
    </LoginLayout>
  );
}