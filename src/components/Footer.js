// src/components/Footer.js
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} My Portfolio | All rights reserved.</p>
        <p>Built with 💙 using Next.js</p>
      </div>
    </footer>
  );
}
