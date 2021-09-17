import { useMemo } from "react";
import { Col, Row } from "react-bootstrap";

import styles from './StatsContainer.module.css';

function StatsContainer({ data }) {

    const stats = useMemo(() => {
        if (data) {
            return (
                <>
                    {data.map(item =>
                        <Col className={styles.colItem}>
                            <Row>
                                <Col><h6 className={styles.label}>{item.label}:</h6></Col>
                                <Col><h6 className={styles.data}>{item.data}</h6></Col>
                            </Row>
                        </Col>
                    )}
                </>
            )
        } else {
            return (
                <h6>There is no data is display right now.</h6>
            )
        }
    }, [data]);

    return (
        <Row className={`w-100 ${styles.flexContainer}`}>
            {stats}
        </Row>
    )
}

export default StatsContainer;