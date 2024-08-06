// Import CSS module styles specific to the About page
import styles from '../styles/About.module.css';

// About component renders information about the person
export default function About() {
  return (
    <div className={styles.container}>
      {/* Title of the About page */}
      <h1 className={styles.title}>About Me</h1>

      {/* Description of my background and experience */}
      <p className={styles.paragraph}>Onesmus Mutyauvyu is a skilled Fullstack Developer with over two years of experience.</p>

      <p className={styles.paragraph}>My background includes a Bachelor's degree in Mathematics and Computer Science from Taita Taveta University.</p>
       
      <p className={styles.paragraph}>Currently, I am a Backend Developer at <a href="https://thelathingroup.com" className={styles.link} target="_blank" rel="noopener noreferrer">Thelathin Group Ltd</a>, where I focus on creating scalable and efficient server-side solutions and APIs.</p>

      <p className={styles.paragraph}>My role involves leveraging both front-end and back-end technologies to drive innovative solutions and address complex technical challenges.</p>
      
      <p className={styles.paragraph}>I blend my academic knowledge with practical expertise to build seamless, high-performance applications. </p>
    </div>
  );
}
