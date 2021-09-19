import { Container, Row, Col } from 'react-bootstrap';

import LoginLayout from '../src/components/LoginLayout';
import LoginTop from "../src/components/LoginSections/LoginTop";
import LoginSteps from '../src/components/LoginSections/LoginSteps';

import styles from '../styles/pages/home.module.css';

export default function LoginPage() {

  return (
    <LoginLayout>
      <Container fluid>
        <Row className={styles.homeContainer}>
            <LoginTop />
            <LoginSteps />
        </Row>
      </Container>
    </LoginLayout>
  );
}