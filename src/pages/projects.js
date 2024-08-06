// Import CSS module styles specific to the Projects page
import styles from '../styles/Projects.module.css';

// Array of project data to be displayed
const projects = [
  {
    title: 'Project One',
    description: 'A React app for managing tasks with features to add, edit, delete, and mark tasks as completed. It includes 2 default tasks and stores data in browser local storage.',
    link: 'https://github.com/Onesmus123/Managing-State-in-React-Checkpoint.git'
  },
  {
    title: 'Project Two',
    description: 'A React application designed for managing and viewing favorite Kenyan movies or TV shows. Features include adding new movies, filtering by title and rating, and displaying movie details with React Hooks for efficient state management.',
    link: 'https://github.com/Onesmus123/React-Hooks-Checkpoint-.git'
  },
  {
    title: 'Project Three',
    description: 'A React application using TypeScript, featuring a Greeting functional component that displays a personalized message and a Counter class component that tracks and increments a count value.',
    link: 'https://github.com/Onesmus123/Building-React-Apps-with-TypeScript.git'
  }
];

// Projects component renders a list of projects
export default function Projects() {
  return (
    <div className={styles.container}>
      {/* Title of the Projects page */}
      <h1 className={styles.title}>My Projects</h1>
      <ul className={styles.projectList}>
        {/* Map through the projects array to render each project */}
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            {/* Link to view the project */}
            <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
