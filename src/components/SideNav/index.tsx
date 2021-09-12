import Link from "next/link";
import { useRouter } from "next/router";
import { useNear } from "../../near/hooks";

import styles from "./SideNav.module.css";

import { Nav } from "react-bootstrap";


export default function Sidebar() {
    const router = useRouter();
    const { logout } = useNear();

    const onLogoutClick = () => {
        logout(() => {
            router.reload();
        });
    };

    return (
        <Nav className={`bg-dark ${styles.sidebar}`}
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>

        // <div className={styles.container}>
        //   <div className={styles.buttons}>
        //     <div className={styles.logout} onClick={onLogoutClick}>
        //       ⁂ logout
        //     </div>

        //     <Link href="/" prefetch>⁂ home</Link>

        //     <Link href="/campaign/list">⁂ campaigns</Link>
        //   </div>
        // </div>
    );
}
