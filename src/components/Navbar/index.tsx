import Link from "next/link";
import { useRouter } from "next/router";
import { useNear } from "../../near/hooks";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const { logout } = useNear();
  
  const onLogoutClick = () => {
    logout(() => {
      router.reload();
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div className={styles.logout} onClick={onLogoutClick}>
          ⁂ logout
        </div>

        <Link href="/" prefetch>⁂ home</Link>

        <Link href="/campaign/list">⁂ campaigns</Link>
      </div>
    </div>
  );
}
