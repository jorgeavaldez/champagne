import Link from "next/link";
import { useNear } from "../src/near/hooks";

import { Container, Row, Col } from 'react-bootstrap';

import HomeLayout from '../src/components/HomeLayout';
import Home from '../src/components/Home';

import styles from '../styles/pages/home.module.css';

export default function HomePage() {
  const { signedIn, accountId, networkId } = useNear();

  return (
    <div className={styles.overflow}>
      <HomeLayout>
        <Container fluid>
          <Row className={styles.homeContainer}>
            <Home />

            {/* {signedIn && (
        <h2>
          You are signed in as {accountId} on network {networkId}
        </h2>
      )} 
      
      {signedIn && (
        <div>
          <Link href="/campaign/create">create a campaign</Link>
        </div>
      )}

      {!signedIn && (
        <>
          <h2>come find your next source of inspiration</h2>
          <p style={{ textAlign: "center", marginTop: "2.5em" }}>
            <Link href="/login">sign in</Link>
          </p>
        </>
      )} */}
          </Row>
        </Container>
      </HomeLayout>
    </div>
  );
}