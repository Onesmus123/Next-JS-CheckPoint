// Import CSS module styles specific to the Contact page
import styles from '../styles/Contact.module.css'; 

// Contact component renders contact information
export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Title of the Contact page */}
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactInfo}>
        {/* Display phone number with a clickable link */}
        <p className={styles.item}>
          <strong>Phone:</strong> 
          <a href="tel:+1234567890" className={styles.link}> +254 (719) 173-502</a>
        </p>
        {/* Display email address with a clickable link */}
        <p className={styles.item}>
          <strong>Email:</strong> 
          <a href="mailto:mutyauvyudavid@gmail.com" className={styles.link}> mutyauvyudavid@gmail.com</a>
        </p>
        {/* Display LinkedIn profile with a clickable link */}
        <p className={styles.item}>
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/onesmus-mutyauvyu-b5a9a024a" className={styles.link} target="_blank" rel="noopener noreferrer"> LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
}
