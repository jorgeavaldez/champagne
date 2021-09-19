import { Container } from "react-bootstrap";

import Home from './Home';
import Platform from './Platform';
import HowSection from "../HomeSection/HowSection";
import Rewards from "./Rewards";
import WhySection from "../HomeSection/WhySection";
import Features from './Features';
import SparkleSection from '../HomeSection/SparkleSection'
import GetStarted from "./GetStarted";

import styles from './Home.module.css';

export default function HomePage() {
    return (
        <Container fluid className={styles.mainContainer}>
            <Home />
            <Platform />
            <HowSection />
            <Rewards />
            <WhySection />
            <Features />
            <SparkleSection />
            <div className="mb-5">
                <GetStarted />
            </div>
        </Container>
    )
}
