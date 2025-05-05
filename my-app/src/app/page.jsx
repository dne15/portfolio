import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS module

export default function Home() {
  return (
    <div>
      <span className={styles.intro}>
        Hi! I&apos;m Dionne. <br />
        A problem solver with a passion for creating beautiful and functional applications.   
        <br></br>
        <br></br>
      </span>
   

      <div className={styles.highlightsTitle}>
        <Link href="/projects">Project Highlights</Link>
      </div>

      <div className={styles.iframeContainer}>
        <iframe className={styles.iframe} src="https://quiz-game-nine-vert.vercel.app/" height="500" width="320" title="QuizAcademy"></iframe>
        <iframe className={styles.iframe} src="https://fireplace-palace-six.vercel.app/" height="500" width="320" title="FireplacePalace"></iframe>
        <iframe className={styles.iframe} src="https://typescript-tutorial-self.vercel.app/" height="500" width="320" title="TypeScriptTut"></iframe>
      </div>
    </div>
  );
}