import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/tos">Terms of Services</Link>
    </footer>
  );
}