// Importing necessary modules
import Link from 'next/link';
import styles from './Header.module.css';

// Header component definition
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Onesmus Mutyauvyu</h1> {/* Main title */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/" className={styles.navLink}>Home</Link></li>
            <li><Link href="/about" className={styles.navLink}>About</Link></li>
            <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
