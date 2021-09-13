import { useMemo } from "react";
import { Card, Col, Row } from "react-bootstrap";

import Link from "next/dist/client/link";

import styles from "./CampaignCard.module.css";

export default function CampaignCard({ campaign }) {

    //TODO: pass id from campaign to actions [pid]
    const actions = useMemo(() => {
        if (campaign.status = 'active') {
            return (
                <Row className="d-flex justify-content-end">
                        <Link href="/edit"><a className={styles.link}>edit</a></Link>
        
                        <Link href="/progress"><a className={styles.link}>progress</a></Link>
                </Row>
            )
        }
        if (campaign.status = 'created') {
            return (
                <Row className="d-flex justify-content-end">
                    <Link href="/edit">
                        <a className={styles.link}>edit</a>
                    </Link>
                </Row>
            )
        }
        if (campaign.status = 'past') {
            return (
                <Row className="d-flex justify-content-end">
                    <Col>
                        <Link href="/insights"><a className={styles.link}>insights</a></Link>
                    </Col>
                    <Col>
                        <Link href="/rewards"><a className={styles.link}>results</a></Link>
                    </Col>
                </Row>
            )
        } else {
            return null;
        }
    }, [campaign.status]);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Row className="flex-column align-items-center">
                    <p className={styles.title}>{campaign.name}</p>
                    <p className={styles.subtitle}>{campaign.reward}</p>
                    <p className={styles.subtitle}>{campaign.startDate} - {campaign.endDate}</p>
                    {actions}
                </Row>
            </Card.Body>
        </Card >

    )
}
