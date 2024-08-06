// Import necessary modules from Next.js and local styles
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// Home component renders the homepage content
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Display profile picture with specified dimensions */}
        <Image
          src="/images/profile.jpg" 
          alt="Profile Picture"
          width={150}
          height={150}
          className={styles.profileImage}
        />
        {/* Title and introductory text */}
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.intro}>
          Hi, I am Onesmus Mutyauvyu.
          <br />
          I am a passionate Software Developer.
        </p>
        {/* Links to download CV and view GitHub profile */}
        <Link href="/cv.pdf" className={styles.button} download>
          View CV
        </Link>
        <Link href="https://github.com/your-github-username" className={styles.githubButton} target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
      </header>
    </div>
  );
}
