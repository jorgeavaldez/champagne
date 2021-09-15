import { useMemo } from "react";
import { Card, Row } from "react-bootstrap";

import Link from "next/dist/client/link";

import styles from "./CampaignCard.module.css";

export default function CampaignCard({ campaign }) {

    //TODO: pass id from campaign to actions [pid]
    const actions = useMemo(() => {
        if (campaign.status == 'active') {
            return (
                <Row className="d-flex justify-content-end align-items-end">
                        <Link href={`/campaign/${campaign.name}`}><a className={styles.link}>edit</a></Link>
                        <Link href="/progress"><a className={styles.link}>progress</a></Link>
                </Row>
            )
        }
        if (campaign.status == 'created') {
            return (
                <Row className="d-flex justify-content-end align-items-end">
                    <Link href={`/campaign/${campaign.name}`}><a className={styles.link}>edit</a></Link>
                </Row>
            )
        }
        if (campaign.status == 'past') {
            return (
                <Row className="d-flex justify-content-end align-items-end">
                    <Link href="/insights"><a className={`/campaign/${campaign.name}`}>insights</a></Link>
                    <Link href="/rewards"><a className={styles.link}>results</a></Link>
                </Row>
            )
        } else {
            return null;
        }
    }, [campaign.status]);

    return (
        <Card className={styles.card}>
            <Card.Body>
                <Row className="d-flex flex-column align-items-center mx-1">
                    <p className={styles.title}>{campaign.name}</p>
                    <p className={styles.subtitle}>{campaign.reward}</p>
                    <p className={styles.subtitle}>{campaign.startDate} - {campaign.endDate}</p>
                    {actions}
                </Row>
            </Card.Body>
        </Card >

    )
}
