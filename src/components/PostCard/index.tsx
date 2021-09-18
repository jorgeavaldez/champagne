import { useMemo, useState } from "react";
import { Card, Row } from "react-bootstrap";

import styles from "./PostCard.module.css";

import SchedulePostModal from "../SchedulePostModal";

export default function PostCard({ post }) {

    const [schedulePostOpen, setSchedulePostOpen] = useState(false);

    const onOpenSchedulePost = () => {
        setSchedulePostOpen(true);
    };

    const onCloseSchedulePost = () => {
        setSchedulePostOpen(false);
    }

    const actions = useMemo(() => {
        if (post.status == 'created') {
            return (
                <Row className="d-flex justify-content-end align-items-end">
                    <a onClick={onOpenSchedulePost} className={styles.link}>edit</a>
                </Row>
            )
        } else {
            return null;
        }
    }, [post.status]);

    return (
        <>
            {schedulePostOpen && <SchedulePostModal open={schedulePostOpen} close={onCloseSchedulePost} id={post.id} />}
            <Card className={styles.card}>
                <Card.Body>
                    <Row className="d-flex flex-column align-items-center mx-1">
                        {/* TODO: add post image */}
                        <h5 className={styles.title}>{post.campaign}</h5>
                        <p className={styles.subtitle}>{post.caption}</p>
                        <p className={styles.subtitle}>{post.status}</p>
                        <p className={styles.date}>{post.date}</p>
                        {actions}
                    </Row>
                </Card.Body>
            </Card >
        </>
    )
}
