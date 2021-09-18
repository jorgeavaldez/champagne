import { useEffect, useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import ComputerAdminLayout from '../ComputerAdminLayout';
import MobileAdminLayout from '../MobileAdminLayout';

import styles from './AdminLayout.module.css';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', e => updateTarget(e))

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true)
        }

        return () => media.removeEventListener('change', e => updateTarget(e))
    }, [])

    return targetReached;
};

function AdminLayout({ title, children }) {
    const isBreakpoint = useMediaQuery(976);

    return (
        <Container fluid>
            {isBreakpoint ?
                <MobileAdminLayout title={title} children={children} />
                :
                <ComputerAdminLayout title={title} children={children} />
            }
        </Container>

    )
}

export default AdminLayout;