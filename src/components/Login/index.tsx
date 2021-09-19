import { Container } from "react-bootstrap";

import LoginTop from "../LoginSections/LoginTop";
import LoginSteps from "../LoginSections/LoginSteps";

import styles from './Login.module.css';

export default function LoginPage() {
    return (
        <Container fluid className="p-0">
            <LoginTop/>
            <LoginSteps />
        </Container>
    )
}
