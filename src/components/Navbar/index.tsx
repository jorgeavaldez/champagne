import Link from "next/link";
import styles from "./Navbar.module.css";

const headerBackgroundColors = [
  'blue',
  'magenta',
  'green',
];

const randomColor = headerBackgroundColors[Math.floor(Math.random() * 3)];

export default function Navbar({ title = "non fungible!" }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          <h5 style={{ backgroundColor: randomColor }}>{ title }</h5>
        </div>
      </div>

      <div className={styles.buttons}>

        <Link href="/profile">
          <a>⁂ mint</a>
        </Link>

        <Link href="/profile">
          <a>⁂ profile</a>
        </Link>
      </div>
    </div>
  );
}
