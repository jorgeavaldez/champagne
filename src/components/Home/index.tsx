import { Container } from "react-bootstrap";

import Home from './Home';
import Platform from './Platform';
import HowSection from "../HomeSection/HowSection";
import Rewards from "./Rewards";
import WhySection from "../HomeSection/WhySection";
import SparkleSection from '../HomeSection/SparkleSection'

import styles from './Home.module.css';

export default function HomePage() {
    return (
        <Container fluid className={styles.mainContainer}>
            <Home />
            <Platform />
            <HowSection />
            <Rewards />
            <WhySection />
            <SparkleSection />
        </Container>
    )
}
